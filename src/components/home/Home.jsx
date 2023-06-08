import {useState } from "react";
import Buscador from "./Buscador";
import GifCategory from "./GifCategory";
export default function Home() {
  const [categories, setCategories] = useState([]);

  console.log(categories);

  const addCategory = (category) => {

    //si la categoria existe en el estado no la agrega de lo contrario si.
    if(categories.includes(category))return;

    //guarda el valor recibido de buscador, y lo añade al estado de categorias.

    setCategories((prevCategory)=>[...prevCategory, category]);

  }

  return (
    <>

      <div className="bg-gray-900 text-white py-20 ">
        <div className="container mx-auto text-center">
        <h1
        className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
      >
        Search Gif
      </h1>
          <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed mb-[30px]">Explora y descarga contenido visual de manera rápida y sencilla en nuestra plataforma. Encuentra la mejor selección de GIFs, imágenes y stickers para complementar tu contenido.</p>
          <Buscador addCategory={addCategory}/>
        </div>
      </div>
        <div>
          {categories.map((categorie, index) => {
            const bgColor = index % 2 === 0 ? 'bg-[#ffffff]' : 'bg-[#f6f5f3]';
            return( 
                <GifCategory key={categorie} categorie={categorie} background={bgColor}/>
            )
          })}
        </div>
    </>
  );
}

//INPUT: Esto hará que el campo sea de solo lectura. Si el campo debe ser editable, debes usar defaultValue en lugar de value. 
//  onChange para actualizar el estado inputValue cada vez que se realice un cambio en el campo.
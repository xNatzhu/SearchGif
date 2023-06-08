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

      <div className="flex flex-col">
        <div className="flex flex-col sm:flex-col pt-[50px] px-[15px] pb-[50px] bg-cover bg-center sm:px-[100px]" style={{ backgroundImage: "url('/img/background.jpg')" }}>
          <div className="w-[100%] sm:w-[700px] ">
            <h1 className="text-[60px] text-[#fff] uppercase font-bold mb-[30px]"> GIF Search</h1>
            <p className="mb-[30px]">Explora y descarga contenido visual de manera rápida y sencilla en nuestra plataforma. Encuentra la mejor selección de GIFs, imágenes y stickers para complementar tu contenido.</p>
          
          </div>  
          <Buscador addCategory={addCategory}/>
        </div>  

          <div className="sm:px-[100px]">
            {categories.map((categorie, index) => {
              const bgColor = index % 2 === 0 ? '' : 'bg-[#161616]';
              return( 
                  <GifCategory key={categorie} categorie={categorie} background={bgColor}/>
              )
            })}
          </div>

      </div>
    </>
  );
}

//INPUT: Esto hará que el campo sea de solo lectura. Si el campo debe ser editable, debes usar defaultValue en lugar de value. 
//  onChange para actualizar el estado inputValue cada vez que se realice un cambio en el campo.
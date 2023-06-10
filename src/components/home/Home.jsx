import {useState } from "react";
import Buscador from "./Buscador";
import GifCategory from "./GifCategory";
import SeccionHome from "./SeccionHome";
export default function Home() {
  const [categories, setCategories] = useState([]);

  console.log(categories);

  const addCategory = (category) => {

    //si la categoria existe en el estado no la agrega de lo contrario si.
    if(categories.includes(category))return;

    //guarda el valor recibido de buscador, y lo añade al estado de categorias.

    setCategories((prevCategory)=>[...prevCategory, category]);

  }

  const quitCategory =(category)=>{

    //recibe el valor del nombre unico y luego lo filtra creando un nuevo listado
    const listQuitCategory = categories.filter((item)=> item !== category)
    
    //actualiza el estado
    setCategories(listQuitCategory)
  }

  return (
    <>
        <div className="text-gray-600 bg-gray-200 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 text-gray-900 font-bold uppercase bg-gradient-to-r from-indigo-600 via-indigo-700 to-indigo-800 text-transparent bg-clip-text">Search Gif</h1>

              <p className="mb-8 leading-relaxed">Explora y descarga contenido visual de manera rápida y sencilla en nuestra plataforma. Encuentra la mejor selección de GIFs, imágenes y stickers para complementar tu contenido.</p>
                <Buscador addCategory={addCategory}/>
              <p className="text-sm mt-2 text-gray-500 mb-8 w-full">Ejemplo: <span className="text-indigo-500">Anime</span> - Obtendrás un resultado basado en el nombre que ingreses.</p>
              <div className="flex lg:flex-row md:flex-col">
              </div>
            </div>
            <div className="hidden lg:max-w-lg lg:w-full md:w-1/2 md:block  w-5/6">
              <img className="object-cover object-center rounded  shadow-2xl transition-transform transform-gpu duration-500 hover:scale-110" alt="hero" src="../public/img/slider.png" /> {/*720x600*/}
            </div>
          </div>
        </div>
        <div>
          {
            categories.length === 0 ?
            <SeccionHome/>
            :
          categories.map((categorie, index) => {
            const bgColor = index % 2 === 0 ? 'bg-[#ffffff]' : 'bg-[#f6f5f3]';
            return( 
                <GifCategory key={categorie} categorie={categorie} quitCategory={quitCategory} background={bgColor}/>
            )
          })}
        </div>
    </>
  );
}

//INPUT: Esto hará que el campo sea de solo lectura. Si el campo debe ser editable, debes usar defaultValue en lugar de value. 
//  onChange para actualizar el estado inputValue cada vez que se realice un cambio en el campo.
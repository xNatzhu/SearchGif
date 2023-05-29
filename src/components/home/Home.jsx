import {useState } from "react";
import Buscador from "./Buscador";

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
       <Buscador addCategory={addCategory}/>

      {categories.map((categorie) => {
        return <li key={categorie}> {categorie} </li>;
      })}
    </>
  );
}

//INPUT: Esto hará que el campo sea de solo lectura. Si el campo debe ser editable, debes usar defaultValue en lugar de value. 
//  onChange para actualizar el estado inputValue cada vez que se realice un cambio en el campo.
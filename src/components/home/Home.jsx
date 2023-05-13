import {useState } from "react";
import Buscador from "./Buscador";

export default function Home() {
  const [categories, setCategories] = useState(["hola"]);

  console.log(categories);

  return (
    <>
       <Buscador/>       
      {categories.map((categorie, index) => {
        return <li key={index}>{categorie}</li>;
      })}
    </>
  );
}

//INPUT: Esto hará que el campo sea de solo lectura. Si el campo debe ser editable, debes usar defaultValue en lugar de value. 
//  onChange para actualizar el estado inputValue cada vez que se realice un cambio en el campo.
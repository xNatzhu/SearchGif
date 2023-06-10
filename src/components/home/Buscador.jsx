import { useState } from "react";

export default function Buscador(props) {
    const [inputValue, setInputValue] = useState("");

    const addInputValue = (e)=>{
        setInputValue(e.target.value);
    }

    const eventSubmit = (e)=> {
        e.preventDefault()

        if(inputValue.trim().length <=1) return;

        //enviar a la props un valor como parametro
        props.addCategory(inputValue);

        //permite resetear el campus
        setInputValue("");
    }

    return( 
<div className="flex-row w-full md:justify-start justify-center">
  <form onSubmit={(e) => eventSubmit(e)} className="relative mr-4 w-full md:w-full lg:w-full xl:w-1/2 w-2/4 flex">
  <select className="inline-flex text-white bg-gray-500 border-0 py-2 px-4 focus:outline-none rounded text-lg">
        <option className="" value="gif">
            Gif
        </option>
      </select>
    <input
      type="text"
      value={inputValue}
      onChange={addInputValue}
      className="w-full bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
    />
    <button
      type="submit"
      className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
    >
      Buscar
    </button>
  </form>
</div>
    );

}
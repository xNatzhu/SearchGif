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
            <form onSubmit={(e)=>eventSubmit(e)}>
                <input type="text" value={inputValue} onChange={addInputValue} className="border-b-2 border-gray-400 outline-none focus:border-blue-500 px-4 py-2 rounded-lg w-full sm:w-64"/>
            </form>
    );

}
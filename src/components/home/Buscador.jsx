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
                <input type="text" value={inputValue} onChange={addInputValue} className="py-2 px-4 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-blue-500" />
            </form>
    );

}
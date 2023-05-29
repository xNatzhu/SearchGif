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
                <input type="text" value={inputValue} onChange={addInputValue}/>
            </form>
    );

}
import { useState } from "react";

export default function Buscador() {
    const [inputValue, setInputValue] = useState("");

    const addInputValue = (e)=>{
        setInputValue(e.target.value);
    }
    console.log(inputValue);
    return(
        <>  
            <h1>Buscador de Gif</h1>
            <input type="text" value={inputValue} onChange={addInputValue} />
        </>
    );

}
import { useState } from "react";

export default function Buscador() {
    const [inputValue, setInputValue] = useState("");

    const addInputValue = (e)=>{
        setInputValue(e.target.value);
    }

    const eventSubmit = (e)=> {
        e.preventDefault()
        console.log(inputValue);
    }

    return(
            <form onSubmit={(e)=>eventSubmit(e)}>
                <input type="text" value={inputValue} onChange={addInputValue} />
            </form>
    );

}
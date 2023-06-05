import axios from "axios"
import Swal from 'sweetalert2'
import { useState, useEffect } from "react"





export default function GifCategory({categorie}){

    const [listGif, setListGif] = useState([])
    const [gifUrl, setGifUrl] = useState(`https://api.giphy.com/v1/gifs/search?api_key=2RtGnE4bNqWnvp3LyrRdh4pmDKb3xlhd&q=${categorie}`)

    useEffect(()=>{
        
        axios.get(gifUrl) 
        .then( res => {
             setListGif(res.data.data)
             console.log(listGif, "Prueba");
        })
        .catch(error=>{
            Swal({
                icon:"warning",
                title: "¡Ups! Hubo un error",
                text:"Hubo un problema con el servidor, intentelo mas tarde.",
              });
        })
    
    },[gifUrl]) //cuando la categoria cambie se aplicara nuevo el renderizado

    return(
     <>
        <h3>Resultado de busqueda</h3>
        <p>{categorie}</p>
        <ul>
            <li>
                {listGif.map((gif, index)=>{
                    return(
                        <div key={index}>
                            <p>{gif.id}</p>
                        </div>
                    )
                })}
            </li>
        </ul>


     </>   
    )

}
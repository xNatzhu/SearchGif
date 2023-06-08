import axios from "axios"
import Swal from 'sweetalert2'
import { useState, useEffect } from "react"

export default function GifCategory({categorie, background}){

    const [listGif, setListGif] = useState([])
    const [gifUrl, setGifUrl] = useState(`https://api.giphy.com/v1/gifs/search?api_key=2RtGnE4bNqWnvp3LyrRdh4pmDKb3xlhd&q=${categorie}&limit=10`)

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

    <div className={`divide-y divide-solid ${background} sm:px-[100px] p-[10px]`}>
        <h2 className="uppercase text-[35px] text-[#161616] font-bold border-left-2 m-2">{categorie}</h2>

        <div className="flex flex-wrap pt-[30px]">
            {listGif.map((gif, index) => (
                <div key={index} className="w-[200px] h-[200px] m-2">
                <p className="absolute bg-[#161616] text-[#fff] rounded-full px-3 uppercase">
                    {gif.type}
                </p>
                <img src={gif.images.original.url} className="w-full h-full object-cover rounded-lg" />
                </div>
            ))}
        </div>
     </div> 
    )

}
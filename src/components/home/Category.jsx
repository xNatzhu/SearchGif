import axios from "axios"
import Swal from 'sweetalert2'
import { useState, useEffect } from "react"

export default function Category({categorie, background, quitCategory, typeCategory}){
    //Listados de los componentes agregados
    const [listItem, setlistItem] = useState([])
    //Url personalizada para las peticiones
    const [gifUrl, setGifUrl] = useState(`https://api.giphy.com/v1/gifs/search?api_key=2RtGnE4bNqWnvp3LyrRdh4pmDKb3xlhd&q=${categorie}&limit=10`)
    const [stickerUrl, setStickerUrl] = useState(`https://api.giphy.com/v1/stickers/search?api_key=2RtGnE4bNqWnvp3LyrRdh4pmDKb3xlhd&q=${categorie}&limit=10`)
    const [imgUrl, setImgUrl] = useState(`https://api.pexels.com/v1/search?query=${categorie}`)
    
    //listado de favorito.

    const [itemFavorite, setItemFavorite] = useState(JSON.parse(localStorage.getItem("fav")) || []);

    //objeto que conecta las rutas personalizadas por su tipo de categoria


    const [Url, setUrl] = useState({
        gif: {
            link:gifUrl,
            permission:false, //false or PASS
            dataLoad:"data" //res -> respuesta // data.data //ingreso
        },
        img:{
            link:imgUrl,
            permission:"0R0e4H4fJRkrkVFvmAscQz6hnnZIjeKZktXASVLlZ34E69nypqK1J4tm", //false or PASS
            dataLoad: "photos" //res -> respuesta // data.data //ingreso
        },
        sticker: {
            link:stickerUrl,
            permission:false, //false or PASS
            dataLoad:"data" //res -> respuesta // data.data //ingreso
        }
      });

      /*const [MockTemplate, setMockTemple] = useState({
        gifTemplate:{
            img:"images.original.url",
            type:"gif"
        }
      })
    */
      
    useEffect(()=>{
        //realizara la peticion dependiendo del tipo de categoria enviada.
        
        axios.get(Url[typeCategory].link,{
            headers: {
              Authorization: Url[typeCategory].permission ? `${Url[typeCategory].permission}`: undefined
            }}) 
            
            .then( res => {
                setlistItem([])
                const dataLoad = res.data[Url[typeCategory].dataLoad] || res.data ; // Verificar si existe la propiedad
                console.log(dataLoad);
                setlistItem(dataLoad);
            })

            .catch(error=>{
                    new Swal({
                        icon:"warning",
                        title: "¡Ups! Hubo un error",
                        text:"Hubo un problema con el servidor, intentelo mas tarde.",
                    });
                })
             //cuando la categoria cambie se aplicara nuevo el renderizado
        }
        ,[typeCategory])

    const onEliminar = ()=>{
        quitCategory(categorie)
    }


    const addFavorito = (gif) => {
        if (itemFavorite.includes(gif)) {
            // Se elimina de favorito
            const filterItem = itemFavorite.filter((item) => item !== gif);
            localStorage.setItem("fav", JSON.stringify(filterItem));
            setItemFavorite(filterItem);
        } else {
            // Se agrega a favorito
            const updatedItemFavorite = [gif, ...itemFavorite];
            localStorage.setItem("fav", JSON.stringify(updatedItemFavorite));
            setItemFavorite(updatedItemFavorite);
        }

        console.log(localStorage.getItem("fav"));
    };
    useEffect(() => {
        console.log(itemFavorite);
      }, [itemFavorite]);


    return(

    <div className={`${background} sm:px-[100px] p-[10px]`}>
        <div className="h-1 bg-gray-200 rounded overflow-hidden">
            <div className="w-24 h-full bg-indigo-500"></div>
        </div>
        <div className="flex justify-between w-full">
            <h2 className="uppercase text-[35px] text-gray-500 font-bold border-left-2 m-2">{categorie}</h2>
            <button onClick={onEliminar}>
                <span className="inline-block rounded-lg bg-gray-200 p-3 text-indigo-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                    </svg>
                </span>
            </button>
        </div>
        <div className="flex flex-wrap pt-[30px]">
            {/*Template - data*/}
            { 
            listItem.map((gif, index) => (
                <button key={index} onClick={()=>addFavorito(gif)}>

                    <div className="w-[200px] h-[200px] m-2">
                    <p className="absolute bg-gray-800  m-[2px] text-[#fff] rounded-full px-3 uppercase">
                        {gif.type ? `${gif.type}`:"img"}
                    </p>
                    <img src={gif?.images?.original?.url || gif?.src?.medium} className={`w-full h-full object-cover rounded-lg`}
                    
                    style={{
                        boxShadow: itemFavorite.includes(gif) ? 'rgba(63, 64, 249, 0.4) 0px 5px' : 'none'
                    }} 
                    
                    />
                    </div>
                </button>
            ))}

        </div>
     </div> 
    )

}
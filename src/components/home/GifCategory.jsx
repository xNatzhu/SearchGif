import axios from "axios"
import swal from '@sweetalert/with-react'

export default function GifCategory({categorie}){

    useEffect(()=>{
        const url = "";
        
        axios.get(url) 
        .then( res => {
        })
        .catch(error=>{
            swal({
                icon:"warning",
                title: "¡Ups! Hubo un error",
                text:"Hubo un problema con el servidor, intentelo mas tarde.",
              });
        })
    
    },[])

    return(
     <>
        <h3>Resultado de busqueda</h3>
        <p>{categorie}</p>

     </>   
    )

}
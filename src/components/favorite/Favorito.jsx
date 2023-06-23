import { useState} from "react"

export default function Favorito(){
    const [itemFavorite, setItemFavorite] = useState(JSON.parse(localStorage.getItem("fav")) || []);

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

    return(
        <div className="flex flex-wrap  bg-gray-200 pt-[30px]">

        {/*Template - data*/}
        {itemFavorite.length > 0 ? (
            itemFavorite.map((gif, index) => (
                <button key={index} onClick={() => addFavorito(gif)}>
                <div className="w-[200px] h-[200px] m-2">
                    <p className="absolute bg-gray-800  m-[2px] text-[#fff] rounded-full px-3 uppercase">
                    {gif.type ? `${gif.type}` : "img"}
                    </p>
                    <img
                    src={gif?.images?.original?.url || gif?.src?.medium}
                    className={`w-full h-full object-cover rounded-lg`}
                    style={{
                        boxShadow: itemFavorite.includes(gif)
                        ? "rgba(63, 64, 249, 0.4) 0px 5px"
                        : "none",
                    }}
                    />
                </div>
                </button>
            ))
            ) : (
<div
  className="bg-indigo-600 px-4 py-3 text-white sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 w-full"
>
  <p className="text-center font-medium sm:text-left">
    <br className="sm:hidden" />

    ¡Ups! Actualmente, tu lista de favoritos se encuentra vacía.
  </p>

  <a
    className="mt-4 block rounded-lg bg-white px-5 py-3 text-center text-sm font-medium text-indigo-600 transition hover:bg-white/90 focus:outline-none focus:ring active:text-indigo-500 sm:mt-0"
    href="#"
  >
    Inicio
  </a>
</div>
            )}

    </div>
    );
}
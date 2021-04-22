import React, {useState, useEffect} from "react"
import { createClient } from 'pexels';

//Photos API setup
const Context = React.createContext()
const client = createClient('563492ad6f9170000100000141700883e61b45c7a0df7c6679957214');

function ContextProvider({children}){
    //State
    const [allPhotos, setAllPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])
    const [favoritedPhotos, setFavoritedPhotos] = useState([])
    //API related
    const [config, setConfig] = useState({
        query: "Nature",
        per_page: 40,
        page: 1
    })
    //Pagination
    const [paginationRelated, setPaginationRelated] = useState({
        perPage: 40,
        page: 1,
        totalResults: 10
    })

    useEffect(() => {
        client.photos.search(config).then((res) => {
          setAllPhotos(res.photos);
          const { page, per_page, total_results } = res;
          setPaginationRelated({
            currentPage: page,
            perPage: per_page,
            totalResults: total_results,
          });
        });
      }, [config]);

    //Favorite related
    function toggleFavorite(id) {
        const updatedArr = allPhotos.map(photo => {
            if(photo.id === id){
                return {...photo, isFavorite: !photo.isFavorite}
            }
            return photo
        })
        setAllPhotos(updatedArr)
        const favoritedArr = updatedArr.filter(photo => 
            photo.isFavorite === true     
        )
        setFavoritedPhotos(favoritedArr)
    }
    
    //Cart related 
    function addImage(newItem){
        setCartItems(prevItem => [...prevItem, newItem])
    }

    function removeFromCart(id){
        setCartItems(prevItems => prevItems.filter(item => item.id !== id) )
    }

    return(
        <Context.Provider value={{
            allPhotos, 
            cartItems,
            addImage, 
            removeFromCart,  
            setCartItems,
            toggleFavorite,  
            favoritedPhotos,
            requestConfig: config,
            setRequestConfig: setConfig,
            paginationRelated,
        }}>
            {children}
        </Context.Provider>
    )
}
 
export  {ContextProvider, Context}

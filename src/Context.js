import React, {useState, useEffect} from "react"

const Context = React.createContext()

function ContextProvider({children}){
    const [allPhotos, setAllPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])

    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setAllPhotos(data))
    }, [])

    function toggleFavorite(id) {
        const updatedArr = allPhotos.map(photo => {
            if(photo.id === id) {
                return {...photo, isFavorite: !photo.isFavorite}
            }
            return photo
        })
        setAllPhotos(updatedArr)
    }
   
    function addImage(newItem){
        setCartItems(prevItem => [...prevItem, newItem])
    }

    function removeFromCart(id){
        setCartItems(prevItems => prevItems.filter(item => item.id !== id) )
    }

    function changeCartIcon(){
        if (cartItems.length){
            return <i className="ri-shopping-cart-fill ri-fw ri-2x"></i>
        }else{
            return <i className="ri-shopping-cart-line ri-fw ri-2x"></i>
        }
    }

    return(
        <Context.Provider value={{allPhotos, cartItems, toggleFavorite, addImage, removeFromCart, changeCartIcon, setCartItems}}>
            {children}
        </Context.Provider>
    )
}

export  {ContextProvider, Context}

import React,{useContext} from "react"
import {Link} from "react-router-dom"
import {Context} from "../Context"

function Header(){
    const { favoritedPhotos, cartItems} = useContext(Context)

    const cartClassName = 
        cartItems.length > 0 ? "ri-shopping-cart-fill" : "ri-shopping-cart-line"

    const favClassName = 
        favoritedPhotos.length > 0 ? "ri-heart-fill" : "ri-heart-line"

    return(
        <header className="header-container">    
            <Link to="/"><h2>PIC SOME!</h2></Link>
            <div className="icons-container">
                <Link to="/favorite">
                    <i className={`${favClassName} ri-2x `} />
                </Link>
                <Link to="/cart">
                    <i className={`${cartClassName} ri-2x`} />
                </Link>
            </div>
        </header>
    )
} 

//ri-fw ri-2x 
export default Header
import React, {useContext} from "react"
import {Context} from "../Context"
import PropTypes from "prop-types"
import useHover from "../hooks/useHover"

function Image({className, img}) {
    const [hovered, ref] = useHover()
    
    const {toggleFavorite, addImage, removeFromCart, cartItems} = useContext(Context)

    function heartIcon () {
        if(img.isFavorite){
            return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}/>
        }else if(hovered){
            return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}/>
        }
    }

    function cartIcon(){
        const alreadyInCart = cartItems.some(item => item.id === img.id)
        if(alreadyInCart){
            return <i className="ri-shopping-cart-fill cart" onClick={() => removeFromCart(img.id)}/>
        }else if(hovered){
            return <i className="ri-add-circle-line cart" onClick={() => addImage(img)}/>
        }
    }
    
    return (
        <div 
        className={`${className} image-container`}
        ref={ref}
        >
            <img src={img.url} alt="" className="image-grid"/>
            {heartIcon()}
            {cartIcon()}
        </div>
    )
}

Image.propTypes={
    className : PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
}
export default Image
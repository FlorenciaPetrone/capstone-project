import React, {useContext} from "react"
import {Context} from "../Context"
import PropTypes from "prop-types"
import useHover from "../hooks/useHover"

function CartItem({item}) {
    const {setCartItems} = useContext(Context)
    const [hovered, ref] = useHover()

    function removeElement(id){
        setCartItems((prevItems) => prevItems.filter(item => item.id !== id))
    }

    const iconClassName = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"

    return (
        <div className="cart-item">
            <i 
                className={iconClassName} 
                onClick={() => removeElement(item.id)}
                ref= {ref}
            >
            </i>
            <img src={item.url} width="130px" />
            <p>$5.99</p>
        </div>
    )
}
CartItem.propTypes = {
    item: PropTypes.shape({
        url: PropTypes.string.isRequired
    })
}

export default CartItem


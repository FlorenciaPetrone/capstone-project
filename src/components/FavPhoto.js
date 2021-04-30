import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../Context";
import useHover from "../hooks/useHover";

const FavPhoto = ({ photo }) => {
  const [hovered, ref] = useHover();
  const { toggleFavorite, addImage, removeFromCart, cartItems } = useContext(
    Context
  );

  function heartIcon() {
    if (hovered) {
      return (
        <i
          className="ri-heart-fill favorite"
          onClick={() => toggleFavorite(photo.id)}
        />
      );
    }
  }
  function cartIcon() {
    const alreadyInCart = cartItems.some((item) => item.id === photo.id);
    if (alreadyInCart) {
      return (
        <i
          className="ri-shopping-cart-fill cart"
          onClick={() => removeFromCart(photo.id)}
        />
      );
    } else if (hovered) {
      return (
        <i
          className="ri-add-circle-line cart"
          onClick={() => addImage(photo)}
        />
      );
    }
  }

  return (
    <div className="fav-image-container" ref={ref}>
      <img
        src={photo.src.large2x}
        width="130px"
        alt=""
        className="fav-image-grid"
      />
      {heartIcon()}
      {cartIcon()}
    </div>
  );
};
FavPhoto.propTypes = {
  photo: PropTypes.shape({
    src: PropTypes.shape({
      tiny: PropTypes.string,
    }).isRequired,
    id: PropTypes.number.isRequired,
  }),
};

export default FavPhoto;

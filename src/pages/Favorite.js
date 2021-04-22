import React, { useContext } from "react";
import { Context } from "../Context";
import FavPhoto from "../components/FavPhoto"


const Favorite = () => {

    const { favoritedPhotos } = useContext(Context);
    console.log(favoritedPhotos)

    const favoritedArr = favoritedPhotos.map(photo => 
        <FavPhoto key={photo.id} photo={photo} />  
    );
   
    return (
        <main className="cart-page">
            <h1>My liked photos</h1>
            <div className="photos">
                {favoritedArr}
            </div>
            {favoritedArr.length === 0 ? <p className="text">Add photos to your list. </p> : null }
        </main>
    )
}
export default Favorite;
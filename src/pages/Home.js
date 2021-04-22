//State and Context
import React, { useContext } from "react"
import {Context} from "../Context"
//Components
import Image from "../components/Image"
import Pagination from "../components/Pagination"
import Search from "../components/Search"

import {getClass} from "../utils"

function Home() {
    
    const {allPhotos, requestConfig, setRequestConfig} = useContext(Context)
    
    const imageElements = allPhotos.map((img, i) => (
        <Image key={img.id} img={img} className={getClass(i)} />
    ))

    const changePage = (action) => {
        const newPage = action === "next" ? requestConfig.page + 1 : requestConfig.page - 1;
        setRequestConfig({ ...requestConfig, page: newPage });
    }
    
    return (
        <main className="home-container">
            <Search />
            <div className="photos">
                {imageElements}
            </div>
            {allPhotos !== 0 && <Pagination changePage={changePage}/>}
        </main>
        
    )
}

export default Home
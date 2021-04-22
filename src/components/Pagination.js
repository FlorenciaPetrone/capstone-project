import React, { useContext } from "react"
import { Context } from "../Context"

const Pagination = ({ changePage }) => {
    const { paginationRelated } = useContext(Context)
    const { currentPage, perPage, totalResults } = paginationRelated
    return(
        <div className="pagination-container">
            {currentPage !== 1 && (
                <button className="button-hover" onClick={() => changePage("previous")}>
                    Previous
                </button>
            )}
            {currentPage !== 1 && <button disabled>{currentPage - 1}</button>}
            <button disabled className="current-page" >
                {currentPage}
            </button>
            <button onClick={() => changePage("next")}>{currentPage + 1}</button>
            <p>...{Math.floor(totalResults / perPage - currentPage)}</p>
            <button className="button-hover" onClick={() => changePage("next")}>
                Next
            </button>
        </div>
    )

}



export default Pagination
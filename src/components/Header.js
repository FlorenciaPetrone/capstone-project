import React,{useContext} from "react"
import {Link} from "react-router-dom"
import {Context} from "../Context"

function Header(){
    const {changeCartIcon} = useContext(Context)

    return(
        <header>    
            <Link to="/"><h2>PIC SOME!</h2></Link>
            <Link to="/cart">
                {changeCartIcon()}
            </Link>
        </header>
    )
}

export default Header
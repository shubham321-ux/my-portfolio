import { Link } from "react-router-dom"
import "./header.css"

import { useState } from "react"


const Header=()=>{
    const navdiv=document.getElementById("sidediv")
    const getdiv=()=>{
        navdiv.style.right="0px"
    }
   
    return <>
    
    <div className="mainHeader" >
        <h3>Controler.dev</h3>
        <div className="items">
           <Link to="/">Home</Link>
          <Link to="/About">About</Link>

           <Link to="/Project">Project</Link>
           <Link to="/Contact">Contact</Link>
        </div>
        {/* <img className="menuLogo" onClick={getdiv} src="https://icon-library.com/images/menu-icon-png-3-lines/menu-icon-png-3-lines-14.jpg"/> */}
       
    </div>
    </>
}
export default Header
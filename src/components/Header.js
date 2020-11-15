import React, {useState} from 'react';
import { AiOutlineMenu
,AiOutlineClose } from 'react-icons/ai';

import '../css/header.css'


const Header = () => {
    const [navbarActive , setNavbarActive] = useState(false);
    const handlerNavbar = (e)=>{
        setNavbarActive(!navbarActive)
    }
    return (
        <div className = "top">
            <h1>App<span>Lab</span></h1>
     {
         navbarActive ?
          <AiOutlineClose 
         className = "icon-navbar"
         onClick = {handlerNavbar} 
         style = {{fill : "#fff"}} 
         /> :  
         <AiOutlineMenu 
         style = {{fill : "#000"}} 
         onClick = {handlerNavbar} 
         className = "icon-navbar"/>
     }
                <ul className = {`top-navbar ${navbarActive ? "active" : ""}` } >
                            <li><a href="#">home</a></li>
                    <li><a href="#">Key Features</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#"> Testiminial</a></li>
                    <li><a href="#">FAQ</a></li>
                </ul>
            <a href="#" className = "top-btn">Try for free</a>
        </div>
    );
}

export default Header;

  
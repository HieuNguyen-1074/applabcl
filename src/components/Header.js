import React from 'react';
import '../css/header.css'


const Header = () => {
    return (
        <div className = "top">
            <h1>App<span>Lab</span></h1>
                <ul className = "top-navbar">
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

  
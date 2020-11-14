import React from 'react';
import {AiOutlineNumber} from "react-icons/ai";
import {FaFacebookF} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import {FaGithubSquare} from "react-icons/fa";
import '../css/footer.css'

const Footer = () => {
    return (
        <div className = "footer">
             <h1>App<span>Lab</span></h1>
             <ul className = "footer-navbar">
                    <li><a href="#">home</a></li>
                    <li><a href="#">Key Features</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#"> Testiminial</a></li>
                    <li><a href="#">FAQ</a></li>
                </ul>
                <ul className = "footer-link">
                    <li><a href=""><FaFacebookF /></a></li>
                    <li><a href=""><FaTwitter /></a></li>
                    <li><a href=""><AiOutlineNumber /></a></li>
                    <li><a href=""><FaGithubSquare /></a></li>
                </ul>
                <p className = "footer-copyright">Copyright© Arifur Rahman Tushar 2019. All rights reserved</p>
        </div>
    );
}

export default Footer;

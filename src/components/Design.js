import React from 'react';
import imgDesign from '../img/design-img.png'
import '../css/design.css'

const Design = () => {
    return (
        <div className= "design max-width">
            <div className = "design-img">
                <img src={imgDesign} alt="" />
            </div>
            <div className = "design-content">
                <h1>Designed & built by the latest code integration</h1>
                <p>The rise of mobile devices transforms the way we consume information entirely and the world's most elevant channels such as Facebook.</p>
                <a href="" className = "design-content-btn">
                    Learn more
                </a>
            </div>
        </div>
    );
}

export default Design;

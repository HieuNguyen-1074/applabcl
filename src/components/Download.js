import React from 'react';
import imgDownload from '../img/download.png'
import imgGG from '../img/en_badge_web_generic.jpg'
import imgStore from '../img/store-apple.jpg';
import '../css/download.css'
const Download = () => {
    return (
        <div className ="download max-width">
            <div className = "download-main">
                <h1>Download our App now !</h1>
                <p>The rise of mobile devices transforms the way we consume information entirely
and the world's most elevant channels such as Facebook.</p>
                <div className = "download-main-down">
                <img src={imgGG} alt="" />
                <img src={imgStore} alt="" />
                </div>
            </div>
            <div className = "download-img">
                <img src={imgDownload} alt="" />
                
            </div>
        </div>
    );
}

export default Download;

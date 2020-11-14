import React from 'react';
import imgFeature from '../img/feature-img.png'
import '../css/feature.css';
import imgIcon1 from '../img/feature_03.png';
import imgIcon2 from '../img/feature_07.png';
import imgIcon3 from '../img/feature_09.png';

const Features = () => {
    return (
        <div className = "feature max-width">
             
            
            <div className = "feature-img">
                <img src={imgFeature} alt="" />
            </div>
            <div className = "feature-content">
            <div className = "feature-content-top">
                <h1>Awesome apps <br/> features</h1>
                <p>Increase productivity with a simple to-do app. app for managing your personal budgets.</p>
            </div>
                <div className = "fast">
                
                    <img src={imgIcon1} alt="" />
                    <div className = "feature-p">
                    <h1>Fast Performance</h1>
                    <p>Get your blood tests delivered at home collect a sample from the news your blood tests.</p>
                </div>
                </div>
                <div className = "prototype">
                <img src={imgIcon2} alt="" />
                <div className = "feature-p">
                    <h1>Prototyping</h1>
                    <p>Get your blood tests delivered at home collect a sample from the news your blood tests.</p>
                </div>
                </div>
                <div className = "edit">

                <img src={imgIcon3} alt="" />
                <div className = "feature-p">
                    <h1>Vector Editing</h1>
                    <p>Get your blood tests delivered at home collect a sample from the news your blood tests.</p>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Features;

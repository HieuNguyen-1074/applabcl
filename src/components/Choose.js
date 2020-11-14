import React from 'react';
import iconChoose1 from '../img/choose1.png'
import iconChoose2 from '../img/choose2.png'
import iconChoose3 from '../img/choose3.png'
import iconChoose4 from '../img/choose4.png'
import iconChoose5 from '../img/choose5.png'
import iconChoose6 from '../img/choose6.png'
import '../css/choose.css'

const Choose = () => {
    return (
        <div className = "choose max-width">
             <div className = "choose-top">
                <h1>Why you should choose our app</h1>
                <p>The rise of mobile devices transforms the way we consume information entirely and the world's most elevant channels such as Facebook.</p>
            </div>
            <div className = "choose-content ">
             <div className = "app">
                <img src={iconChoose1} alt="" />
                    <h1>App Development</h1>
                    <p>Get your blood tests delivered at home collect a sample from the news your blood tests.</p>
                </div>
                <div className = "award">
                <img src={iconChoose2} alt="" />
                    <h1>10 Times Award</h1>
                    <p>Get your blood tests delivered at home collect a sample from the news your blood tests.</p>
                </div>
                <div className = "cloud">
                <img src={iconChoose3} alt="" />
                    <h1>Cloud Storage</h1>
                    <p>Get your blood tests delivered at home collect a sample from the news your blood tests.</p>
                </div>
                <div className = "cus">
                <img src={iconChoose4} alt="" />
                    <h1>Customization</h1>
                    <p>Get your blood tests delivered at home collect a sample from the news your blood tests.</p>
                </div>
                <div className = "ux">
                <img src={iconChoose5} alt="" />
                    <h1>UX Planning</h1>
                    <p>Get your blood tests delivered at home collect a sample from the news your blood tests.</p>
                </div>
                <div className = "cust">
                <img src={iconChoose6} alt="" />
                    <h1>Customer Support</h1>
                    <p>Get your blood tests delivered at home collect a sample from the news your blood tests.</p>
                </div>
        </div>
        </div>
    );
}

export default Choose;

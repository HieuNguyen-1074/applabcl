import React from 'react';
import iconUltinate1 from '../img/ultmate1.png'
import iconUltinate2 from '../img/ultmate2.png'
import iconUltinate3 from '../img/ultmate3.png'
import iconUltinate4 from '../img/ultmate4.png'
import imgUltimate from '../img/ultmate-img_03.png'
import '../css/ultimate.css'
const Ultimate = () => {
    return (
        <div className = "ultimate max-width">
            <div className = "ultimate-content">
             <div className = "ultimate-content-top">
                <h1>Ultimate features that we built</h1>
                <p>The rise of mobile devices transforms the way we consume information entirely</p>
            </div>
            <div className = "ultimate-content-main">
            <div className = "app">
                <img src={iconUltinate1} alt="" />
                    <h1>App Deverloper</h1>
                    <p>Get your blood tests delivered at home collect a sample from the news your blood tests.</p>
                </div>
                <div className = "ux">
                <img src={iconUltinate2} alt="" />
                    <h1>UX Planing</h1>
                    <p>Get your blood tests delivered at home collect a sample from the news your blood tests.</p>
                </div>
                <div className = "cl">
                <img src={iconUltinate3} alt="" />
                    <h1>Clound Storage</h1>
                    <p>Get your blood tests delivered at home collect a sample from the news your blood tests.</p>
                </div>
                <div className = "cus">
                <img src={iconUltinate4} alt="" />
                    <h1>Customer support</h1>
                    <p>Get your blood tests delivered at home collect a sample from the news your blood tests.</p>
                </div>
                <a  href = "" className = "ultimate-btn">
                See all
            </a>
            </div>
            </div>
            <img src={imgUltimate} alt="" className = "ultimate-img"/>
        </div>
    );
}

export default Ultimate;

import React from 'react';
import iconJackpot1 from '../img/jackpot1.png'
import iconJackpot2 from '../img/jackpot2.png'
import iconJackpot3 from '../img/jackpot3.png'
import '../css/jackpots.css'

const Jackpots = () => {
    return (
        <div className= "jackpots max-width">
             <div className = "jackpots-top">
                <h1>Smart jackpots that you may love this anytime & anywhere</h1>
                <p>The rise of mobile devices transforms the way we consume information entirely and the world's most elevant channels such as Facebook.</p>
            </div>
            <div className = "jackpots-content">
            <div className = "payouts">
                <img src={iconJackpot1} alt="" />
                    <h1>Automatic Payouts</h1>
                    <p>Get your blood tests delivered at home collect a sample from the news your blood tests.</p>
                </div>
                <div className = "network">
                <img src={iconJackpot2} alt="" />
                    <h1>Network Effect</h1>
                    <p>Get your blood tests delivered at home collect a sample from the news your blood tests.</p>
                </div>
                <div className = "rewards">
                <img src={iconJackpot3} alt="" />
                    <h1>Fast Performance</h1>
                    <p>Get your blood tests delivered at home collect a sample from the news your blood tests.</p>
                </div>
            </div>
        </div>
    );
}

export default Jackpots;

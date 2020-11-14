import React from 'react';
import { FaLongArrowAltLeft, FaLongArrowAltRight} from "react-icons/fa";
import {TiStarOutline} from "react-icons/ti";

import imgMeet from '../img/meet-img.png'
import avatarMeet from '../img/meet-avatar.png';
import '../css/meet.css'

const Meet = () => {
    return (
        <div className = "meet">
            <div className = "meet-img">
                <img src={imgMeet} alt="" />
            </div>
            
            <div className = "meet-content">
                <div className = "meet-content-top">
                    <h1>Meet Client Satisfaction by
                        <br/> using product</h1>
                    <p>The rise of mobile devices transforms the way we consume. elevant channels such as Facebook.</p>
                    <div className = "meet-content-top-rate">
                      <TiStarOutline  className = "meet-icon"/>
                      <TiStarOutline className = "meet-icon"/>
                      <TiStarOutline className = "meet-icon"/>
                      <TiStarOutline className = "meet-icon"/>
                      <TiStarOutline className = "meet-icon"/>
                    </div>
                </div>
          
            <div className = "meet-content-main">
                 <h1>User friendly & Customizable</h1>
                 <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>
            </div>
            <div className = "meet-content-person">
                <div className = "meet-content-person-img">
                    <img src={avatarMeet} alt="" />
                </div>
                <div className = "meet-content-person-infor">
                   <h1>Zoltan Nemeth</h1>
                   <p>CEO of Pixler Lab</p>
                </div>
                <div className = "meet-content-person-navbar">
                <a href=""><FaLongArrowAltLeft /></a>
                <span>|</span>
                <a href=""><FaLongArrowAltRight /></a>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Meet;

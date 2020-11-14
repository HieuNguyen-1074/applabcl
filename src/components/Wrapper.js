import React from 'react';
import iconTag from '../img/Home-page_03.png'
import wrapperImg from '../img/wrapper-img.png'
import '../css/wrapper.css';
const Wrapper = () => {
    return (
        <div className = "wrapper ">
            <div className = "wrapper-container max-width">
            <div className = "wrapper-left">
                <div className = "wrapper-left-tag">
                    <img src={iconTag} alt="" className = "icon-tag" />
                    <p>#1 Editiors Choice App of 2020</p>
                </div>
                <div className = "wrapper-left-content">
                <h1>Best app for your  modern lifestyle</h1>
                <p>Increase productivity with a simple to-do app. app for managing your personal budgets.</p>
                </div>
                <div className = "wrapper-left-bottom">
                   <a href="" className="btn-try"> Try for free</a>
                   <a href="" className = "btn-watch"> Watch demo video</a>
                </div>
            </div>
            <div className = "wrapper-right wrapper-img">
              <img src={wrapperImg} alt="" />
            </div>
        </div>
        </div>
    );
}

export default Wrapper;

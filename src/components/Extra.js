import React from 'react';
import '../css/extra.css'

const Extra = () => {
    return (
        <div className = "extra max-width">
            <div className = "extra-top">
                <h1>Get awesome features, without extra charges</h1>
                <p>The rise of mobile devices transforms the way we consume information entirely and the world's most elevant channels such as Facebook.</p>
            </div>
            <div className = "extra-btn-change">
                <p>Monthly</p>
                <p>Annually</p>
            </div>
            <div className = "extra-card">
            <div className="extra-card-left ">
                <div className="extra-card-top">
                <p className = "price">$0<span>/month</span></p>
                    <h1>Business class</h1>
                    <p className = "discr">For Small teams or office</p>
                </div>
                <div className = "extra-content">
                    <p>Drag & Drop Builder</p>
                    <p>1,000's of Templates</p>
                    <p>Blog Support Tools</p>
                    <p>eCommerce Store</p>
                </div>
                <div className = "extra-bottom">
                <a href="" className = "extra-bottom-btn">
                    Start free trail
                </a>
            </div>
            </div>
          
            <div className="extra-card-right ">
                <div className="extra-card-top">
                    <p className = "price">$99<span>/month</span></p>
                    <h1>Business class</h1>
                    <p className = "discr">For Small teams or office</p>
                </div>
                <div className = "extra-content">
                    <p>Drag & Drop Builder</p>
                    <p>1,000's of Templates</p>
                    <p>Blog Support Tools</p>
                    <p>eCommerce Store</p>
                </div>
                <div className = "extra-bottom">
                <a href="" className = "extra-bottom-btn">
                    Start free trail
                </a>
                <a href="" className = "extra-bottom-btn">Or Start 14 days trail</a>
            </div>
            </div>
           
            </div>
        </div>
        
    );
}

export default Extra;

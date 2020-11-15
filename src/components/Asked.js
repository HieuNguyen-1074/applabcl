import React from 'react';
import {BsPlus} from "react-icons/bs";
import '../css/ask.css'

const Asked = () => {
    return (
        <div className = "asked max-width">
            <div className = "asked-top ">
                <h1>Frequently asked questions</h1>
                <p>The rise of mobile devices transforms the way we consume information entirely
and the world's most elevant channels such as Facebook.</p>
            </div>
            <div className ="asked-content">
                <div className = "asked-content-main">
                    <h1>How to contact with riders emergency?</h1>
                    <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
                </div>
                <ul className ="asked-content-choose">
                    <li><p>App installation failed,  system ?</p><BsPlus /></li>
                    <li><p>Website reponse taking time,  improve?</p><BsPlus /></li>
                    <li><p>New update fixed all bug and issues</p><BsPlus /></li>
                    <li><p>How to contact with riders emergency?</p><BsPlus /></li>
                </ul>
            </div>
        </div>
    );
}

export default Asked;

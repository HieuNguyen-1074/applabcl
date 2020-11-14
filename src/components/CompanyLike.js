import React from 'react';
import lg1 from '../img/lg-cpn1.png'
import lg2 from '../img/lg-cpn2.png'
import lg3 from '../img/lg-cpn3.png'
import lg4 from '../img/lg-cpn4.png'
import lg5 from '../img/lg-cpn5.png'
import '../css/companylike.css'
const CompanyLike = () => {
    return (
        <div className ="companylike ">
            <h1>Trusted by companies like</h1>
            <div className = "logo-img max-width">
                <img src={lg1} alt="" />
                <img src={lg2} alt="" />
                <img src={lg3} alt="" />
                <img src={lg4} alt="" />
                <img src={lg5} alt="" />
            </div>
        </div>
    );
}

export default CompanyLike;

import React from 'react';
import appImage from '../images/headerImages/app.png';
import cubeImage from '../images/headerImages/cube.png';
import helixImage from '../images/headerImages/helix.png';
import pyramidImage from '../images/headerImages/pyramid.png';
import sphereImage from '../images/headerImages/sphere.png';
import coinOne from '../images/headerImages/coin1.png';
import coinTwo from '../images/headerImages/coin2.png';
import coinThree from '../images/headerImages/coin3.png';
import Featured from './Featured';
import './Header.css';

function Header() {
    return (
        <>
        <header className="default-padding">
            <div className="header-inner d-flex jcsb">
                <div className="header-text column-40">
                    <h1 className="section-header">Earn up to 5.7% APY interest from your crypto assets</h1>
                    <p className="bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis minus autem sapiente reprehenderit, blanditiis voluptatibus!</p>
                    <div className="header-buttons d-flex">
                        <a href="#services" className="btn btn-primary m-g-r-15">Get Started</a>
                        <a href="#testimonials" className="btn btn-secondary">Learn more</a>
                    </div>
                </div>
                <div className="header-image column-45">
                    <div className="header-image_inner">
                        <img className="app" src={appImage} alt="" />
                        <img className="shapes cube" src={cubeImage} alt="cube" />
                        <img className="shapes helix" src={helixImage} alt="helix" />
                        <img className="shapes pyramid" src={pyramidImage} alt="pyramid" />
                        <img className="shapes sphere" src={sphereImage} alt="sphere" />
                        <img className="shapes coin coin1" src={coinOne} alt="sphere" />
                        <img className="shapes coin coin2" src={coinTwo} alt="sphere" />
                        <img className="shapes coin coin3" src={coinThree} alt="sphere" />
                    </div>
                </div>
            </div>
            <Featured />
        </header>
        </>
    )
}

export default Header;

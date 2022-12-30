import React, { useState } from 'react';
import brandLogo from "../images/navbarImages/brand_logo.svg"
import './Navbar.css'

function Navbar() {
    const [toggle, setToggle] = useState(false);
    const [menu, setMenu] = useState(false);
    const handleClick = () => {
        setToggle(!toggle);
        setMenu(!menu);
    }
    return (
        <nav id="navigation" className="navigation d-flex">
            <div className="nav-inner">
                <a href="/" className="logo">
                    <img src={brandLogo} alt="Inertia Brand Logo" />
                </a>
                <div className={toggle ? "menu-toggler active" : "menu-toggler"} onClick={handleClick}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className={menu ? "nav-items active d-flex jcsb y-center" : "nav-items d-flex jcsb y-center"}>
                    <ul className="nav-list">
                        <li><a href="/" className="active">Home</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#testimonials">Testimonials</a></li>
                        <li><a href="#news">News</a></li>
                        <li><a href="#footer">Useful Links</a></li>
                    </ul>
                    <div className="nav-buttons">
                        <a href="#services"className="btn btn-primary nav-btn">Get Started</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;

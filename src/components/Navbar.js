import React, {useState} from 'react';
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
            <a href="/" className="logo">
                <div>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <span>INERTIA</span>
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
                    <button className="btn btn-primary nav-btn">Get Started</button> 
                </div>

            </div>
            
        </nav>
    )
}

export default Navbar;

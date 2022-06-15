import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="default-padding" id="footer">
        <div className="footer-inner d-flex jcsb">
            <div className="footer-column column-25 footer-brand">
                <a href="#0" className="logo">
                    <div>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <span>INERTIA</span>
                </a>
                <p className="bold">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, aliquid.</p>
                <div className="social-icons"></div>
            </div>
            <div className="footer-column column-15 footer-links">
                <h6 className="footer-header">Menu</h6>
                <div>
                    <a href="#0">Home</a>
                    <a href="#0">About</a>
                    <a href="#0">Blog</a>
                    <a href="#0">Blog Post</a>
                    <a href="#0">Integrations</a>
                    <a href="#0">Integration Single</a>
                    <a href="#0">Pricing</a>
                    <a href="#0">Single Pricing</a>
                    <a href="#0">Contact</a>
                </div>
            </div>
            <div className="footer-column column-15 footer-links">
                <h6 className="footer-header">Utility Pages</h6>
                <div>
                    <a href="#0">Start Here</a>
                    <a href="#0">Styleguide</a>
                    <a href="#0">Password Protected</a>
                    <a href="#0">404 Not Found</a>
                    <a href="#0">Licenses</a>
                    <a href="#0">Changelog</a>
                </div>
            </div>
            <div className="footer-column column-25 footer-subscribe">
                <h6 className="footer-header">Subscribe to our newsletter</h6>
                <p className="bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, hic.</p>
                <form action="#0" className="form_subscribe">
                    <div className="input-text_subscribe">
                        <input type="email" name="email" placeholder="Enter your email" id="email" />
                    </div>
                    <input type="submit" value="Subscribe" className="btn btn-primary" />
                </form>
            </div>
        </div>
        <div className="footer-credits text-center">
            <h5>Copyright &copy; | Made by <a href="https://www.odelolaoluwaseyi.com">Odelola Oluwaseyi</a> | Designs and inspirations by <a href="https:www.webflow.com">Webflow</a></h5>
        </div>
    </footer>
    )
}

export default Footer;

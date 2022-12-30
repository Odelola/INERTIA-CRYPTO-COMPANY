import React from 'react';
import appImage from '../images/ctaImages/app.png';
import cubeImage from '../images/ctaImages/cube.png';
import helixImage from '../images/ctaImages/helix.png';
import pyramidImage from '../images/ctaImages/pyramid.png';
import sphereImage from '../images/ctaImages/sphere.png';
import './Cta.css'

function Cta() {
    return (
    <section className="cta default-padding" data-aos="flip-up" data-aos-duration="1500">
        <div className="cta-inner d-flex jcsa y-center default-border-radius">
            <div className="cta-image column-40">
                <div className="cta-image_inner">
                    <img className="app" src={appImage} alt="" />
                    <img className="shapes cube" src={cubeImage} alt="cube" />
                    <img className="shapes helix" src={helixImage} alt="helix" />
                    <img className="shapes pyramid" src={pyramidImage} alt="pyramid" />
                    <img className="shapes sphere" src={sphereImage} alt="sphere" />
                </div>
            </div>
            <div className="cta-text column-40">
                <h3>Start investing today</h3>
                <p className="bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ducimus sit vitae distinctio incidunt ipsa?</p>
                <div className="cta-buttons d-flex">
                    <a href="#0" className="btn btn-primary-alt m-g-r-15">Get started</a>
                    <a href="#0" className="btn btn-secondary-alt">Learn more</a>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Cta;

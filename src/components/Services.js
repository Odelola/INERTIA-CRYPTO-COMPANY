import React from 'react';
import ServicesCard from './ServicesCard';
import walletImage from '../images/servicesImages/wallet.svg'
import sendandreceiveImage from '../images/servicesImages/sendandreceive.svg'
import analyticsImage from '../images/servicesImages/analytics.svg'
import realtimeImage from '../images/servicesImages/realtime.svg'
import securityImage from '../images/servicesImages/security.svg'
import supportImage from '../images/servicesImages/support.svg'
import './Services.css';

function Services() {
    return (
        <section className="services default-padding" id="services" data-aos="fade-up">
            <div className="services-header d-flex jcsb y-center">
                <h3 className="section-header">Why Inertia is for you?</h3>
                <p className="bold">Inertia is a leading startup company that offes the best of the following services below.</p>
            </div>
            <div className="services-inner d-flex">
                <div className="services-cards d-flex jcsb" data-aos="fade-right">
                    <ServicesCard image={walletImage} title="walletImage" servicesCard_heading="Easy to create wallet" />
                    <ServicesCard image={sendandreceiveImage} title="sendandreceiveImage}" servicesCard_heading="Send & receive anytime" />
                    <ServicesCard image={analyticsImage} title="analyticsImage" servicesCard_heading="Reports & analytics" />
                </div>
                <div className="services-cards d-flex jcsb" data-aos="fade-right">
                    <ServicesCard image={realtimeImage} title="realtimeImage" servicesCard_heading="Real-time interest" />
                    <ServicesCard image={securityImage} title="securityImage" servicesCard_heading="Enterprise-grade security" />
                    <ServicesCard image={supportImage} title="supportImage" servicesCard_heading="24/7 dedicated support" />
                </div>
            </div>
            <div className="services-button d-flex x-center">
                <a href="#0" className="btn btn-primary m-g-r-15">Get started</a>
                <a href="#0" className="btn btn-secondary">Learn More</a>
            </div>
        </section>
    )
}

export default Services;

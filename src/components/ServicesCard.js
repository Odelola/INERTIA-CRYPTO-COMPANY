import React from 'react';
import './ServicesCard.css';

function ServicesCard(props) {
    return (
        <div class="services-card text-center">
            <div class="services-figure">
                <img src={props.image} alt={props.title}  />               
            </div>
            <h4>{props.servicesCard_heading}</h4>
            <p className="bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque enim facilis corrupti officia distinctio quam!</p>
        </div>
        
    )
}

export default ServicesCard;

import React from 'react';
import './TestimonialsCard.css';

function TestimonialsCard(props) {
    return (
        <div className="testimonials-card">
            <div className="testimonials-profile d-flex y-center">
                <div className="testimonials-image">
                    <img src={props.image} alt={props.title}  />
                </div>
                <div className="testimonials-info">
                    <h6 className="testimonials-name">{props.name}</h6>
                    <p className="testimonials-username bold">{props.username}</p>
                </div>
            </div>
            <p className="bold">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus corporis delectus eaque eos laborum! Magnam veritatis inventore quidem! Veniam, illo accusantium!</p>
        </div>
    )
}

export default TestimonialsCard;

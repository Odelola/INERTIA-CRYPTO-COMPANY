import React from 'react';
import './NewsCard.css';

function NewsCard(props) {
    return (
        <div class="news-card column-45">
            <div class="news-figure">
                <img src={props.image} alt={props.title}  />               
            </div>
            <div className="news-info">
                <p className="newsdate bold">{props.date}<span className="newsread">{props.time}</span></p>
                <h4>{props.newsCard_heading}</h4>
                <a href="#0" className="newsbutton">Read more</a>                
            </div>
        </div>
        
    )
}

export default NewsCard;

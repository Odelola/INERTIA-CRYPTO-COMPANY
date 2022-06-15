import React from 'react';
import pinterestImage from '../images/pinterest.svg';
import googleImage from '../images/google.svg';
import twitchImage from '../images/twitch.svg'
import facebookImage from '../images/facebook.svg'
import youtubeImage from '../images/youtube.svg';
import './Featured.css';

function Featured() {
    return (
        <section className="featured d-flex">
            <div className="featured-inner d-flex jcsb default-padding">
                <div className="featured-text">
                    <h5>Featured on:</h5>
                </div>
                <div className="featured-images d-flex y-center">
                    <img src={pinterestImage} alt="Pinterest's logo" />
                    <img src={googleImage} alt="Pinterest's logo" />
                    <img src={twitchImage} alt="Pinterest's logo" />
                    <img src={facebookImage} alt="Pinterest's logo" />
                    <img src={youtubeImage} alt="Pinterest's logo" />

                </div>
            </div>
        </section>
    )
}

export default Featured;

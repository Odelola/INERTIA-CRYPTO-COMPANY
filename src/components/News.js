import React from 'react';
import NewsCard from './NewsCard';
import newsOne from '../images/newsImages/news1.png'
import newsTwo from '../images/newsImages/news2.png'
import './News.css';

function News() {
    return (
        <section className="news default-padding" id="news" data-aos="fade-down-left">
            <div className="news-header d-flex jcsb y-center">
                <h3 className="section-header">Browse our latest news <br /> and resources</h3>
                <a className="btn btn-secondary" href="#0">Browse articles</a>
            </div>
            <div className="news-cards d-flex jcsb">
                    <NewsCard image={newsOne} date="October 29, 2021" time="4 mins read" newsCard_heading="What is NFT(Non-Fungible Tokens) and how you can buy one"/>
                    <NewsCard image={newsTwo} date="October 30, 2021" time="7 mins read" newsCard_heading="6 great crypto wallets you should try to keep  your crypto assets secure"/>
            </div>
        </section>
    )
}

export default News;

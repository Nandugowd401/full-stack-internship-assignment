import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Webtoons.css'; // Import the CSS file for styles

const Webtoons = () => {
    const [webtoons, setWebtoons] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/webtoons')
            .then(res => { setWebtoons(res.data); })
            .catch(error => {
                console.error("There was an error fetching the webtoons from the backend!", error);
            });
    }, []);

    return (
        <>
        <h1 className='titlename'>Best Fantasy Manhwa</h1>
        <div className="webtoon-grid">
            {webtoons.map((webtoon, index) => (
                <div key={index} className="webtoon-card">
                    <h2 className="webtoon-title">{webtoon.title}</h2>
                    <img src={webtoon.image} alt={webtoon.title} className="webtoon-image" />
                    <p className="webtoon-description">{webtoon.description}</p>
                </div>
            ))}
        </div>
        </>
    );
};

export default Webtoons;

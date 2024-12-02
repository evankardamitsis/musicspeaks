import React from 'react';
import './AnimatedButton.css';

const AnimatedButton = ({ text = "ENTRY", href = "#" }) => {
    return (
        <div className="container">
            <a href={href} className="button type--C">
                <div className="button__line" />
                <div className="button__line" />
                <span className="button__text">{text}</span>
                <div className="button__drow1" />
                <div className="button__drow2" />
            </a>
        </div>
    );
};

export default AnimatedButton;

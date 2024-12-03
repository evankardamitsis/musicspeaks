import React from 'react';
import './AnimatedButton.css';

const AnimatedButton = ({ text = "ENTRY", href = "#", reverse = false, type = "C" }) => {
    const buttonTypeClass = reverse ? `type--${type}-reverse` : `type--${type}`;

    return (
        <div className="container">
            <a
                href={href}
                className={`button ${buttonTypeClass} ${reverse ? "button--reverse" : ""}`}
            >
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

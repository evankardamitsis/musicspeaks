import React from 'react';
import './Hamburger.css';

type HamburgerProps = {
    isOpen: boolean;
    onToggle: () => void;
};

const Hamburger: React.FC<HamburgerProps> = ({ isOpen, onToggle }) => {
    return (
        <div className="hamburger" onClick={onToggle}>
            <svg viewBox="0 0 32 32" className={`h-12 ${isOpen ? 'open' : ''}`}>
                <path
                    d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                    className="line line-top-bottom"
                ></path>
                <path d="M7 16 27 16" className="line" />
            </svg>
        </div>
    );
};

export default Hamburger;

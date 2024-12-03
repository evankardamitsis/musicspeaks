import React, { forwardRef } from "react";
import "./SwiperButtons.css";

type SwiperButtonProps = {
    direction: "left" | "right";
    onClick?: () => void;
    className?: string;
};

const SwiperButtons = forwardRef<HTMLDivElement, SwiperButtonProps>(
    ({ direction, onClick, className = "" }, ref) => {
        return (
            <div
                ref={ref}
                onClick={onClick}
                className={`swiper-btn ${direction === "left" ? "left-btn" : "right-btn"} ${className}`}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    className="icon"
                >
                    {direction === "left" ? (
                        <path d="M15.41 7.41 10.83 12l4.58 4.59L14 18l-6-6 6-6z" />
                    ) : (
                        <path d="M9 6l6 6-6 6 1.41 1.41L17.83 12 10.41 4.59z" />
                    )}
                </svg>
            </div>
        );
    }
);

SwiperButtons.displayName = "SwiperButtons";

export default SwiperButtons;

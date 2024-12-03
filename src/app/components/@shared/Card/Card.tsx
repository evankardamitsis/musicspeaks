import React from "react";

interface CardProps {
    title: string;
    subtitle?: string;
    content: string | React.ReactNode;
    icons?: React.ReactNode;
    className?: string;
}

const Card: React.FC<CardProps> = ({ title, subtitle, content, icons, className = "" }) => {
    return (
        <div
            className={`relative bg-white shadow-md rounded-sm p-8 max-w-sm flex flex-col items-s h-fit min-h-[500px] cursor-grab ${className}`}
            style={{
                clipPath: "polygon(5% 0%, 95% 0%, 100% 100%, 0% 100%)",
            }}
        >
            {/* Icons (if provided) */}
            {icons && <div className="flex justify-items-start gap-4 mb-4">{icons}</div>}

            {/* Title */}
            <h3 className="text-2xl font-bold text-left">{title}</h3>

            {/* Subtitle */}
            {subtitle && <h4 className="text-left text-lg font-bold text-[#082FFF]  mt-1">{subtitle}</h4>}

            {/* Content */}
            <div className="text-gray-700 mt-4 text-left">{content}</div>
        </div>
    );
};

export default Card;

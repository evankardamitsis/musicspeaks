import React from "react";

const YellowIcon = ({
                        animate = false,
                        className = "",
                        ...props
                    }: React.JSX.IntrinsicAttributes &
    React.SVGProps<SVGSVGElement> & { animate?: boolean }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 111 600"
            preserveAspectRatio="xMidYMid meet"
            className={`w-full h-auto ${animate ? "animate-bounce" : ""} ${className}`}
            style={{
                filter: animate
                    ? "drop-shadow(0px 6px 8px rgba(255, 255, 255, 0.8))"
                    : "",
                transition: "filter 0.3s ease-in-out",
            }}
            {...props}
        >
            <path
                d="M223.342 108.488a92.573 99.47 0 1 1-185.146 0 92.573 99.47 0 1 1 185.146 0z"
                style={{
                    fill: "#ff0",
                }}
                transform="matrix(1.08023 0 0 1.008 -41.26 -9.09)"
            />
        </svg>
    );
};

export default YellowIcon;

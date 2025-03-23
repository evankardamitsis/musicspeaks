"use client";

import React from "react";

const Features = () => {
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();

        // Extract the id from href
        const targetId = href.replace("#", "");
        const element = document.getElementById(targetId);

        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });

            // Update URL without reload
            window.history.pushState({}, "", `/#${targetId}`);
        }
    };

    return (
        <div className="pt-20 pb-0">
            <div className="w-full max-w-[90%] mx-auto flex flex-col items-center">
                <div className="flex flex-col md:flex-row md:justify-center gap-6 sm:gap-8 w-full max-w-4xl">
                    {[
                        "PROMOTE A NEW RELEASE",
                        "INCREASE TICKET SALES",
                        "CREATE YOUR DIGITAL PRESENCE",
                    ].map((text) => (
                        <a
                            key={text}
                            href="#services"
                            onClick={(e) => handleScroll(e, "#services")}
                            className="group relative flex items-center justify-center text-[#FFF107] border-2 border-[#FFF107] px-6 py-4 bg-black hover:bg-[#FFF107] hover:text-black transition-all duration-300 cursor-pointer overflow-hidden no-underline"
                        >
                            <div className="absolute inset-0 border-2 border-black scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                            <div className="absolute inset-0 border-2 border-black scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
                            <h3 className="text-base sm:text-lg font-bold tracking-wide relative z-10 text-center md:text-left">{text}</h3>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Features; 
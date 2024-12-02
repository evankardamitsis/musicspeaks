import React from 'react';
import aboutBg from "@/app/assets/about_bg.png";
import AboutHeading from "@/app/sections/About/AboutHeading";
import YellowIcon from "@/app/components/@shared/YellowIcon";

const About = () => {
    return (
        <div
            className="min-h-[70vh] flex items-center justify-center bg-no-repeat bg-center "
            style={{backgroundImage: `url(${aboutBg.src})`}}
        >
            {/* Content */}
            <div className="flex items-center justify-center flex-col text-center">
                {/* Heading */}
                <AboutHeading className="w-[80%] max-w-md sm:max-w-xl lg:max-w-3xl xl:max-w-4xl m-auto mb-8" />

                {/* Subheading */}
                <div className="flex items-center gap-6 text-lg font-semibold">
                    <span className="flex items-center gap-2">
                        PROMOTE A NEW RELEASE
                        <YellowIcon className="w-6 h-6" />
                    </span>
                    <span className="flex items-center gap-2">
                        INCREASE TICKET SALES
                        <YellowIcon className="w-6 h-6" />
                    </span>
                    <span className="flex items-center gap-2">
                        CREATE YOUR DIGITAL PRESENCE
                        <YellowIcon className="w-6 h-6" />
                    </span>
                </div>
            </div>
        </div>
    );
};

export default About;

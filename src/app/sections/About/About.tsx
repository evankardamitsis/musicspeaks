import React from 'react';
import aboutBg from "@/app/assets/about_bg.png";
import AboutHeading from "@/app/sections/About/AboutHeading";
import YellowIcon from "@/app/icons/YellowIcon";

const About = () => {
    return (
        <div
            className="min-h-[70vh] flex items-center justify-center bg-no-repeat bg-center relative"
            style={{ backgroundImage: `url(${aboutBg.src})` }}
        >
            {/* Content */}
            <div className="flex items-center justify-center flex-col text-center p-4">
                {/* Heading */}
                <AboutHeading className="w-[80%] max-w-3xl mb-12 z-10 ml-[50%] md:ml-[50%]"/>

                {/* Subheadings with Icons */}
                <div
                    className="flex flex-col sm:flex-row justify-center items-center gap-6 text-lg font-semibold text-black z-10 mb-6">
                    <div className="flex items-center gap-2 text-white">
                        <h3>PROMOTE A NEW RELEASE</h3>
                        <YellowIcon animate={true}/>
                    </div>
                    <div className="flex items-center gap-2 text-white">
                        <h3>INCREASE TICKET SALES</h3>
                        <YellowIcon animate={true}/>
                    </div>
                    <div className="flex items-center gap-2 text-white">
                        <h3>CREATE YOUR DIGITAL PRESENCE</h3>
                        <YellowIcon animate={true}/>
                    </div>
                </div>


                {/* Description */}
                <p className="text-white max-w-2xl z-10 leading-loose mb-8">
                    <span className={"bg-[#082FFF] mx-2 text-white font-bold"}>Your music deserves to be heard,</span>and
                    with well-crafted music marketing strategies, you can increase
                    your visibility and make a lasting impact in the music industry. Whether you are releasing a new
                    album, dropping a single, or planning a tour, effective music promotion strategies ensure your music
                    doesn’t go unnoticed.
                </p>
            </div>
        </div>
    );
};

export default About;

import React from 'react';
import footerBg from "@/app/assets/footer_bg.png";
import FooterHeading from "@/app/sections/Footer/FooterHeading";

const Footer = () => {
    return (
        <div
            className="min-h-[120vh] flex items-center justify-center bg-no-repeat bg-center relative"
            style={{backgroundImage: `url(${footerBg.src})`}}
        >
            <div className="flex items-center justify-center flex-col text-center p-4">
                {/* Footer Heading */}
                <FooterHeading className="w-full max-w-4xl"/>

                {/* Subtitle */}
                <h3 className="mt-[-10rem] text-lg font-light text-center text-white">
                    WE HAVE A VISION TO CREATE SPACE FOR INDEPENDENT ARTISTS
                </h3>
            </div>
        </div>
    );
};

export default Footer;

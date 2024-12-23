import React from "react";
import footerBg from "@/app/assets/footer_bg.png";
import FooterHeading from "@/app/sections/Footer/FooterHeading";

const Footer = () => {
  return (
    <div
      className="h-screen flex items-center justify-center bg-no-repeat bg-center bg-fit relative"
      style={{ backgroundImage: `url(${footerBg.src})` }}
    >
      <div className="flex items-center justify-center flex-col text-center p-4 w-full max-w-2xl mx-auto">
        <FooterHeading />
      </div>
    </div>
  );
};

export default Footer;

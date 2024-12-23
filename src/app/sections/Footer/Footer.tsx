import React from "react";
import footerBg from "@/app/assets/footer_bg.png";
import FooterHeading from "@/app/sections/Footer/FooterHeading";

const Footer = () => {
  return (
    <div
      className="min-h-[90vh] flex items-center justify-center bg-no-repeat bg-center bg-fit relative"
      style={{ backgroundImage: `url(${footerBg.src})` }}
    >
      <div className="flex items-center justify-center flex-col text-center p-4 w-full max-w-3xl mx-auto">
        <FooterHeading />
      </div>
    </div>
  );
};

export default Footer;

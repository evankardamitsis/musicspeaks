import React from "react";
import footerBg from "@/app/assets/footer_bg.png";
import FooterHeading from "@/app/sections/Footer/FooterHeading";

const Footer = () => {
  return (
    <div
      className="min-h-[90vh] sm:min-h-[120vh] flex items-center justify-center bg-no-repeat bg-center bg-cover relative"
      style={{ backgroundImage: `url(${footerBg.src})` }}
    >
      <div className="flex items-center justify-center flex-col text-center p-4 w-full max-w-7xl mx-auto">
        <FooterHeading className="w-[90%] sm:w-full max-w-4xl" />
      </div>
    </div>
  );
};

export default Footer;

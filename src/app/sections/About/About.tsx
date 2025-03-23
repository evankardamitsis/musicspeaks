import React from "react";
import aboutBg from "@/app/assets/about_bg.png";
import AboutHeading from "@/app/sections/About/AboutHeading";

const About = () => {
  return (
    <div
      id="about"
      className="min-h-screen md:min-h-[70vh] flex items-center justify-center bg-no-repeat bg-center bg-cover relative"
      style={{ backgroundImage: `url(${aboutBg.src})` }}
    >
      <div className="w-full max-w-[90%] mx-auto flex flex-col items-center">
        {/* Heading */}
        <div className="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[500px] mb-8 sm:mb-12">
          <AboutHeading className="ml-12" />
        </div>

        {/* Description */}
        <div className="text-white text-center max-w-2xl lg:mt-[-5rem]">
          <p className="text-md leading-relaxed">
            <span className="bg-[#082FFF] px-2 py-1 font-medium text-xl inline-block mb-2">
              Your music deserves to be heard,
            </span>{" "}
            and with well-crafted music marketing strategies, you can increase
            your visibility and make a lasting impact in the music industry.
            Whether you are releasing a new album, dropping a single, or
            planning a tour, effective music promotion strategies ensure your
            music doesn&apos;t go unnoticed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

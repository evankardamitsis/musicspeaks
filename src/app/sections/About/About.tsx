import React from "react";
import aboutBg from "@/app/assets/about_bg.png";
import AboutHeading from "@/app/sections/About/AboutHeading";

const About = () => {
  return (
    <div
      className="min-h-screen md:min-h-[70vh] flex items-center justify-center bg-no-repeat bg-center bg-cover relative"
      style={{ backgroundImage: `url(${aboutBg.src})` }}
    >
      <div className="w-full max-w-[90%] mx-auto flex flex-col items-center">
        {/* Heading */}
        <div className="w-full flex justify-center mb-12">
          <AboutHeading className="w-[90%] sm:w-auto" />
        </div>

        {/* Subheadings */}
        <div className="flex flex-col md:flex-row md:justify-center gap-4 sm:gap-6 mb-8 sm:mb-12 w-full max-w-4xl">
          {[
            "PROMOTE A NEW RELEASE",
            "INCREASE TICKET SALES",
            "CREATE YOUR DIGITAL PRESENCE",
          ].map((text) => (
            <div
              key={text}
              className="flex items-center justify-center text-[#FFF107] px-4"
            >
              <h3 className="text-base sm:text-lg font-semibold">{text}</h3>
            </div>
          ))}
        </div>

        {/* Description */}
        <div className="text-white text-center max-w-2xl">
          <p className="text-sm sm:text-base leading-relaxed">
            <span className="bg-[#082FFF] px-2 py-1 font-medium inline-block mb-2">
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

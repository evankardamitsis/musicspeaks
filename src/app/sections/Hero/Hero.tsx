import React from "react";
import HeroHeading from "@/app/components/HeadingsVisuals/HeroHeading";
import heroBg from "@/app/assets/hero_bg.png";

const Hero = () => {
  return (
    <div
      className="h-auto p-8 lg:min-h-screen md:h-[80vh] flex items-center justify-center bg-no-repeat bg-fit md:bg-center bg-[center_left_-18rem]"
      style={{ backgroundImage: `url(${heroBg.src})` }}
    >
      <div className="w-full px-6 md:px-8">
        <div className="flex flex-col items-center">
          {/* Heading */}
          <div className="w-full  sm:max-w-xl lg:max-w-2xl mx-auto mb-12 md:mb-16">
            <HeroHeading />
          </div>

          {/* Text Content */}
          <div className="w-full max-w-[280px] sm:max-w-xl md:max-w-2xl mx-auto">
            <p className="text-black text-center text-sm sm:text-base md:text-lg leading-relaxed mb-8">
              We are dedicated to{" "}
              <span className="bg-[#082FFF] text-white px-2 py-1 mx-1">
                empowering independent artists
              </span>{" "}
              through targeted paid media, creative promotional campaigns and
              customized digital music marketing.
            </p>

            <div className="text-center">
              <a
                href="#"
                className="inline-block bg-[#082FFF] text-white px-6 py-2.5 rounded-full text-sm md:text-base hover:bg-[#0626CC] transition-colors duration-300"
              >
                let&apos;s do it!
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

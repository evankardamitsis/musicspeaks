import React from "react";
import HeroHeading from "@/app/components/HeadingsVisuals/HeroHeading";
import heroBg from "@/app/assets/hero_bg.png";

const Hero = () => {
  return (
    <div
      className="h-[80vh] flex items-center justify-center bg-no-repeat bg-center "
      style={{ backgroundImage: `url(${heroBg.src})` }}
    >
      {/* Content */}
      <div className={"flex items-center justify-center flex-col"}>
        <HeroHeading className="w-[80%] max-w-md sm:max-w-xl lg:max-w-3xl xl:max-w-4xl m-auto lg:mt-12 mt-4" />
        <div>
          <div className="flex justify-center items-center flex-col mt-4">
            <h2 className="text-black font-bold text-center text-lg max-w-4xl mb-4 mt-16 leading-loose">
              We are dedicated to{" "}
              <span className={"bg-[#082FFF] mx-2 text-white text-xl p-1"}>
                empowering independent artists{" "}
              </span>{" "}
              through targeted paid media, creative promotional campaigns and
              customized digital music marketing.
            </h2>
            <a
              href="#"
              className="bg-[#082FFF] text-white px-8 py-3 rounded-full font-medium text-lg hover:bg-[#0626CC] transition-colors duration-300"
            >
              let&apos;s do it!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

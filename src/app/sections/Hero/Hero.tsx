"use client";

import React from "react";
import HeroHeading from "@/app/components/HeadingsVisuals/HeroHeading";

const Hero = () => {
  return (
    <div className="py-6 h-[80vh] flex items-center justify-center">
      <div className="w-full px-6 md:px-8">
        <div className="flex flex-col items-center">
          {/* Heading */}
          <div className="w-full sm:max-w-xl mx-auto mb-0 md:mb-8">
            <HeroHeading />
          </div>

          {/* Text Content */}
          <div className="w-full max-w-[320px] sm:max-w-xl md:max-w-2xl mx-auto">
            <p className="text-black text-center text- sm:text-base md:text-xl leading-loose sm:leading-loose md:leading-loose mb-8">
              We are dedicated to{" "}
              <span className="bg-[#082FFF] text-white px-2 py-1 mx-1">
                empowering independent artists
              </span>{" "}
              through targeted paid media, creative promotional campaigns and
              customized digital music marketing.
            </p>

            <div className="text-center">
              <a
                href="#contact"
                className="inline-block bg-[#082FFF] text-white px-12 py-3 rounded-full text-sm md:text-lg hover:bg-[#0626CC] transition-colors duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
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

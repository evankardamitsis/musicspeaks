import React from "react";
import collaboratorsBg from "@/app/assets/collaborators_bg.png";
import CollaboratorsHeading from "@/app/sections/Collaborators/CollaboratorsHeading";
import Image from "next/image";
import zuma from "@/app/assets/zuma.png";
import formiggart from "@/app/assets/formiggart.png";
import greeceOnTour from "@/app/assets/greeceOnTour.png";

const Collaborators = () => {
  const images = [
    { src: zuma.src, alt: "Zuma", link: "https://zumacom.gr/" },
    { src: formiggart.src, alt: "Formiggart", link: "https://formiggart.gr/" },
    {
      src: greeceOnTour.src,
      alt: "Greece On Tour",
      link: "https://www.greece-on-tour.eu/en-gb",
    },
  ];

  return (
    <div
      className="min-h-[50vh] flex items-center justify-center bg-no-repeat bg-center bg-fit relative py-8 sm:py-12"
      style={{ backgroundImage: `url(${collaboratorsBg.src})` }}
    >
      <div className="w-full max-w-[95%] lg:max-w-[90%] mx-auto">
        {/* Heading Section */}
        <div className="flex flex-col items-center mb-8 sm:mb-12">
          {/* Main Heading */}
          <div className="mb-4 sm:mb-6 w-full max-w-[800px]">
            <CollaboratorsHeading className="w-full h-auto" />
          </div>

          {/* Subheading */}
          <h2 className="text-xl sm:text-4xl text-center sm:text-right text-white font-medium">
            meet our collaborators
          </h2>
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-3 gap-3 sm:gap-6 max-w-3xl mx-auto">
          {images.map((image, index) => (
            <a
              key={index}
              href={image.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full aspect-square bg-white p-2 sm:p-4 hover:opacity-90 transition-opacity"
            >
              <div className="relative w-full h-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 30vw, 33vw"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collaborators;

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
    <div className="relative min-h-[80vh] w-full overflow-hidden">
      {/* Background Image Container */}
      <div
        className="absolute inset-0 w-full h-full bg-no-repeat bg-fit bg-center"
        style={{ backgroundImage: `url(${collaboratorsBg.src})` }}
      />

      {/* Content Container */}
      <div className="relative w-full h-full flex items-center justify-center py-16 md:py-24">
        <div className="w-full max-w-[95%] md:max-w-[90%] mx-auto">
          {/* Heading Section */}
          <div className="flex flex-col items-center mb-12 md:mb-16">
            {/* Main Heading */}
            <div className="w-full flex justify-center mb-6 md:mb-8">
              <div className="w-[280px] sm:w-[400px] md:w-auto">
                <CollaboratorsHeading />
              </div>
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
    </div>
  );
};

export default Collaborators;

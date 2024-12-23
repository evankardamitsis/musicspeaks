import React from "react";
import collaboratorsBg from "@/app/assets/collaborators_bg.png";
import CollaboratorsHeading from "@/app/sections/Collaborators/CollaboratorsHeading";
import zuma from "@/app/assets/zuma.png";
import formiggart from "@/app/assets/formiggart.png";
import greeceOnTour from "@/app/assets/greeceOnTour.png";
import Image from "next/image";

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
      className="min-h-[50vh] flex items-center justify-center bg-no-repeat bg-center bg-cover relative py-12 sm:py-16"
      style={{ backgroundImage: `url(${collaboratorsBg.src})` }}
    >
      <div className="w-full max-w-[90%] mx-auto">
        {/* Heading Section */}
        <div className="flex flex-col items-center mb-12">
          {/* Main Heading */}
          <div className="w-full flex justify-center mb-6">
            <CollaboratorsHeading className="w-[90%] sm:w-auto" />
          </div>

          {/* Subheading */}
          <h2 className="text-2xl sm:text-4xl text-center sm:text-right text-white font-medium">
            meet our collaborators
          </h2>
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {images.map((image, index) => (
            <a
              key={index}
              href={image.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full aspect-square bg-white p-4 hover:opacity-90 transition-opacity"
            >
              <div className="w-full h-full flex items-center justify-center">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 768px) 100vw, 33vw"
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

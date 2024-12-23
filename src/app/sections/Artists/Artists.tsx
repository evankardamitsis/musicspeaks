import React from "react";
import artistsBg from "@/app/assets/artists_bg.png";
import ArtistsHeading from "@/app/sections/Artists/ArtistsHeading";
import IconImage from "@/app/components/IconImage";
import galani from "@/app/assets/galani.png";
import artist1 from "@/app/assets/ellipse_27.png";
import artist2 from "@/app/assets/ellipse_28.png";
import artist3 from "@/app/assets/ellipse_29.png";
import guppy from "@/app/assets/guppy.jpeg";

const Artists = () => {
  const images = [
    { src: galani.src, alt: "Galani", name: "Δήμητρα Γαλάνη" },
    {
      src: artist1.src,
      alt: "Vaggelis Lazopoulos ",
      name: "Βαγγέλης Λαζόπουλος ",
    },
    { src: artist2.src, alt: "Artist" },
    { src: artist3.src, alt: "Artist" },
    { src: guppy.src, alt: "Guppy", name: "Guppy Fish" },
  ];

  return (
    <div
      className="min-h-[120vh] flex items-center justify-center bg-no-repeat bg-center relative"
      style={{ backgroundImage: `url(${artistsBg.src})` }}
    >
      <div className="flex items-center justify-center flex-col text-center p-4">
        <ArtistsHeading />
        {/* IconImage Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 w-full min-w-[30vw]">
          {images.map((image, index) => (
            <IconImage
              key={index}
              src={image.src}
              alt={image.alt}
              name={image.name}
              className="shadow-lg"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Artists;

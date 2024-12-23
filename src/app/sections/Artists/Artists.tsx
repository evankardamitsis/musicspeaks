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
      className="h-auto p-8 lg:min-h-screen md:h-[80vh] flex items-center justify-center bg-no-repeat bg-fit md:bg-center bg-[center_left_-18rem]"
      style={{ backgroundImage: `url(${artistsBg.src})` }}
    >
      <div className="flex items-center justify-center flex-col text-center p-4 w-full max-w-[95%] lg:max-w-[90%] mx-auto">
        <div className="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[500px] mb-8 sm:mb-12">
          <ArtistsHeading />
        </div>

        {/* IconImage Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 w-full max-w-[95%] lg:max-w-[80%]">
          {images.map((image, index) => (
            <IconImage
              key={index}
              src={image.src}
              alt={image.alt}
              name={image.name}
              className="shadow-lg !w-36 !h-36 sm:!w-44 sm:!h-44 md:!w-52 md:!h-52 mx-auto"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Artists;

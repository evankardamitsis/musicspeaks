import React from "react";
import artistsBg from "@/app/assets/artists_bg.png";
import ArtistsHeading from "@/app/sections/Artists/ArtistsHeading";
import IconImage from "@/app/components/IconImage";
import galani from "@/app/assets/galani.png";
import guppy from "@/app/assets/guppy.jpeg";
import erasmia from "@/app/assets/erasmia.jpg";

const Artists = () => {
  const images = [
    {
      src: galani.src,
      alt: "Galani",
      name: "Δήμητρα Γαλάνη",
      spotifyUrl: "https://open.spotify.com/artist/3nV0kq59WJOJRLNWpFR1m6?si=zEg8UN8rSHa-PRE9DECBnA"
    },
    {
      src: guppy.src,
      alt: "Guppy",
      name: "Guppy Fish",
      spotifyUrl: "https://open.spotify.com/artist/4sqss5faBke1GEY2IROHbO?si=VbZRB07sR7-kJHhB33ohlQ"
    },
    {
      src: erasmia.src,
      alt: "Erasmia Markidi",
      name: "Erasmia Markidi",
      spotifyUrl: "https://open.spotify.com/artist/6yGCwFJ7PT2kBpIJoyv5nc?si=y0cGN8YeRpOmODoyVkXvAw"
    }
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
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20 mt-8 w-full max-w-[95%] lg:max-w-[80%]">
          {images.map((image, index) => (
            <div key={index} className="flex flex-col items-center gap-3">
              <IconImage
                src={image.src}
                alt={image.alt}
                name={image.name}
                className="shadow-lg !w-40 !h-40 sm:!w-44 sm:!h-44 md:!w-52 md:!h-52 lg:!w-56 lg:!h-56"
              />
              <a
                href={image.spotifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#1DB954] text-white rounded-full hover:bg-[#1ed760] transition-colors duration-300 font-medium"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                </svg>
                Spotify
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Artists;

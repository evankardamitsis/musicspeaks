import React from "react";
import Image from "next/image";

interface IconImageProps {
  src: string;
  alt?: string;
  name?: string;
  className?: string;
}

const IconImage: React.FC<IconImageProps> = ({
  src,
  alt = "icon image",
  name = "",
  className = "",
}) => {
  return (
    <div
      className={`relative w-32 h-32 rounded-full overflow-hidden flex justify-center items-center group ${className}`}
      style={{ backgroundColor: "#FFD700" }}
    >
      {/* Image */}
      <Image
        src={src}
        alt={alt}
        fill
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      />

      {/* Name overlay */}
      {name && (
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-black bg-opacity-80 rounded-b-full group-hover:translate-y-0 translate-y-full transition-transform duration-300 ease-in-out flex justify-center items-center">
          <span className="text-white text-sm mb-4 font-semibold">{name}</span>
        </div>
      )}
    </div>
  );
};

export default IconImage;

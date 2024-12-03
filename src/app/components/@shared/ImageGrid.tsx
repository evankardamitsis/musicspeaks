import React from "react";

interface ImageGridProps {
    images: {
        src: string;
        alt: string;
        link?: string;
    }[];
}

const ImageGrid: React.FC<ImageGridProps> = ({ images }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 p-6">
            {images.map((image, index) => (
                <div
                    key={index}
                >
                    {image.link ? (
                        <a href={image.link} target="_blank" rel="noopener noreferrer">
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                            />
                        </a>
                    ) : (
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-auto object-cover"
                        />
                    )}
                </div>
            ))}
        </div>
    );
};

export default ImageGrid;

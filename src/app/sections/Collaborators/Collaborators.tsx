import React from 'react';
import collaboratorsBg from "@/app/assets/collaborators_bg.png";
import CollaboratorsHeading from "@/app/sections/Collaborators/CollaboratorsHeading";
import zuma from "@/app/assets/zuma.png";
import formiggart from "@/app/assets/formiggart.png";
import greeceOnTour from "@/app/assets/greeceOnTour.png";
import ImageGrid from "@/app/components/@shared/ImageGrid";

const Collaborators = () => {
    const images = [
        { src: zuma.src, alt: "Zuma", link: "https://zumacom.gr/" },
        { src: formiggart.src, alt: "Formiggart", link: "https://formiggart.gr/" },
        { src: greeceOnTour.src, alt: "Greece On Tour", link: "https://www.greece-on-tour.eu/en-gb" },
    ];

    return (
        <div
            className="min-h-[50vh] flex items-center justify-center bg-no-repeat bg-center relative"
            style={{backgroundImage: `url(${collaboratorsBg.src})`}}
        >
            <div className="flex items-center justify-center flex-col text-center p-4">
                <CollaboratorsHeading className={"ml-32"}/>
                <h2 className={"text-4xl text-right ml-auto"}>meet our collaborators</h2>
                <div className={"ml-12 my-6"}>
                    <ImageGrid images={images} />
                </div>
            </div>
        </div>
    );
            };

            export default Collaborators;

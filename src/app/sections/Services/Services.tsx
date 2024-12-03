import React from "react";
import servicesBg from "@/app/assets/services_bg.png";
import ServicesHeading from "@/app/sections/Services/ServicesHeading";
import Carousel from "@/app/components/@shared/Carousel/Carousel";
import Card from "@/app/components/@shared/Card/Card";
import AnimatedButton from "@/app/components/AnimatedButton/AnimatedButton";
import Spotify from "@/app/icons/Spotify";
import Youtube from "@/app/icons/Youtube";
import Tiktok from "@/app/icons/Tiktok";

const Services = () => {
    // Define the cards
    const cards = [
        <Card
            key="1"
            title="amplifying your reach"
            subtitle="Targeted Online Advertising"
            content="We leverage targeted advertising to display ads to specific audiences determined by demographics, interests, and behaviors. This strategy boosts your reach, leading to higher audience engagement. Tailoring strategies to each artist, we continuously optimize ads using data insights. By tracking metrics through analytics, we gauge the effectiveness of your ads, allowing for a data-driven approach to comprehend campaign performance."
            icons={<Tiktok />}
            className="mb-4"
        />,
        <Card
            key="2"
            title="offer a unique music experience"
            subtitle="Creative promotional campaigns  "
            content="Effective music promotion involves reaching out, engaging with music lovers, and sharing your music. We develop conceptual campaigns to promote your releases or live shows. Build your presence with creative approaches that narrate the story of your music, creating a unique experience to share with your audience.
"
            icons={<Spotify />}
            className="mb-4"
        />,
        <Card
            key="3"
            title="build your unique brand"
            subtitle="Create your digital presence"
            content="The way you present yourself visually and emotionally is what sets you apart in the music industry. Take a moment to explore what makes your artistry stand out—your influences, style, values, and the message you want to convey.
Your image plays a big role in this, encompassing elements like your logo, color palette, and personal style. These should all resonate with your music and reflect who you are as an artist."
            icons={<Youtube />}
            className="mb-4"
        />,
    ];

    return (
        <div
            className="min-h-[110vh] flex items-center justify-center bg-no-repeat bg-center relative"
            style={{ backgroundImage: `url(${servicesBg.src})` }}
        >
            <div className="flex items-center justify-center flex-col text-center p-4">
                <ServicesHeading />

                {/* Carousel */}
                <Carousel cards={cards} />
                <AnimatedButton text="let's talk !" href="#" reverse={true} />
            </div>
        </div>
    );
};

export default Services;

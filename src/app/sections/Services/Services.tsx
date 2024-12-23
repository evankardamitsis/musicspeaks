import React from "react";
import servicesBg from "@/app/assets/services_bg.png";
import ServicesHeading from "@/app/sections/Services/ServicesHeading";
import Carousel from "@/app/components/@shared/Carousel/Carousel";
import Card from "@/app/components/@shared/Card/Card";
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
      className="min-h-[110vh] flex items-center justify-center bg-no-repeat bg-center bg-cover relative py-8 sm:py-16"
      style={{ backgroundImage: `url(${servicesBg.src})` }}
    >
      <div className="w-full max-w-[90%] md:max-w-none mx-auto flex flex-col items-center">
        <ServicesHeading className="mb-8" />

        {/* Carousel Container */}
        <div className="w-full">
          <Carousel cards={cards} />
        </div>

        <a
          href="#"
          className="bg-white text-black px-6 md:px-8 py-2.5 md:py-3 rounded-full font-medium text-base md:text-lg hover:bg-gray-100 transition-colors duration-300 mt-8"
        >
          let&apos;s talk!
        </a>
      </div>
    </div>
  );
};

export default Services;

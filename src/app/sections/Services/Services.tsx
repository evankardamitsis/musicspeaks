import React from "react";
import servicesBg from "@/app/assets/services_bg.png";
import ServicesHeading from "@/app/sections/Services/ServicesHeading";
import Carousel from "@/app/components/@shared/Carousel/Carousel";
import Card from "@/app/components/@shared/Card/Card";

const Services = () => {
  const cards = [
    <Card
      key="1"
      title="Run Targeted Music Ads"
      subtitle="Targeted advertising on platforms like Facebook, Instagram, Google, YouTube, TikTok, and Spotify ensures your music reaches the right audience at the right time."
      content="
        <ul style='list-style-type: disc; padding-left: 1.5rem; margin-bottom: 1rem;'>
          <li class='mb-3'><strong>Customized Audience Targeting:</strong> Ads are tailored to specific groups based on demographics, interests, and behaviors, ensuring your music connects with the people who will love it most.</li>
          <li class='mb-3'><strong>Continuous Optimization:</strong> Campaigns are continuously monitored and adjusted to deliver better results and maximize your reach.</li>
          <li class='mb-3'><strong>Data-Driven Insights:</strong> Key metrics are tracked to provide a clear picture of how your campaigns are performing, allowing for informed adjustments.</li>
          <li class='mb-3'><strong>Personalized Approach:</strong> Every artist and project is unique. Strategies are crafted to align perfectly with your vision and goals.</li>
        </ul>
      "
      className="mb-4"
    />,
    <Card
      key="2"
      title="Create Engaging Music Campaigns"
      subtitle="Promoting your music is about creating a connection with your audience. Here's how I make your music stand out:"
      content="
        <ul style='list-style-type: disc; padding-left: 1.5rem; margin-bottom: 1rem;'>
          <li class='mb-3'><strong>Storytelling Through Campaigns:</strong> I create campaigns that tell the story behind your music—whether it's the inspiration for a new release or the excitement of an upcoming live show. For example:
          <ul style='list-style-type: disc; padding-left: 1.5rem; margin-bottom: 1rem;'>
           <li class='ml-2 py-2'>A behind-the-scenes series leading up to your next release.
           </li>
          </ul>
          </li>
           <li class='mb-3'><strong>Interactive Audience Engagement:</strong> Engaging with fans is key. I'll develop creative ways to involve your audience, such as:
          <ul style='list-style-type: disc; padding-left: 1.5rem; margin-bottom: 1rem;'>
           <li class='ml-2 py-2'>Hosting an Instagram takeover where you share a day in your life as an artist.
           </li>
          </ul>
          </li>
           </li>
          </li>
           <li class='mb-3'><strong>Unique Experiences: </strong> Your audience deserves more than just ads—they deserve an experience. For instance:
          <ul style='list-style-type: disc; padding-left: 1.5rem; margin-bottom: 1rem;'>
           <li class='ml-2 py-2'>A themed launch event (e.g., an art installation inspired by your album or a live mural painting paired with your performance) to celebrate your latest release.
           </li>
          </ul>
          </li>
        </ul>
      "
      className="mb-4"
    />,
    <Card
      key="3"
      title="Develop Your Artist Brand"
      subtitle="Your brand is your identity—it's how your audience connects with you and what sets you apart in the music industry. Here's how we'll shape it together:"
      content="
        <ul style='list-style-type: disc; padding-left: 1.5rem; margin-bottom: 1rem;'>
          <li class='mb-3'><strong>Define What Makes You Unique</strong> We'll uncover the essence of your artistry by exploring:
          <ul style='list-style-type: disc; padding-left: 1.5rem; margin-bottom: 1rem;'>
           <li class='ml-2 py-2'>The style, values, and message you want your music to convey.
           </li>
          </ul>
          </li>
           <li class='mb-3'><strong>Create a Visual Identity:</strong> Your image should reflect who you are as an artist. I'll help you design a consistent visual style that resonates with your music, including:
          <ul style='list-style-type: disc; padding-left: 1.5rem; margin-bottom: 1rem;'>
           <li class='ml-2 py-2'>Guidance on your personal style to ensure it aligns with your brand.
           </li>
          </ul>
          </li>
          </li>
           <li class='mb-3'><strong>Unify Your Branding Across Channels:</strong> Consistency is key. Your branding will be cohesive across all touchpoints, including:
          <ul style='list-style-type: disc; padding-left: 1.5rem; margin-bottom: 1rem;'>
           <li class='ml-2 py-2'>Your website, social media profiles and merchandise.
           </li>
          </ul>
          </li>
        </ul>
      "
      className="mb-4"
    />,
  ];

  return (
    <div
      id="services"
      className="min-h-[130vh] md:min-h-[140vh] flex items-center justify-center bg-no-repeat bg-center bg-fit relative py-20"
      style={{ backgroundImage: `url(${servicesBg.src})` }}
    >
      <div className="w-full max-w-[90%] md:max-w-none mx-auto flex flex-col items-center">
        {/* Heading Container */}
        <div className="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[500px] mb-12">
          <ServicesHeading className="mt-8 sm:mt-16 md:mt-32" />
        </div>

        {/* Carousel Container */}
        <div className="w-full max-w-3xl mx-auto">
          <Carousel cards={cards} />
        </div>

        <a
          href="#contact"
          className="bg-white text-black px-6 md:px-8 py-2.5 md:py-3 rounded-full font-medium text-base md:text-lg hover:bg-gray-100 transition-colors duration-300 mt-12"
        >
          let&apos;s talk!
        </a>
      </div>
    </div>
  );
};

export default Services;

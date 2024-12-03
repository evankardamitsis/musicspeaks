'use client';

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import SwiperButtons from "@/app/components/@shared/Carousel/SwiperButtons/SwiperButtons";
import "@/app/components/@shared/Carousel/SwiperButtons/SwiperButtons.css";
import SwiperCore from "swiper";
import { motion } from "framer-motion";

// Shapes closer to rectangles with subtle variations
const randomShapes = [
    "polygon(0 0, 100% 0, 100% 100%, 0% 100%)", // Perfect Rectangle
    "polygon(5% 0, 95% 3%, 100% 97%, 3% 100%)", // Slightly Irregular
    "polygon(3% 0, 97% 0, 90% 100%, 5% 95%)", // Irregular corners
    "polygon(5% 3%, 95% 0, 97% 97%, 0% 90%)", // Asymmetrical corners
    "polygon(2% 2%, 98% 0, 95% 98%, 0% 95%)", // Near rectangle
];

interface CarouselProps {
    cards: React.ReactNode[];
}

const Carousel: React.FC<CarouselProps> = ({ cards }) => {
    const swiperRef = useRef<SwiperCore | null>(null);
    const [shapeIndex, setShapeIndex] = useState(0);

    const handleSlideChange = () => {
        // Pick a new random shape index
        const randomIndex = Math.floor(Math.random() * randomShapes.length);
        setShapeIndex(randomIndex);
    };

    return (
        <div className="relative w-full max-w-4xl mx-auto">
            {/* Swiper Component */}
            <Swiper
                spaceBetween={5}
                slidesPerView={2}
                loop={true}
                breakpoints={{
                    768: { slidesPerView: 2 },
                }}
                modules={[Navigation, Pagination]}
                pagination={{ clickable: true }}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
                onSlideChange={handleSlideChange}
                className="w-full"
            >
                {cards.map((card, index) => (
                    <SwiperSlide key={index} className="flex justify-center items-center my-12">
                        {/* Animated Card Wrapper */}
                        <motion.div
                            className="w-full h-full bg-white shadow-md rounded-md p-6"
                            animate={{
                                clipPath: randomShapes[shapeIndex],
                                scale: [1, 1.05, 1], // Subtle bounce effect
                            }}
                            transition={{
                                duration: 0.5,
                                ease: "easeInOut",
                            }}
                        >
                            {card}
                        </motion.div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <SwiperButtons
                direction="left"
                className="absolute -left-20 top-1/2 transform -translate-y-1/2"
                onClick={() => swiperRef.current?.slidePrev()}
            />
            <SwiperButtons
                direction="right"
                className="absolute -right-20 top-1/2 transform -translate-y-1/2"
                onClick={() => swiperRef.current?.slideNext()}
            />
        </div>
    );
};

export default Carousel;

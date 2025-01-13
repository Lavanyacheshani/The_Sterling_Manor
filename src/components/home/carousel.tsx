"use client";

import React, { useState } from "react";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import { image1, image2, image3 } from "@/../public/assets";
import CarouselPhotoCard from "@/components/home/carouselPhotoCard";

// Combined Array (each item contains image, title, and description)
const carouselItems = [
    {
        image: image1,
        title: "Yoga Pavilion",
        description: "Recenter your mind and body with guided yoga sessions amidst tranquil surroundings.",
    },
    {
        image: image2,
        title: "Swimming Pool",
        description: "Dive into relaxation in our infinity pool with paranormal views of nature.",
    },
    {
        image: image3,
        title: "WELLNESS SPA",
        description: "Eco friendly designs and materials.",
    },
    // Add more items here with their respective descriptions
];

export const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length); // Infinite loop
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex - 1 < 0 ? carouselItems.length - 1 : prevIndex - 1
        ); // Infinite loop
    };

    return (
        <div className="relative mx-auto">
            {/* Carousel Container */}
            <div className="flex gap-4 overflow-hidden w-full">
                {/* Mobile and Tablet View: Carousel Effect */}
                <div
                    className="flex lg:hidden transition-transform duration-500 ease-in-out"
                    style={{
                        transform: `translateX(-${currentIndex * 100}%)`, // Move items horizontally
                        width: `${carouselItems.length * 100}%`, // Ensure the width adjusts to the number of items
                    }}
                >
                    {carouselItems.map((item, index) => (
                        <div
                            key={index}
                            className="relative flex-shrink-0 w-full h-[200px] md:h-[400px] lg:h-[500px] overflow-hidden shadow-lg"
                        >
                            <CarouselPhotoCard
                                title={item.title}
                                description={item.description}
                                image={item.image}
                            />
                        </div>
                    ))}
                </div>

                {/* Desktop View: Static Cards (no carousel) */}
                <div className="hidden lg:flex gap-x-2 xl:gap-x-4 w-full px-5 xl:px-10">
                    {carouselItems.map((item, index) => (
                        <div
                            key={index}
                            className="relative flex-shrink-0 w-1/3 h-[300px] xl:h-[400px] 3xl:h-[500px] overflow-hidden shadow-lg"
                        >
                            <CarouselPhotoCard
                                title={item.title}
                                description={item.description}
                                image={item.image}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Buttons (only for mobile/tablet) */}
            <button
                onClick={handlePrev}
                className="lg:hidden absolute top-1/2 left-5 md:left-10 transform -translate-y-1/2 bg-white/60 p-2 rounded-full shadow-md hover:bg-gray-200"
            >
                <HiOutlineChevronLeft className="text-black w-3 h-3 md:w-8 md:h-8"/>
            </button>
            <button
                onClick={handleNext}
                className="lg:hidden absolute top-1/2 right-5 md:right-10 transform -translate-y-1/2 bg-white/60 p-2 rounded-full shadow-md hover:bg-gray-200"
            >
                <HiOutlineChevronRight className="text-black w-3 h-3 md:w-8 md:h-8"/>
            </button>
        </div>
    );
};

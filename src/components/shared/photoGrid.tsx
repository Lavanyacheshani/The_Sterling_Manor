"use client";

import React, { useState } from "react";
import Image from "next/image";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

type AccommodationGridProps = {
    accommodations: {
        title: string;
        image: any;
    }[];
};

const PhotoGrid = ({ accommodations }: AccommodationGridProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Next Button Handler
    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex + 1 >= accommodations.length ? 0 : prevIndex + 1
        );
    };

    // Previous Button Handler
    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex - 1 < 0 ? accommodations.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="relative mt-5 lg:mt-12 border-t border-gray-600 pt-10 lg:pt-16">
            {/* Carousel for Mobile (below md) */}
            <div className="md:hidden relative">
                {/* Image Display */}
                <div className="flex overflow-hidden">
                    <div className="relative flex-shrink-0 w-full h-[300px]">
                        <Image
                            src={accommodations[currentIndex].image}
                            alt={accommodations[currentIndex].title}
                            layout="fill"
                            objectFit="cover"
                            className="transition-transform duration-300 ease-in-out"
                        />
                    </div>
                </div>

                {/* Navigation Buttons */}
                <button
                    onClick={handlePrev}
                    className="absolute top-1/2 left-4 sm:left-8 transform -translate-y-1/2 bg-white/70 p-2 rounded-full shadow-md hover:bg-gray-200"
                >
                    <HiOutlineChevronLeft className="text-black w-5 h-5" />
                </button>
                <button
                    onClick={handleNext}
                    className="absolute top-1/2 right-4 sm:right-8 transform -translate-y-1/2 bg-white/70 p-2 rounded-full shadow-md hover:bg-gray-200"
                >
                    <HiOutlineChevronRight className="text-black w-5 h-5" />
                </button>
            </div>

            {/* Grid Layout for Desktop (above md) */}
            <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-6">
                {accommodations.map((accommodation, index) => (
                    <div
                        key={index}
                        className="relative overflow-hidden shadow-md group hover:shadow-lg transition-shadow duration-300 w-full h-[200px] lg:h-[300px] md:h-[400px]"
                    >
                        <Image
                            src={accommodation.image}
                            alt={accommodation.title}
                            layout="fill"
                            className="object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PhotoGrid;

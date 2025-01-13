"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

// Images Array
type CardCarouselProps = {
    carouselImages: (string | StaticImageData)[];
};

export const  CardCarousel = ({ carouselImages }: CardCarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex + 1 >= carouselImages.length ? 0 : prevIndex + 1
        );
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex - 1 < 0 ? carouselImages.length - 1 : prevIndex - 1
        );
    };

    if (!carouselImages || carouselImages.length === 0) {
        return <div>No images to display</div>;
    }

    return (
        <div className="relative mx-auto w-full h-full">
            {/* Single Image Display */}
            <div className="relative w-full h-full overflow-hidden shadow-lg">
                <Image
                    src={carouselImages[currentIndex]}
                    alt={`Carousel Image ${currentIndex + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform h-full rounded-none rounded-tl-3xl duration-300 ease-in-out custom_round"
                />
            </div>

            {/* Navigation Buttons */}
            <button
                onClick={handlePrev}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/60 p-3
                rounded-full shadow-md hover:bg-gray-200"
            >
                <HiOutlineChevronLeft className="text-black w-6 h-6" />
            </button>
            <button
                onClick={handleNext}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/60
                p-3 rounded-full shadow-md hover:bg-gray-200"
            >
                <HiOutlineChevronRight className="text-black w-6 h-6" />
            </button>
        </div>
    );
};

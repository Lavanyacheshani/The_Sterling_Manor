import React from "react";
import Image from "next/image";

interface CardProps {
    imageSrc: any; // URL of the background image
    title: string; // Title of the card
    description: string; // Description below the title
}

const Card: React.FC<CardProps> = ({ imageSrc, title, description }) => {
    return (
        <div className="relative self-center w-full md:max-w-xl xl:max-w-lg overflow-hidden group custom_round">
            {/* Background Image */}
            <div className="relative h-[300px] md:h-[400px] xl:h-[500px]">
                <Image
                    src={imageSrc}
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-10 transition-opacity duration-300 group-hover:bg-opacity-0"></div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-end text-center text-white p-5">
                <h3 className="text-xl md:text-4xl font-carla">
                    {title}
                </h3>
                <p className="mt-2 body-text px-20 font-cerapro_light">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default Card;

import Image from "next/image";
import React, { ReactNode } from "react";
import HyperLink from "@/components/shared/hyperLink";
import { ApplicationRoute } from "@/utils/routes";

type PhotoCardProps = {
    title: string;
    description: ReactNode;
    image: any;
};

const CarouselPhotoCard = ({ title, description, image }: PhotoCardProps) => {
    return (
        <div className="relative w-full h-full overflow-hidden custom_round group">
            {/* Background Image */}
            <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
            />

            {/* Gradient Overlay for Mobile View (md: and below) */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70"></div>

            {/* Persistent Black Overlay */}
            <div className="absolute inset-0 bg-black/10 transition-all duration-500 md:group-hover:bg-black/40"></div>

            {/* Before Hover (Clean Image Content) */}
            <div className="absolute bottom-0 3xl:bottom-4 py-5 px-1 lg:py-8 2xl:py-10 lg:px-5 2xl:px-10 w-full text-white transition-opacity
            duration-300 opacity-0 md:opacity-100 group-hover:opacity-0">
                <h1 className="text-title font-carla text-center">{title}</h1>
            </div>

            {/* After Hover (Blurred Blue Section at Bottom) */}
            <div className="absolute bottom-0 md:bottom-[-55%] left-0 w-full h-1/2 md:h-1/3 bg-primary/70 md:backdrop-blur-sm
            transition-transform duration-4000 ease-in-out md:group-hover:bottom-0">
                <div className="flex flex-col gap-y-3 px-1 lg:px-5 2xl:px-10 justify-center md:bg-blue_blur items-center h-full text-white">
                    <h1 className="text-title font-carla text-center">{title}</h1>
                    <p className="text-sm xl:text-lg text-center">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default CarouselPhotoCard;

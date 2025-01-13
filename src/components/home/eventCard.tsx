"use client";

import Image from "next/image";
import React from "react";
import HyperLink from "@/components/shared/hyperLink";
import {ApplicationRoute} from "@/utils/routes";

interface EventCardProps {
    title: string;
    image: any;
}

export const EventCard: React.FC<EventCardProps> = ({ title, image }) => {
    return (
        <div className="relative group w-full md:aspect-[3/2] custom_round overflow-hidden shadow-lg md:bg-blacl">
            {/* Background Image */}
            <div className="relative w-full h-60 md:h-full"> {/* Custom height for mobile */}
                <Image
                    src={image}
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                    className="group-hover:scale-110 transition-transform duration-1000"
                />
            </div>
            {/* Overlay */}
            <div
                className="absolute w-full inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300"
            ></div>
            {/* Title */}
            <h2 className="absolute top-10 2xl:top-16 w-full text-center text-white font-carla text-2xl lg:text-3xl xl:text-5xl">
                {title}
            </h2>
            {/* Learn More Link */}
            <div
                className="opacity-100 absolute top-20 lg:top-24 xl:top-28 2xl:top-32 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-lg lg:text-xl md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 font-[100]"
            >
                <HyperLink title={"LEARN MORE"} to={ApplicationRoute.BANQUET}/>
            </div>
        </div>
    );
};

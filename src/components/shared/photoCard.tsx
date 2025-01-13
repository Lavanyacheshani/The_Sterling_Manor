import Image from "next/image";
import React, {ReactNode} from "react";
import HyperLink from "@/components/shared/hyperLink";
import {ApplicationRoute} from "@/utils/routes";

type PhotoCardProps = {
    title: string; description: ReactNode; image: any;
};

const PhotoCard = ({title, description, image}: PhotoCardProps) => {
    return (<div className="relative lg:my-4 w-full h-full overflow-hidden custom_round shadow-lg group">
        {/* Background Image */}
        <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
        />

        {/* Persistent Black Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90 transition-all duration-500 group-hover:bg-black/50"></div>

        {/* Before Hover (Clean Image Content) */}
        <div className="absolute bottom-0 3xl:bottom-4 py-5 px-1 lg:py-8 2xl:py-10 lg:px-5 2xl:px-10 w-full text-white transition-opacity
            duration-300 opacity-100 md:opacity-100 md:group-hover:opacity-0">
            <h1 className="text-title font-carla text-center">{title}</h1>
            <p className="text-sm xl:text-lg mt-1 text-center">{description}</p>
            <div className="w-full flex justify-center md:hidden">
                <HyperLink title={"BOOK YOUR STAY"} to={ApplicationRoute.CONTACT_US}/>
            </div>
        </div>

        {/* After Hover (Blurred Blue Section at Bottom) */}
        <div className="absolute bottom-[-55%] left-0 w-full h-1/2 bg-primary/90 backdrop-blur-sm
        transition-transform duration-5000 ease-in-out md:group-hover:bottom-0">
            <div
                className="flex flex-col gap-y-3 px-1 lg:px-5 2xl:px-10 justify-center bg-blue_blur items-center h-full text-white">
                <h1 className="text-title font-carla text-center">{title}</h1>
                <p className="text-sm xl:text-lg text-center">{description}</p>
                <HyperLink title={"BOOK YOUR STAY"} to={ApplicationRoute.CONTACT_US}/>
            </div>
        </div>


    </div>);
};

export default PhotoCard;

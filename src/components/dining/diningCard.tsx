import { StaticImageData } from 'next/image';
import { CardCarousel } from "./cardCarousel";
import React from "react";
import BookNowBtn2 from "./bookNowBtn";
import {ApplicationRoute} from "@/utils/routes";

type DiningCardProps = {
  title: string;
  description: string;
  image: string[] | StaticImageData[];
  buttonText: string;
};



const DiningCard: React.FC<DiningCardProps> = ({ title, description, image }) => {
  return (
    <div className=" text-white custom_round shadow-lg bg-primary h-auto md:h-full lg:h-full xl:h-full">
        <div className="h-[200px] md:h-[250px] lg:h-[400px]">
            <CardCarousel
                carouselImages={image}
            />
        </div>

      <div className="flex flex-col justify-center items-center rounded-br-3xl h-auto py-10">
        <h3 className="font-carla text-lg md:text-3xl lg:text-5xl text-center" >{title}</h3>
        <p className="body-text font-sans font-[300] max-w-xl text-center p-5 xl:px-20">{description}</p>
        <BookNowBtn2 title={"BOOK NOW"} to={ApplicationRoute.CONTACT_US}/>
      </div>
    </div>
  );
};

export default DiningCard;

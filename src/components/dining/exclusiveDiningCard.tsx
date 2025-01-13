import Image from "next/image";
import { StaticImageData } from 'next/image';
import React from "react";
import {HiOutlineArrowRight} from "react-icons/hi";
import {useRouter} from "next/navigation";
import {ApplicationRoute} from "@/utils/routes";
import HyperLink from "@/components/shared/hyperLink";

type exclusiveDiningCardProps = {
    title: string;
    image:string | StaticImageData;
}


const ExclusiveDiningCard:React.FC<exclusiveDiningCardProps> = ({title,image}) => {
    const router = useRouter()
  return (
    <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[300px] md:w-[210px] md:h-[240px] lg:w-[300px] lg:h-[300px] xl:w-[350px] xl:h-[350px] 2xl:w-[450px] 2xl:h-[400px] 4xl:w-[500px] 4xl:h-[500px] overflow-hidden custom_round shadow-lg group ">
        {/* Image */}
        <Image
          src={image}
          alt={title}
          fill
          className=" object-cover duration-700 group-hover:scale-105"
                      />
        {/* Overlay with Title */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/10 flex items-end justify-center transition-all duration-500"></div>

        <div className="absolute bottom-1 py-5 lg:py-10 px-5 w-full text-white transition-opacity
            duration-300 opacity-0 md:opacity-100 group-hover:opacity-0">
                <h1 className="text-title font-carla text-center">{title}</h1>

        </div>

        {/* After Hover (Blurred Blue Section at Bottom) */}
        <div className="absolute bottom-0 md:bottom-[-55%] left-0 w-full h-1/3 backdrop-blur-sm
        transition-transform duration-5000 ease-in-out md:group-hover:bottom-0">
            <div
                className="flex flex-col gap-y-1 md:gap-y-0 lg:gap-y-3 px-1 lg:px-5 2xl:px-10 justify-center bg-[#CF8A0073] items-center h-full text-white">
                <h1 className="text-lg md:text-title font-carla text-center">{title}</h1>
                <div>
                    <a
                        onClick={() => {
                            router.push(ApplicationRoute.CONTACT_US)
                        }}
                        className="inline-block font-[100] hover:cursor-pointer body-text"
                    >
                        <div className="flex flex-row gap-x-2 lg:gap-x-3 justify-center items-center">
                            <p className="hover:underline body-text text-white hover:underline-offset-4">BOOK NOW</p>
                            <HiOutlineArrowRight size={18} className="text-gray-200"/>
                        </div>

                    </a>
                </div>
            </div>
        </div>


    </div>


  )
}

export default ExclusiveDiningCard
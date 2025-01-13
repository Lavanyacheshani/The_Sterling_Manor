"use client";
import Image from "next/image";
import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import HyperLink from "@/components/shared/hyperLink";

interface RoomCardProps {
  title: string;
  description: string;
  image: any;
  buttonTitle: string;
  to: string;
}

const RoomCard: React.FC<RoomCardProps> = ({ title, description, image, buttonTitle, to }) => {
  return (
    <div className="relative flex flex-col lg:flex-row items-center justify-center">
      {/* Image Section */}
      <div className="relative w-full lg:w-1/2 max-w-lg md:max-w-none">
        <Image
          src={image}
          alt={title}
          width={600}
          height={400}
          className="object-cover sm:w-full md:w-5/6 lg:w-full h-[300px] md:h-[600px] custom_round"
        />
      </div>

      {/* Content Section */}
      <div className="mt-[-100px] mx-6 md:m-0 ">
        <Card
          className="md:absolute right-0 lg:right-24 2xl:right-52 md:top-1/2 transform
                md:-translate-y-1/2 bg-[#071B2B] text-white
                w-full md:w-4/5 lg:w-2/5 z-10 border-0 shadow-lg rounded-tl-3xl rounded-br-3xl rounded-tr-none rounded-bl-none"
        >
          <CardContent>
            <CardHeader className="lg:!p-0">
              <CardTitle className="text-2xl md:text-4xl xl:text-5xl font-semibold mb-5 font-carla">
                {title}
              </CardTitle>
              <CardDescription className="text-sm sm:text-[16px] xl:text-lg font-[100] text-gray-300">
                {description}
              </CardDescription>
            </CardHeader>
            <div className="ms-6 lg:ms-0 pb-5 pt-0 lg:pt-5 lg:pb-0">
              <HyperLink title={buttonTitle} to={to}/>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RoomCard;

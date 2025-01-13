"use client";
import Image from "next/image";
import React, {ReactNode} from "react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle,} from "@/components/ui/card";
import {aboutCard} from "../../../public/assets";

interface FeatureCardProps {
    features: {
        title: ReactNode; description: string;
    }[];
    image: any;
}

const FeatureCard: React.FC<FeatureCardProps> = ({features, image}) => {
    return (<div className="relative flex flex-col lg:flex-row items-center justify-center">
            {/* Image Section */}
            <div className="relative w-full lg:w-1/2 max-w-lg md:max-w-none">
                <Image
                    src={aboutCard}
                    alt="feature"
                    width={600}
                    height={400}
                    className="object-cover sm:w-full md:w-5/6 lg:w-full h-[300px] md:h-[600px] custom_round"
                />
            </div>


            {/* Content Section */}
            <div className="mt-[-100px] mx-6 md:m-0 ">
                <Card
                    className="md:absolute right-0 lg:right-24 2xl:right-52 md:top-1/2 transform
                md:-translate-y-1/2 bg-[#071B2B] text-white p-3 md:p-0
                w-full md:w-4/5 lg:w-2/5 z-10 border-0 shadow-lg rounded-tl-3xl rounded-br-3xl rounded-tr-none rounded-bl-none"
                >
                    {features.map((feature, index) => (<CardContent key={index} className="p-0">
                            <CardHeader className="p-0 px-4 py-3 md:p-1">
                                <CardTitle className="hidden text-2xl md:text-4xl xl:text-5xl font-semibold font-carla">
                                    {feature.title}
                                </CardTitle>
                                <CardDescription className="flex flex-col">
                                    <div className="flex flex-row">
                                        <Image
                                            src={image}
                                            alt="Feature Icon"
                                            width={40}
                                            height={40}
                                            className="object-contain w-8 h-8"
                                        />
                                        <p className="text-sm ms-5 md:ms-3 xl:text-lg text-gray-300 p-0">
                                            <strong
                                                className="text-white me-2">{feature.title}:</strong>{feature.description}
                                        </p>
                                    </div>
                                </CardDescription>
                            </CardHeader>
                        </CardContent>))}
                </Card>
            </div>
        </div>);
};

export default FeatureCard;
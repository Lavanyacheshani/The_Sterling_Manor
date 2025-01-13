'use client';
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

interface TeamMember {
    image: any;
    name: string;
    position: string;
    description: string;
}

interface TeamCardProps {
    members: TeamMember[];
}

const TeamCard: React.FC<TeamCardProps> = ({ members }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % members.length);
    };

    const handlePrev = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + members.length) % members.length
        );
    };

    return (
        <div className="relative">
            {/* Mobile Carousel */}
            <div className="block sm:hidden relative">
                {/* Carousel Content */}
                <div className="flex overflow-hidden justify-center relative">
                    {/* Image */}
                    <Image
                        src={members[currentIndex].image}
                        alt={members[currentIndex].name}
                        width={1000}
                        height={1000}
                        className="w-full h-[250px] object-cover custom_round"
                    />

                    {/* Navigation Buttons */}
                    <button
                        onClick={handlePrev}
                        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white/60 p-2 rounded-full shadow-md hover:bg-gray-200"
                        style={{ left: '5%' }}
                    >
                        <HiOutlineChevronLeft className="text-black w-5 h-5" />
                    </button>
                    <button
                        onClick={handleNext}
                        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white/60 p-2 rounded-full shadow-md hover:bg-gray-200"
                        style={{ right: '5%' }}
                    >
                        <HiOutlineChevronRight className="text-black w-5 h-5" />
                    </button>
                </div>

                {/* Text Content */}
                <div className="py-4 text-center">
                    <h3 className="text-title font-recoleta text-gray-800">
                        {members[currentIndex].name.toUpperCase()}
                    </h3>
                    <p className="body-text text-gray-600">
                        {members[currentIndex].position}
                    </p>
                    <p className="body-text font-sans font-[100] text-gray-600 mt-2">
                        {members[currentIndex].description}
                    </p>
                </div>
            </div>

            {/* Grid Layout for Medium Screens and Above */}
            <div className="hidden sm:grid grid-cols-3 gap-6 sm:gap-8">
                {members.map((member, index) => (
                    <div
                        key={index}
                        className="w-full bg-transparent rounded-lg overflow-hidden text-center"
                    >
                        {/* Image */}
                        <Image
                            src={member.image}
                            alt={member.name}
                            width={1000}
                            height={1000}
                            className="w-full h-[250px] object-cover custom_round"
                        />

                        {/* Text Content */}
                        <div className="py-4">
                            <h3 className="text-title font-recoleta text-gray-800">
                                {member.name.toUpperCase()}
                            </h3>
                            <p className="body-text text-gray-600">{member.position}</p>
                            <p className="body-text font-sans font-[100] text-gray-600 mt-2">
                                {member.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TeamCard;

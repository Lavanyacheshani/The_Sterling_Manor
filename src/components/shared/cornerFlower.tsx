"use client";
import Image from "next/image";
import React from "react";

interface CornerFlowerProps {
  image: any;
  position: "left" | "right"; // Determines corner placement
}

const CornerFlower: React.FC<CornerFlowerProps> = ({ image, position }) => {
    return (
        <div
            className={`absolute ${position === "left" ? "bottom-0 left-0" : "bottom-0 right-0"} z-10`}
            style={{
                transform: position === "left" ? "scaleX(-1)" : "none", // Flip the image horizontally for left position
            }}
        >
            <Image
                src={image}
                alt="Flower Decoration"
                width={150}
                height={150}
                className="object-contain w-11 md:w-20 lg:w-24 xl:w-32 3xl:w-40"
            />
        </div>
    );
};

export default CornerFlower;

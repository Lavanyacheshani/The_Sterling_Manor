"use client";

import React, { useState } from "react";

type GalleryGridProps = {
    images: { category: string; src: string; alt: string }[]; // Array of images with categories
};

const GalleryGrid: React.FC<GalleryGridProps> = ({ images }) => {
    const [selectedCategory, setSelectedCategory] = useState<string>("ALL");

    // Filtered images based on the selected category
    const filteredImages =
        selectedCategory === "ALL"
            ? images
            : images.filter((image) => image.category === selectedCategory);

    const menuItems = ["ALL", "ACCOMMODATIONS", "DINNING & CULINARY ART", "NATURE & SURROUNDINGS"];

    return (
        <div className="">
            {/* Menu Section */}
            <div className="md:px-10">
            <div className="flex justify-center gap-x-2 md:gap-x-10 lg:gap-x-8 pb-5 md:pb-10">
                {menuItems.map((item) => (
                    <button
                        key={item}
                        onClick={() => setSelectedCategory(item)}
                        className={`font-carla text-xs md:text-[16px] lg:text-lg ${
                            selectedCategory === item
                                ? "text-gold_accent focus:text-gold_accent active:text-gold_accent underline underline-offset-4"
                                : "text-neutral-400"
                        }`}
                    >
                        {item}
                    </button>
                ))}
            </div>
            </div>

            {/* Gallery Grid */}
            <div className={`grid grid-cols-4 gap-2 md:gap-4`}>
                {filteredImages.length > 0 ? (
                    filteredImages.map((image, index) => (
                        <div
                            key={index}
                            className={`relative overflow-hidden bg-amber-100 ${
                                index === 1 ? "col-span-2" : ""
                            } ${index === 4 ? "row-span-2" : ""} ${
                                index === 6 ? "row-span-2" : ""
                            }`}
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))
                ) : (
                    <p>No images available in this category</p>
                )}
            </div>
        </div>
    );
};


export default GalleryGrid;
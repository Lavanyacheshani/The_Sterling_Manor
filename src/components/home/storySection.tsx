import React, { useState } from "react";
import { photoCardData } from "@/data/home"; // Assuming the data is imported
import PhotoCard from "@/components/shared/photoCard"; // Assuming the PhotoCard component is imported
import BookNowBtn from "@/components/shared/bookNowButton";
import {ApplicationRoute} from "@/utils/routes";
import {useRouter} from "next/navigation"; // Assuming images are imported

const StorySection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const router = useRouter();

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % photoCardData.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + photoCardData.length) % photoCardData.length);
    };

    const isMobile = () => window.innerWidth <= 768;

    return (
        <section>
            {/* Photo Cards for Mobile */}
            <div className="relative">
                <div className="lg:hidden">
                    <div className="w-full h-[300px] md:h-[400px]">
                        <PhotoCard
                            title={photoCardData[currentIndex].title}
                            description={photoCardData[currentIndex].description}
                            image={photoCardData[currentIndex].image}
                        />
                    </div>

                    {/* Dots Navigation */}
                    <div className="flex justify-center mt-4">
                        {photoCardData.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                style={{
                                    width: "0.8rem", // w-4 => 1rem (16px)
                                    height: "0.8rem", // h-4 => 1rem (16px)
                                    borderRadius: "9999px", // rounded-full
                                    border: "2px solid black", // border-2
                                    margin: "0.25rem", // m-1
                                    backgroundColor: currentIndex === index ? "black" : "white", // bg-black or bg-gray-300
                                    transition: "all 0.2s ease", // transition-all
                                }}
                            ></button>
                        ))}
                    </div>
                </div>

                <div className="lg:hidden flex justify-center mt-5">
                    <BookNowBtn title={"Book Now"} handleOnClick={()=>router.push(ApplicationRoute.CONTACT_US)}/>
                </div>

                {/* Cards Display in Row (Tablet and Desktop) */}
                <div
                    className="hidden lg:flex lg:flex-wrap lg:justify-between lg:items-center w-full h-[350px] lg:h-[400px] 4xl:h-[450px]">
                    {photoCardData.map((card, index) => (
                        <div key={index} className="flex justify-center items-center px-2 xl:px-5 w-1/3 h-full">
                            <PhotoCard
                                title={card.title}
                                description={card.description}
                                image={card.image}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StorySection;

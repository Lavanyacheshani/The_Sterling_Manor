import React from "react";
import { leafIcon, flowerIcon } from "@/../public/assets";
import CustomTitle from "@/components/shared/title";
import CornerFlower from "@/components/shared/cornerFlower";
import BookStayText from "@/components/shared/bookStayText";
import { eventCardData } from "@/data/events";
import PhotoCard from "@/components/shared/photoCard";

function Page() {
    return (
        <div className="relative md:mt-7 lg:mt-0">
            {/* Header Section */}
            <section className="section_gap_y section_gap_x max-width">
                <CustomTitle
                    title={"Where Business meets Nature"}
                    description={
                        <>
                            Host your meetings and corporate events in spaces designed for
                            productivity and tranquility.
                        </>
                    }
                    leafIcon={leafIcon}
                    isLeafRight={false}
                />

                {/* Dynamically Render Cards in a 2x2 Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 section_gap_x md:px-0 lg:px-20 xl:px-40 h-[1000px] md:h-[700px] lg:h-[800px] xl:h-[900px]">
                    {eventCardData.map((card, index) => (
                        <PhotoCard
                            key={index}
                            title={card.title}
                            description={card.description}
                            image={card.imageSrc}
                        />
                    ))}
                </div>
            </section>

            {/* Footer Section */}
            <section>
                <BookStayText />
            </section>

            {/* Flower Decoration */}
            <div className="hidden lg:block pt-10">
                <CornerFlower image={flowerIcon} position="left" />
            </div>
        </div>
    );
}

export default Page;

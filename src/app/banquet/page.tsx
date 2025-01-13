'use client'
import React, {useState} from 'react';
import CustomTitle from "@/components/shared/title";
import {flowerIcon, leafIcon} from "@/../public/assets";
import RoomCard from "@/components/shared/roomCard";
import CornerFlower from "@/components/shared/cornerFlower";
import {banquetData, BanquetType} from "@/data/home";
import PhotoGrid from "@/components/shared/photoGrid";
import {accommodationsDeluxe, accommodationsStandard} from "@/data/accommodation";
import BookStayText from "@/components/shared/bookStayText";
import {ApplicationRoute} from "@/utils/routes";

const BanquetPage = () => {

    const [selectedLocation, setSelectedLocation] = useState<BanquetType>("Crystal");

    // Render Tabs
    const renderTabs = () => {
        return (<div className="flex justify-center space-x-8 mt-8 md:mt-12">
            {(["Crystal", "Sapphire"] as BanquetType[]).map((banquet) => (<button
                key={banquet}
                onClick={() => setSelectedLocation(banquet)}
                className={`text-title text-gold_accent font-carla transition ${selectedLocation === banquet ? "underline border-gold-accent " : "text-neutral-400"}`}
            >
                {banquet.toUpperCase()}
            </button>))}
        </div>);
    };


    return (<div className="relative md:mt-7 lg:mt-0">
        <section className="section_gap_y section_gap_x relative">
            <CustomTitle
                title={"Celebrate in Style, Surrounded by Nature"}
                description={<>
                    Discover the perfect blend of elegance and tranquility for your special moments.
                </>}
                leafIcon={leafIcon}
                isLeafRight={true}
            />

            {/* Room Card */}
            <div className="max-width">
                <RoomCard
                    title={banquetData[selectedLocation].title}
                    description={banquetData[selectedLocation].description}
                    image={banquetData[selectedLocation].image}
                    to = {ApplicationRoute.CONTACT_US}
                    buttonTitle={"BOOK NOW"}
                />
            </div>

            {/* Flower Decoration */}
            <div className="hidden lg:block">
                <CornerFlower image={flowerIcon} position="left"/>
            </div>

            {/* Tabs */}
            {renderTabs()}
        </section>

        <section className="section_gap_x lg:px-40 xl:px-64 2xl:px-72 max-width">
            <PhotoGrid
                accommodations={selectedLocation === "Crystal" ? accommodationsStandard : accommodationsDeluxe}
            />
        </section>

        <section>
            <BookStayText/>
        </section>

        {/* Flower Decoration */}
        <div className="hidden lg:block pt-10">
            <CornerFlower image={flowerIcon} position="right"/>
        </div>
    </div>);
};

export default BanquetPage;
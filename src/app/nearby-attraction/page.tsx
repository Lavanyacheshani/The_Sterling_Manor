'use client'
import React, {useState} from 'react';
import CustomTitle from "@/components/shared/title";
import {flowerIcon, leafIcon} from "@/../public/assets";
import RoomCard from "@/components/shared/roomCard";
import CornerFlower from "@/components/shared/cornerFlower";
import {roomData} from "@/data/home";
import PhotoGrid from "@/components/shared/photoGrid";
import {accommodationsDeluxe, accommodationsStandard, accommodationsSweetDeluxe} from "@/data/accommodation";
import BookStayText from "@/components/shared/bookStayText";
import {ApplicationRoute} from "@/utils/routes";
import {RoomType} from "@/app/page";

const NearByAttraction = () => {
    const [selectedRoom, setSelectedRoom] = useState<RoomType>("Standard");

    // Render Tabs
    const renderTabs = () => {
        return (
            <div className="flex justify-center space-x-8 mt-8 md:mt-12">
                {(["Standard", "Deluxe", "Sweet Deluxe"] as RoomType[]).map((room) => (<button
                        key={room}
                        onClick={() => setSelectedRoom(room)}
                        className={`text-title text-gold_accent font-carla transition ${selectedRoom === room ? "underline border-gold-accent " : "text-neutral-500"}`}
                    >
                        {room.toUpperCase()}
                    </button>))}
            </div>);
    };

    return (<div className="relative md:mt-7 lg:mt-0">
            <section className="section_gap_y section_gap_x relative">
                <CustomTitle
                    title={"Stay Unique, Stay Inspired"}
                    description={<>Experience Extraordinary Comfort in Extraordinary Spaces</>}
                    leafIcon={leafIcon}
                    isLeafRight={true}
                />

                {/* Room Card */}
                <div className="max-width">
                    <RoomCard
                        title={roomData[selectedRoom].title}
                        description={roomData[selectedRoom].description}
                        image={roomData[selectedRoom].image}
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
                    accommodations={selectedRoom === "Standard" ? accommodationsStandard : selectedRoom === "Deluxe" ? accommodationsDeluxe : accommodationsSweetDeluxe}
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

export default NearByAttraction;

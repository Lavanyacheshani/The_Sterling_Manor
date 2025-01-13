"use client";
import DiningCard from "@/components/dining/diningCard";
import ExclusiveDiningCard from "@/components/dining/exclusiveDiningCard";
import CustomTitle from "@/components/shared/title";
import {flowerIcon, leafIcon} from "@/../public/assets";
import CornerFlower from "@/components/shared/cornerFlower";
import BookStayText from "@/components/shared/bookStayText";
import React from "react";
import {diningOptions, exclusiveOptions} from "@/data/dining";

const Dining = () => {
    return (<div className="relative">
            {/* Hero Section */}
            <section className="mt-7 section_gap_x lg:mt-0 md:section_gap_y max-width">
                <CustomTitle
                    title={"Savor the Art of Dining"}
                    description={<> 
                        Indulge in a culinary journey where nature<span className="font-sans">'</span>s flavors and
                        luxury
                        meet.
                    </>}
                    leafIcon={leafIcon}
                    isLeafRight={false}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {diningOptions.map((option, index) => (<div
                            key={index}
                            className={`${index === diningOptions.length - 1 && diningOptions.length % 2 !== 0 ? "col-span-full" : ""}`}
                        >
                            <DiningCard
                                title={option.title}
                                description={option.description}
                                image={option.images}
                                buttonText={option.buttonText}
                            />
                        </div>))}
                </div>

            </section>

            <section className="mt-4 section_gap_y section_gap_x max-width">
                <CustomTitle
                    title={"Exclusive Dining Redefined"}
                    description={<>
                        Indulge in a culinary journey where nature<span className="font-sans">'</span>s flavors and
                        luxury
                        meet.
                    </>}
                    leafIcon={leafIcon}
                    isLeafRight={false}
                />

                <div className="grid grid-cols-1 place-items-center sm:grid-cols-1 md:grid-cols-3 gap-8">

                    {exclusiveOptions.map((option, index) => (
                        <ExclusiveDiningCard
                            key={index}
                            title={option.title}
                            image={option.image}

                        />))}

                </div>
            </section>

            <section className="section_gap_x">
                <BookStayText/>
            </section>

            {/* Flower Decoration */}
            <div className="hidden lg:block pt-10">
                <CornerFlower image={flowerIcon} position="left"/>
            </div>
        </div>);
};

export default Dining;

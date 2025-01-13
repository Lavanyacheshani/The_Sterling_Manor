import React from "react";
import Image from "next/image";

import {aboutIcon, aboutImage, flowerIcon, leafIcon} from "@/../public/assets";
import TeamCard from "@/components/shared/teamCard";
import CustomTitle from "@/components/shared/title";
import CornerFlower from "@/components/shared/cornerFlower";
import FeatureCard from "@/components/about-us/featureCard";
import BookStayText from "@/components/shared/bookStayText";
import {AboutFeatureData, teamMembers} from "@/data/about-us";

function page() {
    return (<div>
            {/* Header Section */}
            <section className="section_gap_y section_gap_x max-width md:mt-7 lg:mt-0">
                <div>
                    <CustomTitle
                        title={"ABOUT US"}
                        description={<>
                            At Hotel Grand Minaro, we believe luxury isn’t just about
                            elegance—it’s about creating an experience that celebrates
                            nature’s beauty. Inspired by the lush surroundings, our hotel is
                            crafted as a sanctuary for relaxation and rejuvenation.
                        </>}
                        leafIcon={leafIcon}
                        isLeafRight={false}
                    />

                    <Image
                        src={aboutImage}
                        alt="aboutImage"
                        className="w-full h-auto"
                    />
                </div>
            </section>

            <section className="section_gap_y section_gap_x relative">
                <CustomTitle
                    title={"SUSTAINABILITY AT HEART"}
                    description={<>
                        Our mission is to preserve and protect. From sustainable materials
                        to eco-friendly practices, we’re dedicated to reducing our
                        footprint while enhancing the natural beauty around us. Discover
                        how our initiatives bring nature and luxury together.
                    </>}
                    leafIcon={leafIcon}
                    isLeafRight={true}
                />

                <div className="relative max-width">
                    <FeatureCard
                        features={AboutFeatureData}
                        image={aboutIcon}
                    />
                </div>

                {/* Flower Decoration */}
                <div className="hidden lg:block">
                    <CornerFlower image={flowerIcon} position="left"/>
                </div>
            </section>


            <section className="section_gap_y section_gap_x max-width">
                <CustomTitle
                    title={"MEET THE TEAM"}
                    description={<>
                        Our mission is to preserve and protect. From sustainable
                        materials to eco<span className="font-sans">-</span>friendly practices, we’re dedicated to
                        reducing our footprint while enhancing the natural beauty
                        around us. Discover how our initiatives bring nature and
                        luxury together.
                    </>}
                    leafIcon={leafIcon}
                    isLeafRight={false}
                />

                <div>
                    <TeamCard members={teamMembers}/>
                </div>
            </section>

            <section className="relative">
                <BookStayText/>

                {/* Flower Decoration */}
                <div className="hidden lg:block">
                    <CornerFlower image={flowerIcon} position="right"/>
                </div>
            </section>
        </div>);
}

export default page;

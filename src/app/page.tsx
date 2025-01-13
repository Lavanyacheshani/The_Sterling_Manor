"use client";
import Image from "next/image";
import { flowerIcon, heroImage, leafIcon } from "@/../public/assets";
import React, { useState, useEffect, useRef } from "react";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";
import RoomCard from "@/components/shared/roomCard";
import CustomTitle from "@/components/shared/title";
import PhotoCard from "@/components/shared/photoCard";
import CornerFlower from "@/components/shared/cornerFlower";
import { EventCard } from "@/components/home/eventCard";
import { Carousel } from "@/components/home/carousel";
import FAQSection from "@/components/home/faq";
import ContactSection from "@/components/home/contactUs";
import HyperLink from "@/components/shared/hyperLink";
import {eventCards, roomData} from "@/data/home";
import {ApplicationRoute} from "@/utils/routes";
import BookNowBtn from "@/components/shared/bookNowButton";
import StorySection from "@/components/home/storySection";
import {useRouter} from "next/navigation";


export type RoomType = "Standard" | "Deluxe" | "Sweet Deluxe";
const Home = () => {
  const [selectedRoom, setSelectedRoom] = useState<RoomType>("Standard");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  const glideRef = useRef<HTMLDivElement | null>(null);

  // Set client-side state to true once the component mounts
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Initialize Glide carousel after the component mounts
  useEffect(() => {
    if (isClient && glideRef.current) {
      const glide = new Glide(glideRef.current, {
        type: "carousel",
        startAt: currentIndex,
        perView: 1,
        gap: 10,
      });

      glide.on("run.after", () => {
        setCurrentIndex(glide.index);
      });

      glide.mount();

      return () => {
        glide.destroy();
      };
    }
  }, [isClient, currentIndex]);

  // Render Tabs
    const renderTabs = () => {
        return (
            <div className="flex justify-center space-x-8 mt-5 md:mt-12">
                {(["Standard", "Deluxe"] as RoomType[]).map((room) => (
                    <button
                        key={room}
                        onClick={() => setSelectedRoom(room)}
                        className={`text-title text-gold_accent font-carla transition-all duration-4000 ease-in-out ${
                            selectedRoom === room
                                ? "underline border-gold-accent"
                                : "text-neutral-400"
                        }`}
                    >
                        {room.toUpperCase()}
                    </button>
                ))}
            </div>
        );
    };

    return (
      <>
        {/* Hero Section */}
        <section className="relative h-[50vh] lg:h-screen ">
          {/* Background Image */}
          <div className="absolute inset-0 -z-10">
            <Image
                src={heroImage}
                alt="Grand Minaro Hero Section"
                layout="fill"
                objectFit="cover"
                priority
                className="h-full"
            />
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/55 -z-10"></div>

          {/* Content */}
          <div className="container px-8 md:px-28 h-full lg:h-screen flex items-end md:items-center pb-8 max-width">
            {/* Left Content */}
            <div className="max-w-lg text-white space-y-4 md:space-y-8">
              <h1 className="text-4xl md:text-6xl lg:text-7xl 3xl:text-8xl 5xl:text-9xl font-carla text-center md:text-left">
                GRAND <br className="hidden md:block"/>
                MINARO
              </h1>
              <p className="body-text tracking-wide text-center md:text-start">
                Immerse yourself in a world where luxury meets the tranquil beauty
                of nature, creating an experience of unparalleled elegance and
                serenity.
              </p>
              <div className="hidden md:flex justify-start">
                <HyperLink title={"BOOK YOUR STAY"} to={ApplicationRoute.CONTACT_US}/>
              </div>
              <div className="flex justify-center md:hidden">
                <BookNowBtn title={"Book Now"} handleOnClick={()=>router.push(ApplicationRoute.CONTACT_US)}/>
              </div>
            </div>
          </div>
        </section>

        <section className="section_gap_y section_gap_x relative max-width">
          <CustomTitle
              title={"Our Story of Elegance and Eco-Luxury"}
              description={
                <>
                  At Hotel Grand Minaro, we are committed to offering an
                  unparalleled experience where luxury meets sustainability. Our
                  nature
                  <span className="font-sans">-</span>
                  inspired architecture and green practices are designed to help you
                  unwind and connect with the beauty around you.
                </>
              }
              leafIcon={leafIcon}
              isLeafRight={true}
          />

          {/* Flower Decoration */}
          <div className="block lg:hidden">
            <CornerFlower image={flowerIcon} position="left"/>
          </div>

          {/* Photo Cards */}
          {isClient && <StorySection/>}
        </section>

        {/* Room Section */}
        <section className="relative section_gap_y section_gap_x">
          <CustomTitle
              title={"A Sanctuary of Comfort and Serenity"}
              description={
                <>
                  Retreat to a space where luxury embraces nature. Explore our
                  rooms, each with a view of the serene landscapes.
                </>
              }
              leafIcon={leafIcon}
              isLeafRight={false}
          />

          {/* Room Card */}
          <div className="relative md:page_gap_x_small max-width">
            <RoomCard
                title={roomData[selectedRoom].title}
                description={roomData[selectedRoom].description}
                image={roomData[selectedRoom].image}
                to={ApplicationRoute.ACCOMMODATION}
                buttonTitle={"LEARN MORE"}
            />
          </div>

          {/* Flower Decoration */}
          <div className="hidden lg:block">
            <CornerFlower image={flowerIcon} position="left"/>
          </div>

          {/* Tabs */}
          {renderTabs()}
        </section>

        {/* Ballroom Section */}
        <section className="section_gap_y section_gap_x max-width">
          <CustomTitle
              title={"Celebrate Amidst Nature's Beauty"}
              description={
                <>
                  At Hotel Grand Minaro, we are committed to offering an
                  unparalleled experience where luxury meets sustainability. Our
                  nature
                  <span className="font-sans">-</span>
                  inspired architecture and green practices are designed to help you
                  unwind and connect with the beauty around you.
                </>
              }
              leafIcon={leafIcon}
              isLeafRight={true}
          />

          {/* Cards */}
          <div className="flex flex-col md:flex-row justify-between gap-5">
            {eventCards.map((card, index) => (
                <EventCard key={index} title={card.title} image={card.image}/>
            ))}
          </div>
        </section>

        {/* Carousal Section */}
        <section className="section_gap_y section_gap_x max-width">
          <CustomTitle
              title={"MOMENTS CAPTURED IN NATURE'S EMBRACE"}
              description={
                <>
                  Explore scenes of our luxurious, nature
                  <span className="font-sans">-</span>inspired spaces.
                </>
              }
              leafIcon={leafIcon}
              isLeafRight={false}
          />

          {/* Only render Carousel if on the client-side */}
          {isClient && <Carousel/>}
        </section>

        {/* FAQ Section */}
        <section className="section_gap_y relative">
          <CustomTitle
              title={"Frequently Asked Questions"}
              description={<>Discover More About Your Stay</>}
              leafIcon={leafIcon}
              isLeafRight={true}
          />

          <div className="flex justify-center w-full page_gap_x_small mb-10 max-width">
            <FAQSection/>
          </div>

          <CornerFlower image={flowerIcon} position="right"/>
        </section>

        {/* Contact Us Section */}
        <section className="pt-14 md:pt-20 lg:pt-32">
          <ContactSection/>
        </section>
      </>
  );
};

export default Home;

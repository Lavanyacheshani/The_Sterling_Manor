"use client";
import FeaturesList from "@/components/contact/contactBook";
import React from "react";
import Image from 'next/image'
import CustomTitle from "@/components/shared/title";
import {leafIcon} from "@/../public/assets";
import {contactDetails} from "@/components/home/contactUs";

function Page() {
    return (<>
            {/* Booking Section */}
            <section className="section_gap_y section_gap_x 2xl:px-96 4xl:px-0 px-20 md:mt-7 lg:mt-0">
                <CustomTitle
                    title={"BOOK YOUR STAY & CONTACT US"}
                    description={<>
                        Have questions or ready to plan your visit? From here, you can book
                        your stay and get in touch with us effortlessly. We are here to assist
                        you every step of the way.
                    </>}
                    leafIcon={leafIcon}
                    isLeafRight={false}
                />
                <FeaturesList/>
            </section>

            {/* Contact Section */}
            <section className="section_gap_y section_gap_x pb-20 md:pb-32 xl:pb-40 max-width">
                <div className=" grid xl:grid-cols-2 gap-5 items-stretch p-1">
                    {/* Left Side: Contact Details */}
                    <div
                        className="bg-white/60 p-6 md:p-10 rounded-none rounded-tl-3xl rounded-br-3xl
                   flex flex-col gap-y-2 md:gap-y-6 justify-between bg-white">
                        <h2 className="text-gold_accent text-2xl md:text-3xl lg:text-5xl font-carla font-semibold text-center">
                            CONTACT US
                        </h2>
                        <p className="text-neutral-700 body-text text-center mb-3 md:mb-5">
                            Reach out or plan your journey to Hotel Grand Minaro.
                        </p>

                        <ul className="space-y-6">
                            {contactDetails.map((item, index) => (<li key={index} className="flex items-start flex-col">
                                    <div className="flex items-center mb-2">
                                        <Image
                                            src={item.icon}
                                            alt={`${item.title} Icon`}
                                            height={35}
                                            width={35}
                                            className="me-4"
                                        />
                                        <h2 className="body-text font-semibold">{item.title}</h2>
                                    </div>
                                    <p className="text-neutral-700 body-text">{item.description}</p>
                                </li>))}
                        </ul>
                    </div>

                    {/* Right Side: Google Maps */}
                    <div className="xl:h-full">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12090.627543208643!2d-73.8577365!3d40.7085304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzMwLjciTiA3M8KwNTEnMTcuNSJX!5e0!3m2!1sen!2sus!4v1695782652551!5m2!1sen!2sus"
                            className="w-full h-[30vh] xl:h-full shadow-md"
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </section>

        </>);
}

export default Page;

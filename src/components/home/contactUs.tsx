"use client";

import Image from "next/image";
import {contact, emailIcon, locationIcon, phoneIcon} from "@/../public/assets";

export const contactDetails = [{
    icon: locationIcon, title: "Hotel Address", description: (<>
            Nestled amidst serene landscapes, Hotel Grand Minaro is conveniently located near XYZ National
            Park and is easily accessible from the main city center.
        </>),
}, {
    icon: emailIcon, title: "Email address", description: (<>
            contact<span className="font-sans text-neutral-600">@</span>grandminaro.com
        </>),
}, {
    icon: phoneIcon, title: "Contact number", description: <span className="font-sans">+94 572 324 537</span>,
},];

export const ContactSection = () => {

    return (<section className="relative bg-gray-100 h-[700px]">
            {/* Background Image */}
            <div className="absolute inset-0 h-full">
                <Image
                    src={contact}
                    alt="Bar Background"
                    layout="fill"
                    objectFit="cover"
                    className="brightness-75"
                />
            </div>

            <div className="max-width">
                {/* Contact Us Card */}
                <div className="absolute top-1/2 md:left-16 xl:left-20 3xl:left-32 5xl:left-64 transform -translate-y-1/2 mx-6 md:mx-0">
                    <div
                        className="bg-white/60 backdrop-blur-lg p-6 md:p-10 custom_round shadow-lg max-w-xl flex flex-col gap-y-2 md:gap-y-6">
                        <h2 className="text-gold_accent text-2xl md:text-3xl lg:text-5xl font-carla font-semibold text-center">
                            CONTACT US
                        </h2>
                        <p className="text-neutral-700 body-text text-center md:mb-5 ">
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
                </div>
            </div>
        </section>);
};

export default ContactSection;

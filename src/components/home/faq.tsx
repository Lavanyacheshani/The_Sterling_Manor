"use client";

import React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"; // Replace with the correct path

export const FAQSection: React.FC = () => {
    const faqItems = [
        {
            question: "What makes Hotel Grand Minaro unique?",
            answer:
                "Lorem ipsum dolor sit amet consectetur. Pulvinar arcu mattis in at sodales condimentum. Gravida arcu aliquet rutrum erat varius. Tellus felis sed pretium in egestas.",
        },
        {
            question: "Do you offer sustainable or eco-friendly amenities?",
            answer:
                "Yes, our hotel is committed to sustainability with eco-friendly materials and energy-efficient features. We also provide organic toiletries in our rooms.",
        },
        {
            question: "What are the check-in and check-out times?",
            answer:
                "Check-in is from 3 PM onwards, and check-out is at 11 AM. Early check-in and late check-out options are available upon request.",
        },
        {
            question: "Can I book a private event at the hotel?",
            answer:
                "Yes, we offer versatile event spaces, including ballrooms and outdoor venues, perfect for private events, weddings, and corporate meetings.",
        },
    ];

    return (
        <>

            {/* Accordion Section */}
            <div className="w-full px-5 md:px-0 md:w-2/3">
                <Accordion type="single" collapsible>
                    {faqItems.map((item, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-sm md:text-lg text-neutral-800 font-sans tracking-wide body-text py-4 hover:no-underline">
                                {item.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-neutral-500 text-sm md:text-md pe-5 md:pe-10 lg:pe-40 xl:pe-64 3xl:pe-72">
                                {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </>
    );
};

export default FAQSection;

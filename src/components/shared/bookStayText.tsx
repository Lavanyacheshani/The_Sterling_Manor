'use client'
import React from 'react';
import {useRouter} from "next/navigation";
import {ApplicationRoute} from "@/utils/routes";

const BookStayText = () => {
    const router = useRouter();

    return (
        <div>
            <h1 className="font-carla font-[600] text-primary hover:text-gold_accent hover:underline hover:underline-offset-8
                 hover:decoration-2 text-4xl md:text-6xl lg:text-7xl xl:text-8xl 4xl:text-9xl px-5 md:px-0
                 text-center py-10 md:py-20 xl:px-24 2xl:py-32 max-width hover:cursor-pointer"
            onClick={()=>{router.push(ApplicationRoute.CONTACT_US)}}
            >Book Your Stay Now</h1>
        </div>
    );
};

export default BookStayText;
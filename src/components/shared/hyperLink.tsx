'use client'
import React from 'react';
import {HiOutlineArrowRight} from "react-icons/hi";
import {useRouter} from "next/navigation";

interface linkProps {
    title: string;
    to?: string;
    color?: string; // Optional prop for custom color
}

const HyperLink = ({title, to, color}: linkProps) => {
    const router = useRouter()
    return (
        <div>
            <button
                onClick={()=>{
                    if (to != null) {
                        router.push(to)
                    }}}
                className={`inline-block font-[100] hover:cursor-pointer body-text ${color}`}
            >
                <div className="flex flex-row gap-x-2 lg:gap-x-3 justify-center items-center">
                    <p className={`hover:underline text-sm lg:body-text hover:underline-offset-4 ${color}`}>{title}</p>
                    <HiOutlineArrowRight size={18} className={` w-3 lg:w-5 text-gray-400 ${color}`}/>
                </div>

            </button>
        </div>
    );
};

export default HyperLink;
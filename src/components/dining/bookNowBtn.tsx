import React from 'react';
import {HiOutlineArrowRight} from "react-icons/hi";
import {useRouter} from "next/navigation";

interface linkProps {
    title: string;
    to?: string;
    color?: string; // Optional prop for custom color
}

const BookNowBtn2 = ({title, to, color}: linkProps) => {
    const router = useRouter();
    return (
        <div>
            <a
                onClick={() => router.push(to as string)}
                className={`inline-block font-[100] hover:cursor-pointer body-text ${color}  md:block`}
            >
                <div className="flex flex-row gap-x-5 justify-center items-center">
                    <p className={`hover:underline body-text hover:underline-offset-4 ${color}`}>{title}</p>
                    <HiOutlineArrowRight size={18} className={`text-gray-400 ${color}`}/>
                </div>

            </a>
        </div>
    );
};

export default BookNowBtn2;
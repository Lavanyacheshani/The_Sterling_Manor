'use client';
import React, { useState } from 'react';
import {HiArrowRight} from "react-icons/hi";

interface ButtonProps {
    title: string;
    handleOnClick?: () => void;
    isDisabled?: boolean;
}

const BookNowBtn: React.FC<ButtonProps> = ({ title, handleOnClick, isDisabled }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <button
            type="submit"
            className={`body-text font-carla text-white p-5 
            flex items-center gap-2 transition-all duration-300 tracking-wide ${
                hovered ? 'bg-gold_accent' : 'bg-primary'
            }`}
            disabled={ isDisabled }
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={handleOnClick}
        >
             <span>{title}</span>
             <HiArrowRight size={18} />
        </button>
    );
};

export default BookNowBtn;

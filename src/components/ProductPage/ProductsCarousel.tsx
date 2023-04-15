'use client';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './styles.css';

import useIsMobile from '@/hooks/useIsMobile';
import React from 'react';

interface ProductsCarouselProps {
    children: React.ReactNode;
}

export default function ProductsCarousel({ children, ...props }: ProductsCarouselProps) {
    const isMobile = useIsMobile();

    return (
        <Carousel
            className="h-full"
            showArrows={!isMobile}
            renderArrowPrev={(clickHandler, hasPrev, label) => (
                <CustomPrevArrow clickHandler={clickHandler} hasPrev={hasPrev} label={label} />
            )}
            renderArrowNext={(clickHandler, hasNext, label) => (
                <CustomNextArrow clickHandler={clickHandler} hasNext={hasNext} label={label} />
            )}
            {...props}
        >
            {/** @ts-ignore */}
            {children}
        </Carousel>
    );
}

interface CustomPrevArrowProps {
    clickHandler: () => void;
    hasPrev: boolean;
    label: string;
}

function CustomPrevArrow({ clickHandler, hasPrev }: CustomPrevArrowProps) {
    return (
        <div
            className={`${
                hasPrev ? 'absolute' : 'hidden'
            } inset-y-0 left-0 z-20 flex cursor-pointer items-center justify-center p-3 opacity-30 hover:opacity-100`}
            onClick={clickHandler}
        >
            <MdOutlineKeyboardArrowLeft className="h-9 w-9 text-white" />
        </div>
    );
}

interface CustomNextArrow {
    clickHandler: () => void;
    hasNext: boolean;
    label: string;
}

function CustomNextArrow({ clickHandler, hasNext }: CustomNextArrow) {
    return (
        <div
            className={`${
                hasNext ? 'sm:absolute' : 'hidden'
            } inset-y-0 right-0 z-20 flex cursor-pointer items-center justify-center p-3 opacity-30 hover:opacity-100`}
            onClick={clickHandler}
        >
            <MdOutlineKeyboardArrowRight className="h-9 w-9 text-white" />
        </div>
    );
}

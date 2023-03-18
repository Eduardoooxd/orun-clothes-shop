'use client';

import LogoImage from '@/images/logo/orun-logo.png';
import { commutersSans } from '@/lib/fontLoader';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { CiSearch } from 'react-icons/ci';
import { RxPerson } from 'react-icons/rx';
import Bag from '../Icons/Bag';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState<boolean>(false);

    const stylesOnScroll = isScrolled ? 'bg-white shadow-md' : 'bg-transparent';

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 flex h-20 items-center justify-evenly w-full transition duration-300 ease-in-out z-50 ${stylesOnScroll}`}
        >
            <div className="flex gap-10 items-center">
                <Link
                    className={`${commutersSans.variable} font-commutersSans font-extralight`}
                    href=""
                >
                    MEN
                </Link>
                <a
                    className={`${commutersSans.variable} font-commutersSans font-extralight`}
                    href=""
                >
                    WOMEN
                </a>

                <Link
                    className={`${commutersSans.variable} font-commutersSans font-extralight`}
                    href=""
                >
                    ABOUT US
                </Link>
            </div>
            <div>
                <Link href="">
                    <Image priority src={LogoImage} alt="logo" width={200} height={40} />
                </Link>
            </div>
            <div className="flex gap-10 items-center">
                <Link
                    className={`${commutersSans.variable} font-commutersSans font-extralight`}
                    href=""
                >
                    CONTACT US
                </Link>

                <CiSearch size={'1.5rem'} />

                <RxPerson size={'1.5rem'} />

                <Bag />
            </div>
        </nav>
    );
}

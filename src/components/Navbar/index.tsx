'use client';

import LogoImage from '@/images/logo/orun-logo.png';
import Image from 'next/image';
import { Dispatch, FunctionComponent, SetStateAction, useEffect, useState } from 'react';

import { commutersSans } from '@/lib/fontLoader';
import { Transition } from '@headlessui/react';
import Link from 'next/link';
import { CiSearch } from 'react-icons/ci';
import { RxPerson } from 'react-icons/rx';
import Bag from '../Icons/Bag';
import { ClosedHamburgerMenu, OpenHamburgerMenu } from '../Icons/HamburguerMenu';
import NavbarLink, { NavbarLinkProps } from './NavbarLink';

const NAVBAR_LINKS: NavbarLinkProps[] = [
    {
        text: 'Men',
    },
    {
        text: 'Categories',
    },
    {
        text: 'About us',
    },
    {
        text: 'Contact us',
    },
];

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState<boolean>(false);

    const stylesOnScroll =
        isScrolled || isMobileMenuOpen
            ? 'bg-white shadow-md border-b border-black'
            : 'bg-transparent';

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
            className={`sticky top-0 z-50 flex min-h-[5rem] w-full flex-col justify-evenly transition duration-300 ease-in-out ${stylesOnScroll}`}
        >
            <MobileNavBar
                isMobileMenuOpen={isMobileMenuOpen}
                setIsMobileMenuOpen={setIsMobileMenuOpen}
            />

            <DesktopNavBar />
        </nav>
    );
}

const DesktopNavBar: FunctionComponent = () => {
    return (
        <div className="container mx-auto hidden h-20 w-full items-center justify-between p-4 sm:p-6 md:flex">
            <div className="flex items-center gap-6 lg:gap-10">
                <Link
                    className={`${commutersSans.variable} font-commutersSans font-extralight`}
                    href=""
                >
                    MEN
                </Link>
                <Link
                    className={`${commutersSans.variable} font-commutersSans font-extralight`}
                    href=""
                >
                    CATEGORIES
                </Link>

                <Link
                    className={`${commutersSans.variable} font-commutersSans font-extralight`}
                    href=""
                >
                    ABOUT US
                </Link>
            </div>
            <div>
                <Link href="">
                    <Image priority src={LogoImage} alt="logo" width={150} height={30} />
                </Link>
            </div>
            <div className="flex items-center gap-10">
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
        </div>
    );
};

interface NobileNavBarProps {
    isMobileMenuOpen: boolean;
    setIsMobileMenuOpen: Dispatch<SetStateAction<boolean>>;
}

const MobileNavBar: FunctionComponent<NobileNavBarProps> = ({
    isMobileMenuOpen,
    setIsMobileMenuOpen,
}) => {
    return (
        <>
            <div className="container mx-auto flex h-20 w-full items-center justify-between p-4 sm:p-6 md:hidden">
                <div>
                    <Link href="">
                        <Image priority src={LogoImage} alt="logo" width={150} height={30} />
                    </Link>
                </div>
                <button
                    type="button"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="relative h-10 w-10 rounded p-2 text-black transition duration-150 ease-in-out hover:bg-gray-900 hover:text-white focus:outline-none"
                    aria-controls="mobile-menu"
                    aria-expanded="false"
                >
                    <span className="sr-only">Open main menu</span>
                    <OpenHamburgerMenu isOpen={isMobileMenuOpen} />
                    <ClosedHamburgerMenu isOpen={isMobileMenuOpen} />
                </button>
            </div>

            <Transition
                show={isMobileMenuOpen}
                enter="transition ease-out duration-100 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                {() => (
                    <div className="h-[calc(100dvh-5rem)] p-4 sm:p-6 md:hidden">
                        <div className="flex flex-col">
                            {NAVBAR_LINKS.map((navBarLink, index) => (
                                <NavbarLink key={index} {...navBarLink} />
                            ))}
                        </div>
                    </div>
                )}
            </Transition>
        </>
    );
};

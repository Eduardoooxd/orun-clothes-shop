'use client';

import { Transition } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';
import { Dispatch, FunctionComponent, SetStateAction } from 'react';
import { ClosedHamburgerMenu, OpenHamburgerMenu } from '../../Icons/HamburguerMenu';
import NavbarLink, { NavbarLinkProps } from './NavbarLink';

import MiniLogoImage from '@/images/logo/logo-mini.png';

import { useLockBody } from '@/hooks/useLockBody';
import LocaleSwitcher from './LocaleSwitcher';

interface MobileNavBarProps {
    isMobileMenuOpen: boolean;
    setIsMobileMenuOpen: Dispatch<SetStateAction<boolean>>;
    links: NavbarLinkProps[];
    categories: JSX.Element[];
}

export const MobileNavBar: FunctionComponent<MobileNavBarProps> = ({
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    links,
}) => {
    return (
        <>
            <div className="container mx-auto flex h-20 w-full items-center justify-between p-4 sm:p-6">
                <div>
                    <Link href="/">
                        <Image priority src={MiniLogoImage} alt="logo" width={90} height={20} />
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
            <MobileNavBarMenu links={links} isMobileMenuOpen={isMobileMenuOpen} />
        </>
    );
};

interface MobileNavBarMenuProps {
    isMobileMenuOpen: boolean;
    links: NavbarLinkProps[];
}

const MobileNavBarMenu: FunctionComponent<MobileNavBarMenuProps> = ({
    isMobileMenuOpen,
    links,
}) => {
    return (
        <>
            <Transition
                show={isMobileMenuOpen}
                enter="transition ease-out duration-100 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                {() => <MobileNavBarMenuOpen links={links} />}
            </Transition>
        </>
    );
};

interface MobileNavBarMenuOpenProps {
    links: NavbarLinkProps[];
}

const MobileNavBarMenuOpen: FunctionComponent<MobileNavBarMenuOpenProps> = ({ links }) => {
    useLockBody();

    return (
        <div className="h-[calc(100dvh-5rem)] p-4 sm:p-6 md:hidden">
            <div className="flex flex-col gap-4">
                {links.map((navBarLink, index) => (
                    <NavbarLink key={index} {...navBarLink} />
                ))}
                <LocaleSwitcher />
            </div>
        </div>
    );
};

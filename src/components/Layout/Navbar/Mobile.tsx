'use client';

import MiniBlackLogoImage from '@/images/logo/logo-mini.png';
import MiniWhiteLogoImage from '@/images/logo/logo-white-mini.png';
import { Transition } from '@headlessui/react';
import Image from 'next/image';
import { Dispatch, FunctionComponent, SetStateAction } from 'react';
import { ClosedHamburgerMenu, OpenHamburgerMenu } from '../../Icons/HamburguerMenu';
import NavbarLink from './NavbarLink';

import useGetDictionary from '@/hooks/useGetDictionary';
import { useLockBody } from '@/hooks/useLockBody';
import LinkI18N from '../LinkI18N';
import LocaleSwitcher from './LocaleSwitcher';

interface MobileNavBarProps {
    isMobileMenuOpen: boolean;
    isScrolled: boolean;
    setIsMobileMenuOpen: Dispatch<SetStateAction<boolean>>;
}

export const MobileNavBar: FunctionComponent<MobileNavBarProps> = ({
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    isScrolled,
}) => {
    return (
        <>
            <div
                className={`${
                    isScrolled ? '' : 'text-white'
                } container mx-auto flex h-20 w-full items-center justify-between p-4 sm:p-6`}
            >
                <div>
                    <LinkI18N href="/">
                        {isScrolled || isMobileMenuOpen ? (
                            <Image
                                priority
                                src={MiniBlackLogoImage}
                                alt="logo"
                                width={100}
                                height={20}
                            />
                        ) : (
                            <Image
                                priority
                                src={MiniWhiteLogoImage}
                                alt="logo"
                                width={100}
                                height={20}
                            />
                        )}
                    </LinkI18N>
                </div>
                <button
                    type="button"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="relative h-10 w-10 rounded p-2  transition duration-150 ease-in-out hover:bg-gray-900 hover:text-white focus:outline-none"
                    aria-controls="mobile-menu"
                    aria-expanded="false"
                >
                    <span className="sr-only">Open main menu</span>
                    <OpenHamburgerMenu isOpen={isMobileMenuOpen} />
                    <ClosedHamburgerMenu isOpen={isMobileMenuOpen} />
                </button>
            </div>
            <MobileNavBarMenu isMobileMenuOpen={isMobileMenuOpen} />
        </>
    );
};

interface MobileNavBarMenuProps {
    isMobileMenuOpen: boolean;
}

const MobileNavBarMenu: FunctionComponent<MobileNavBarMenuProps> = ({ isMobileMenuOpen }) => {
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
                {() => <MobileNavBarMenuOpen />}
            </Transition>
        </>
    );
};

const MobileNavBarMenuOpen: FunctionComponent = () => {
    const dictionary = useGetDictionary();
    useLockBody();

    const { Category, AboutUs, ContactUs } = dictionary.navBar.NAVBAR_LINKS;

    return (
        <div className="h-[calc(100dvh-5rem)] p-4 sm:p-6 md:hidden">
            <div className="flex flex-col gap-4">
                {[Category, AboutUs, ContactUs].map((navBarLink, index) => (
                    <NavbarLink key={index} {...navBarLink} />
                ))}

                <LocaleSwitcher />
            </div>
        </div>
    );
};

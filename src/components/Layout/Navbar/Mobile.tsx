'use client';

import useGetDictionary from '@/hooks/useGetDictionary';
import { useLockBody } from '@/hooks/useLockBody';
import MiniBlackLogoImage from '@/images/logo/logo-mini.png';
import { cn } from '@/lib/utils';
import { Transition } from '@headlessui/react';
import Image from 'next/image';
import { Dispatch, FunctionComponent, SetStateAction } from 'react';
import { RxCross1, RxHamburgerMenu } from 'react-icons/rx';
import LinkI18N from '../../Shared/I18N/LinkI18N';
import LocaleSwitcher from './LocaleSwitcher';
import { useNavbarContext } from './NavbarContext';
import NavbarLink from './NavbarLink';

interface MobileNavBarProps {
    isMobileMenuOpen: boolean;
    setIsMobileMenuOpen: Dispatch<SetStateAction<boolean>>;
    setIsDropdownOpen: Dispatch<SetStateAction<boolean>>;
}

export const MobileNavBar: FunctionComponent<MobileNavBarProps> = ({
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    setIsDropdownOpen,
}) => {
    const { isNavbarActive } = useNavbarContext();

    const activeMobileMenu = isNavbarActive || isMobileMenuOpen;

    return (
        <>
            <div
                className={cn(
                    'flex h-20 items-center justify-between',
                    activeMobileMenu ? 'text-black' : 'text-white'
                )}
            >
                <div>
                    <LinkI18N href="/">
                        {activeMobileMenu ? (
                            <Image
                                priority
                                src={MiniBlackLogoImage}
                                alt="logo"
                                width={100}
                                height={20}
                            />
                        ) : null}
                    </LinkI18N>
                </div>
                <button
                    type="button"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="relative h-10 w-10 rounded p-2  transition duration-150 ease-in-out focus:outline-none"
                    aria-controls="mobile-menu"
                    aria-expanded="false"
                >
                    <span className="sr-only">Open main menu</span>
                    {isMobileMenuOpen ? (
                        <RxCross1 size={'1.5rem'} />
                    ) : (
                        <RxHamburgerMenu size={'1.5rem'} />
                    )}
                </button>
            </div>
            <MobileNavBarMenu
                setIsMobileMenuOpen={setIsMobileMenuOpen}
                isMobileMenuOpen={isMobileMenuOpen}
                setIsDropdownOpen={setIsDropdownOpen}
            />
        </>
    );
};

interface MobileNavBarMenuProps {
    isMobileMenuOpen: boolean;
    setIsMobileMenuOpen: Dispatch<SetStateAction<boolean>>;
    setIsDropdownOpen: Dispatch<SetStateAction<boolean>>;
}

const MobileNavBarMenu: FunctionComponent<MobileNavBarMenuProps> = ({
    isMobileMenuOpen,
    setIsMobileMenuOpen,
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
                {() => <MobileNavBarMenuOpen setIsMobileMenuOpen={setIsMobileMenuOpen} />}
            </Transition>
        </>
    );
};

interface MobileNavBarMenuOpenProps {
    setIsMobileMenuOpen: Dispatch<SetStateAction<boolean>>;
}

const MobileNavBarMenuOpen: FunctionComponent<MobileNavBarMenuOpenProps> = ({
    setIsMobileMenuOpen,
}) => {
    const dictionary = useGetDictionary();
    useLockBody();

    const { Category, AboutUs, ContactUs } = dictionary.navBar.NAVBAR_LINKS;

    return (
        <div className="h-[calc(100dvh-5rem)]">
            <div className="flex flex-col gap-4">
                {/* 
                <MobileCategoriesDropdown onClickItem={() => setIsMobileMenuOpen(false)}>
                    {Category.text}
                </MobileCategoriesDropdown>
                */}

                {[Category, AboutUs, ContactUs].map((navBarLink, index) => (
                    <NavbarLink
                        onClick={() => setIsMobileMenuOpen(false)}
                        key={navBarLink.href}
                        {...navBarLink}
                    />
                ))}

                <LocaleSwitcher />
            </div>
        </div>
    );
};

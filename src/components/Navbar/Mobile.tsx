'use client';

import { commutersSans } from '@/lib/fontLoader';
import { Transition } from '@headlessui/react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import Image from 'next/image';
import Link from 'next/link';
import { Dispatch, FunctionComponent, SetStateAction, useCallback, useState } from 'react';
import { ClosedHamburgerMenu, OpenHamburgerMenu } from '../Icons/HamburguerMenu';
import NavbarLink, { NavbarLinkProps } from './NavbarLink';

import MiniLogoImage from '@/images/logo/logo-mini.png';

import { useLockBody } from '@/hooks/useLockBody';
import { SignIn, UserButton, useUser } from '@clerk/nextjs/app-beta/client';

const NAVBAR_LINKS: NavbarLinkProps[] = [
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

interface MobileNavBarProps {
    isMobileMenuOpen: boolean;
    setIsMobileMenuOpen: Dispatch<SetStateAction<boolean>>;
}

export const MobileNavBar: FunctionComponent<MobileNavBarProps> = ({
    isMobileMenuOpen,
    setIsMobileMenuOpen,
}) => {
    return (
        <>
            <div className="container mx-auto flex h-20 w-full items-center justify-between p-4 sm:p-6 md:hidden">
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
                {() => (
                    <div className="h-[calc(100dvh-5rem)] p-4 sm:p-6 md:hidden">
                        <div className="flex flex-col gap-4">
                            <UserRelatedOptions />

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

const UserRelatedOptions: FunctionComponent = ({}) => {
    useLockBody();

    const { isLoaded, isSignedIn } = useUser();

    if (!isLoaded || !isSignedIn) {
        return <UserLoginOption />;
    }

    return (
        <UserButton
            showName
            appearance={{
                elements: {
                    rootBox: 'w-full',
                    userButtonBox: 'w-full justify-between',
                    userButtonOuterIdentifier: `${commutersSans.variable} font-commutersSans font-extralight uppercase text-base`,
                },
            }}
        />
    );
};

const UserLoginOption: FunctionComponent = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleDropdownToggle = useCallback(() => {
        setDropdownOpen((prevState) => !prevState);
    }, []);

    const SingInOptions = [
        {
            text: 'Sign in',
            component: (
                <SignIn
                    signUpUrl="/sign-up"
                    afterSignInUrl="/"
                    appearance={{
                        elements: {
                            rootBox: 'bg-transparent w-full',
                            card: 'py-2 px-0 shadow-none max-w-sm mx-auto w-full',
                            header: 'hidden',
                        },
                    }}
                />
            ),
        },
    ];

    return (
        <>
            {SingInOptions.map((option, index) => (
                <DropdownMenu.Root key={index} open={dropdownOpen} onOpenChange={setDropdownOpen}>
                    <DropdownMenu.Trigger asChild onClick={handleDropdownToggle}>
                        <button
                            aria-label={option.text}
                            className={`${commutersSans.variable} text-left font-commutersSans font-extralight uppercase`}
                        >
                            {option.text}
                        </button>
                    </DropdownMenu.Trigger>

                    <DropdownMenu.Portal>
                        <DropdownMenu.Content
                            align="start"
                            side="left"
                            className={`absolute left-0 z-[60] mt-8 flex w-80 bg-transparent`}
                        >
                            <DropdownMenu.Item className="w-full">
                                {option.component}
                            </DropdownMenu.Item>
                        </DropdownMenu.Content>
                    </DropdownMenu.Portal>
                </DropdownMenu.Root>
            ))}
        </>
    );
};

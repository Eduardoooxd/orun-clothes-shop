'use client';

import MiniLogoImage from '@/images/logo/logo-mini.png';
import Image from 'next/image';
import './styles.css';

import { useClerk, useUser } from '@clerk/nextjs/app-beta/client';

import { FunctionComponent, memo, Suspense, useCallback, useEffect, useState } from 'react';

import { commutersSans } from '@/lib/fontLoader';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { CiSearch } from 'react-icons/ci';
import { RxPerson } from 'react-icons/rx';
import Bag from '../Icons/Bag';
import { MobileNavBar } from './Mobile';

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
                <Link href="/">
                    <Image priority src={MiniLogoImage} alt="logo" width={100} height={20} />
                </Link>

                <Link
                    className={`${commutersSans.variable} font-commutersSans font-extralight`}
                    href="/"
                >
                    CATEGORIES
                </Link>

                <Link
                    className={`${commutersSans.variable} font-commutersSans font-extralight`}
                    href="/"
                >
                    ABOUT US
                </Link>
                <Link
                    className={`${commutersSans.variable} font-commutersSans font-extralight`}
                    href="/"
                >
                    CONTACT US
                </Link>
            </div>
            <div className="flex items-center gap-10">
                <div className="grid aspect-square w-12 place-items-center">
                    <CiSearch size={'1.5rem'} />
                </div>

                <DesktopAccountDropDown />

                <div className="grid aspect-square w-12 place-items-center">
                    <Bag />
                </div>
            </div>
        </div>
    );
};

const DesktopAccountDropDown = memo(function DesktopAccountDropDown() {
    const { isSignedIn, user } = useUser();
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleDropdownToggle = useCallback(() => {
        setDropdownOpen((prevState) => !prevState);
    }, []);

    return (
        <div className="relative">
            <DropdownMenu.Root open={dropdownOpen} onOpenChange={setDropdownOpen}>
                <DropdownMenu.Trigger asChild onClick={handleDropdownToggle}>
                    <button
                        aria-label="Login / Sign-up options"
                        className=" grid aspect-square w-12 place-items-center focus:outline-none"
                    >
                        {isSignedIn ? (
                            <Suspense fallback={<RxPerson size={'1.5rem'} />}>
                                <Image
                                    priority
                                    src={user?.profileImageUrl}
                                    alt="User profile picture"
                                    width={24}
                                    height={24}
                                    className="rounded-full"
                                />
                            </Suspense>
                        ) : (
                            <RxPerson size={'1.5rem'} />
                        )}
                    </button>
                </DropdownMenu.Trigger>

                <DropdownMenu.Portal>
                    <DropdownMenu.Content
                        className={`DropdownMenuContent absolute right-0 z-[60] flex w-80 flex-col gap-y-1 rounded-lg border border-black bg-white py-2 px-4 shadow-lg `}
                    >
                        <DropdownMenuUserOptions />
                    </DropdownMenu.Content>
                </DropdownMenu.Portal>
            </DropdownMenu.Root>
        </div>
    );
});

const DropdownMenuUserOptions: FunctionComponent = () => {
    const { isLoaded, isSignedIn, user } = useUser();
    const { signOut } = useClerk();
    const router = useRouter();

    if (!isLoaded || !isSignedIn) {
        return (
            <>
                <DropdownMenu.Label
                    className={`${commutersSans.variable} font-commutersSans text-sm font-extralight capitalize text-gray-500 `}
                >
                    Login options
                </DropdownMenu.Label>
                <DropdownMenu.Item className="hover:outline-none">
                    <Link
                        className={`${commutersSans.variable} w-full font-commutersSans font-extralight hover:underline`}
                        href="/sign-in"
                    >
                        Sign in
                    </Link>
                </DropdownMenu.Item>
                <DropdownMenu.Item className="hover:outline-none">
                    <Link
                        className={`${commutersSans.variable} w-full font-commutersSans font-extralight hover:underline`}
                        href="/sign-up"
                    >
                        Sign up
                    </Link>
                </DropdownMenu.Item>
            </>
        );
    }

    return (
        <>
            <DropdownMenu.Label
                className={`${commutersSans.variable} font-commutersSans text-sm font-extralight text-gray-500`}
            >
                {`Welcome back ${user?.fullName}`}
            </DropdownMenu.Label>
            <DropdownMenu.Separator />

            <DropdownMenu.Item className="hover:outline-none">
                <Link
                    className={`${commutersSans.variable} w-full font-commutersSans font-extralight hover:underline`}
                    href="/user/profile"
                >
                    Profile
                </Link>
            </DropdownMenu.Item>
            <DropdownMenu.Item className="hover:outline-none">
                <button
                    className={`${commutersSans.variable} w-full text-left font-commutersSans font-extralight hover:underline`}
                    onClick={() => {
                        router.push('/');
                        signOut();
                    }}
                >
                    Sign out
                </button>
            </DropdownMenu.Item>
        </>
    );
};

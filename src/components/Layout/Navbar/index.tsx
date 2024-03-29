'use client';

import LinkI18N from '@/components/Shared/I18N/LinkI18N';
import { i18nConfig } from '@/config/i18nConfig';
import useGetCurrentLocale from '@/hooks/useGetCurrentLocale';
import useGetDictionary from '@/hooks/useGetDictionary';
import useIsRootPage from '@/hooks/useIsRootPage';
import { useLockBody } from '@/hooks/useLockBody';
import MiniBlackLogoImage from '@/images/logo/logo-mini.png';
import MiniWhiteLogoImage from '@/images/logo/logo-white-mini.png';
import { commutersSans } from '@/lib/fontLoader';
import { cn } from '@/lib/utils';
import { User } from 'lucide-react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { Dispatch, FC, FunctionComponent, SetStateAction, useEffect, useState } from 'react';
import { RxCross1, RxHamburgerMenu } from 'react-icons/rx';
import Search from '../Search';

interface NavbarProps {
    cart: React.ReactNode;
}

export const Navbar: FC<NavbarProps> = ({ cart }) => {
    const dictionary = useGetDictionary();
    const { Category, AboutUs, ContactUs } = dictionary.navBar.NAVBAR_LINKS;

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const isRootPage = useIsRootPage();

    const navBarActive = isScrolled || isMobileMenuOpen || !isRootPage;

    const stylesOnScroll = navBarActive
        ? 'bg-white dark:bg-black shadow-md border-b border-black'
        : 'bg-transparent';

    const stylesMobileMenu = isMobileMenuOpen
        ? 'min-h-screen justify-start'
        : 'h-[5rem] justify-evenly';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.pageYOffset > 100);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={cn(
                'sticky top-0 z-50 flex w-full flex-col  transition duration-100 ease-in-out',
                stylesOnScroll,
                stylesMobileMenu
            )}
        >
            <nav className="mx-auto flex w-full flex-col gap-8 px-4 lg:container sm:px-6">
                <div
                    className={cn(
                        'min-h-20 flex items-center justify-between',
                        navBarActive ? 'text-black dark:text-white' : 'text-white'
                    )}
                >
                    <div className="hidden flex-1 items-center gap-6 lg:flex lg:gap-10">
                        {[Category, AboutUs, ContactUs].map((navBarLink, index) => (
                            <NavbarLink key={index} {...navBarLink} />
                        ))}
                    </div>

                    <div className="flex items-center gap-6 lg:gap-10 ">
                        <LinkI18N href="/">
                            {navBarActive ? (
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

                    <div className="hidden flex-1 items-center justify-end gap-10 lg:flex">
                        <div className="grid aspect-square w-12 place-items-center">
                            {<Search />}
                        </div>
                        <div className="grid aspect-square w-12 place-items-center">{cart}</div>

                        <LocaleSwitcher />
                    </div>

                    <button
                        type="button"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="relative h-10 w-10 rounded p-2 transition duration-150 ease-in-out focus:outline-none lg:hidden"
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
                {isMobileMenuOpen ? (
                    <MobileNavBarMenuOpen cart={cart} setIsMobileMenuOpen={setIsMobileMenuOpen} />
                ) : null}
            </nav>
        </header>
    );
};

interface MobileNavBarMenuOpenProps {
    setIsMobileMenuOpen: Dispatch<SetStateAction<boolean>>;
    cart: React.ReactNode;
}

const MobileNavBarMenuOpen: FunctionComponent<MobileNavBarMenuOpenProps> = ({
    setIsMobileMenuOpen,
    cart,
}) => {
    const dictionary = useGetDictionary();
    useLockBody();

    const { Category, AboutUs, ContactUs } = dictionary.navBar.NAVBAR_LINKS;

    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center justify-between">
                <div className="flex gap-4">
                    <LocaleSwitcher />
                </div>

                <div className="flex gap-4">
                    <div className="grid aspect-square w-12 place-items-center">
                        {<Search setIsMobileMenuOpen={setIsMobileMenuOpen} />}
                    </div>

                    <div className="grid aspect-square w-12 place-items-center">{cart}</div>
                </div>
            </div>

            {[Category, AboutUs, ContactUs].map((navBarLink) => (
                <NavbarLink
                    onClick={() => setIsMobileMenuOpen(false)}
                    key={navBarLink.href}
                    {...navBarLink}
                />
            ))}
        </div>
    );
};

export interface NavbarLinkProps {
    text: string;
    href: string;
    onClick?: () => void;
}

const NavbarLink: FunctionComponent<NavbarLinkProps> = ({ text, href, onClick }) => {
    return (
        <LinkI18N
            className={`${commutersSans.variable} flex h-8 items-center font-commutersSans font-extralight uppercase transition hover:underline`}
            href={href}
            onClick={onClick}
        >
            {text}
        </LinkI18N>
    );
};

export default function LocaleSwitcher() {
    const pathName = usePathname();

    const redirectedPathName = (locale: string) => {
        if (!pathName) return '/';
        const segments = pathName.split('/');
        segments[1] = locale;
        return segments.join('/');
    };

    const { locales } = i18nConfig;
    const activeLocale = useGetCurrentLocale();
    const router = useRouter();

    return (
        <ul className="flex flex-row items-center gap-2">
            {locales.map((locale) => {
                return (
                    <li key={locale}>
                        <button
                            onClick={() => router.replace(redirectedPathName(locale))}
                            className={`${
                                commutersSans.variable
                            } flex font-commutersSans font-extralight uppercase transition  ${
                                activeLocale === locale ? 'underline' : 'hover:underline'
                            }`}
                        >
                            {locale}
                        </button>
                    </li>
                );
            })}
        </ul>
    );
}

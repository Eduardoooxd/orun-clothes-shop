'use client';

import useIsMobile from '@/hooks/useIsMobile';
import { cn } from '@/lib/utils';
import { FunctionComponent, useEffect, useState } from 'react';
import { DesktopNavBar } from './DesktopNavbar';
import { MobileNavBar } from './Mobile';
import './styles.css';

interface NavbarProps {
    dictionary: Dictionary;
    categories: JSX.Element[];
}

export const Navbar: FunctionComponent<NavbarProps> = ({ dictionary, categories }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
    const isMobile = useIsMobile();
    const { NAVBAR_LINKS } = dictionary.navBar;

    const stylesOnScroll =
        isScrolled || isMobileMenuOpen
            ? 'bg-white shadow-md border-b border-black'
            : 'bg-transparent';

    const stylesOnDropdownOpen = isDropdownOpen ? 'bg-white shadow-none border-none' : '';

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
        <header
            className={cn(
                `sticky top-0 z-50 flex min-h-[5rem] w-full flex-col justify-evenly transition duration-100 ease-in-out ${stylesOnScroll} ${stylesOnDropdownOpen}`
            )}
        >
            <nav>
                {isMobile ? (
                    <MobileNavBar
                        isMobileMenuOpen={isMobileMenuOpen}
                        setIsMobileMenuOpen={setIsMobileMenuOpen}
                        links={NAVBAR_LINKS}
                        categories={categories}
                    />
                ) : (
                    <DesktopNavBar
                        setIsDropdownOpen={setIsDropdownOpen}
                        links={NAVBAR_LINKS}
                        categories={categories}
                    />
                )}
            </nav>
        </header>
    );
};

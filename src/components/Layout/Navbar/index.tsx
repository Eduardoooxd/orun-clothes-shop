'use client';

import useIsMobile from '@/hooks/useIsMobile';
import useIsRootPage from '@/hooks/useIsRootPage';
import { cn } from '@/lib/utils';
import { FunctionComponent, useEffect, useState } from 'react';

import { DesktopNavBar } from './DesktopNavbar';
import { MobileNavBar } from './Mobile';

import './styles.css';

export const Navbar: FunctionComponent = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
    const isMobile = useIsMobile();
    const isRootPage = useIsRootPage();

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
                        isScrolled={isScrolled || !isRootPage}
                    />
                ) : (
                    <DesktopNavBar
                        isScrolled={isScrolled || !isRootPage}
                        setIsDropdownOpen={setIsDropdownOpen}
                    />
                )}
            </nav>
        </header>
    );
};

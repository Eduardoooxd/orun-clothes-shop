'use client';

import useIsRootPage from '@/hooks/useIsRootPage';
import useIsTable from '@/hooks/useIsTablet';
import useNavigationEvent from '@/hooks/useNavigationEvent';
import { cn } from '@/lib/utils';
import { FunctionComponent, useEffect, useState } from 'react';

import { DesktopNavBar } from './DesktopNavbar';
import { MobileNavBar } from './Mobile';
import NavbarContext from './NavbarContext';

import './styles.css';

export const Navbar: FunctionComponent = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
    const isMobile = useIsTable();
    const isRootPage = useIsRootPage();

    useNavigationEvent({
        // Workaround since Next Router on app router is not scrolling to top after navigation
        // check: https://github.com/vercel/next.js/issues/28778
        callback: () => window.scrollTo(0, 0),
    });

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
        <NavbarContext.Provider value={{ isNavbarActive: isScrolled || !isRootPage }}>
            <header
                className={cn(
                    `sticky top-0 z-50 flex min-h-[5rem] w-full flex-col justify-evenly transition duration-100 ease-in-out ${stylesOnScroll} ${stylesOnDropdownOpen}`
                )}
            >
                <nav className="mx-auto w-full px-4 lg:container sm:px-6">
                    {isMobile ? (
                        <MobileNavBar
                            isMobileMenuOpen={isMobileMenuOpen}
                            setIsMobileMenuOpen={setIsMobileMenuOpen}
                            setIsDropdownOpen={setIsDropdownOpen}
                        />
                    ) : (
                        <DesktopNavBar
                            isDropdownOpen={isDropdownOpen}
                            setIsDropdownOpen={setIsDropdownOpen}
                        />
                    )}
                </nav>
            </header>
        </NavbarContext.Provider>
    );
};

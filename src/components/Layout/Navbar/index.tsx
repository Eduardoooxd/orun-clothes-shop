'use client';

import useIsMobile from '@/hooks/useIsMobile';
import { FunctionComponent, useEffect, useState } from 'react';
import { DesktopNavBar } from './DesktopNavbar';
import { MobileNavBar } from './Mobile';
import './styles.css';

interface NavbarProps {
    dictionary: Dictionary;
}

export const Navbar: FunctionComponent<NavbarProps> = ({ dictionary }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const isMobile = useIsMobile();
    const { NAVBAR_LINKS } = dictionary.navBar;

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
        <header
            className={`sticky top-0 z-50 flex min-h-[5rem] w-full flex-col justify-evenly transition duration-300 ease-in-out ${stylesOnScroll}`}
        >
            <nav>
                {isMobile ? (
                    <MobileNavBar
                        isMobileMenuOpen={isMobileMenuOpen}
                        setIsMobileMenuOpen={setIsMobileMenuOpen}
                        links={NAVBAR_LINKS}
                    />
                ) : (
                    <DesktopNavBar links={NAVBAR_LINKS} />
                )}
            </nav>
        </header>
    );
};

'use client';
import useGetDictionary from '@/hooks/useGetDictionary';
// TODO Remove this
import MiniBlackLogoImage from '@/images/logo/logo-mini.png';
import MiniWhiteLogoImage from '@/images/logo/logo-white-mini.png';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Dispatch, FunctionComponent, SetStateAction } from 'react';
import LinkI18N from '../../Shared/I18N/LinkI18N';
import LocaleSwitcher from './LocaleSwitcher';
import NavbarLink from './NavbarLink';

interface DesktopNavBarProps {
    setIsDropdownOpen: Dispatch<SetStateAction<boolean>>;
    isScrolled: boolean;
    isDropdownOpen: boolean;
}

export const DesktopNavBar: FunctionComponent<DesktopNavBarProps> = ({
    isDropdownOpen,
    setIsDropdownOpen,
    isScrolled,
}) => {
    const dictionary = useGetDictionary();
    const { Category, AboutUs, ContactUs } = dictionary.navBar.NAVBAR_LINKS;

    return (
        <div
            className={cn(
                'flex h-20 items-center justify-between',
                isScrolled || isDropdownOpen ? 'text-black' : 'text-white'
            )}
        >
            <div className="flex flex-1 items-center gap-6 lg:gap-10">
                {/* 
                    <CategoriesDropdown setIsDropdownOpen={setIsDropdownOpen}>
                        {Category.text}
                    </CategoriesDropdown>
                */}

                {[Category, AboutUs, ContactUs].map((navBarLink, index) => (
                    <NavbarLink key={index} {...navBarLink} />
                ))}
            </div>
            <div className="flex items-center gap-6 lg:gap-10 ">
                <LinkI18N href="/">
                    {isScrolled ? (
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
            <div className="flex flex-1 items-center justify-end gap-10">
                {/* 
                    <div className="grid aspect-square w-12 place-items-center">{<User /> }</div>
                    <div className="grid aspect-square w-12 place-items-center">{<Bag /> }</div>
                
                <div className="grid aspect-square w-12 place-items-center">
                    <CiSearch size={'1.5rem'} />
                </div>
                */}
                <LocaleSwitcher />
            </div>
        </div>
    );
};

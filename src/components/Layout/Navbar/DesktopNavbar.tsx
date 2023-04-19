'use client';
import useGetDictionary from '@/hooks/useGetDictionary';
// TODO Remove this
import MiniLogoImage from '@/images/logo/logo-mini.png';
import Image from 'next/image';
import Link from 'next/link';
import { Dispatch, FunctionComponent, SetStateAction } from 'react';
import { CiSearch } from 'react-icons/ci';
import { CategoriesDropdown } from './CategoriesDropdown';
import LocaleSwitcher from './LocaleSwitcher';
import NavbarLink from './NavbarLink';

interface DesktopNavBarProps {
    setIsDropdownOpen: Dispatch<SetStateAction<boolean>>;
}

export const DesktopNavBar: FunctionComponent<DesktopNavBarProps> = ({ setIsDropdownOpen }) => {
    const dictionary = useGetDictionary();
    const { Category, AboutUs, ContactUs } = dictionary.navBar.NAVBAR_LINKS;

    return (
        <div className="container mx-auto flex h-20 w-full items-center justify-between p-4 sm:p-6">
            <div className="flex  flex-1 items-center gap-6 lg:gap-10">
                <CategoriesDropdown setIsDropdownOpen={setIsDropdownOpen}>
                    {Category.text}
                </CategoriesDropdown>

                {[AboutUs, ContactUs].map((navBarLink, index) => (
                    <NavbarLink key={index} {...navBarLink} />
                ))}
            </div>
            <div className="flex items-center gap-6 lg:gap-10 ">
                <Link href="/">
                    <Image priority src={MiniLogoImage} alt="logo" width={100} height={20} />
                </Link>
            </div>
            <div className="flex flex-1 items-center justify-end gap-10">
                {/* 
                    <div className="grid aspect-square w-12 place-items-center">{<User /> }</div>
                    <div className="grid aspect-square w-12 place-items-center">{<Bag /> }</div>
                */}
                <div className="grid aspect-square w-12 place-items-center">
                    <CiSearch size={'1.5rem'} />
                </div>
                <LocaleSwitcher />
            </div>
        </div>
    );
};

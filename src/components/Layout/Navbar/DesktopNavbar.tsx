import MiniLogoImage from '@/images/logo/logo-mini.png';
import Image from 'next/image';
import Link from 'next/link';
import { Dispatch, FunctionComponent, SetStateAction } from 'react';
import { CiSearch } from 'react-icons/ci';
import { CategoriesDropdown } from './CategoriesDropdown';
import LocaleSwitcher from './LocaleSwitcher';
import { NavbarLinkProps } from './NavbarLink';

interface DesktopNavBarProps {
    links: NavbarLinkProps[];
    setIsDropdownOpen: Dispatch<SetStateAction<boolean>>;
    categories: JSX.Element[];
}

export const DesktopNavBar: FunctionComponent<DesktopNavBarProps> = ({
    links,
    categories,
    setIsDropdownOpen,
}) => {
    return (
        <div className="container mx-auto flex h-20 w-full items-center justify-between p-4 sm:p-6">
            <div className="flex  flex-1 items-center gap-6 lg:gap-10">
                {/* 
                {links.map((navBarLink, index) => (
                    <NavbarLink key={index} {...navBarLink} />
                ))}
                */}
                <CategoriesDropdown categories={categories} setIsDropdownOpen={setIsDropdownOpen} />
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

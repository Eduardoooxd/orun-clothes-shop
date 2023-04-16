import MiniLogoImage from '@/images/logo/logo-mini.png';
import Image from 'next/image';
import Link from 'next/link';
import { FunctionComponent } from 'react';
import { CiSearch } from 'react-icons/ci';
import Bag from '../../Icons/Bag';
import LocaleSwitcher from './LocaleSwitcher';
import NavbarLink, { NavbarLinkProps } from './NavbarLink';

interface DesktopNavBarProps {
    links: NavbarLinkProps[];
}

export const DesktopNavBar: FunctionComponent<DesktopNavBarProps> = ({ links }) => {
    return (
        <div className="container mx-auto flex h-20 w-full items-center justify-between p-4 sm:p-6">
            <div className="flex items-center gap-6 lg:gap-10">
                <Link href="/">
                    <Image priority src={MiniLogoImage} alt="logo" width={100} height={20} />
                </Link>

                {links.map((navBarLink, index) => (
                    <NavbarLink key={index} {...navBarLink} />
                ))}
            </div>
            <div className="flex items-center gap-10">
                <div className="grid aspect-square w-12 place-items-center">
                    <CiSearch size={'1.5rem'} />
                </div>

                <div className="grid aspect-square w-12 place-items-center">
                    <Bag />
                </div>

                <LocaleSwitcher />
            </div>
        </div>
    );
};

import MiniLogoImage from '@/images/logo/logo-mini.png';
import { commutersSans } from '@/lib/fontLoader';
import Image from 'next/image';
import Link from 'next/link';
import { FunctionComponent } from 'react';
import { CiSearch } from 'react-icons/ci';
import Bag from '../Icons/Bag';

export const DesktopNavBar: FunctionComponent = () => {
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

                <div className="grid aspect-square w-12 place-items-center">
                    <Bag />
                </div>
            </div>
        </div>
    );
};

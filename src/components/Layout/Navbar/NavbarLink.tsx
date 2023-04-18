import { commutersSans } from '@/lib/fontLoader';
import Link from 'next/link';
import { FunctionComponent } from 'react';

export interface NavbarLinkProps {
    text: string;
    href: string;
}

const NavbarLink: FunctionComponent<NavbarLinkProps> = ({ text, href }) => {
    return (
        <Link
            className={`${commutersSans.variable} font-commutersSans flex h-8 items-center font-extralight uppercase`}
            href={href}
        >
            {text}
        </Link>
    );
};

export default NavbarLink;

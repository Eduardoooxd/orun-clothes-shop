import { commutersSans } from '@/lib/fontLoader';
import Link from 'next/link';
import { FunctionComponent } from 'react';

export interface NavbarLinkProps {
    text: string;
}

const NavbarLink: FunctionComponent<NavbarLinkProps> = ({ text }) => {
    return (
        <Link
            className={`${commutersSans.variable} font-commutersSans font-extralight uppercase`}
            href=""
        >
            {text}
        </Link>
    );
};

export default NavbarLink;

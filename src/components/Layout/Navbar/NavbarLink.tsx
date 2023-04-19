import { commutersSans } from '@/lib/fontLoader';
import { FunctionComponent } from 'react';
import LinkI18N from '../LinkI18N';

export interface NavbarLinkProps {
    text: string;
    href: string;
}

const NavbarLink: FunctionComponent<NavbarLinkProps> = ({ text, href }) => {
    return (
        <LinkI18N
            className={`${commutersSans.variable} flex h-8 items-center font-commutersSans font-extralight uppercase transition hover:underline`}
            href={href}
        >
            {text}
        </LinkI18N>
    );
};

export default NavbarLink;

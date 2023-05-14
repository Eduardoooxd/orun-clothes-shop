import { commutersSans } from '@/lib/fontLoader';
import { FunctionComponent } from 'react';
import LinkI18N from '../../Shared/I18N/LinkI18N';

export interface NavbarLinkProps {
    text: string;
    href: string;
    onClick?: () => void;
}

const NavbarLink: FunctionComponent<NavbarLinkProps> = ({ text, href, onClick }) => {
    return (
        <LinkI18N
            className={`${commutersSans.variable} flex h-8 items-center font-commutersSans font-extralight uppercase transition hover:underline`}
            href={href}
            onClick={onClick}
        >
            {text}
        </LinkI18N>
    );
};

export default NavbarLink;

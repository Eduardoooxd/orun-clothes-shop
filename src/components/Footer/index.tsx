import { FooterLinkGroup } from '@/dictionaries/dictionaries';
import LogoImage from '@/images/logo/logo.webp';
import { commutersSans, futuraPTLight } from '@/lib/fontLoader';
import { store } from '@/store';
import Image from 'next/image';
import { FunctionComponent } from 'react';
import Container from '../Container';
import Separator from '../Separator';
import LinkI18N from '../Shared/I18N/LinkI18N';

const Footer: FunctionComponent = () => {
    const CURRENT_YEAR = new Date().getFullYear();
    const dictionary = store.getState().dictionary.dictionary;
    const { ABOUT_LINKS } = dictionary.footer;

    return (
        <>
            <Separator />
            <footer className="mb-4 w-full lg:mb-12">
                <Container>
                    <div className="grid grid-cols-2 gap-4 lg:grid-cols-8 lg:gap-8">
                        {ABOUT_LINKS.map((column, index) => (
                            <FooterColumn key={index} footerLinkColumn={column} />
                        ))}

                        <div className="col-span-full flex flex-col  justify-between lg:order-first lg:col-span-4">
                            <div className="mb-6 hidden md:mb-0 lg:block">
                                <LinkI18N href="/">
                                    <Image
                                        src={LogoImage}
                                        alt="Orun Colored Logo"
                                        width={125}
                                        height={65}
                                    />
                                </LinkI18N>
                            </div>

                            <span className="mt-4 text-xs text-gray-500 lg:mt-0">
                                © {CURRENT_YEAR} {''}
                                <LinkI18N className="hover:underline" href="/">
                                    Orun™.
                                </LinkI18N>
                                All Rights Reserved.
                            </span>
                        </div>
                    </div>
                </Container>
            </footer>
        </>
    );
};

export interface FooterColumnProps {
    footerLinkColumn: FooterLinkGroup;
}

const FooterColumn: FunctionComponent<FooterColumnProps> = ({ footerLinkColumn }) => {
    const { title, links } = footerLinkColumn;
    return (
        <div className="lg:col-span-1">
            <h3
                className={`${futuraPTLight.variable} font-futuraPTLight text-sm font-bold uppercase tracking-wider text-black`}
            >
                {title}
            </h3>
            <ul className="mt-2">
                {links.map((link, index) => {
                    const { href, text, isExternal } = link;
                    return (
                        <li key={index}>
                            {isExternal ? (
                                <a
                                    className={`text-sm capitalize text-gray-500 hover:underline ${commutersSans.variable} font-commutersSans font-extralight uppercase`}
                                    href={href}
                                    target="_blank"
                                >
                                    {text}
                                </a>
                            ) : (
                                <LinkI18N
                                    className={`text-sm capitalize text-gray-500 hover:underline ${commutersSans.variable} font-commutersSans font-extralight uppercase`}
                                    href={href}
                                >
                                    {text}
                                </LinkI18N>
                            )}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Footer;

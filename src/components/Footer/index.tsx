import LogoImage from '@/images/logo/logo.webp';
import { commutersSans, futuraPTLight } from '@/lib/fontLoader';
import Image from 'next/image';
import Link from 'next/link';
import { FunctionComponent } from 'react';
import Container from '../Container';
import Separator from '../Separator';

interface FooterProps {
    dictionary: Dictionary;
}

const Footer: FunctionComponent<FooterProps> = ({ dictionary }) => {
    const CURRENT_YEAR = new Date().getFullYear();
    const { footer } = dictionary;
    const { ABOUT_LINKS } = footer;

    return (
        <>
            <Separator />
            <footer className="mb-4 w-full lg:mb-12">
                <Container>
                    <div className="grid grid-cols-2 gap-4 lg:grid-cols-8 lg:gap-8">
                        {ABOUT_LINKS.map((column, index) => (
                            <FooterColumn key={index} {...column} />
                        ))}

                        <div className="col-span-full flex flex-col  justify-between lg:order-first lg:col-span-4">
                            <div className="mb-6 hidden md:mb-0 lg:block">
                                <Link href="/">
                                    <Image
                                        src={LogoImage}
                                        alt="Orun Colored Logo"
                                        width={125}
                                        height={65}
                                    />
                                </Link>
                            </div>

                            <span className="mt-4 text-xs text-gray-500 lg:mt-0">
                                © {CURRENT_YEAR} {''}
                                <Link className="hover:underline" href="/">
                                    Orun™.
                                </Link>{' '}
                                All Rights Reserved.
                            </span>
                        </div>
                    </div>
                </Container>
            </footer>
        </>
    );
};

interface FooterColumnLink {
    href: string;
    text: string;
}

export interface FooterColumnProps {
    title: string;
    links: FooterColumnLink[];
}

const FooterColumn: FunctionComponent<FooterColumnProps> = ({ title, links }) => {
    return (
        <div className="lg:col-span-1">
            <h3
                className={`${futuraPTLight.variable} font-futuraPTLight text-sm font-bold uppercase tracking-wider text-black`}
            >
                {title}
            </h3>
            <ul className="mt-2">
                {links.map((link, index) => (
                    <li key={index}>
                        <Link
                            className={`text-sm capitalize text-gray-500 hover:underline ${commutersSans.variable} font-commutersSans font-extralight uppercase`}
                            href={link.href}
                        >
                            {link.text}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Footer;

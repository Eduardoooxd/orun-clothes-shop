import LogoImage from '@/images/logo/orun-logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { FunctionComponent } from 'react';
import Container from '../Container';
import Separator from '../Separator';

const Footer: FunctionComponent = () => {
    const CURRENT_YEAR = new Date().getFullYear();

    return (
        <footer className="my-4">
            <Container>
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link href="/">
                            <Image
                                src={LogoImage}
                                alt="Orun Colored Logo"
                                width={150}
                                height={32}
                            />
                        </Link>
                    </div>
                </div>
            </Container>

            <Separator />

            <Container>
                <div>
                    <span>
                        © {CURRENT_YEAR}{' '}
                        <Link className="hover:underline" href="/">
                            Orun™
                        </Link>
                        . All Rights Reserved.
                    </span>
                    <div className="flex"></div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;

import SmallLogoAlternativeImage from '@/images/logo/logo-small-alternative.png';
import BackgroundImage from '@/images/main_background.webp';
import Image from 'next/image';

export default function Hero() {
    return (
        <section className="relative mt-[-5rem] min-h-screen w-full">
            <Image
                priority
                src={BackgroundImage}
                alt="background"
                fill
                className="z-[-10]"
                style={{ objectFit: 'cover' }}
            />
            <div className={`flex min-h-screen w-full items-center justify-center `}>
                <Image
                    priority
                    src={SmallLogoAlternativeImage}
                    alt="logo"
                    width={400}
                    height={300}
                />
            </div>
        </section>
    );
}

import TiagoImage from '@/images/aboutUs/Tiago.webp';
import { commutersSans, futuraPTLight } from '@/lib/fontLoader';
import { store } from '@/store';
import Image from 'next/image';
import { FunctionComponent } from 'react';

const AboutUsContent: FunctionComponent = () => {
    const dictionary = store.getState().dictionary.dictionary;
    const { title, text } = dictionary.aboutUsPage;

    return (
        <section className="flex flex-col gap-12 sm:gap-24 lg:flex-row">
            <div className="relative h-80 w-full shrink-0 lg:h-auto lg:w-1/2">
                <Image
                    priority
                    src={TiagoImage}
                    alt="Orun Tiago background"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    fill
                    style={{ objectFit: 'cover' }}
                />
            </div>
            <div className="flex flex-col justify-center lg:w-1/2">
                <h1
                    className={`${futuraPTLight.variable} mb-4 font-futuraPTLight text-3xl font-bold uppercase text-black md:mb-8 md:text-4xl`}
                >
                    {title}
                </h1>

                <div
                    className={`prose ${commutersSans.variable} flex max-w-none flex-col gap-8 font-commutersSans md:text-base`}
                >
                    {text.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutUsContent;

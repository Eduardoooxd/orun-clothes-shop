'use client';

import { BUILDER_IO_API_KEY } from '@/config/builderIO';
import useGetDictionary from '@/hooks/useGetDictionary';
import PopUpImage from '@/images/popup/popup-image.png';
import { commutersSans, futuraPTLight } from '@/lib/fontLoader';
import { cn } from '@/lib/utils';
import builder from '@builder.io/react';
import Image from 'next/image';
import { useSessionStorage } from 'usehooks-ts';
import { NewsLetter } from '../Newsletter';
import Modal from '../ui/modal';

builder.init(BUILDER_IO_API_KEY);

export function FeatureItemModalContainer() {
    // @ts-expect-error
    return <FeatureItemModal />;
}

interface FeatureItemModalProps {
    toShow?: boolean;
}

export async function FeatureItemModal({ toShow = true }: FeatureItemModalProps) {
    const [featureItemShowed, setFeatureItemShowed] = useSessionStorage('featuredItemShow', false);

    {
        /* 
    const POP_UP_MODEL = 'pop-up';

    const POP_UP_CONTENT = await builder
        .get(POP_UP_MODEL, {
            prerender: false,
        })
        .toPromise();

        */
    }

    return (
        <Modal
            onClose={() => {
                //setFeatureItemShowed(true);
            }}
            open={!featureItemShowed}
        >
            <FeaturedItemModal />
            {/*<RenderBuilderContent model={POP_UP_MODEL} content={POP_UP_CONTENT} /> */}
        </Modal>
    );
}

const FeaturedItemModal = () => {
    const dictionary = useGetDictionary();
    const { title, description } = dictionary.popUpContent;

    return (
        <section className={cn('flex h-full flex-1 justify-between')}>
            <div className={cn('relative w-1/2')}>
                <Image
                    src={PopUpImage}
                    alt={'ORUN Values'}
                    fill
                    sizes="100vw (max-width: 768px) 50vw"
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                />
            </div>
            <section
                className={cn('flex w-1/2 flex-col justify-evenly px-2 pt-8 pb-2 sm:px-4 lg:px-6')}
            >
                <div className={cn('flex flex-col gap-y-1 text-center')}>
                    <h3
                        className={cn(
                            'text-xl font-bold uppercase sm:text-2xl lg:text-3xl',
                            `${commutersSans.variable} font-commutersSans`
                        )}
                    >
                        {title}
                    </h3>
                    <p
                        className={cn(
                            'text-xs uppercase sm:text-sm lg:text-base',
                            `${futuraPTLight.variable}  font-futuraPTLight`
                        )}
                    >
                        {description}
                    </p>
                </div>
                <NewsLetter />
            </section>
        </section>
    );
};

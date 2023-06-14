'use client';

import FrontImageAdhil from '@/images/products/ADHIL/principal.webp';
import { commutersSans, futuraPTLight } from '@/lib/fontLoader';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useState } from 'react';
import { useSessionStorage } from 'usehooks-ts';
import { NewsLetter } from '../Newsletter';
import Modal from '../ui/modal';

export default function FeatureItemModal() {
    const [featureItemShowed, setFeatureItemShowed] = useSessionStorage('featuredItemShow', false);

    const [show, setShow] = useState(!featureItemShowed);
    // TODO REFACTOR THIS

    return (
        <Modal
            onClose={() => {
                setShow(false);
                setFeatureItemShowed(true);
            }}
            isOpen={show}
        >
            <FeaturedItemModal />
        </Modal>
    );
}

const FeaturedItemModal = () => {
    return (
        <section className={cn('flex h-full flex-1 justify-between')}>
            <div className={cn('relative w-1/2')}>
                <Image
                    src={FrontImageAdhil}
                    alt={'Product Image'}
                    fill
                    sizes="(max-width: 768px) 50vw"
                    style={{ objectFit: 'cover' }}
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
                        ORUNIZA-TE
                    </h3>
                    <p
                        className={cn(
                            'text-xs uppercase sm:text-sm lg:text-base',
                            `${futuraPTLight.variable}  font-futuraPTLight`
                        )}
                    >
                        -15% de dia 21 a 28 de Junho
                    </p>
                </div>
                <NewsLetter />
            </section>
        </section>
    );
};

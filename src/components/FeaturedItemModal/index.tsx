'use client';

import MiniBlackLogoImage from '@/images/logo/logo-mini.png';
import FrontImageAdhil from '@/images/products/ADHIL/principal.webp';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useState } from 'react';
import { useSessionStorage } from 'usehooks-ts';
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
        <section className={cn('flex flex-col justify-between')}>
            <header className={cn('flex items-center justify-between')}>
                <div className={cn('flex flex-col gap-y-4')}>
                    <h3 className={cn('text-xl font-bold')}>ORUNIZA-TE</h3>
                    <p>-15% de dia 21 a 28 de Junho</p>
                </div>
                <Image priority src={MiniBlackLogoImage} alt="logo" width={100} height={20} />
            </header>
            <div className={cn('relative aspect-square max-h-[30rem]')}>
                <Image
                    src={FrontImageAdhil}
                    alt={'Product Image'}
                    fill
                    sizes="(max-width: 768px) 33vw, (max-width: 1024px) 20vw"
                    style={{ objectFit: 'cover' }}
                />
            </div>
        </section>
    );
};

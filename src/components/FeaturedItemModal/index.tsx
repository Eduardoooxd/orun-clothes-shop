'use client';

import { BUILDER_IO_API_KEY } from '@/config/builderIO';
import builder, { Builder } from '@builder.io/react';
import { useSessionStorage } from 'usehooks-ts';
import { RenderBuilderContent } from '../builder';
import Modal from '../ui/modal';

builder.init(BUILDER_IO_API_KEY);

export function FeatureItemModalContainer() {
    // @ts-expect-error
    return <FeatureItemModal />;
}

export async function FeatureItemModal() {
    const [featureItemShowed, setFeatureItemShowed] = useSessionStorage('featuredItemShow', false);

    const POP_UP_MODEL = 'pop-up';

    const POP_UP_CONTENT = await builder
        .get(POP_UP_MODEL, {
            prerender: false,
        })
        .toPromise();

    const builderEditing = Builder.isEditing || Builder.isPreviewing;
    //console.log(POP_UP_CONTENT);

    //const toShowUser = false;

    //if (featureItemShowed && !builderEditing) return null;

    return (
        <Modal>
            <RenderBuilderContent model={POP_UP_MODEL} content={POP_UP_CONTENT} />
        </Modal>
    );
}

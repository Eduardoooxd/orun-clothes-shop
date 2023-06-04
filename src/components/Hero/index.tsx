import { BUILDER_IO_API_KEY } from '@/config/builderIO';
import { builder } from '@builder.io/sdk';

import { RenderBuilderContent } from '../builder';

builder.init(BUILDER_IO_API_KEY);

export default async function Hero() {
    const HERO_MODEL = 'hero';

    const hero = await builder
        .get(HERO_MODEL, {
            prerender: false,
        })
        .toPromise();

    return (
        <section className="relative mt-[-5rem] min-h-screen w-full overflow-x-hidden">
            <RenderBuilderContent model={HERO_MODEL} content={hero} />
        </section>
    );
}

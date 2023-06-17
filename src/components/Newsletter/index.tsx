'use client';

import { BUILDER_IO_API_KEY } from '@/config/builderIO';
import useGetDictionary from '@/hooks/useGetDictionary';
import { futuraPTLight } from '@/lib/fontLoader';
import { cn } from '@/lib/utils';
import builder, { Builder } from '@builder.io/react';
import NewsletterForm from './form';

builder.init(BUILDER_IO_API_KEY);

export function NewsLetter() {
    const dictionary = useGetDictionary();
    const { signUpCallout } = dictionary.newsletterValidation;

    return (
        <section className={cn('prose flex flex-col justify-between gap-y-4 text-center')}>
            <h6
                className={cn(
                    'text-xs sm:text-sm lg:text-base',
                    `${futuraPTLight.variable}  font-futuraPTLight`
                )}
            >
                {signUpCallout}
            </h6>
            <NewsletterForm />
        </section>
    );
}

Builder.registerComponent(NewsLetter, {
    name: 'Newsletter Form',
    inputs: [],
});

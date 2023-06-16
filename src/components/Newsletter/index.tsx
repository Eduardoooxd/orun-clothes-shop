import { BUILDER_IO_API_KEY } from '@/config/builderIO';
import { futuraPTLight } from '@/lib/fontLoader';
import { cn } from '@/lib/utils';
import { store } from '@/store';
import builder, { Builder } from '@builder.io/react';
import NewsletterForm from './form';

builder.init(BUILDER_IO_API_KEY);

export function NewsLetter() {
    const dictionary = store.getState().dictionary.dictionary;
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

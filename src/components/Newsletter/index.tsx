import { futuraPTLight } from '@/lib/fontLoader';
import { cn } from '@/lib/utils';
import { store } from '@/store';
import NewsletterForm from './form';

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

import { i18nConfig } from '@/config/i18nConfig';
import { commutersSans, futuraPTLight } from '@/lib/fontLoader';
import { store } from '@/store';

export async function generateStaticParams() {
    const { locales } = i18nConfig;

    return locales.map((lang) => ({ lang }));
}

export default async function TermsConditionPage() {
    const dictionary = store.getState().dictionary.dictionary;
    const { title, topics } = dictionary.termsOfServicePage;

    return (
        <section className="flex flex-col text-justify">
            <h1
                className={`${futuraPTLight.variable} mb-8 font-futuraPTLight text-3xl font-bold uppercase lg:tracking-widest`}
            >
                {title}
            </h1>
            <section className={`flex flex-col gap-y-4 lg:max-w-4xl`}>
                {topics.map((topic, index) => {
                    return (
                        <p
                            className={`${commutersSans.variable} font-commutersSans text-base tracking-tight`}
                            key={index}
                        >
                            {topic}
                        </p>
                    );
                })}
            </section>
        </section>
    );
}

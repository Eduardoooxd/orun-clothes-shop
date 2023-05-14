import { i18nConfig } from '@/config/i18nConfig';
import { commutersSans, futuraPTLight } from '@/lib/fontLoader';
import { store } from '@/store';

export async function generateStaticParams() {
    const { locales } = i18nConfig;

    return locales.map((lang) => ({ lang }));
}

export default async function PrivacyPage() {
    const dictionary = store.getState().dictionary.dictionary;
    const { title, topics } = dictionary.privacyPage;

    return (
        <section className="flex flex-col text-justify">
            <h1
                className={`${futuraPTLight.variable} mb-8 font-futuraPTLight text-3xl font-bold uppercase lg:tracking-widest`}
            >
                {title}
            </h1>
            <section>
                {topics.map((topic) => {
                    const { privacyTopicTitle, privacyTopicText } = topic;
                    return (
                        <section className="mb-8" key={privacyTopicTitle}>
                            <h2
                                className={`${futuraPTLight.variable} mb-4 font-futuraPTLight text-lg font-bold uppercase tracking-wider`}
                            >
                                {privacyTopicTitle}
                            </h2>

                            <div className={`flex flex-col gap-y-4 lg:max-w-4xl`}>
                                {privacyTopicText.map((text, index) => (
                                    <p
                                        className={`${commutersSans.variable} font-commutersSans text-base tracking-tight`}
                                        key={`${privacyTopicTitle}-${index}`}
                                    >
                                        {text}
                                    </p>
                                ))}
                            </div>
                        </section>
                    );
                })}
            </section>
        </section>
    );
}

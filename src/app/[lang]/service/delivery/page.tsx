import { i18nConfig } from '@/config/i18nConfig';
import { commutersSans, futuraPTLight } from '@/lib/fontLoader';
import { store } from '@/store';

export async function generateStaticParams() {
    const { locales } = i18nConfig;

    return locales.map((lang) => ({ lang }));
}

export default async function DeliveryPage() {
    const dictionary = store.getState().dictionary.dictionary;
    const { title, topics } = dictionary.deliveryPage;

    return (
        <section className="flex flex-col text-justify">
            <h1
                className={`${futuraPTLight.variable} mb-8 font-futuraPTLight text-3xl font-bold uppercase lg:tracking-widest`}
            >
                {title}
            </h1>
            <section>
                {topics.map((topic) => {
                    const { deliveryTopicTitle, deliveryTopicText } = topic;
                    return (
                        <section className="mb-8" key={deliveryTopicTitle}>
                            <h2
                                className={`${futuraPTLight.variable} mb-4 font-futuraPTLight text-lg font-bold uppercase tracking-wider`}
                            >
                                {deliveryTopicTitle}
                            </h2>

                            <div className={`flex flex-col gap-y-4 lg:max-w-4xl`}>
                                {deliveryTopicText.map((text, index) => (
                                    <p
                                        className={`${commutersSans.variable} font-commutersSans text-base tracking-tight`}
                                        key={`${deliveryTopicText}-${index}`}
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

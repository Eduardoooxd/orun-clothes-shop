import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from '@/components/ui/accordion';
import { i18nConfig } from '@/config/i18nConfig';
import { commutersSans, futuraPTLight } from '@/lib/fontLoader';
import { store } from '@/store';

export async function generateStaticParams() {
    const { locales } = i18nConfig;

    return locales.map((lang) => ({ lang }));
}

export default async function ReturnsPage() {
    const dictionary = store.getState().dictionary.dictionary;
    const { returnsTopicTitle, topics } = dictionary.returnsPage;

    return (
        <section className="flex flex-col text-justify">
            <h1
                className={`${futuraPTLight.variable} mb-8 font-futuraPTLight text-3xl font-bold uppercase lg:tracking-widest`}
            >
                {returnsTopicTitle}
            </h1>
            <section>
                {topics.map((topic) => {
                    const { returnsTopicTitle, returnsTopicText } = topic;
                    return (
                        <Accordion type="single" collapsible key={returnsTopicTitle}>
                            <AccordionItem value="item-1">
                                <AccordionTrigger>
                                    <h2
                                        className={`${futuraPTLight.variable}  text-justify font-futuraPTLight text-lg font-bold uppercase`}
                                    >
                                        {returnsTopicTitle}
                                    </h2>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <section className={`flex flex-col gap-y-4 lg:max-w-4xl`}>
                                        {returnsTopicText.map((text, index) => (
                                            <p
                                                className={`${commutersSans.variable} font-commutersSans text-base tracking-tight`}
                                                key={`${returnsTopicText}-${index}`}
                                            >
                                                {text}
                                            </p>
                                        ))}
                                    </section>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    );
                })}
            </section>
        </section>
    );
}

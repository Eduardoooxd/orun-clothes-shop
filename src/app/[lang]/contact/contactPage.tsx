import { MainSectionTitle } from '@/components/Text';
import { commutersSans, futuraPTLight } from '@/lib/fontLoader';
import { store } from '@/store';
import ContactForm from './contactForm';

function ContactPage() {
    const dictionary = store.getState().dictionary.dictionary;
    const { title, description } = dictionary.contactUsPage;
    return (
        <section className="flex flex-col justify-between gap-12 lg:flex-row">
            <div className="max-w-prose">
                <MainSectionTitle textAlign="text-left"> {title} </MainSectionTitle>
                <div
                    className={`prose ${commutersSans.variable} flex max-w-none flex-col gap-8 font-commutersSans md:text-base`}
                >
                    <p className="mt-6 max-w-[45ch]">{description}</p>
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-2">
                            <h2
                                className={`${futuraPTLight.variable} mb-2 font-futuraPTLight text-xl font-bold uppercase`}
                            >
                                Email
                            </h2>
                            <p className="mb-2">info@orun.pt</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h2
                                className={`${futuraPTLight.variable} mb-2 font-futuraPTLight text-xl font-bold uppercase`}
                            >
                                WhatsApp
                            </h2>
                            <p>+351 927 757 633</p>
                        </div>
                    </div>
                </div>
            </div>
            <ContactForm />
        </section>
    );
}

export default ContactPage;

import { MainSectionTitle } from '@/components/Text';
import { commutersSans } from '@/lib/fontLoader';
import { store } from '@/store';

function ContactPage() {
    const dictionary = store.getState().dictionary.dictionary;
    const { title, description } = dictionary.contactUsPage;
    return (
        <div>
            <MainSectionTitle textAlign="text-left"> {title} </MainSectionTitle>
            <div
                className={`prose ${commutersSans.variable} flex max-w-none flex-col gap-8 font-commutersSans md:text-base`}
            >
                <p className="mt-6">{description}</p>
                <div className="flex flex-col gap-6">
                    <h2 className="mb-2 text-xl font-bold uppercase">Email</h2>
                    <p className="mb-2">info@orun.pt | orunmenswear@gmail.com</p>
                    <h2 className="mb-2 text-xl font-bold uppercase">WhatsApp</h2>
                    <p>+351 927 757 633</p>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;

import { futuraPTLight } from '@/lib/fontLoader';
import { getShopifyProducts } from '@/lib/shopify';
import { convertToShopifyLanguage } from '@/lib/shopify/converters';
import { store } from '@/store';
import Container from '../Container';
import ProductPreview from '../ProductPreview';
import LinkI18N from '../Shared/I18N/LinkI18N';

const TopPicks = async () => {
    const dictionary = store.getState().dictionary.dictionary;
    const lang = store.getState().dictionary.locale;

    const topPicks = await getShopifyProducts({ language: convertToShopifyLanguage(lang) });
    const { title } = dictionary.topPicks;

    return (
        <>
            <section className="w-full my-4">
                <Container>
                    <div className="flex">
                        <LinkI18N href="/products">
                            <h2
                                className={`font-futuraPTLight text-2xl font-semibold uppercase sm:text-3xl ${futuraPTLight.variable} text-left hover:underline`}
                            >
                                {title}
                            </h2>
                        </LinkI18N>
                    </div>

                    <div className="grid grid-cols-1 gap-4 mt-12 sm:grid-cols-2 lg:grid-cols-4">
                        {topPicks.slice(0, 4).map((product, index) => (
                            <ProductPreview key={index} product={product} />
                        ))}
                    </div>
                </Container>
            </section>
        </>
    );
};

export default TopPicks;

import { getTopPicks } from '@/lib/fetchProducts';
import { futuraPTLight } from '@/lib/fontLoader';
import { store } from '@/store';
import Container from '../Container';
import LinkI18N from '../Layout/LinkI18N';
import ProductPreview from '../ProductPreview';

const TopPicks = async () => {
    const dictionary = store.getState().dictionary.dictionary;
    const lang = store.getState().dictionary.locale;
    const topPicks = await getTopPicks(lang);
    const { title } = dictionary.topPicks;

    return (
        <>
            <section className="my-4 w-full">
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

                    <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
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

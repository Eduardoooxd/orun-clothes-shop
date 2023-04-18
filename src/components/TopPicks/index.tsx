import { MainSectionTitle } from '@/components/Text';
import { getTopPicks } from '@/lib/fetchProducts';
import { store } from '@/store';
import Container from '../Container';
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
                        <MainSectionTitle textAlign="text-left">{title}</MainSectionTitle>
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

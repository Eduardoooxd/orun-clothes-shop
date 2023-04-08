import { MainSectionTitle } from '@/components/Text';
import { Product } from '@/lib/product';
import { FunctionComponent } from 'react';
import Container from '../Container';
import ProductPreview from '../ProductPreview';

interface TopPicksProps {
    products: Product[];
}

const TopPicks: FunctionComponent<TopPicksProps> = ({ products }) => {
    return (
        <>
            <section className="my-4 w-full">
                <Container>
                    <div className="flex">
                        <MainSectionTitle textAlign="text-left">Top Picks</MainSectionTitle>
                    </div>

                    <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {products.slice(0, 4).map((product, index) => (
                            <ProductPreview key={index} product={product} />
                        ))}
                    </div>
                </Container>
            </section>
        </>
    );
};

export default TopPicks;

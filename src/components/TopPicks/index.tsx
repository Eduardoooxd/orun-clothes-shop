import { MainSectionTitle } from '@/components/Text';
import Product1 from '@/images/products/product1.jpg';
import Product2 from '@/images/products/product2.jpg';
import Product3 from '@/images/products/product3.jpg';
import { FunctionComponent } from 'react';
import Container from '../Container';
import ProductPreview, { ProductPreviewProps } from '../ProductPreview';

const TopPicks: FunctionComponent = () => {
    const PRODUCTS: ProductPreviewProps[] = [
        {
            image: Product1,
            productName: 'Product 1',
        },
        {
            image: Product2,
            productName: 'Product 2',
        },
        {
            image: Product3,
            productName: 'Product 3',
        },
        {
            image: Product1,
            productName: 'Product 1',
        },
    ];

    return (
        <section className="my-4">
            <Container>
                <div className="flex">
                    <MainSectionTitle textAlign="text-left">Top Picks</MainSectionTitle>
                </div>
                <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {PRODUCTS.map((product, index) => (
                        <ProductPreview key={index} {...product} />
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default TopPicks;

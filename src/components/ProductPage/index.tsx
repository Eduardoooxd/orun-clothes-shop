import { futuraPTLight } from '@/lib/fontLoader';
import { Product } from '@/lib/shopify/types';
import Image from 'next/image';
import { FunctionComponent } from 'react';
import ProductsCarousel from './ProductsCarousel';
import { VariantSelector } from './variantSelector';

interface ProductPageProps {
    product: Product;
}

const ProductPage: FunctionComponent<ProductPageProps> = ({ product }) => {
    const { id } = product;

    return (
        <main key={id} className="grid min-h-[calc(100dvh-5rem)] w-full lg:grid-cols-2 lg:gap-0">
            <ProductsCarousel>
                <CarouselItems product={product} />
            </ProductsCarousel>
            <ProductDescription product={product} />
        </main>
    );
};

interface CarouselItemsProps {
    product: Product;
}

function CarouselItems({ product }: CarouselItemsProps) {
    const { images, description } = product;

    return (
        <>
            {images.map((image) => (
                <div
                    key={image.url}
                    className="relative h-full min-h-[400px] cursor-crosshair sm:min-h-[500px]"
                >
                    <Image
                        src={image.url}
                        priority
                        alt={description}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 65vw, 50vw"
                        style={{ objectFit: 'cover' }}
                    />
                </div>
            ))}
        </>
    );
}

export default ProductPage;

interface ProductDescriptionProps {
    product: Product;
}

const ProductDescription: FunctionComponent<ProductDescriptionProps> = ({ product }) => {
    const { title, priceRange, description, category, id } = product;

    return (
        <div key={id} className="px-4 lg:px-24">
            <div>
                {/** Section to Title and Price */}
                <header className="py-4 sm:pt-0">
                    <h1
                        className={`${futuraPTLight.variable} -ml-1 font-futuraPTLight text-4xl font-bold leading-10 text-black`}
                    >
                        {title}
                    </h1>
                    <div className="flex w-full justify-between">
                        <p
                            className={`${
                                futuraPTLight.variable
                            } mt-4 font-futuraPTLight text-2xl font-bold text-black ${
                                Number(priceRange.maxVariantPrice.amount) > 99 ? 'ml-[-6px]' : ''
                            } `}
                        >
                            {priceRange.maxVariantPrice.amount}&nbsp;
                            {priceRange.maxVariantPrice.currencyCode}
                        </p>
                        <p
                            className={`${futuraPTLight.variable} mt-4 font-futuraPTLight text-base font-extrabold uppercase text-black`}
                        >
                            {category}
                        </p>
                    </div>
                </header>
                <hr className="border-t border-black" />
                {/** Section to Description */}
                <section className="my-4 py-4">
                    <p className={`${futuraPTLight.variable} font-futuraPTLight text-base`}>
                        {description}
                    </p>
                </section>

                <VariantSelector product={product} />
            </div>
        </div>
    );
};

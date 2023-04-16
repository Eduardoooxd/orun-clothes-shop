import { futuraPTLight } from '@/lib/fontLoader';
import { Product } from '@/lib/product';
import Image from 'next/image';
import { FunctionComponent } from 'react';
import ProductsCarousel from './ProductsCarousel';

interface ProductPageProps {
    product: Product;
}

const ProductPage: FunctionComponent<ProductPageProps> = ({ product }) => {
    const { id } = product;

    return (
        <main key={id} className="grid min-h-[calc(100dvh-5rem)] lg:grid-cols-2 lg:gap-0">
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
                    key={image.src}
                    className="relative h-full min-h-[400px] cursor-crosshair sm:min-h-[500px]"
                >
                    <Image
                        src={image}
                        priority
                        alt={description}
                        fill
                        loading={'eager'}
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
    const { title, price, description, category } = product;

    return (
        <div className="p-4 lg:p-24">
            <div>
                {/** Section to Title and Price */}
                <header className=" max-w-lg py-4 ">
                    <h1
                        className={`${futuraPTLight.variable} font-futuraPTLight text-4xl font-bold leading-10 text-black`}
                    >
                        {title}
                    </h1>
                    <p
                        className={`${futuraPTLight.variable} mt-4 font-futuraPTLight text-base font-bold text-black`}
                    >
                        {price}&nbsp;EUR
                    </p>
                </header>
                <hr className="border-t border-black" />
                {/** Section to Description */}
                <section className="py-4">
                    <p className={`${futuraPTLight.variable} font-futuraPTLight text-base`}>
                        {description}
                    </p>
                </section>
                <hr className="border-t border-black" />
                {/** Section to chose Size */}
                <section className="py-4">
                    <button
                        type="button"
                        aria-label="Open size selector"
                        className="flex w-full cursor-pointer justify-between"
                        disabled
                    >
                        <h4
                            className={`${futuraPTLight.variable} font-futuraPTLight text-sm uppercase`}
                        >
                            Size
                        </h4>

                        <div className="flex items-center gap-x-2 ">
                            <h4
                                className={`${futuraPTLight.variable} font-futuraPTLight text-sm uppercase`}
                            >
                                Choose size
                            </h4>
                            <svg
                                data-name="Layer 1"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 8 4.71"
                                className="h-2 w-2 transition-transform duration-200"
                            >
                                <path d="M7.29 0L4 3.29.71 0 0 .71l4 4 4-4L7.29 0z"></path>
                            </svg>
                        </div>
                    </button>
                </section>
                <hr className="border-t border-black" />
                {/** Section for button */}
                <ProductContactForm product={product} />
            </div>
        </div>
    );
};

interface ProductContactFormProps {
    product: Product;
}

const ProductContactForm: FunctionComponent<ProductContactFormProps> = ({ product }) => {
    return (
        <section className="py-4">
            <a
                className={`${futuraPTLight.variable} block w-full bg-black p-4 text-center font-futuraPTLight font-bold uppercase text-white`}
                href={`mailto:${process.env.CONTACT_EMAIL}?subject=Mail from our Website&body=Some body text here`}
            >
                Add to bag
            </a>
        </section>
    );
};

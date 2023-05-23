import { futuraPTLight } from '@/lib/fontLoader';
import { Product } from '@/lib/products';
import { store } from '@/store';
import Image from 'next/image';
import { FunctionComponent } from 'react';
import ChooseSize from './ChooseSize';
import ProductsCarousel from './ProductsCarousel';

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
                    key={image.src}
                    className="relative h-full min-h-[400px] cursor-crosshair sm:min-h-[500px]"
                >
                    <Image
                        src={image}
                        priority
                        alt={description}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 65vw, 50vw"
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
    const { title, price, description, category, sizes, colors } = product;

    const dictionary = store.getState().dictionary.dictionary;
    const { colorsText } = dictionary.productPage;

    return (
        <div className="px-4 lg:px-24">
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
                                price > 99 ? 'ml-[-6px]' : ''
                            } `}
                        >
                            {price}&nbsp;EUR
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
                <hr className="border-t border-black" />
                {/** Section to chose Size */}
                {colors?.length > 0 && (
                    <>
                        <section className="my-4 flex justify-between py-4">
                            <p
                                className={`${futuraPTLight.variable} font-futuraPTLight text-base uppercase`}
                            >
                                {colorsText}
                            </p>
                            <div className="flex items-center justify-between gap-2">
                                {colors.map((color, index) => (
                                    <>
                                        <p
                                            className={`${futuraPTLight.variable} flex list-none justify-end font-futuraPTLight text-sm uppercase`}
                                            key={index}
                                        >
                                            {color}
                                        </p>
                                        {index != colors.length - 1 && (
                                            <p className="text-black">|</p>
                                        )}
                                    </>
                                ))}
                            </div>
                        </section>
                        <hr className="border-t border-black" />
                    </>
                )}

                <ChooseSize sizes={sizes} />
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
    const { title, price } = product;

    const dictionary = store.getState().dictionary.dictionary;
    const { mailSubject } = dictionary.productPage.contactForm;

    const parsedEmailSubject = mailSubject.replace('${title}', title);
    // TODO Improve this
    let mailBody = dictionary.productPage.contactForm.mailBody.replaceAll('${title}', title);
    mailBody = mailBody.replaceAll('${price}', price.toString());

    const { orderText } = dictionary.productPage;

    return (
        <section className="my-4 flex flex-col gap-2 py-4">
            <a
                className={`${futuraPTLight.variable} block w-full bg-black p-4 text-center font-futuraPTLight font-bold uppercase text-white`}
                href={`mailto:${process.env.CONTACT_EMAIL}?subject=${parsedEmailSubject}&body=${mailBody}`}
            >
                {orderText}
            </a>
        </section>
    );
};

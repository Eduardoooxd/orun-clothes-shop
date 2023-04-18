import { commutersSans, futuraPTLight } from '@/lib/fontLoader';
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
    const { title, price, description, category, sizes } = product;

    return (
        <div className="px-4 lg:px-24">
            <div>
                {/** Section to Title and Price */}
                <header className=" py-4 sm:pt-0">
                    <h1
                        className={`${futuraPTLight.variable} font-futuraPTLight -ml-1 text-4xl font-bold leading-10 text-black`}
                    >
                        {title}
                    </h1>
                    <div className="flex w-full justify-between">
                        <p
                            className={`${
                                futuraPTLight.variable
                            } font-futuraPTLight mt-4 text-2xl font-bold text-black ${
                                price > 99 ? 'ml-[-6px]' : ''
                            } `}
                        >
                            {price}&nbsp;EUR
                        </p>
                        <p
                            className={`${futuraPTLight.variable} font-futuraPTLight mt-4 text-base font-extrabold uppercase text-black`}
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
    const { title, price, category, sizes } = product;

    const generateMailSubject = () => {
        return `I'm interested in buying "${title}"`;
    };

    const generateMailBody = () => {
        const lineBreak = '%0D%0A';
        const space = '%20';

        const mailBody = `
    Hello,
    ${lineBreak}
    ${lineBreak}
    ${space}${space}${space}${space}I'm interested in purchasing the following product:
    ${lineBreak}
    ${space}${space}${space}${space}${space}${space}${space}${space}${title} with size [to be chosen] with color [to be chosen]
    ${lineBreak}
    ${lineBreak}
    ${space}${space}${space}${space}Please let me know how I can proceed with the purchase.
    ${lineBreak}
    ${lineBreak}
    Product Details:
    ${lineBreak}
    ------------------
    ${lineBreak}
    ${space}${space}${space}${space}Category: ${category}
    ${lineBreak}
    ${space}${space}${space}${space}Price: ${price}
    ${lineBreak}
    ${space}${space}${space}${space}Available Sizes:
    ${lineBreak}
    ${space}${space}${space}${space}${sizes.join(', ')}
    ${lineBreak}
    ${lineBreak}
    ${lineBreak}
    Thank you!
  `;

        return mailBody;
    };

    const dictionary = store.getState().dictionary.dictionary;
    const { comingSoonText, orderText } = dictionary.productPage;

    return (
        <section className="my-4 flex flex-col gap-2 py-4">
            <span
                className={`text-xs uppercase text-gray-500  ${commutersSans.variable} font-commutersSans font-extralight uppercase`}
            >
                {comingSoonText}
            </span>
            <a
                className={`${futuraPTLight.variable} font-futuraPTLight block w-full bg-black p-4 text-center font-bold uppercase text-white`}
                href={`mailto:${
                    process.env.CONTACT_EMAIL
                }?subject=${generateMailSubject()}&body=${generateMailBody()}`}
            >
                {orderText}
            </a>
        </section>
    );
};

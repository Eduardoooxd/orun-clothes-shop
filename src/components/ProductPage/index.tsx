'use client';

import { futuraPTLight } from '@/lib/fontLoader';
import { Product } from '@/lib/product';
import Image from 'next/image';
import { FunctionComponent } from 'react';

interface ProductPageProps {
    product: Product;
}

const ProductPage: FunctionComponent<ProductPageProps> = ({ product }) => {
    const { id, title, price, description, category, images } = product;
    const [frontImage, sideImage, closeUpImage] = images;

    return (
        <main key={id} className="grid min-h-screen lg:grid-cols-2 lg:gap-0">
            <div className="relative min-h-[500px] cursor-crosshair">
                <Image
                    priority
                    src={frontImage}
                    alt={description}
                    fill
                    style={{ objectFit: 'cover' }}
                />
            </div>
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
                    <section className="py-4">
                        <button
                            className={`${futuraPTLight.variable} w-full bg-black p-4 text-center font-futuraPTLight font-bold uppercase text-white`}
                        >
                            Add to bag
                        </button>
                    </section>
                </div>
            </div>
            {/** Section for images 
            <div className="relative cursor-crosshair">
                <Image src={sideImage} alt={description} fill style={{ objectFit: 'cover' }} />
            </div>
            <div className="relative cursor-crosshair">
                <Image src={closeUpImage} alt={description} fill style={{ objectFit: 'cover' }} />
            </div>
            */}
        </main>
    );
};

export default ProductPage;

'use client';

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { futuraPTLight } from '@/lib/fontLoader';
import { Product, ProductVariant } from '@/lib/shopify/types';
import { store } from '@/store';
import { useState } from 'react';
import { AddToCart } from './addToCart';

type ParamsMap = {
    [key: string]: string; // ie. { color: 'Red', size: 'Large', ... }
};

type OptimizedVariant = {
    id: string;
    availableForSale: boolean;
    params: URLSearchParams;
    [key: string]: string | boolean | URLSearchParams; // ie. { color: 'Red', size: 'Large', ... }
};

interface VariantSelectorProps {
    product: Product;
}

export function VariantSelector({ product, ...props }: VariantSelectorProps) {
    const dictionary = store.getState().dictionary.dictionary;
    const { colorText, chooseColorText } = dictionary.productPage.colorContent;
    const { sizeText, chooseSizeText } = dictionary.productPage.sizeContent;

    const { colors, sizes } = product;

    const [selectedSize, setSelectedSize] = useState<string | null>(null);
    const [selectedColor, setSelectedColor] = useState<string | null>(null);
    const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(null);

    const haveColors = colors?.length > 0;
    const haveSizes = sizes?.length > 0;

    const handleColorChange = (value: string) => {
        setSelectedColor(value);
        setSelectedVariant(getSelectedVariant(value, selectedSize));
    };

    const handleSizeChange = (value: string) => {
        setSelectedSize(value);
        setSelectedVariant(getSelectedVariant(selectedColor, value));
    };

    const getSelectedVariant = (
        color: string | null,
        size: string | null
    ): ProductVariant | null => {
        if (!color && !size) {
            return product?.variants[0];
        }

        return (
            product.variants.find((variant) => {
                if (variant.color && variant.size) {
                    return variant.color === color && variant.size === size;
                } else if (variant.color) {
                    return variant.color === color;
                } else if (variant.size) {
                    return variant.size === size;
                }
                return false; // Neither color nor size provided
            }) || null
        );
    };

    return (
        <>
            <hr className="border-t border-black" />
            {/** Section to chose Size */}
            {haveColors ? (
                <>
                    <section className="my-4 flex flex-col gap-4 py-4">
                        <h3
                            className={`${futuraPTLight.variable} font-futuraPTLight text-base uppercase`}
                        >
                            {colorText}
                        </h3>
                        <Select onValueChange={(value) => handleColorChange(value)}>
                            <SelectTrigger
                                className={`${futuraPTLight.variable} w-full font-futuraPTLight text-sm uppercase`}
                            >
                                <SelectValue placeholder={chooseColorText} />
                            </SelectTrigger>
                            <SelectContent>
                                {colors.map((size) => (
                                    <SelectItem
                                        className={`${futuraPTLight.variable} font-futuraPTLight text-sm uppercase`}
                                        key={size}
                                        value={size}
                                    >
                                        {size}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </section>

                    <hr className="border-t border-black" />
                </>
            ) : null}

            {haveSizes ? (
                <>
                    <section className="my-4 flex flex-col gap-4 py-4">
                        <h3
                            className={`${futuraPTLight.variable} font-futuraPTLight text-base uppercase`}
                        >
                            {sizeText}
                        </h3>
                        <Select onValueChange={(value) => handleSizeChange(value)}>
                            <SelectTrigger
                                className={`${futuraPTLight.variable} w-full font-futuraPTLight text-sm uppercase`}
                            >
                                <SelectValue placeholder={chooseSizeText} />
                            </SelectTrigger>
                            <SelectContent>
                                {sizes.map((size) => (
                                    <SelectItem
                                        className={`${futuraPTLight.variable} font-futuraPTLight text-sm uppercase`}
                                        key={size}
                                        value={size}
                                    >
                                        {size}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </section>

                    <hr className="border-t border-black" />
                </>
            ) : null}

            <AddToCart selectedVariant={selectedVariant} />
        </>
    );
}

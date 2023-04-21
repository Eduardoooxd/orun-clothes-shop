'use client';
import ProductPreview from '@/components/ProductPreview';
import { MainSectionTitle } from '@/components/Text';
import { Product } from '@/lib/products';
import { store } from '@/store';
import { FunctionComponent, useEffect, useState } from 'react';
import Sidebar from './sidebar';

interface ProductsFilterProps {
    allCategories: string[];
    allProducts: Product[];
    predefinedCategories?: string | string[];
}

const ProductsFilter: FunctionComponent<ProductsFilterProps> = ({
    allProducts,
    allCategories,
    predefinedCategories,
}) => {
    const [filteredProducts, setFilteredProducts] = useState(allProducts);

    const [selectedCategories, setSelectedCategories] = useState<{ [key: string]: boolean }>(() => {
        const initialCategories: { [key: string]: boolean } = {};
        allCategories.forEach((category) => (initialCategories[category] = false));
        if (!!predefinedCategories) {
            [predefinedCategories]
                .flat()
                .forEach((category) => (initialCategories[category] = true));
        }
        return initialCategories;
    });

    const handleCategorySelect = (category: string) => {
        setSelectedCategories({
            ...selectedCategories,
            [category]: !selectedCategories[category],
        });
    };

    const filterProducts = (categories: { [key: string]: boolean }, products: Product[]) => {
        const selectedCategories = Object.keys(categories).filter(
            (category) => categories[category]
        );
        if (selectedCategories.length === 0) {
            return products;
        } else {
            return products.filter((product) =>
                selectedCategories.some((category) => product.category === category)
            );
        }
    };

    useEffect(() => {
        setFilteredProducts(filterProducts(selectedCategories, allProducts));
    }, [selectedCategories, allProducts]);

    const dictionary = store.getState().dictionary.dictionary;
    const { productsContent } = dictionary.productsPage;

    return (
        <>
            <div className="w-full md:w-1/5">
                <Sidebar
                    handleCategorySelect={handleCategorySelect}
                    categories={selectedCategories}
                />
            </div>
            <div className="mt-4 w-full sm:mt-0 md:w-4/5">
                <div className="flex">
                    <MainSectionTitle textAlign="text-left">
                        {productsContent.title}
                    </MainSectionTitle>
                </div>

                <div className="mt-4 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
                    {filteredProducts.map((product, index) => (
                        <ProductPreview key={index} product={product} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default ProductsFilter;

'use client';

import useGetDictionary from '@/hooks/useGetDictionary';
import { commutersSans, futuraPTLight } from '@/lib/fontLoader';

interface ProductSidebarProps {
    handleCategorySelect: (selectedCategory: string) => void;
    categories: { [key: string]: boolean };
}

const Sidebar = ({ handleCategorySelect, categories }: ProductSidebarProps) => {
    const dictionary = useGetDictionary();
    const { categoriesContent } = dictionary.productsPage;

    const categoriesName = Object.keys(categories);

    return (
        <div className="flex flex-col gap-y-4 sm:gap-y-12">
            <h2
                className={`${futuraPTLight.variable} pt-1 font-futuraPTLight text-xl font-bold uppercase`}
            >
                {categoriesContent.title}
            </h2>
            <ul className="grid grid-cols-2 gap-y-4 sm:grid-cols-1">
                {categoriesName.map((category) => (
                    <li key={category}>
                        <label className="flex max-w-[10rem] items-center justify-between gap-4">
                            <span
                                className={`${commutersSans.variable} font-commutersSans text-sm font-extralight uppercase text-black hover:underline`}
                            >
                                {category}
                            </span>

                            <input
                                type="checkbox"
                                className="h-4 w-4 bg-transparent"
                                checked={categories[category]}
                                onChange={() => handleCategorySelect(category)}
                            />
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;

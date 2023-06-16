import { futuraPTLight } from '@/lib/fontLoader';
import { CategoryFilterItems } from './categoryFilterItem';

interface CategoryFilterProps {
    categories: string[];
    title: string;
}

export function CategoryFilter({ categories, title }: CategoryFilterProps) {
    return (
        <nav className="col-span-2 w-full flex-none md:py-4 md:pl-10">
            <h2
                className={`${futuraPTLight.variable} hidden font-futuraPTLight  font-bold uppercase text-black dark:text-white md:block`}
            >
                {title}
            </h2>

            <CategoryFilterItems title={title} categories={categories} />
        </nav>
    );
}

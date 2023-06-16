'use client';

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { createUrl } from '@/lib/utils';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

interface CategoryFilterItemsProps {
    categories: string[];
    title: string;
}

export const CategoryFilterItems = ({ categories, title }: CategoryFilterItemsProps) => {
    const router = useRouter();
    const pathName = usePathname();
    const searchParams = useSearchParams();
    const categoryQuery = searchParams.get('category');

    const categoryToDisplay = categoryQuery
        ? categories.find((category) => category === categoryQuery) ?? title
        : title;

    const isACategorySelected = () => {
        return categories.some((category) => category === categoryQuery);
    };

    const defaultCategoryToDisplay = isACategorySelected() ? 'Clear' : title;

    const urlToRedirect = (selectedCategory: string) => {
        const newQueryParameters = new URLSearchParams(searchParams);

        // Finding value, because selectedCategory can be the title or clear filter.
        categories.find((category) => category === selectedCategory)
            ? newQueryParameters.set('category', selectedCategory)
            : newQueryParameters.delete('category');

        return createUrl(pathName, newQueryParameters);
    };

    function onValueChange(value: string) {
        console.log(value);
        const newUrl = urlToRedirect(value);
        router.replace(newUrl);
    }

    return (
        <>
            <div className="md:hidden">
                <Select onValueChange={(value) => onValueChange(value)}>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder={categoryToDisplay} />
                    </SelectTrigger>
                    <SelectContent>
                        {isACategorySelected() && (
                            <SelectItem key={-1} value="clear">
                                Clear
                            </SelectItem>
                        )}
                        {categories.map((category, index) => (
                            <SelectItem key={index} value={category.toLowerCase()}>
                                {category}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            {/* 
          <ul className="hidden md:block">
              {categories.map((item: ListItem, index) => (
                  <FilterItem key={index} item={item} />
              ))}
          </ul>

      
          <ul className="md:hidden">
              <FilterItemDropdown list={list} />
      </ul>
      */}
        </>
    );
};

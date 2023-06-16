import { SortFilterItem } from '@/config/shopifyConfig';
import { futuraPTLight } from '@/lib/fontLoader';
import FilterItemDropdown from './filterDropdown';
import { FilterItem } from './filterItem';

export type ListItem = SortFilterItem | PathFilterItem;
export type PathFilterItem = { title: string; path: string };

interface FilterListProps {
    list: ListItem[];
    title: string;
}

export default function FilterList({ list, title }: FilterListProps) {
    return (
        <>
            <nav className="col-span-2 w-full flex-none md:py-4 md:pl-10">
                <h2
                    className={`${futuraPTLight.variable} hidden font-futuraPTLight font-bold uppercase text-black dark:text-white md:block`}
                >
                    {title}
                </h2>

                <ul className="hidden md:block">
                    {list.map((item: ListItem, index) => (
                        <FilterItem key={index} item={item} />
                    ))}
                </ul>

                <ul className="md:hidden">
                    <FilterItemDropdown list={list} />
                </ul>
            </nav>
        </>
    );
}

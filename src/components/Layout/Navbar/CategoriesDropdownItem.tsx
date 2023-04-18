import { commutersSans } from '@/lib/fontLoader';
import Link from 'next/link';
import { FunctionComponent } from 'react';

interface CategoriesDropdownItemProps {
    category: string;
}

const CategoriesDropdownItem: FunctionComponent<CategoriesDropdownItemProps> = ({ category }) => {
    return (
        <Link
            className={`${commutersSans.variable} font-commutersSans flex h-8 items-center font-extralight uppercase`}
            href={`products/${category}`}
        >
            {category}
        </Link>
    );
};

export default CategoriesDropdownItem;

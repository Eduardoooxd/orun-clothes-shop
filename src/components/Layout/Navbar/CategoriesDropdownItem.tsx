import { commutersSans } from '@/lib/fontLoader';
import Link from 'next/link';
import { FunctionComponent } from 'react';

interface CategoriesDropdownItemProps {
    category: string;
}

const CategoriesDropdownItem: FunctionComponent<CategoriesDropdownItemProps> = ({ category }) => {
    return (
        <Link
            className={`${commutersSans.variable} flex h-8 items-center font-commutersSans font-extralight uppercase`}
            href={`products/${category}`}
        >
            {category}
        </Link>
    );
};

export default CategoriesDropdownItem;

import { commutersSans } from '@/lib/fontLoader';
import { FunctionComponent } from 'react';
import LinkI18N from '../LinkI18N';

interface CategoriesDropdownItemProps {
    category: string;
}

const CategoriesDropdownItem: FunctionComponent<CategoriesDropdownItemProps> = ({ category }) => {
    return (
        <LinkI18N
            className={`${commutersSans.variable} flex h-8 items-center font-commutersSans font-extralight uppercase transition hover:underline`}
            href={`products?category=${category}`}
        >
            {category}
        </LinkI18N>
    );
};

export default CategoriesDropdownItem;

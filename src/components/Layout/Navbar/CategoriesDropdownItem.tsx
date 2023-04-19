import { commutersSans } from '@/lib/fontLoader';
import { FunctionComponent } from 'react';
import LinkI18N from '../LinkI18N';

interface CategoriesDropdownItemProps {
    category: string;
    onClick?: () => void;
}

const CategoriesDropdownItem: FunctionComponent<CategoriesDropdownItemProps> = ({
    category,
    onClick,
}) => {
    return (
        <LinkI18N
            className={`${commutersSans.variable} flex h-8 items-center font-commutersSans text-sm font-extralight uppercase transition hover:underline sm:text-base`}
            href={`products?category=${category}`}
            onClick={onClick}
        >
            {category}
        </LinkI18N>
    );
};

export default CategoriesDropdownItem;

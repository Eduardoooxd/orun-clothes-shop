'use client';

import useGetCurrentLocale from '@/hooks/useGetCurrentLocale';
import { commutersSans } from '@/lib/fontLoader';
import { cn, createUrl, redirectedWithLocale } from '@/lib/utils';
import { store } from '@/store';
import { useRouter, useSearchParams } from 'next/navigation';
import { Dispatch, SetStateAction } from 'react';

interface SearchProps {
    setIsMobileMenuOpen?: Dispatch<SetStateAction<boolean>>;
    className?: string;
}

export function SearchBar({ setIsMobileMenuOpen, className }: SearchProps) {
    const dictionary = store.getState().dictionary.dictionary;
    const { searchProductsText } = dictionary.searchTooltipContent;

    const router = useRouter();
    const searchParams = useSearchParams();
    const currentLocale = useGetCurrentLocale();

    function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const val = e.target as HTMLFormElement;
        const search = val.search as HTMLInputElement;
        const newParams = new URLSearchParams(searchParams.toString());

        if (search.value) {
            newParams.set('query', search.value);
        } else {
            newParams.delete('query');
        }

        router.push(redirectedWithLocale(createUrl('/search', newParams), currentLocale));
        setIsMobileMenuOpen && setIsMobileMenuOpen(false);
    }

    return (
        <form
            onSubmit={onSubmit}
            className={cn(
                'relative m-0 flex w-full items-center border border-gray-200 bg-transparent p-0 dark:border-gray-500',
                className
            )}
        >
            <input
                type="text"
                name="search"
                placeholder={searchProductsText}
                autoComplete="off"
                defaultValue={searchParams?.get('query') || ''}
                className={cn(
                    'w-full px-4 py-2 text-black dark:bg-black dark:text-gray-100',
                    `${commutersSans.variable}  font-commutersSans`
                )}
            />
        </form>
    );
}

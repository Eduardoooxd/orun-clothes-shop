'use client';

import SearchIcon from '@/components/Icons/searchIcon';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import useGetCurrentLocale from '@/hooks/useGetCurrentLocale';
import { commutersSans } from '@/lib/fontLoader';
import { cn, createUrl, redirectedWithLocale } from '@/lib/utils';
import { store } from '@/store';
import { useRouter, useSearchParams } from 'next/navigation';
import { Dispatch, SetStateAction } from 'react';

interface SearchProps {
    setIsMobileMenuOpen?: Dispatch<SetStateAction<boolean>>;
}

export default function Search({ setIsMobileMenuOpen }: SearchProps) {
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
        <Popover>
            <PopoverTrigger>
                <SearchIcon
                    className={cn(
                        'h-6 transition-all ease-in-out hover:scale-110 hover:text-gray-500 dark:hover:text-gray-300'
                    )}
                />
            </PopoverTrigger>
            <PopoverContent>
                <form
                    onSubmit={onSubmit}
                    className="relative m-0 flex w-full items-center border border-gray-200 bg-transparent p-0 dark:border-gray-500"
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
            </PopoverContent>
        </Popover>
    );
}

'use client';

import SearchIcon from '@/components/Icons/searchIcon';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { Dispatch, SetStateAction } from 'react';
import { SearchBar } from './searchBar';

interface SearchProps {
    setIsMobileMenuOpen?: Dispatch<SetStateAction<boolean>>;
}

export default function Search({ setIsMobileMenuOpen }: SearchProps) {
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
                <SearchBar setIsMobileMenuOpen={setIsMobileMenuOpen} />
            </PopoverContent>
        </Popover>
    );
}

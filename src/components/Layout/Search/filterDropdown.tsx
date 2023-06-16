'use client';

import CaretRightIcon from '@/components/Icons/caret-right';
import { commutersSans } from '@/lib/fontLoader';
import { cn } from '@/lib/utils';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { ListItem } from './filter';
import { FilterItem } from './filterItem';

export default function FilterItemDropdown({ list }: { list: ListItem[] }) {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [active, setActive] = useState('');
    const [openSelect, setOpenSelect] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setOpenSelect(false);
            }
        };

        window.addEventListener('click', handleClickOutside);
        return () => window.removeEventListener('click', handleClickOutside);
    }, []);

    useEffect(() => {
        list.forEach((listItem: ListItem) => {
            if (
                ('path' in listItem && pathname === listItem.path) ||
                ('slug' in listItem && searchParams.get('sort') === listItem.slug)
            ) {
                setActive(listItem.title);
            }
        });
    }, [pathname, list, searchParams]);

    return (
        <div className="relative" ref={ref}>
            <div
                onClick={() => {
                    setOpenSelect(!openSelect);
                }}
                className="flex w-full items-center justify-between rounded border border-black/30 px-4 py-2 text-sm dark:border-white/30"
            >
                <div
                    className={cn(
                        'w-full uppercase text-black dark:bg-black',
                        `${commutersSans.variable} font-commutersSans`
                    )}
                >
                    {active}
                </div>
                <CaretRightIcon className="h-4 rotate-90" />
            </div>
            {openSelect && (
                <div
                    onClick={() => {
                        setOpenSelect(false);
                    }}
                    className={cn(
                        'absolute  z-40 w-full rounded-b-md bg-white p-4 shadow-md dark:bg-black',
                        `${commutersSans.variable}  font-commutersSans`
                    )}
                >
                    {list.map((item: ListItem, i) => (
                        <FilterItem key={i} item={item} />
                    ))}
                </div>
            )}
        </div>
    );
}

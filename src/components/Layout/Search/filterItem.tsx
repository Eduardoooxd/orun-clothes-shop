'use client';

import type { SortFilterItem } from '@/config/shopifyConfig';
import { cn, createUrl } from '@/lib/utils';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import type { ListItem, PathFilterItem } from './filter';

function PathFilterItem({ item }: { item: PathFilterItem }) {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [active, setActive] = useState(pathname === item.path);
    const newParams = new URLSearchParams(searchParams.toString());

    newParams.delete('query');

    useEffect(() => {
        setActive(pathname === item.path);
    }, [pathname, item.path]);

    return (
        <li className="mt-2 flex text-sm text-gray-400" key={item.title}>
            <Link
                href={createUrl(item.path, newParams)}
                className={cn('w-full hover:text-gray-800 dark:hover:text-gray-100', {
                    'text-gray-600 dark:text-gray-400': !active,
                    'font-semibold uppercase text-black dark:text-white': active,
                })}
            >
                {item.title}
            </Link>
        </li>
    );
}

function SortFilterItem({ item }: { item: SortFilterItem }) {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [active, setActive] = useState(searchParams.get('sort') === item.slug);
    const query = searchParams.get('query');

    useEffect(() => {
        setActive(searchParams.get('sort') === item.slug);
    }, [searchParams, item.slug]);

    const href =
        item.slug && item.slug.length
            ? createUrl(
                  pathname,
                  new URLSearchParams({
                      ...(query && { query }),
                      sort: item.slug,
                  })
              )
            : pathname;

    return (
        <li className="mt-2 flex text-sm text-gray-400" key={item.title}>
            <Link
                prefetch={false}
                href={href}
                className={cn('w-full  hover:text-gray-800 dark:hover:text-gray-100', {
                    'text-gray-600 dark:text-gray-400': !active,
                    'font-semibold uppercase text-black dark:text-white': active,
                })}
            >
                {item.title}
            </Link>
        </li>
    );
}

export function FilterItem({ item }: { item: ListItem }) {
    return 'path' in item ? <PathFilterItem item={item} /> : <SortFilterItem item={item} />;
}

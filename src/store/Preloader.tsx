'use client';

import { Locale } from '@/config/i18nConfig';
import { Dictionary } from '@/dictionaries/dictionaries';
import { Product } from '@/lib/shopify/types';
import { store } from '@/store';
import { setDictionary, setLocale } from '@/store/dictionarySlice';
import { useRef } from 'react';
import { setCategories, setProducts } from './productsSlice';

interface PreloaderProps {
    dictionary: Dictionary;
    locale: Locale;
    products: Product[];
    categories: string[];
}

function Preloader({ locale, dictionary, products, categories }: PreloaderProps) {
    const loaded = useRef(false);
    if (!loaded.current) {
        store.dispatch(setDictionary(dictionary));
        store.dispatch(setLocale(locale));
        store.dispatch(setProducts(products));
        store.dispatch(setCategories(categories));

        loaded.current = true;
    }

    return null;
}

export default Preloader;

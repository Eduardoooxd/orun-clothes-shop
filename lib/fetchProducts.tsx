import { Locale } from '@/config/i18nConfig';
import {
    ENProducts,
    ExclusiveProducts,
    ShirtProducts,
    SweatersProducts,
    TunicsProducts,
} from './ENProducts';
import { Product } from './products';
import {
    CamisasProducts,
    CamisolasProducts,
    ExclusivoProducts,
    PTProducts,
    TunicasProducts,
} from './PTProducts';

async function fetchProducts(locale: Locale): Promise<Product[]> {
    let productsByLocale: Product[];
    switch (locale) {
        case 'pt':
            productsByLocale = PTProducts;
            break;
        case 'en':
            productsByLocale = ENProducts;
            break;
        default:
            throw new Error('Product locale not found');
    }

    const myPromise = new Promise<Product[]>((resolve) => {
        resolve(productsByLocale);
    });

    return myPromise;
}

export async function getProducts(locale: Locale): Promise<Product[]> {
    // map each product in the array to an instance of the Product interface
    return await fetchProducts(locale);
}

export async function getProduct(id: string, locale: Locale): Promise<Product | undefined> {
    const products = await fetchProducts(locale);

    return products.find((product) => product.id === id);
}

export async function getCategories(locale: Locale): Promise<string[]> {
    const products = await fetchProducts(locale);

    return Array.from(new Set(products.map((product) => product.category)));
}

export async function getProductsByCategory(category: string, locale: Locale): Promise<Product[]> {
    const products = await fetchProducts(locale);

    return products.filter((product) => product.category === category);
}

export async function getTopPicks(locale: Locale): Promise<Product[]> {
    let topPicks: Product[] = [];
    switch (locale) {
        case 'pt':
            topPicks = [
                ExclusivoProducts[0],
                TunicasProducts[0],
                CamisolasProducts[0],
                CamisasProducts[0],
            ];
            break;
        case 'en':
            topPicks = [
                ExclusiveProducts[0],
                TunicsProducts[0],
                SweatersProducts[0],
                ShirtProducts[0],
            ];
            break;
        default:
            throw new Error('Product locale not found');
    }

    return topPicks;
}

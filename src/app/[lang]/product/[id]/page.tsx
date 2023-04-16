import ProductPage from '@/components/ProductPage';
import { i18nConfig } from '@/config/i18nConfig';
import { getProduct, getProducts } from '@/lib/fetchProducts';
import { notFound } from 'next/navigation';

interface PageProps {
    params: {
        id: string;
        lang: string;
    };
}
export async function generateStaticParams() {
    const { locales } = i18nConfig;
    const products = await getProducts();

    const params: [
        {
            id: string;
            lang: string;
        }?
    ] = [];

    products.forEach((product) => {
        locales.forEach((locale) => {
            params.push({ id: product.id, lang: locale });
        });
    });

    return params;
}

export default async function Page({ params }: PageProps) {
    const { id } = params;
    const product = await getProduct(id);

    if (!product) {
        notFound();
    }

    return <ProductPage product={product} />;
}

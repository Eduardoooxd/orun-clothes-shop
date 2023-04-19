import ProductPage from '@/components/ProductPage';
import type { Locale } from '@/config/i18nConfig';
import { getProduct, getProducts } from '@/lib/fetchProducts';
import { notFound } from 'next/navigation';

interface PageProps {
    params: {
        id: string;
        lang: Locale;
    };
}
export async function generateStaticParams() {
    const params: [
        {
            id: string;
            lang: string;
        }?
    ] = [];

    const PTProducts = await getProducts('pt');
    const ENProducts = await getProducts('en');

    PTProducts.forEach((product) => params.push({ id: product.id, lang: 'pt' }));
    ENProducts.forEach((product) => params.push({ id: product.id, lang: 'en' }));

    return params;
}

export default async function Page({ params }: PageProps) {
    const { id, lang } = params;
    const product = await getProduct(id, lang);

    if (!product) {
        notFound();
    }

    return <ProductPage product={product} />;
}

import ProductPage from '@/components/ProductPage';
import { Locale } from '@/config/i18nConfig';
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

    // TODO Improve logic whenever if we have more than 2 locales on the future
    const [PTProducts, ENProducts] = await Promise.all([getProducts('pt'), getProducts('en')]);

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

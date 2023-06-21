import ProductPage from '@/components/ProductPage';
import { Locale } from '@/config/i18nConfig';
import { getShopifyProduct, getShopifyProducts } from '@/lib/shopify';
import { convertToShopifyLanguage } from '@/lib/shopify/converters';
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
    const [PTProducts, ENProducts] = await Promise.all([
        getShopifyProducts({ language: 'PT' }),
        getShopifyProducts({ language: 'EN' }),
    ]);

    PTProducts.forEach((product) => params.push({ id: product.handle, lang: 'pt' }));
    ENProducts.forEach((product) => params.push({ id: product.handle, lang: 'en' }));

    return params;
}

export default async function Page({ params }: PageProps) {
    const { id, lang } = params;
    const shopifyProduct = await getShopifyProduct({
        handle: id,
        language: convertToShopifyLanguage(lang),
    });

    if (!shopifyProduct) {
        notFound();
    }

    return <ProductPage product={shopifyProduct} />;
}

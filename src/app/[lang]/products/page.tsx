import ProductPreview from '@/components/ProductPreview';
import { MainSectionTitle } from '@/components/Text';
import { i18nConfig, Locale } from '@/config/i18nConfig';
import { getProducts } from '@/lib/fetchProducts';
import { Product } from '@/lib/products';
import Sidebar from './sidebar';

interface ProductsPageProps {
    params: {
        lang: Locale;
    };
}

export async function generateStaticParams() {
    const { locales } = i18nConfig;

    return locales.map((lang) => ({ lang }));
}

export default async function Products({ params }: ProductsPageProps) {
    const { lang } = params;
    const products = await getProducts(lang);
    const categories = getCategories(products);

    return (
        <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/5">
                <Sidebar allCategories={categories} />
            </div>
            <div className="w-full p-4 md:w-4/5">
                <div className="flex">
                    <MainSectionTitle textAlign="text-left">Products</MainSectionTitle>
                </div>

                <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {products.map((product, index) => (
                        <ProductPreview key={index} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
}

function getCategories(products: Product[]): string[] {
    return Array.from(new Set(products.map((product) => product.category)));
}

import ProductPreview from '@/components/ProductPreview';
import { MainSectionTitle } from '@/components/Text';
import { getProducts } from '@/lib/fetchProducts';
import { Product } from '@/lib/product';
import Sidebar from './sidebar';

export default async function Products() {
    const products = await getProducts();
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

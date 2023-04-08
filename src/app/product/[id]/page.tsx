import ProductPage from '@/components/ProductPage';
import { getProduct } from '@/lib/fetchProducts';
import { notFound } from 'next/navigation';

interface PageProps {
    params: {
        id: string;
    };
}
/*
export async function generateStaticParams() {
    const products = await getProducts();

    return products.map((product) => {
        return { id: product.id };
    });
}*/

export default async function Page({ params }: PageProps) {
    const { id } = params;
    const product = await getProduct(id);

    if (!product) {
        notFound();
    }

    return <ProductPage product={product} />;
}

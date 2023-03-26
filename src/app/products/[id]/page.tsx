import { getProducts } from '@/lib/fetchProducts';
import { notFound } from 'next/navigation';

interface PageProps {
    params: {
        id: string;
    };
}

export async function generateStaticParams() {
    const products = await getProducts();

    return products.map((product) => {
        return { id: product.id };
    });
}

export default async function Page({ params }: PageProps) {
    const { id } = params;

    const products = await getProducts();

    if (!products.find((product) => product.id === id)) {
        notFound();
    }

    return <div>My Post</div>;
}

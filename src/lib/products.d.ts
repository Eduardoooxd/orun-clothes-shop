import type { StaticImageData } from 'next/image';
interface Product {
    id: string;
    title: string;
    price: number;
    description: string;
    category: string;
    sizes: string[];
    colors: string[];
    images: StaticImageData[];
}

import { exampleProducts, Product } from './product';

async function fetchProducts(): Promise<Product[]> {
    const myPromise = new Promise<Product[]>((resolve) => {
        setTimeout(() => {
            resolve(exampleProducts);
        }, 300);
    });

    return myPromise;
}

export async function getProducts(): Promise<Product[]> {
    const products = await fetchProducts();
    // map each product in the array to an instance of the Product interface
    return products;
}

export async function getProduct(id: string): Promise<Product | undefined> {
    const products = await fetchProducts();

    return products.find((product) => product.id === id);
}

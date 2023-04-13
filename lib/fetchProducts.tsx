import {
    CalcaoProducts,
    CamisasProducts,
    CamisolasProducts,
    ExclusivoProducts,
    Product,
    TunicasProducts,
} from './product';

async function fetchProducts(): Promise<Product[]> {
    const allProducts = [
        TunicasProducts,
        CamisolasProducts,
        CamisasProducts,
        CalcaoProducts,
        ExclusivoProducts,
    ];
    const myPromise = new Promise<Product[]>((resolve) => {
        resolve(allProducts.flat());
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

export async function getCategories(): Promise<string[]> {
    const products = await fetchProducts();

    return Array.from(new Set(products.map((product) => product.category)));
}

export async function getProductsByCategory(category: string): Promise<Product[]> {
    const products = await fetchProducts();

    return products.filter((product) => product.category === category);
}

import { getProduct } from '@/lib/fetchProducts';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
        return NextResponse.error();
    }

    const product = await getProduct(id);
    return NextResponse.json(product);
}

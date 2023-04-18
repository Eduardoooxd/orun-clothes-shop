import { Locale } from '@/config/i18nConfig';
import { getProduct } from '@/lib/fetchProducts';
import { NextResponse } from 'next/server';

export async function GET(req: Request, { params }: { params: { lang: Locale } }) {
    const { lang } = params;
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
        return NextResponse.error();
    }

    const product = await getProduct(id, lang);
    return NextResponse.json(product);
}

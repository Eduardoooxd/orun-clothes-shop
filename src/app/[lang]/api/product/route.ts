import { getShopifyProducts } from '@/lib/shopify';
import { convertToShopifyLanguage } from '@/lib/shopify/converters';
import { NextResponse } from 'next/server';

export async function GET(request: Request, { params }: { params: { lang: string } }) {
    const { lang } = params;
    const shopifyProducts = await getShopifyProducts({ language: convertToShopifyLanguage(lang) });

    return NextResponse.json({ shopifyProducts });
}

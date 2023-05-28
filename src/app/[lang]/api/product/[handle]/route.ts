import { getShopifyProduct } from '@/lib/shopify';
import { convertToShopifyLanguage } from '@/lib/shopify/converters';
import { NextResponse } from 'next/server';

export async function GET(
    request: Request,
    { params }: { params: { lang: string; handle: string } }
) {
    const { lang, handle } = params;
    const shopifyProducts = await getShopifyProduct({
        handle,
        language: convertToShopifyLanguage(lang),
    });

    return NextResponse.json({ shopifyProducts });
}

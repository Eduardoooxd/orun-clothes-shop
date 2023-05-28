import { SHOPIFY_REVALIDATE_TAG } from '@/config/shopifyConfig';
import { revalidateTag } from 'next/cache';
import { NextResponse } from 'next/server';

export async function POST() {
    revalidateTag(SHOPIFY_REVALIDATE_TAG);
    return NextResponse.json({ revalidated: true, now: Date.now() });
}

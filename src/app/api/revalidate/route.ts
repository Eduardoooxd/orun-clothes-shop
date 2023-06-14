import { TAGS } from '@/config/shopifyConfig';
import { revalidateTag } from 'next/cache';
import { NextResponse } from 'next/server';

// We always need to respond with a 200 status code to Shopify,
// otherwise it will continue to retry the request.
export async function POST(): Promise<Response> {
    revalidateTag(TAGS.products);

    return NextResponse.json({ status: 200, revalidated: true, now: Date.now() });
}

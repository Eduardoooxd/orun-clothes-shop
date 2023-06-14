import { TAGS } from '@/config/shopifyConfig';
import { timeout } from '@/lib/utils';
import { revalidateTag } from 'next/cache';
import { NextResponse } from 'next/server';

export const config = {
    runtime: 'edge',
};

// We always need to respond with a 200 status code to Shopify,
// otherwise it will continue to retry the request.
export async function POST(): Promise<Response> {
    // We need to wait a time to ensure that the graphql API data is updated, before we can cache it again.
    await timeout(28000);
    revalidateTag(TAGS.products);

    return NextResponse.json({ status: 200, revalidated: true, now: Date.now() });
}

import { removeFromCart } from '@/lib/shopify';
import { convertIdToCartLineId } from '@/lib/shopify/converters';
import { isShopifyError } from '@/lib/type-guards';
import { formatErrorMessage } from '@/lib/utils';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

interface DeleteParams {
    params: {
        lineId: string;
    };
}

export async function DELETE(req: NextRequest, { params }: DeleteParams) {
    const cartId = cookies().get('cartId')?.value;

    const { lineId } = params;

    if (!cartId || !lineId) {
        return NextResponse.json({ error: 'Missing cartId or lineId' }, { status: 400 });
    }

    const lineIdParsed = convertIdToCartLineId(lineId, cartId);

    try {
        await removeFromCart(cartId, [lineIdParsed]);
        return NextResponse.json({ status: 204 });
    } catch (e) {
        if (isShopifyError(e)) {
            return NextResponse.json(
                { message: formatErrorMessage(e.message) },
                { status: e.status }
            );
        }

        return NextResponse.json({ status: 500 });
    }
}

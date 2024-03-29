import { createCart, getCart } from '@/lib/shopify';
import { convertToShopifyLanguage } from '@/lib/shopify/converters';
import { store } from '@/store';
import { cookies } from 'next/headers';
import CartButton from './cardButton';

export default async function Cart() {
    const cartId = cookies().get('cartId')?.value;
    let cartIdUpdated = false;
    let cart;

    const dictionary = store.getState().dictionary.dictionary;

    if (cartId) {
        cart = await getCart(cartId, convertToShopifyLanguage(dictionary.language));
    }

    // If the `cartId` from the cookie is not set or the cart is empty
    // (old carts becomes `null` when you checkout), then get a new `cartId`
    //  and re-fetch the cart.
    if (!cartId || !cart) {
        cart = await createCart();
        cartIdUpdated = true;
    }

    return <CartButton cart={cart} cartIdUpdated={cartIdUpdated} />;
}

import { Dialog } from '@headlessui/react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

import { DEFAULT_OPTION } from '@/config/constants';
import { Cart } from '@/lib/shopify/types';
import { createUrl } from '@/lib/utils';
import { RxCross1 } from 'react-icons/rx';
import LinkI18N from '../Shared/I18N/LinkI18N';
import Price from '../Text/price';
import DeleteItemButton from './deleteItemButton';
import EditItemQuantityButton from './editItemQuantityButton';

type MerchandiseSearchParams = {
    [key: string]: string;
};

export default function CartModal({
    isOpen,
    onClose,
    cart,
}: {
    isOpen: boolean;
    onClose: () => void;
    cart: Cart;
}) {
    return (
        <AnimatePresence initial={false}>
            {isOpen && (
                <Dialog
                    as={motion.div}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    key="dialog"
                    static
                    open={isOpen}
                    onClose={onClose}
                    className="relative z-50"
                >
                    <motion.div
                        variants={{
                            open: { opacity: 1, backdropFilter: 'blur(0.5px)' },
                            closed: { opacity: 0, backdropFilter: 'blur(0px)' },
                        }}
                        className="fixed inset-0 bg-black/30"
                        aria-hidden="true"
                    />

                    <div className="fixed inset-0 flex justify-end" data-testid="cart">
                        <Dialog.Panel
                            as={motion.div}
                            variants={{
                                open: { translateX: 0 },
                                closed: { translateX: '100%' },
                            }}
                            transition={{ type: 'spring', bounce: 0, duration: 0.3 }}
                            className="flex flex-col w-full p-8 text-black bg-white dark:bg-black dark:text-white md:w-3/5 lg:w-2/5"
                        >
                            <div className="flex items-center justify-between">
                                <p className="text-lg font-bold">My Cart</p>
                                <button
                                    aria-label="Close cart"
                                    onClick={onClose}
                                    className="text-black transition-colors hover:text-gray-500 dark:text-gray-100"
                                    data-testid="close-cart"
                                >
                                    <RxCross1 size={'1.75rem'} />
                                </button>
                            </div>

                            {cart.lines.length === 0 ? (
                                <div className="flex flex-col items-center justify-center w-full mt-20 overflow-hidden">
                                    <p className="mt-6 text-2xl font-bold text-center">
                                        Your cart is empty.
                                    </p>
                                </div>
                            ) : null}
                            {cart.lines.length !== 0 ? (
                                <div className="flex flex-col justify-between h-full overflow-hidden">
                                    <ul className="p-6 overflow-auto grow">
                                        {cart.lines.map((item, i) => {
                                            const merchandiseSearchParams =
                                                {} as MerchandiseSearchParams;

                                            item.merchandise.selectedOptions.forEach(
                                                ({ name, value }) => {
                                                    if (value !== DEFAULT_OPTION) {
                                                        merchandiseSearchParams[
                                                            name.toLowerCase()
                                                        ] = value;
                                                    }
                                                }
                                            );

                                            const merchandiseUrl = createUrl(
                                                `/product/${item.merchandise.product.handle}`,
                                                new URLSearchParams(merchandiseSearchParams)
                                            );

                                            return (
                                                <li key={i} data-testid="cart-item">
                                                    <LinkI18N
                                                        className="flex flex-row py-4 space-x-4"
                                                        href={merchandiseUrl}
                                                        onClick={onClose}
                                                    >
                                                        <div className="relative w-16 h-16 overflow-hidden bg-white cursor-pointer">
                                                            <Image
                                                                className="object-cover w-full h-full"
                                                                width={64}
                                                                height={64}
                                                                alt={
                                                                    item.merchandise.product
                                                                        .featuredImage.altText ||
                                                                    item.merchandise.product.title
                                                                }
                                                                src={
                                                                    item.merchandise.product
                                                                        .featuredImage.url
                                                                }
                                                            />
                                                        </div>
                                                        <div className="flex flex-col flex-1 text-base">
                                                            <span className="font-semibold">
                                                                {item.merchandise.product.title}
                                                            </span>
                                                            {item.merchandise.title !==
                                                            DEFAULT_OPTION ? (
                                                                <p
                                                                    className="text-sm"
                                                                    data-testid="cart-product-variant"
                                                                >
                                                                    {item.merchandise.title}
                                                                </p>
                                                            ) : null}
                                                        </div>
                                                        <Price
                                                            className="flex flex-col justify-between space-y-2 text-sm"
                                                            amount={item.cost.totalAmount.amount}
                                                            currencyCode={
                                                                item.cost.totalAmount.currencyCode
                                                            }
                                                        />
                                                    </LinkI18N>
                                                    <div className="flex flex-row h-9">
                                                        <DeleteItemButton item={item} />
                                                        <p className="flex items-center justify-center w-full ml-2 border dark:border-gray-700">
                                                            <span className="w-full px-2">
                                                                {item.quantity}
                                                            </span>
                                                        </p>
                                                        <EditItemQuantityButton
                                                            item={item}
                                                            type="minus"
                                                        />
                                                        <EditItemQuantityButton
                                                            item={item}
                                                            type="plus"
                                                        />
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                    <div className="pt-2 text-sm text-black border-t border-gray-200 dark:text-white">
                                        <div className="flex items-center justify-between mb-2">
                                            <p>Subtotal</p>
                                            <Price
                                                className="text-right"
                                                amount={cart.cost.subtotalAmount.amount}
                                                currencyCode={cart.cost.subtotalAmount.currencyCode}
                                            />
                                        </div>
                                        <div className="flex items-center justify-between mb-2">
                                            <p>Taxes</p>
                                            <Price
                                                className="text-right"
                                                amount={cart.cost.totalTaxAmount.amount}
                                                currencyCode={cart.cost.totalTaxAmount.currencyCode}
                                            />
                                        </div>
                                        <div className="flex items-center justify-between pb-2 mb-2 border-b border-gray-200">
                                            <p>Shipping</p>
                                            <p className="text-right">Calculated at checkout</p>
                                        </div>
                                        <div className="flex items-center justify-between mb-2 font-bold">
                                            <p>Total</p>
                                            <Price
                                                className="text-right"
                                                amount={cart.cost.totalAmount.amount}
                                                currencyCode={cart.cost.totalAmount.currencyCode}
                                            />
                                        </div>
                                    </div>
                                    <a
                                        href={cart.checkoutUrl}
                                        className="flex items-center justify-center w-full p-3 text-sm font-medium text-white uppercase bg-black opacity-90 hover:opacity-100 dark:bg-white dark:text-black"
                                    >
                                        <span>Proceed to Checkout</span>
                                    </a>
                                </div>
                            ) : null}
                        </Dialog.Panel>
                    </div>
                </Dialog>
            )}
        </AnimatePresence>
    );
}

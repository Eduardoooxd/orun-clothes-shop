'use client';
import { Dialog } from '@headlessui/react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

import { DEFAULT_OPTION } from '@/config/constants';
import useGetDictionary from '@/hooks/useGetDictionary';
import { futuraPTLight } from '@/lib/fontLoader';
import { Cart } from '@/lib/shopify/types';
import { cn, createUrl } from '@/lib/utils';
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
    const dictionary = useGetDictionary();
    const { title, emptyCartText, checkoutText } = dictionary.cartModalContent;

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
                            className="flex w-full flex-col bg-white p-8 text-black dark:bg-black dark:text-white md:w-3/5 lg:w-2/5"
                        >
                            <div className="flex items-center justify-between">
                                <p
                                    className={cn(
                                        'text-lg font-bold uppercase',
                                        `${futuraPTLight.variable} font-futuraPTLight`
                                    )}
                                >
                                    {title}
                                </p>
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
                                <div className="mt-20 flex w-full flex-col items-center justify-center overflow-hidden">
                                    <p
                                        className={cn(
                                            'mt-6 text-center text-2xl font-bold',
                                            `${futuraPTLight.variable} font-futuraPTLight`
                                        )}
                                    >
                                        {emptyCartText}
                                    </p>
                                </div>
                            ) : null}
                            {cart.lines.length !== 0 ? (
                                <div className="flex h-full flex-col justify-between overflow-hidden">
                                    <ul className="grow overflow-auto">
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
                                                        className="flex flex-row space-x-4 py-4"
                                                        href={merchandiseUrl}
                                                        onClick={onClose}
                                                    >
                                                        <div className="relative h-16 w-16 cursor-pointer overflow-hidden bg-white">
                                                            <Image
                                                                className="h-full w-full object-cover"
                                                                width={128}
                                                                height={128}
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
                                                        <div className="flex flex-1 flex-col text-base">
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
                                                    <div className="flex h-9 flex-row">
                                                        <DeleteItemButton item={item} />
                                                        <p className="ml-2 flex w-full items-center justify-center border dark:border-gray-700">
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
                                    <div className="border-t border-gray-200 pt-2 text-sm text-black dark:text-white">
                                        <div
                                            className={cn(
                                                'mb-2 flex items-center justify-between font-bold uppercase',
                                                `${futuraPTLight.variable} font-futuraPTLight`
                                            )}
                                        >
                                            <p>Total</p>
                                            <Price
                                                className="text-right"
                                                amount={cart.cost.totalAmount.amount}
                                                currencyCode={cart.cost.totalAmount.currencyCode}
                                            />
                                        </div>
                                    </div>
                                    <a
                                        target="_blank"
                                        href={cart.checkoutUrl}
                                        className={cn(
                                            'flex w-full items-center justify-center bg-black p-3 text-sm font-medium uppercase text-white opacity-90 hover:opacity-100 dark:bg-white dark:text-black',
                                            `${futuraPTLight.variable} font-futuraPTLight`
                                        )}
                                    >
                                        <span>{checkoutText}</span>
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

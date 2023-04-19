'use client';

import useGetDictionary from '@/hooks/useGetDictionary';
import useGetProductsStore from '@/hooks/useGetProductsStore';
import { commutersSans } from '@/lib/fontLoader';
import * as HoverCard from '@radix-ui/react-hover-card';
import { AnimatePresence, motion, useAnimationControls } from 'framer-motion';
import { Dispatch, FunctionComponent, SetStateAction, useEffect, useState } from 'react';
import LinkI18N from '../LinkI18N';
import CategoriesDropdownItem from './CategoriesDropdownItem';

interface CategoriesDropdownProps {
    setIsDropdownOpen: Dispatch<SetStateAction<boolean>>;
    children: React.ReactNode;
}

export const CategoriesDropdown: FunctionComponent<CategoriesDropdownProps> = ({
    setIsDropdownOpen,
    children,
}) => {
    const productsStore = useGetProductsStore();
    const [open, setOpen] = useState(false);
    const controls = useAnimationControls();

    const categoriesItems = productsStore.categories;

    const dictionary = useGetDictionary();
    const { CategoryDropdown } = dictionary.navBar;

    useEffect(() => {
        setIsDropdownOpen(open);
        if (open) {
            controls.start('open');
        }
    }, [controls, open, setIsDropdownOpen]);

    return (
        <HoverCard.Root open={open} openDelay={300} onOpenChange={setOpen}>
            <HoverCard.Trigger
                onClick={() => setOpen((prev) => !prev)}
                className="cursor-default select-none rounded hover:underline focus-visible:outline-none data-[state=open]:underline"
            >
                <span
                    className={`${commutersSans.variable} flex h-8 items-center font-commutersSans font-extralight uppercase`}
                >
                    {children}
                </span>
            </HoverCard.Trigger>

            <AnimatePresence>
                {open && (
                    <HoverCard.Portal forceMount>
                        <HoverCard.Content
                            asChild
                            className="mt-4 w-screen  bg-white focus:outline-none"
                        >
                            <motion.div
                                initial="closed"
                                animate={controls}
                                exit="closed"
                                className="border-b border-black"
                                variants={{
                                    open: {
                                        opacity: 1,
                                        transition: {
                                            ease: 'easeOut',
                                            duration: 0.1,
                                        },
                                    },
                                    closed: {
                                        opacity: 0,
                                        transition: {
                                            ease: 'easeIn',
                                            duration: 0.1,
                                        },
                                    },
                                }}
                            >
                                {/* PADDING MANHOSO REZA POR FAVOR*/}
                                <div className="container mx-auto flex w-full flex-col p-2 sm:p-4">
                                    <LinkI18N
                                        className={`${commutersSans.variable} flex h-8 items-center font-commutersSans font-extralight uppercase transition hover:underline`}
                                        href={`products`}
                                    >
                                        {CategoryDropdown.allProductsText}
                                    </LinkI18N>
                                    {categoriesItems.map((category) => (
                                        <CategoriesDropdownItem
                                            key={category}
                                            category={category}
                                        />
                                    ))}
                                </div>
                            </motion.div>
                        </HoverCard.Content>
                    </HoverCard.Portal>
                )}
            </AnimatePresence>
        </HoverCard.Root>
    );
};

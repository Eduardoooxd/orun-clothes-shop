'use client';

import useGetProductsStore from '@/hooks/useGetProductsStore';
import { commutersSans } from '@/lib/fontLoader';
import * as HoverCard from '@radix-ui/react-hover-card';
import { AnimatePresence, motion, useAnimationControls } from 'framer-motion';
import { Dispatch, FunctionComponent, SetStateAction, useEffect, useState } from 'react';
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
                className="cursor-default select-none rounded px-4 hover:underline focus-visible:outline-none data-[state=open]:underline"
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
                                <div className="container mx-auto flex flex-col p-4 sm:p-6">
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

'use client';
import useGetDictionary from '@/hooks/useGetDictionary';
import useGetProductsStore from '@/hooks/useGetProductsStore';
import { commutersSans } from '@/lib/fontLoader';
import { AnimatePresence, motion, useAnimationControls } from 'framer-motion';
import { FunctionComponent, useEffect, useState } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import LinkI18N from '../LinkI18N';
import CategoriesDropdownItem from './CategoriesDropdownItem';
import './styles.css';

interface MobileCategoriesDropdownProps {
    children: React.ReactNode;
    onClickItem?: () => void;
}

const MobileCategoriesDropdown: FunctionComponent<MobileCategoriesDropdownProps> = ({
    children,
    onClickItem,
}) => {
    const [open, setOpen] = useState(false);
    const controls = useAnimationControls();

    useEffect(() => {
        if (open) {
            controls.start('open');
        }
    }, [controls, open]);

    const productsStore = useGetProductsStore();
    const categoriesItems = productsStore.categories;

    const dictionary = useGetDictionary();
    const { CategoryDropdown } = dictionary.navBar;

    return (
        <section>
            <button
                type="button"
                aria-label="Open size Categories Button"
                className="flex w-full items-center justify-between focus-visible:outline-none"
                onClick={() => setOpen((prev) => !prev)}
            >
                <h3
                    className={`${commutersSans.variable} flex h-8 items-center font-commutersSans font-extralight uppercase`}
                >
                    {children}
                </h3>
                <MdOutlineKeyboardArrowDown
                    className={`downIcon h-9 w-9 transition ${open && 'rotate-180'}`}
                />
            </button>

            <AnimatePresence>
                {open && (
                    <motion.div
                        className="mb-4 flex flex-col gap-y-4"
                        initial="closed"
                        animate={controls}
                        exit="closed"
                        variants={{
                            open: {
                                translateY: '5%',
                                transition: {
                                    ease: 'easeOut',
                                    duration: 0.1,
                                },
                            },
                            closed: {
                                translateY: 0,
                                transition: {
                                    ease: 'easeIn',
                                    duration: 0.2,
                                },
                            },
                        }}
                    >
                        <div className="container mx-auto flex w-full flex-col gap-y-2">
                            <LinkI18N
                                className={`${commutersSans.variable} flex h-8 items-center font-commutersSans font-extralight uppercase transition hover:underline`}
                                href={`products`}
                                onClick={onClickItem}
                            >
                                {CategoryDropdown.allProductsText}
                            </LinkI18N>
                            {categoriesItems.map((category) => (
                                <CategoriesDropdownItem
                                    onClick={onClickItem}
                                    key={category}
                                    category={category}
                                />
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default MobileCategoriesDropdown;

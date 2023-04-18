'use client';
import useGetDictionary from '@/hooks/useGetDictionary';
import { futuraPTLight } from '@/lib/fontLoader';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { AnimatePresence, motion, useAnimationControls } from 'framer-motion';
import { FunctionComponent, useEffect, useState } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import './styles.css';

interface ChooseSizeProps {
    sizes: string[];
}

const ChooseSize: FunctionComponent<ChooseSizeProps> = ({ sizes }) => {
    const [open, setOpen] = useState(false);
    const controls = useAnimationControls();

    useEffect(() => {
        if (open) {
            controls.start('open');
        }
    }, [controls, open]);

    const dictionary = useGetDictionary();
    const { sizeText, chooseSizeText } = dictionary.productPage.sizeContent;

    return (
        <section className="my-4 py-4">
            <DropdownMenu.Root open={open} onOpenChange={setOpen}>
                <DropdownMenu.Trigger asChild>
                    <button
                        type="button"
                        aria-label="Open size selector"
                        className="chooseSizeButton group flex w-full cursor-pointer items-center justify-between focus-visible:outline-none"
                    >
                        <h4
                            className={`${futuraPTLight.variable} font-futuraPTLight text-sm uppercase`}
                        >
                            {sizeText}
                        </h4>

                        <div className="flex items-center gap-x-2 ">
                            <h4
                                className={`${futuraPTLight.variable} sizeText font-futuraPTLight text-sm uppercase transition active:underline group-hover:underline`}
                            >
                                {chooseSizeText}
                            </h4>
                            <MdOutlineKeyboardArrowDown className="downIcon h-9 w-9 transition" />
                        </div>
                    </button>
                </DropdownMenu.Trigger>

                <AnimatePresence>
                    {open && (
                        <DropdownMenu.Portal forceMount className="w-full">
                            <DropdownMenu.Content
                                align="start"
                                className="mt-1 w-full overflow-hidden bg-white/75 text-left shadow backdrop-blur"
                                asChild
                            >
                                <motion.div
                                    initial="closed"
                                    animate={controls}
                                    exit="closed"
                                    variants={{
                                        open: {
                                            translateY: '100%',
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
                                    {sizes.map((size) => (
                                        <DropdownMenu.Item
                                            className={`${futuraPTLight.variable} font-futuraPTLight text-sm uppercase`}
                                            key={size}
                                        >
                                            {size}
                                        </DropdownMenu.Item>
                                    ))}
                                </motion.div>
                            </DropdownMenu.Content>
                        </DropdownMenu.Portal>
                    )}
                </AnimatePresence>
            </DropdownMenu.Root>
        </section>
    );
};

export default ChooseSize;

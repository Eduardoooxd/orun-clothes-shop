'use client';
import useGetDictionary from '@/hooks/useGetDictionary';
import { futuraPTLight } from '@/lib/fontLoader';
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
            <button
                type="button"
                aria-label="Open size selector"
                className="chooseSizeButton group flex w-full cursor-pointer items-center justify-between focus-visible:outline-none"
                onClick={() => setOpen((prev) => !prev)}
            >
                <h4 className={`${futuraPTLight.variable} font-futuraPTLight text-sm uppercase`}>
                    {sizeText}
                </h4>

                <div className="flex items-center gap-x-2 ">
                    <h4
                        className={`${futuraPTLight.variable} sizeText font-futuraPTLight text-sm uppercase transition active:underline group-hover:underline`}
                    >
                        {chooseSizeText}
                    </h4>
                    <MdOutlineKeyboardArrowDown
                        className={`downIcon h-9 w-9 transition ${open && 'rotate-180'}`}
                    />
                </div>
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
                                translateY: '30%',
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
                            <li
                                className={`${futuraPTLight.variable} flex list-none justify-end font-futuraPTLight text-sm uppercase`}
                                key={size}
                            >
                                {size}
                            </li>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default ChooseSize;

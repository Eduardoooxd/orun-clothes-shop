'use client';
import { commutersSans } from '@/lib/fontLoader';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';
import CloseIcon from '../Icons/close';
import { useStickyWarningContext } from './stickyWarningContext';

interface StickyWarningProps {
    children: React.ReactNode;
    open?: boolean;
    title: string;
}

export const StickyWarning = ({ children, open = true, title }: StickyWarningProps) => {
    const { isOpen, setIsOpen } = useStickyWarningContext();

    useEffect(() => {
        setIsOpen(open);
    }, [open, setIsOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, translateY: 100 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    exit={{ opacity: 0, translateY: 100 }}
                    transition={{ duration: 0.3 }}
                    className={cn(
                        'fixed inset-x-0 bottom-8 z-50 mx-auto min-h-[10rem] w-full border border-black bg-white text-black dark:border-white dark:bg-black dark:text-white sm:max-w-[45rem]'
                    )}
                >
                    <div className={cn('flex h-full flex-col gap-y-5 p-5')}>
                        <div className={cn('flex items-center justify-between')}>
                            <h4
                                className={cn(
                                    `${commutersSans.variable} font-commutersSans text-lg uppercase`
                                )}
                            >
                                {title}
                            </h4>
                            <button
                                className="flex h-5 w-5 items-center"
                                onClick={() => setIsOpen(false)}
                            >
                                <CloseIcon className="h-6 transition-all ease-in-out hover:scale-110 hover:text-gray-500 dark:hover:text-gray-300" />
                            </button>
                        </div>
                        {children}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

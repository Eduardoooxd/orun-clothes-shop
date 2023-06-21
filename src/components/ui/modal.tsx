import { Dialog } from '@headlessui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLayoutEffect } from 'react';
import { RxCross1 } from 'react-icons/rx';
import { useModalContext } from './modalContext';

interface ModalProps {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export default function Modal({ open, children, onClose }: ModalProps) {
    const { isOpen, setIsOpen } = useModalContext();

    useLayoutEffect(() => {
        setIsOpen(open);
    }, [open, setIsOpen]);

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
                    onClose={() => {
                        onClose();
                        setIsOpen(false);
                    }}
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

                    <div className="fixed inset-0 flex justify-end">
                        <Dialog.Panel
                            as={motion.div}
                            variants={{
                                open: { translateY: 0 },
                                closed: { translateY: '100%' },
                            }}
                            transition={{ type: 'spring', bounce: 0, duration: 0.3 }}
                            className="relative m-auto h-[50%]  w-full rounded-sm bg-white text-black dark:bg-black dark:text-white sm:w-4/5 "
                        >
                            <button
                                onClick={() => {
                                    onClose();
                                    setIsOpen(false);
                                }}
                                className="absolute text-black transition-colors top-4 right-4 hover:text-gray-500 dark:text-gray-100"
                            >
                                <RxCross1 size={'1.75rem'} />
                            </button>

                            {children}
                        </Dialog.Panel>
                    </div>
                </Dialog>
            )}
        </AnimatePresence>
    );
}

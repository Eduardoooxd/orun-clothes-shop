import { Dialog } from '@headlessui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { RxCross1 } from 'react-icons/rx';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    header?: React.ReactNode;
    children: React.ReactNode;
}

export default function Modal({ header, isOpen, children, onClose }: ModalProps) {
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

                    <div className="fixed inset-0 flex justify-end">
                        <Dialog.Panel
                            as={motion.div}
                            variants={{
                                open: { translateY: 0 },
                                closed: { translateY: '100%' },
                            }}
                            transition={{ type: 'spring', bounce: 0, duration: 0.3 }}
                            className="m-auto flex max-h-[90%] min-h-[30rem] w-4/5 flex-col rounded-md bg-white p-4 text-black  dark:bg-black dark:text-white "
                        >
                            <div className="flex items-center justify-end">
                                {header}
                                <button
                                    onClick={onClose}
                                    className="text-black transition-colors hover:text-gray-500 dark:text-gray-100"
                                >
                                    <RxCross1 size={'1.75rem'} />
                                </button>
                            </div>

                            {children}
                        </Dialog.Panel>
                    </div>
                </Dialog>
            )}
        </AnimatePresence>
    );
}

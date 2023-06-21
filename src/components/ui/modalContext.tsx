'use client';
import { createContext, Dispatch, SetStateAction, useContext, useState } from 'react';

interface ModalContextContent {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const ModalContext = createContext<ModalContextContent | null>(null);

interface ModalProviderProps {
    children: React.ReactNode;
}

export const ModalProvider = ({ children }: ModalProviderProps) => {
    const [isOpen, setIsOpen] = useState(true);

    return <ModalContext.Provider value={{ isOpen, setIsOpen }}>{children}</ModalContext.Provider>;
};

export function useModalContext() {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error('useModalContext must be used within a ModalProvider');
    }

    return context;
}

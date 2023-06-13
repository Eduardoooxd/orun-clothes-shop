import { createContext, Dispatch, SetStateAction, useContext, useState } from 'react';

interface StickyWarningContextContent {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const StickyWarningContext = createContext<StickyWarningContextContent | null>(null);

interface StickyWarningProviderProps {
    children: React.ReactNode;
}

export const StickyWarningProvider = ({ children }: StickyWarningProviderProps) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <StickyWarningContext.Provider value={{ isOpen, setIsOpen }}>
            {children}
        </StickyWarningContext.Provider>
    );
};

export function useStickyWarningContext() {
    const context = useContext(StickyWarningContext);
    if (!context) {
        throw new Error('useStickyWarningContext must be used within a StickyWarningProvider');
    }

    return context;
}

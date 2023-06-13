'use client';
import { ModalProvider } from '@/components/ui/modalContext';
import { StickyWarningProvider } from '@/components/ui/stickyWarningContext';
import { store } from '@/store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';

const queryClient = new QueryClient();

function Providers({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={store}>
            <ModalProvider>
                <StickyWarningProvider>
                    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
                </StickyWarningProvider>
            </ModalProvider>
        </Provider>
    );
}

export default Providers;

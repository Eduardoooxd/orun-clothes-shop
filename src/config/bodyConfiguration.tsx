'use client';

import useGetClientUrl from '@/hooks/useGetClientUrl';
import useNavigationEvent from '@/hooks/useNavigationEvent';
import { pageView } from './googleAnalyticsConfig';

function BodyConfiguration({ children }: { children: React.ReactNode }) {
    const currentUrl = useGetClientUrl();

    useNavigationEvent({ callback: () => pageView(currentUrl) });

    return <>{children}</>;
}

export default BodyConfiguration;

'use client';

import useGetClientUrl from '@/hooks/useGetClientUrl';
import useNavigationEvent from '@/hooks/useNavigationEvent';
import { pageView } from './googleAnalyticsConfig';

function BodyConfiguration({ children }: { children: React.ReactNode }) {
    const currentUrl = useGetClientUrl();

    useNavigationEvent({
        // Workaround since Next Router on app router is not scrolling to top after navigation
        // check: https://github.com/vercel/next.js/issues/28778
        callback: () => window.document.scrollingElement?.scrollTo(0, 0),
    });

    useNavigationEvent({ callback: () => pageView(currentUrl) });

    return <>{children}</>;
}

export default BodyConfiguration;

'use client';

import useNavigationEvent from '@/hooks/useNavigationEvent';

function BodyConfiguration({ children }: { children: React.ReactNode }) {
    useNavigationEvent({
        callback: () => window.scrollTo(0, 0),
    });

    return <>{children}</>;
}

export default BodyConfiguration;

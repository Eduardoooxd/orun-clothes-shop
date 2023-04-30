import { useEffect } from 'react';
import useGetClientUrl from './useGetClientUrl';

interface NavigationEventProps {
    callback: () => void;
}

function useNavigationEvent({ callback }: NavigationEventProps) {
    const currentUrl = useGetClientUrl();

    useEffect(() => {
        callback();
    }, [currentUrl, callback]);
}

export default useNavigationEvent;

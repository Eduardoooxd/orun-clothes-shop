import { usePathname, useSearchParams } from 'next/navigation';

function useGetClientUrl() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    return `${pathname}${searchParams.toString() ? `?${searchParams.toString()}` : ''}`;
}

export default useGetClientUrl;

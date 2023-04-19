import { usePathname } from 'next/navigation';

const useIsRootPage = () => {
    const pathName = usePathname();

    return pathName?.split('/').length === 2;
};

export default useIsRootPage;

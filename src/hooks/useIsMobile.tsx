import useWindowSize from './useWindowSize';

function useIsMobile() {
    const { width } = useWindowSize();

    // Verify if width is defined and verify it is less than 640px (mobile breakpoint)
    const isMobile = !!width && width < 640;

    return isMobile;
}

export default useIsMobile;

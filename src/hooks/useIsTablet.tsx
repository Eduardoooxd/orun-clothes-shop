import useWindowSize from './useWindowSize';

function useIsTable() {
    const { width } = useWindowSize();

    // Verify if width is defined and verify it is less than 640px (mobile breakpoint)
    const isMobile = !width || width < 1024;

    return isMobile;
}

export default useIsTable;

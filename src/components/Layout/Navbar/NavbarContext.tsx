import { createContext, useContext } from 'react';

interface NavbarContextContent {
    isNavbarActive: boolean;
}

const NavbarContext = createContext<NavbarContextContent | null>(null);

export function useNavbarContext(): NavbarContextContent {
    const context = useContext(NavbarContext);

    if (!context) {
        throw new Error('NavBar.* component must be rendered inside NavBar component');
    }

    return context;
}

export default NavbarContext;

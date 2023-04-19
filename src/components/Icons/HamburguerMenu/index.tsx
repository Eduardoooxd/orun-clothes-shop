import { FunctionComponent } from 'react';
import { RxCross1 } from 'react-icons/rx';

interface HamburgerMenuProps {
    isOpen: boolean;
}

export const OpenHamburgerMenu: FunctionComponent<HamburgerMenuProps> = ({ isOpen }) => {
    return (
        <svg
            className={`h-6 w-6 ${isOpen ? 'hidden' : 'block'}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
        >
            <path
                fillRule="evenodd"
                d="M2 4h16a1 1 0 0 1 0 2H2a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H2a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H2a1 1 0 0 1 0-2z"
                clipRule="evenodd"
            />
        </svg>
    );
};

export const ClosedHamburgerMenu: FunctionComponent<HamburgerMenuProps> = ({ isOpen }) => {
    return isOpen ? <RxCross1 size={'1.5rem'} color={isOpen && 'black'} /> : null;
};

import { FunctionComponent } from 'react';

interface MainSectionTitleProps {
    children: React.ReactNode;
}

export const MainSectionTitle: FunctionComponent<MainSectionTitleProps> = ({
    children,
    ...props
}) => {
    return (
        <h2 className="uppercase font-semibold text-3xl sm:text-4xl text-center" {...props}>
            {children}
        </h2>
    );
};

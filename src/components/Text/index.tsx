import { futuraPTLight } from '@/lib/fontLoader';
import { FunctionComponent } from 'react';

type TextAlign = 'text-left' | 'text-center' | 'text-right';

interface MainSectionTitleProps {
    children: React.ReactNode;
    textAlign: TextAlign;
}

export const MainSectionTitle: FunctionComponent<MainSectionTitleProps> = ({
    textAlign,
    children,
    ...props
}) => {
    return (
        <h2
            className={`font-futuraPTLight text-2xl font-semibold uppercase sm:text-3xl ${futuraPTLight.variable} ${textAlign}`}
            {...props}
        >
            {children}
        </h2>
    );
};

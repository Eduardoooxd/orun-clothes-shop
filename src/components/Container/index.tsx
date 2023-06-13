import { cn } from '@/lib/utils';
import { FunctionComponent } from 'react';

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

const Container: FunctionComponent<ContainerProps> = ({ children, className, ...props }) => {
    return (
        <div
            className={cn(
                'mx-auto w-full p-4 text-black lg:container dark:bg-black dark:text-white sm:p-6',
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
};

export default Container;

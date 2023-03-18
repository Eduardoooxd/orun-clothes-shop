import { FunctionComponent } from 'react';

interface ContainerProps {
    children: React.ReactNode;
}

const Container: FunctionComponent<ContainerProps> = ({ children, ...props }) => {
    return (
        <div className="w-full container mx-auto p-4 sm:p-6" {...props}>
            {children}
        </div>
    );
};

export default Container;

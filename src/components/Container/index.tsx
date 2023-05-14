import { FunctionComponent } from 'react';

interface ContainerProps {
    children: React.ReactNode;
}

const Container: FunctionComponent<ContainerProps> = ({ children, ...props }) => {
    return (
        <div className="mx-auto w-full p-4 lg:container sm:p-6" {...props}>
            {children}
        </div>
    );
};

export default Container;

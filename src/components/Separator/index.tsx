import { FunctionComponent } from 'react';

const Separator: FunctionComponent = ({ ...props }) => {
    return <hr className="my-6 border-gray-200" {...props} />;
};

export default Separator;

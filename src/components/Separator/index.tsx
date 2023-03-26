import { FunctionComponent } from 'react';
import Container from '../Container';

const Separator: FunctionComponent = ({ ...props }) => {
    return (
        <Container>
            <hr className="my-6 border-t border-black" {...props} />
        </Container>
    );
};

export default Separator;

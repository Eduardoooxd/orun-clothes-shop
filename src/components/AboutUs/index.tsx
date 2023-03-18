import { MainSectionTitle } from '@/components/Text';
import { FunctionComponent } from 'react';
import Container from '../Container';

const AboutUs: FunctionComponent = () => {
    return (
        <section className="m-4">
            <Container>
                <MainSectionTitle>About Us</MainSectionTitle>
                <div className="flex">
                    <div className="mt-12 prose prose-lg text-gray-600  max-w-3xl">
                        <p className="mb-6 leading-loose">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit
                            maximus, molestie est a, tempor magna. Curabitur in justo neque. Morbi
                            nec dolor at metus cursus interdum. In posuere sollicitudin aliquam.
                            Suspendisse quis urna vitae purus faucibus euismod ut ac velit.
                        </p>
                        <p className="mb-6 leading-loose">
                            Sed consectetur felis et dolor placerat, vel tempor justo bibendum.
                            Quisque quis mattis mauris. Vestibulum fringilla semper metus. Donec
                            auctor tristique ligula in malesuada. Mauris at consequat est. Ut vel
                            vestibulum elit. Integer in urna bibendum, commodo augue quis, lacinia
                            urna.
                        </p>
                    </div>
                    <div className="mt-12 prose prose-lg text-gray-600  max-w-3xl">
                        <p className="mb-6 leading-loose">
                            Sed consectetur felis et dolor placerat, vel tempor justo bibendum.
                            Quisque quis mattis mauris. Vestibulum fringilla semper metus. Donec
                            auctor tristique ligula in malesuada. Mauris at consequat est. Ut vel
                            vestibulum elit. Integer in urna bibendum, commodo augue quis, lacinia
                            urna.
                        </p>
                        <p className="mb-6 leading-loose">
                            Sed consectetur felis et dolor placerat, vel tempor justo bibendum.
                            Quisque quis mattis mauris. Vestibulum fringilla semper metus. Donec
                            auctor tristique ligula in malesuada. Mauris at consequat est. Ut vel
                            vestibulum elit. Integer in urna bibendum, commodo augue quis, lacinia
                            urna.
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default AboutUs;

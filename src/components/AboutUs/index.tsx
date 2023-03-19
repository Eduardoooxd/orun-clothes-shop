import { MainSectionTitle } from '@/components/Text';
import { FunctionComponent } from 'react';
import Container from '../Container';

const AboutUs: FunctionComponent = () => {
    return (
        <section className="m-4">
            <Container>
                <MainSectionTitle textAlign="text-center">About Us</MainSectionTitle>
                <div className="flex flex-col gap-4 sm:flex-row">
                    <AboutUsText />
                    <AboutUsText />
                </div>
            </Container>
        </section>
    );
};

const AboutUsText: FunctionComponent = () => {
    return (
        <div className="prose prose-lg max-w-3xl text-gray-600  lg:mt-12">
            <p className={`mb-6 leading-loose`}>
                Orun is an online shopping destination for individuals who are passionate about
                environmental sustainability, organic living, and spiritual awareness. Our carefully
                curated collection of clothing features unique designs made from ethically sourced
                and eco-friendly materials, ensuring that our customers not only look great but feel
                good about their impact on the planet.
            </p>
            <p className="mb-6 leading-loose">
                At Orun, we believe that fashion should be both beautiful and conscious, which is
                why we prioritize sustainable production methods and materials. From organic cotton
                and linen to recycled fabrics and natural dyes, we carefully select each item to
                ensure that it meets our high standards for quality, style, and sustainability.
            </p>
        </div>
    );
};

export default AboutUs;

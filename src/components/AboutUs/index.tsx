import { MainSectionTitle } from '@/components/Text';
import { store } from '@/store';
import React, { FunctionComponent } from 'react';
import Container from '../Container';

const AboutUs: FunctionComponent = () => {
    const dictionary = store.getState().dictionary.dictionary;
    const { title, content } = dictionary.aboutUs;

    return (
        <section className="my-4">
            <Container>
                <MainSectionTitle textAlign="text-center">{title}</MainSectionTitle>
                <div className="mt-8 flex flex-col gap-8 text-justify sm:mt-12 sm:flex-row sm:gap-24">
                    {content.map((content, index) => {
                        const { title, paragraphs } = content;
                        const ParagraphsComponents = paragraphs.map((paragraph, index) => (
                            <ContentText key={index}> {paragraph} </ContentText>
                        ));
                        return (
                            <div key={index} className="max-w-3xl text-gray-600 lg:mt-12">
                                <ContentTitle> {title} </ContentTitle>
                                {ParagraphsComponents}
                            </div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
};

const ContentTitle = ({ children }: { children: React.ReactNode }) => (
    <h3 className="mb-4 text-xl font-bold">{children}</h3>
);

const ContentText = ({ children }: { children: React.ReactNode }) => (
    <p className="mb-4 leading-loose">{children}</p>
);

export default AboutUs;

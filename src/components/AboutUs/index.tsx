import { AboutUsContent } from '@/dictionaries/dictionaries';
import { futuraPTLight } from '@/lib/fontLoader';
import { store } from '@/store';
import React, { FunctionComponent } from 'react';
import Container from '../Container';
import { MainSectionTitle } from '../Text';

const AboutUs: FunctionComponent = () => {
    const dictionary = store.getState().dictionary.dictionary;
    const { desktopContent, mobileContent, title } = dictionary.aboutUs;

    return (
        <section className="my-4 w-full" id="aboutUs">
            <Container>
                <MainSectionTitle textAlign="text-left"> {title} </MainSectionTitle>
                <DesktopContent desktopContent={desktopContent} />
                <MobileContent mobileContent={mobileContent} />
            </Container>
        </section>
    );
};

const DesktopContent = ({ desktopContent }: { desktopContent: AboutUsContent[] }) => (
    <div className="mt-8 hidden flex-col justify-between gap-8 text-justify sm:mt-0 sm:flex sm:flex-row sm:gap-24 ">
        {desktopContent.map((content, index) => {
            const { title, paragraphs } = content;
            const ParagraphsComponents = paragraphs.map((paragraph) => (
                <ContentText key={paragraph}> {paragraph} </ContentText>
            ));
            return (
                <div key={index} className="w-[50%] text-gray-600 lg:mt-12">
                    <ContentTitle> {title} </ContentTitle>
                    {ParagraphsComponents}
                </div>
            );
        })}
    </div>
);

const MobileContent = ({ mobileContent }: { mobileContent: AboutUsContent[] }) => (
    <div className="mt-8 flex flex-col gap-8 text-justify sm:mt-12 sm:hidden sm:flex-row sm:gap-24 ">
        {mobileContent.map((content, index) => {
            const { title, paragraphs } = content;
            const ParagraphsComponents = paragraphs.map((paragraph) => (
                <ContentText key={paragraph}> {paragraph} </ContentText>
            ));
            return (
                <div key={index} className="max-w-3xl text-gray-600 lg:mt-12">
                    <ContentTitle> {title} </ContentTitle>
                    {ParagraphsComponents}
                </div>
            );
        })}
    </div>
);

const ContentTitle = ({ children }: { children: React.ReactNode }) => (
    <h3
        className={`${futuraPTLight.variable} mb-4 font-futuraPTLight text-xl font-bold uppercase text-black`}
    >
        {children}
    </h3>
);

const ContentText = ({ children }: { children: React.ReactNode }) => (
    <p className={`${futuraPTLight.variable} mb-4 font-futuraPTLight text-lg leading-loose`}>
        {children}
    </p>
);

export default AboutUs;

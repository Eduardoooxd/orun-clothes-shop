import { MainSectionTitle } from '@/components/Text';
import { FunctionComponent } from 'react';
import Container from '../Container';

const AboutUs: FunctionComponent = () => {
    return (
        <section className="my-4">
            <Container>
                <MainSectionTitle textAlign="text-center">About Us</MainSectionTitle>
                <div className="mt-8 flex flex-col gap-8 text-justify sm:mt-12 sm:flex-row sm:gap-24">
                    <div className="max-w-3xl text-gray-600 lg:mt-12">
                        <h3 className="mb-4 text-xl font-bold">
                            Orun. Céu. Liberdade. Espírito Livre.
                        </h3>
                        <p className="mb-4 leading-loose">
                            Orun surge de uma vontade de diferenciação. Num mundo onde a formatação
                            impera, Orun vem para desconstruir, para quebrar padrões e para celebrar
                            a unissidade e autenticidade de cada um. Orun não entra em tendências,
                            cria livremente. Trazendo estilos e designs únicos, peças exclusivas ou
                            produzidas em micro escala. Por isso, ao veres uma peça Orun, olha bem
                            para ela, pois é pouco provável que consigas vê-la outra vez.
                        </p>
                        <p className="mb-4 leading-loose">
                            Orun traz também no seu ADN o cuidado pela natureza, utilizando tecidos
                            de alta qualidade provenientes do desperdício industrial do setor
                            têxtil. A nossa ideologia assenta na sustentabilidade e reaproveitamento
                            de materiais. Orun trás de volta o trabalho manual. Num mundo de
                            máquinas e de automatismos Orun regressa ao poder do trabalho artesanal.
                            As nossas peças são produzidas por quem se entrega ao poder do detalhe e
                            pormenor, regidos pelo amor ao tecido. Produzidas em Portugal,
                            artesanalmente.
                        </p>
                    </div>
                    <div className="max-w-3xl text-gray-600 lg:mt-12">
                        <h3 className="mb-4 text-xl font-bold">For the Spirit Men</h3>
                        <p className="mb-4 leading-loose">
                            O homem que rompe com uma imagem fechada de masculinidade e se entrega
                            ao carácter, à ousadia e à libertação de conceitos pré-definidos -
                            pretendemos descomplexar e sensualizar a imagem masculina trabalhando
                            com tecidos e cortes fluídos que conferem suavidade, movimento e
                            sensibilidade. Tomamos como urgente a necessidade de utilização de
                            recursos que são desperdício industrial do setor têxtil e apoiamos a
                            nossa ideologia na sustentabilidade e reaproveitamento. Criamos peças
                            intemporais inseridas na definição de Slow Fashion, saindo da
                            obrigatoriedade de produção por estações ou de seguir tendências de
                            mercado. Trabalhamos de forma livre: sem colecções sazonais, defendendo
                            a qualidade dos materiais, o design, a exclusividade, a produção local e
                            artesanal. Inspired in heaven, made by earth.
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default AboutUs;

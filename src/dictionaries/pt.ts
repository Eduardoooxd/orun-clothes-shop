import { Dictionary } from './dictionaries';

export const dictionary: Dictionary = {
    language: 'pt',
    navBar: {
        NAVBAR_LINKS: {
            Category: {
                text: 'Categorias',
                href: '/',
            },
            AboutUs: {
                text: 'Sobre nós',
                href: '/',
            },
            ContactUs: {
                text: 'Contacto',
                href: '/',
            },
        },
    },
    aboutUs: {
        title: 'Sobre nós',
        content: [
            {
                title: 'Orun. Céu. Liberdade. Espírito Livre.',
                paragraphs: [
                    'surge de uma vontade de diferenciação. Num mundo onde a formatação impera, Orun vem para desconstruir, para quebrar padrões e para celebrar a unissidade e autenticidade de cada um. Orun não entra em tendências, cria livremente. Trazendo estilos e designs únicos, peças exclusivas ou produzidas em micro escala. Por isso, ao veres uma peça Orun, olha bem para ela, pois é pouco provável que consigas vê-la outra vez.',
                    'traz também no seu ADN o cuidado pela natureza, utilizando tecidos de alta qualidade provenientes do desperdício industrial do setor têxtil. A nossa ideologia assenta na sustentabilidade e reaproveitamento de materiais. Orun trás de volta o trabalho manual. Num mundo de máquinas e de automatismos Orun regressa ao poder do trabalho artesanal. As nossas peças são produzidas por quem se entrega ao poder do detalhe e pormenor, regidos pelo amor ao tecido. Produzidas em Portugal, artesanalmente.',
                ],
            },
            {
                title: 'For the Spirit Men',
                paragraphs: [
                    'O homem que rompe com uma imagem fechada de masculinidade e se entrega ao carácter, à ousadia e à libertação de conceitos pré-definidos - pretendemos descomplexar e sensualizar a imagem masculina trabalhando com tecidos e cortes fluídos que conferem suavidade, movimento e sensibilidade. Tomamos como urgente a necessidade de utilização de recursos que são desperdício industrial do setor têxtil e apoiamos a nossa ideologia na sustentabilidade e reaproveitamento. Criamos peças intemporais inseridas na definição de Slow Fashion, saindo da obrigatoriedade de produção por estações ou de seguir tendências de mercado. Trabalhamos de forma livre: sem colecções sazonais, defendendo a qualidade dos materiais, o design, a exclusividade, a produção local e artesanal. Inspired in heaven, made by earth.',
                ],
            },
        ],
    },
    topPicks: {
        title: 'As nossas escolhas',
    },
    productPage: {
        title: 'Produto',
        sizeContent: {
            sizeText: 'Tamanho',
            chooseSizeText: 'Escolha o tamanho',
        },
        colorsText: 'Cores',
        comingSoonText: 'Loja online em breve',
        orderText: 'Encomende',
        contactForm: {
            mailSubject: 'Estou interessado no produto "${title}"',
            mailBody:
                'Bom dia,%0D%0A%0D%0A%20%20%20%20Estou interessado no seguinte produto:%0D%0A%20%20%20%20${title} com tamanho [a escrever] com a cor [a escrever].%0D%0A%0D%0A%20%20%20%20Por favor avisem-me se posso proceder com a compra.%0D%0A%0D%0AContacto:%0D%0A------------------%0D%0A%0D%0A%20%20%20%20 Telemóvel: [a escrever]%0D%0A%20%20%20%20 Morada : [a escrever]%0D%0A%20%20%20%20 NIF : [a escrever] (Opcional)%0D%0A%0D%0ADetalhes do Produto:%0D%0A------------------%0D%0A%20%20%20%20Categoria: ${category}%0D%0A%20%20%20%20Preço: ${price}%0D%0A%0D%0A%0D%0A%0D%0AObrigado!',
        },
    },
    footer: {
        ABOUT_LINKS: [
            {
                title: 'Sobre',
                links: [
                    {
                        href: '/story',
                        text: 'Nossa História',
                    },
                    /*
                    {
                        href: '/stores',
                        text: 'Nossas Lojas',
                    },
                    {
                        href: '/careers',
                        text: 'Carreiras',
                    },
                    {
                        href: '/press',
                        text: 'Imprensa',
                    },*/
                ],
            },
            {
                title: 'Serviço',
                links: [
                    {
                        href: '/delivery',
                        text: 'Entrega',
                    },
                    {
                        href: '/delivery',
                        text: 'Devoluções',
                    },
                ],
            },
            {
                title: 'Redes Sociais',
                links: [
                    {
                        href: 'https://www.instagram.com/orun.menswear/',
                        text: 'instagram',
                    },
                    {
                        href: 'https://www.facebook.com/profile.php?id=100083324353901',
                        text: 'facebook',
                    },
                    {
                        href: 'http://tiktok.com/@orunfreespiritmen',
                        text: 'tik tok',
                    },
                    {
                        href: 'https://pin.it/3KhN1lp',
                        text: 'pinterest',
                    },
                ],
            },
            {
                title: 'Jurídico',
                links: [
                    {
                        href: '',
                        text: 'Privacidade',
                    },
                    {
                        href: '',
                        text: 'Licenciamento',
                    },
                    {
                        href: '',
                        text: 'Termos',
                    },
                ],
            },
        ],
    },
};

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
                href: '/pt#aboutUs',
            },
            ContactUs: {
                text: 'Contacto',
                href: '/',
            },
        },
        CategoryDropdown: {
            allProductsText: 'Todos os produtos',
        },
    },
    aboutUs: {
        title: 'Sobre nós',
        desktopContent: [
            {
                title: 'Orun. Céu. Liberdade. Espírito Livre.',
                paragraphs: [
                    'O homem que rompe com uma imagem fechada de masculinidade e se entrega ao carácter, à ousadia e à libertação de conceitos pré-definidos. Pretendemos descomplexar e sensualizar a imagem masculina trabalhando com tecidos e cortes fluídos que conferem suavidade, movimento e sensibilidade ao mesmo tempo, que despertamos o sagrado em cada um através da criação de peças únicas.',
                    'Sendo a indústria têxtil a mais contribui para a poluição, tomamos como urgente a necessidade de utilização de recursos que são desperdício industrial do setor têxtil e apoiamos a nossa ideologia na sustentabilidade e reaproveitamento.',
                ],
            },
            {
                title: 'Inspira-nos o céu e o vento. A terra, o fogo e a água.',
                paragraphs: [
                    'Criamos peças intemporais inseridas na definição de Slow Fashion, produzindo em pequena escala e livres da volatilidade das tendências de mercado.',
                    'Trabalhamos de forma livre: sem colecções sazonais, defendendo a qualidade dos materiais, o design, a exclusividade, a produção local e artesanal, escolhendo matérias primas que garantam maior durabilidade.',
                    'Inspired in heaven, made by earth, for the spirit men.',
                ],
            },
        ],
        mobileContent: [
            {
                title: 'Orun. Céu. Liberdade. Espírito Livre.',
                paragraphs: [
                    'O homem que rompe com uma imagem fechada de masculinidade e se entrega ao carácter, à ousadia e à libertação de conceitos pré-definidos. Tomamos como urgente a necessidade de utilização de recursos que são desperdício industrial do setor têxtil e apoiamos a nossa ideologia na sustentabilidade e reaproveitamento.  Trabalhamos de forma livre: sem colecções sazonais, defendendo a qualidade dos materiais, o design, a exclusividade, a produção local, artesanal e em pequena escala, escolhendo matérias primas que garantam maior durabilidade.',
                    'Inspira-nos o céu. A terra, o fogo  e a água.',
                    'Inspired in heaven, made by earth, for the spirit men.',
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
                'Olá !%0D%0A%0D%0A%20%20%20%20Quero comprar o seguinte produto:%0D%0A%20%20%20%20${title} com tamanho (se aplicável) [inserir tamanho].%0D%0A%0D%0A%20%20%20%20Detalhes de envio:%0D%0A------------------%0D%0A%0D%0A%20%20%20%20Telemóvel: [inserir contacto telefónico]%0D%0A%20%20%20%20 Morada : [inserir morada]%0D%0A%20%20%20%20 NIF (Opcional) : [inserir NIF]%0D%0A%0D%0ADetalhes do Produto:%0D%0A------------------%0D%0A%20%20%20%20Nome da peça: ${title}%0D%0A%20%20%20%20Preço: ${price} euros%0D%0A%0D%0A%0D%0A%0D%0AObrigado!',
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

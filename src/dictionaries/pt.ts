import { Dictionary } from './dictionaries';

export const dictionary: Dictionary = {
    language: 'pt',
    navBar: {
        NAVBAR_LINKS: {
            Category: {
                text: 'Produtos',
                href: '/products',
            },
            AboutUs: {
                text: 'Sobre nós',
                href: '/aboutUs',
            },
            ContactUs: {
                text: 'Contacto',
                href: '/contact',
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
                        href: '/aboutUs',
                        text: 'Nossa História',
                        isExternal: false,
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
                        href: 'service/delivery',
                        text: 'Entrega',
                        isExternal: false,
                    },
                    {
                        href: 'service/returns',
                        text: 'Devoluções',
                        isExternal: false,
                    },
                ],
            },
            {
                title: 'Redes Sociais',
                links: [
                    {
                        href: 'https://www.instagram.com/orun.menswear/',
                        text: 'instagram',
                        isExternal: true,
                    },
                    {
                        href: 'https://www.facebook.com/profile.php?id=100083324353901',
                        text: 'facebook',
                        isExternal: true,
                    },
                ],
            },
            {
                title: 'Jurídico',
                links: [
                    {
                        href: 'legal/privacy',
                        text: 'Privacidade',
                        isExternal: false,
                    },
                    {
                        href: 'legal/licensing',
                        text: 'Licenciamento',
                        isExternal: false,
                    },
                    {
                        href: 'legal/terms',
                        text: 'Termos',
                        isExternal: false,
                    },
                ],
            },
        ],
    },
    productsPage: {
        productsContent: {
            title: 'Produtos',
        },
        categoriesContent: {
            title: 'Categorias',
        },
    },
    aboutUsPage: {
        title: 'Orun',
        text: [
            'Desenhei roupa que queria vestir e que não encontrava à venda - basicamente foi isso. A partir daí, reactivei e pacifiquei o meu gosto pela imagem dando oportunidade à veia da criatividade de se expressar, agora de forma madura. Pretendo descomplexar e sensualizar a imagem masculina trabalhando com tecidos e cortes fluídos que conferem suavidade, movimento e sensibilidade.',
            'Há um processo pessoal que acompanha o nascimento da Orun: é como se fosse o culminar de uma fase em que guardei para mim, e só para mim, a liberdade criativa que no meu caso ocupa múltiplas formas. A noção de harmonia, o gosto pelo belo, e a vontade de criar típica de um libriano, fez com que desenhasse uma marca-conceito para um homem que rompe com uma imagem fechada de masculinidade e se entrega ao carácter, à ousadia e à libertação de conceitos pré-definidos.',
            'Despertar a sensualidade masculina. Com um quê de sagrado, outro de profano. Sendo a indústria têxtil a que mais contribui para a poluição, tomei como urgente a necessidade de utilização de recursos que são desperdício industrial do setor têxtil, apoiando-me numa ideologia na sustentabilidade e reaproveitamento.',
            'Crio peças intemporais inseridas na definição de Slow Fashion, com produção em pequena escala e livre da volatilidade das tendências de mercado. Trabalho de forma livre: sem colecções sazonais, defendendo a qualidade dos materiais, o design, a exclusividade, a produção local e artesanal, escolhendo matérias primas que garantam maior durabilidade.',
            'Inspira-me o céu e o vento. A terra, o fogo e a água. Inspira-me o que é  divino. Inspira-me quem se libertou.',
            'Como eu. Inspira-me a Carla, a Conceição, o Carlos, e o Berto. O Thiago, o Rodrigo, o Diogo, a Andréia e o Rafael. Inspira-me quem conspira a favor do Bem. Como eu. Este é um território livre. E assim continuará a ser.',
            'Orun.',
            'Tiago Bastos.',
        ],
    },
    contactUsPage: {
        title: 'Contacte-nos',
        description: 'Você pode entrar em contato connosco diretamente por e-mail ou WhatsApp.',
        formContent: {
            nameInput: {
                name: 'name',
                label: 'Nome',
                placeholder: 'O seu nome',
            },
            emailInput: {
                name: 'email',
                label: 'Email',
                placeholder: 'O seu email',
            },
            phoneInput: {
                name: 'phone',
                label: 'Telemóvel',
                placeholder: 'O seu número de telemóvel',
            },
            messageInput: {
                name: 'message',
                label: 'Mensagem',
                placeholder: 'A sua mensagem',
            },
            submitMessage: 'Enviar',
            loadingMessage: 'Enviando...',
        },
    },
    privacyPage: {
        title: 'Política de Privacidade',
        topics: [
            {
                privacyTopicTitle: 'Informações de conteúdo',
                privacyTopicText: [
                    'A Loja Online da Orun reserva-se o direito de modificar a qualquer momento a informação e oferta comercial apresentada sobre: produtos, preços, promoções, condições comerciais e serviços.',
                    'É terminantemente proibida a inserção de links neste site, para fins comerciais sem autorização  prévia. Da mesma forma, a utilização do domínio www.orun.pt para fins abusivos, e sem autorização prévia, poderá estar sujeita ao recurso aos meios legais competentes por parte da Loja Online Orun.',
                    'Caso encontre links em outros sites que permitam o acesso, informamos que não nos responsabilizamos nem pela origem da página nem pelos conteúdos nela registados.',
                    'Fazemos todos os esforços para que a informação apresentada esteja isenta de erros tipográficos e sempre que estes ocorram, iremos corrigi-los o mais rapidamente possível.',
                    'As fotos apresentadas no site são meramente ilustrativas e correspondem ao produto à venda. Recomendamos que você consulte as informações detalhadas do produto para obter informações sobre as suas características.',
                    'Os preços e especificações dos produtos estão sujeitos a alterações sem aviso prévio.',
                    'Apesar dos esforços da loja online Orun, alguns produtos podem estar com preços incorretos, por isso verificamos os preços sempre que processamos os pedidos. Se o preço do produto for inferior ao preço anunciado, reembolsaremos a diferença.',
                    'Se o preço for superior, informaremos o cliente por e-mail e aguardamos a sua decisão de aceitar a nova proposta ou cancelar a encomenda.	Em caso de indisponibilidade do produto e/ou rutura de stock, será informado do cancelamento parcial ou total da sua encomenda com direito ao reembolso do respetivo valor pago.',
                ],
            },
            {
                privacyTopicTitle: 'Propriedade Industrial e Intelectual',
                privacyTopicText: [
                    'Todos os textos, comentários, trabalhos, ilustrações, trabalhos e imagens reproduzidos ou representados no site www.orun.pt são estritamente reservados em termos de direitos autorais, bem como direitos de propriedade intelectual, em todo o mundo.',
                    'Assim, e nos termos do Código da Propriedade Intelectual, a utilização para fins privados só é autorizada mediante disposições em contrário, incluindo disposições mais restritivas contidas naquele código.',
                    'Qualquer reprodução ou representação total ou parcial de www.orun.pt ou de todos ou parte dos elementos nele incluídos é estritamente proibida.',
                ],
            },
            {
                privacyTopicTitle: 'Disponibilidade de produto',
                privacyTopicText: [
                    'A Loja Online Orun apenas processa uma encomenda efetuada por um cliente após confirmação do respetivo pagamento, pelo que não pode garantir a disponibilidade dos artigos até ao início do referido processamento.',
                    'Data estimada de envio: até 1/2 dias úteis.',
                    'Ao tempo estimado de envio, existe também o tempo de envio, que depende da transportadora que escolher e do destino da sua encomenda.',
                    'Para entregas em território nacional continental, estimamos um prazo de entrega até 5 dias úteis, a partir do momento da confirmação do pagamento.',
                    'A loja online da Orun envia apenas durante a semana. Desta forma, nem fins de semana nem feriados são contabilizados para a estimativa de entrega dos pedidos.',
                    'Qualquer atraso no envio dos artigos, atendendo às datas estimadas apresentadas, não confere direito a indemnização.',
                    'Em caso de rutura de stock, o cliente será informado. Se a substituição for superior a 5 dias úteis, será dada ao cliente a opção de cancelar, com o respetivo reembolso, parte ou a totalidade da encomenda.',
                ],
            },
            {
                privacyTopicTitle: 'Protecção de Dados Pessoais',
                privacyTopicText: [
                    'Em cumprimento da Lei n.0 67/98, de 26 de Outubro, sobre a Proteção de Dados Pessoais, informamos que o tratamento dos dados pessoais recolhidos no website www.orun.pt é da responsabilidade de Tiago Filipe Frederico Bastos, pessoa singular portando o número de contribuinte 240866444.',
                    'Os dados pessoais são tratados informaticamente, para envios correspondentes às suas encomendas, respetivo suporte administrativo, e para fins estatísticos.',
                    'Os dados pessoais recolhidos poderão ser comunicados a entidades terceiras de reconhecida reputação para efeitos de marketing direto. É garantido ao titular o direito de acesso, retificação, alteração ou eliminação dos seus dados pessoais, para o fazer, ou contactar-nos indicando o seu nome, apelidos, morada e número de cliente, através do email: info@orun.pt.',
                    'O Cliente autoriza a Orun a tratar automaticamente os dados pessoais fornecidos, nomeadamente através da utilização de cookies.',
                    'Não obstante a Orun pode recolher e tratar dados de forma segura e prevenir a sua perda ou manipulação, recorrendo às técnicas mais aperfeiçoadas para o efeito, informamos que a recolha em rede aberta permite a circulação de dados pessoais sem condições de segurança, sob o risco de serem vistos e utilizados por terceiros não autorizados.',
                ],
            },
        ],
    },
    termsOfServicePage: {
        title: 'Termos de Serviço',
        topics: [
            'Todo e qualquer pedido feito à Orun através da loja online será regido por estas Condições de Compra:',
            'Ao fazer o pedido, você reconhece que leu, entendeu e aceitou as presentes condições de compra.',
            'A Orun poderá, a qualquer momento, alterar total ou parcialmente os termos e condições de venda aqui estabelecidos.',
            'As condições gerais de venda aplicáveis aos produtos Orun podem ser encontradas abaixo no site www.orun.pt (a "página web"). Como tal, a utilização deste website, quando aplicável, implicará a aceitação por parte do utilizador das presentes condições gerais de venda.',
            'No entanto, se você tiver alguma dúvida sobre eles, entre em contacto com o nosso Serviço de Apoio ao Cliente através do email: info@orun.pt',
        ],
    },
    deliveryPage: {
        title: 'Política de entregas',
        topics: [
            {
                deliveryTopicTitle: 'Envio e Entrega',
                deliveryTopicText: [
                    'A partir do momento da entrega, o risco do produto será suportado pelo cliente. O envio dos produtos adquiridos através de www.orun.pt será realizado através de uma empresa de correio expresso, e estes serão entregues  dentro dos prazos indicados pelas mesmas.',
                    'Para evitar problemas de entrega (endereço errado, destinatário ausente, etc.) é essencial enviar toda a informação correta no ato de encomenda.',
                    'O preço de entrega é calculado de acordo com o método de envio escolhido e os produtos adquiridos.	O preço exato do transporte será calculado sempre que um artigo for adicionado ao cesto de compras, e será apresentado na página de checkout que aparece antes de o cliente confirmar a encomenda e antes de introduzir os dados de pagamento.',
                    'Os custos de envio podem ser alterados a qualquer momento sem aviso prévio.	Esta alteração será aplicável a partir do momento em que o novo custo for incluído nos Termos e Condições de Venda.	Em qualquer caso, os custos aplicáveis serão os portes de envio apresentados no momento da encomenda.',
                ],
            },
            {
                deliveryTopicTitle: 'Métodos de Pagamento',
                deliveryTopicText: [
                    'Após a confirmação da sua encomenda, encontrará várias opções de pagamento disponíveis no seu carrinho de compras, podendo escolher a que mais lhe convém, de entre as seguintes:',
                    'MBWay.',
                    'Revolut.',
                    'Transferência Bancária.',
                    'A Orun não aceita cheques ou dinheiro como pagamento para compras online, apenas as opções de pagamento listadas acima.',
                ],
            },
        ],
    },
};

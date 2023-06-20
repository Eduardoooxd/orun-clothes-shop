import { Dictionary } from './dictionaries';

export const dictionary: Dictionary = {
    language: 'pt',
    navBar: {
        NAVBAR_LINKS: {
            Category: {
                text: 'Produtos',
                href: '/search',
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
        colorContent: {
            colorText: 'Cor',
            chooseColorText: 'Escolha a cor',
        },
        comingSoonText: 'Loja online em breve',
        addToCartContent: {
            addToBagText: 'Adicionar ao carrinho',
            selectOptionText: 'Selecione uma opção',
            disabledProductText: 'Produto esgotado',
        },
        contactForm: {
            mailSubject: 'Disponibilidade de stock do produto "${title}"',
            mailBody:
                'Olá !%0D%0A%0D%0A%20%20%20%20Queria comprar o seguinte produto ${title} quando houver disponibilidade de stock.%0D%0A%20%20%20%20${title} com tamanho (se aplicável) [inserir tamanho].%0D%0A%0D%0A%20%20%20%20Detalhes de envio:%0D%0A------------------%0D%0A%0D%0A%20%20%20%20Telemóvel: [inserir contacto telefónico]%0D%0A%20%20%20%20 Morada : [inserir morada]%0D%0A%20%20%20%20 NIF (Opcional) : [inserir NIF]%0D%0A%0D%0ADetalhes do Produto:%0D%0A------------------%0D%0A%20%20%20%20Nome da peça: ${title}%0D%0A%20%20%20%20Preço: ${price} euros%0D%0A%0D%0A%0D%0A%0D%0AObrigado!',
        },
        successMessage: {
            title: 'Produto adicionado ao carrinho com sucesso !',
            description: 'Aceda ao seu carrinho para concluir a compra.',
        },
        errorMessage: {
            title: 'Erro ao adicionar o produto !',
            description: 'Por favor, tente novamente mais tarde.',
        },
        contactUsItemAvailableText: 'Contacte-nos para saber disponibilidade de stock',
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
            'Orunizar: vestir peças intemporais inseridas na definição de Slow Fashion, com produção em pequena escala e livre da volatilidade das tendências de mercado.',
            'Sem colecções sazonais, defendendo a qualidade dos materiais, o design, a exclusividade, a produção local e artesanal, escolher matérias primas que garantam maior durabilidade é o que move a Orun.',
            'Inspira-me o céu e o vento, a terra, o fogo e a água. Inspiram-me a liberdade e quem se libertou e poder traduzir tudo isso numa peça de roupa tem sido dar matéria à criatividade que está por trás deste projeto.',
            'Orun. Que significa céu.',
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
            successMessage: {
                title: 'Mensagem enviada com sucesso!',
                description: 'Iremos responder o mais breve possível.',
            },
            errorMessage: {
                title: 'Erro ao enviar a mensagem!',
                description: 'Por favor, tente novamente mais tarde.',
            },
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
    returnsPage: {
        returnsTopicTitle: 'Política de Devoluções',
        topics: [
            {
                returnsTopicTitle: 'Trocas e Devoluções',
                returnsTopicText: [
                    'O utilizador pode optar pela livre resolução do contrato, nos termos legais aplicáveis. Para exercer o seu direito de livre resolução, o utilizador deverá comunicar ao Serviço de Apoio ao Cliente da Orun, a sua decisão de resolução do presente contrato através de uma declaração inequívoca (por exemplo, correio postal , ou e-mail para info@orun.pt).',
                    'Para que o prazo de livre resolução seja respeitado, basta que a sua comunicação referente ao exercício do direito de livre resolução seja enviada à Orun antes do término do prazo de resolução, 14 dias corridos a partir da data de entrega dos artigos.',
                    'Em caso de rescisão deste contrato, todos os pagamentos efetuados serão reembolsados, excluídos os custos de, sem demora injustificada e, em qualquer caso, no prazo máximo de 14 (quatorze) dias a partir da data em que a Orun for informada de sua decisão rescindir este contrato.',
                    'Deverá proceder ao reembolso do(s) artigo(s) em bom estado, na embalagem original completa e acompanhado do número de encomenda, as despesas de devolução serão de inteira responsabilidade do cliente.',
                    'O cliente deve sempre guardar o comprovativo de envio dos artigos. Todos os artigos serão verificados à chegada às nossas instalações e só serão aceites para devolução aqueles que cumpram com as condições referidas.',
                ],
            },
            {
                returnsTopicTitle: 'Condições de Devolução',
                returnsTopicText: [
                    'O cliente beneficia de um prazo de 15 (quinze) dias para devolução a partir da data de receção dos artigos (salvo condições especiais concedidas a tempo).',
                    'O cliente deverá proceder ao reembolso do(s) artigo(s) em bom estado, sem sinais de uso, na embalagem original completa, acompanhado do número de encomenda.',
                    'O cliente deve primeiro entrar em contacto connosco através do e-mail info@orun.pt descrevendo detalhadamente o motivo da devolução.',
                    'Todos os artigos serão verificados à chegada às nossas instalações e só serão aceites para troca ou devolução aqueles que respeitarem as condições de devolução.',
                    'Não são aceites devoluções de artigos com sinais de desgaste, mau uso e/ou qualquer problema que possa ter causado o defeito ou mau uso do artigo (ex: queda, humidade, etc.).',
                    'O Cliente poderá optar por outro meio de devolução, suportando integralmente os custos da devolução e devendo sempre guardar o comprovativo de envio dos artigos, para a seguinte morada: Rua da Boa Vista nº112 4560-124 Galegos, Penafiel.',
                    'A Orun só é responsável pelas despesas de devolução e reenvio se:',
                    '-	Houver um erro interno e o produto enviado não corresponde ao pedido.',
                    '-	O produto é defeituoso na origem.',
                    '-	Se tiver sido danificado durante o transporte (o dano deve ser anotado na guia de remessa no momento da entrega).',
                    'Para efeitos de reembolso do gasto de devolução, o cliente terá de apresentar a respetiva fatura/comprovativo.',
                    'No caso de devolução de todos os artigos, se a encomenda tiver dado direito ao Cliente a um brinde, este também deverá ser devolvido.',
                    'No caso de pedido de reembolso de um artigo adquirido a preço reduzido, devido a uma oferta especial, a Orun reembolsará o valor efetivamente pago pelo Cliente e não o valor total.',
                ],
            },
            {
                returnsTopicTitle: 'Condições de troca',
                returnsTopicText: [
                    'A troca de artigos só é possível nos casos em que o cliente pretenda outro tamanho e/ou cor dos mesmos artigos que pretende trocar.',
                    'Os itens de troca serão enviados automaticamente para o mesmo endereço para o qual os itens foram originalmente enviados.',
                    'Caso haja diferença de valor, o mesmo será cobrado mediante envio de referência multibanco. Após o prazo de pagamento, o pedido de troca será cancelado e reembolsado.',
                    'Independentemente do método de pagamento utilizado na sua compra, os reembolsos resultantes de trocas, e/ou ajustes de valor de câmbio, serão sempre efetuados para IBAN. Caso o IBAN seja omitido da conta do cliente, o mesmo será feito por cheque, que será enviado por correio para a morada da conta do cliente. É responsabilidade do cliente manter essas informações atualizadas.',
                ],
            },
            {
                returnsTopicTitle: 'Reembolsos',
                returnsTopicText: [
                    'Independentemente do método de pagamento utilizado na sua compra, os reembolsos resultantes de devoluções, onde exista pelo menos 1 artigo para troca, e/ou ajustes do valor da troca, serão sempre efetuados para IBAN.',
                ],
            },
        ],
    },
    editItemQuantityForm: {
        successMessage: {
            description: 'Quantidade alterada com sucesso',
        },
        errorMessage: {
            title: 'Erro ao alterar quantidade',
            description: 'Por favor, tente novamente mais tarde.',
        },
        increaseMessage: 'Incrementar quantidade do produto',
        decreaseMessage: 'Reduzir quantidade do produto',
    },
    deleteItemForm: {
        successMessage: {
            description: 'Produto retirado do carrinho com sucesso',
        },
        errorMessage: {
            title: 'Erro ao remover o produto',
            description: 'Por favor, tente novamente mais tarde.',
        },
        deleteMessage: 'Apagar produto do carrinho',
    },
    cartModalContent: {
        title: 'O meu carrinho',
        emptyCartText: 'O seu carrinho está vazio',
        checkoutText: 'Finalizar compra',
    },
    searchTooltipContent: {
        searchProductsText: 'Procure por produtos',
    },
    searchPageContent: {
        multipleResultsText: 'resultados',
        singleResultText: 'resultado',
        noResultsText: 'Nenhum resultado encontrado',
        showingText: 'Mostrando',
        forText: 'para',
    },
    cookiesSettingContent: {
        title: 'Definições de cookies',
        description:
            'Usamos cookies para fornecer uma experiência de utilizador personalizada. Ao clicar em “Aceitar todos os cookies”, você concorda com o armazenamento de cookies em seu dispositivo. Se você quiser saber mais sobre cookies e por que as usamos, consulte a nossa pagina de privacidade.',
        acceptAllCookiesText: 'Aceitar as cookies',
    },
    newsletterValidation: {
        invalidEmail: 'Por favor, insira um endereço de e-mail válido.',
        requireCheckboxEmail: 'Concordo em receber e-mails de marketing relevantes da Orun.',
        emailPlaceholder: 'Insira o seu endereço de e-mail',
        signUpCallout:
            'Subscreva a nossa newsletter para obter atualizações e acesso antecipado a novos produtos.',
        signUpButtonText: 'Subscrever',
        successMessage: {
            title: 'Obrigado por subscreveres!',
            description: 'Utiliza o teu código de desconto: <b>ORUN-15<b/>',
        },
        errorMessage: {
            title: 'Erro ao subscreveres a newsletter',
            description: 'Por favor, tente novamente mais tarde.',
        },
        firstNamePlaceholder: 'Primeiro nome',
        invalidFirstName: 'Por favor, insira um primeiro nome válido.',
        lastNamePlaceholder: 'Último nome',
        invalidLastName: 'Por favor, insira um último nome válido.',
    },
    popUpContent: {
        title: 'ORUNIZA-TE',
        description: '-15% de dia 22 a 28 de Junho',
    },
    newsletterFooter: {
        calloutText: 'ORUNIZA-TE',
        learnMoreText: 'Subscreve a nossa newsletter',
    },
};

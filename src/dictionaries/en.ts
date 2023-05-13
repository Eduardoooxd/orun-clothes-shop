import { Dictionary } from './dictionaries';

export const dictionary: Dictionary = {
    language: 'en',
    navBar: {
        NAVBAR_LINKS: {
            Category: {
                text: 'Products',
                href: '/products',
            },
            AboutUs: {
                text: 'About us',
                href: '/aboutUs',
            },
            ContactUs: {
                text: 'Contact us',
                href: '/contact',
            },
        },
        CategoryDropdown: {
            allProductsText: 'All products',
        },
    },
    aboutUs: {
        title: 'About us',
        desktopContent: [
            {
                title: 'Orun. Sky. Freedom. Free Spirit.',
                paragraphs: [
                    'The man who breaks with a closed image of masculinity and surrenders to character, daring and the release of pre-defined concepts.',
                    'We intend to uncomplicate and sensualize the male image by working with fluid fabrics and cuts that provide softness, movement and sensitivity at the same time, which awakens the sacred in each one through the creation of unique pieces.',
                    'As the textile industry contributes the most to pollution, we consider the urgent need to use resources that are industrial waste in the textile sector and support our ideology of sustainability and reuse.',
                ],
            },
            {
                title: 'The sky and the wind inspire us. Earth, fire and water.',
                paragraphs: [
                    'We create timeless pieces within the definition of Slow Fashion, producing on a small scale and free from the volatility of market trends. We work freely: without seasonal collections, defending the quality of materials, design, exclusivity, local and artisanal production, choosing raw materials that guarantee greater durability.',
                    'Inspired in heaven, made by earth, for the spirit men.',
                ],
            },
        ],
        mobileContent: [
            {
                title: 'Orun. Sky. Freedom. Free Spirit.',
                paragraphs: [
                    'The man who breaks with a closed image of masculinity and surrenders to character, daring and the release of pre-defined concepts. We take as urgent the need to use resources that are industrial waste from the textile sector and we support our ideology in sustainability and reuse.',
                    'We work freely: without seasonal collections, defending the quality of materials, design, exclusivity, local, artisanal and small-scale production, choosing raw materials that guarantee greater durability.',
                    'Heaven inspires us. Earth, fire and water.',
                    'Inspired in heaven, made by earth, for the spirit men.',
                ],
            },
        ],
    },
    topPicks: {
        title: 'Top picks',
    },
    productPage: {
        title: 'Product',
        sizeContent: {
            sizeText: 'Size',
            chooseSizeText: 'Choose size',
        },
        colorsText: 'Colors',
        comingSoonText: 'Online Shop Coming Soon',
        orderText: 'Order',
        contactForm: {
            mailSubject: 'I\'m interested in buying "${title}"',
            mailBody:
                "Hello,%0D%0A%0D%0A%20%20%20%20I'm interested in purchasing the following product:%0D%0A%20%20%20%20${title} with size (if applicable) [Insert Size].%0D%0A%0D%0A%20%20%20%20Shipping details:%0D%0A------------------%0D%0A%0D%0A%20%20%20%20 Mobile: [Insert phone contact]%0D%0A %20%20%20%20 Address : [Insert Address]%0D%0A%20%20%20%20 NIF (Optional) : [Insert NIF] %0D%0A%0D%0AProduct Details:%0D%0A------------------%0D%0A%20%20%20%20Product: ${title}%0D%0A%20%20%20%20Price: ${price} euros%0D%0A%0D%0A%0D%0A%0D%0AThank you!",
        },
    },
    footer: {
        ABOUT_LINKS: [
            {
                title: 'About',
                links: [
                    {
                        href: '/aboutUs',
                        text: 'Our Story',
                        isExternal: false,
                    },
                    /*
                    {href: '/en/#aboutUs',
                        href: '/stores',
                        text: 'Our Stores',
                    },
                    {
                        href: '/careers',
                        text: 'Careers',
                    },
                    {
                        href: '/press',
                        text: 'Press',
                    },*/
                ],
            },
            {
                title: 'Client Service',
                links: [
                    {
                        href: '/delivery',
                        text: 'Delivery',
                        isExternal: false,
                    },
                    {
                        href: '/delivery',
                        text: 'Returns',
                        isExternal: false,
                    },
                ],
            },
            {
                title: 'Social',
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
                title: 'Legal',
                links: [
                    {
                        href: 'legal/privacy',
                        text: 'Privacy Policy',
                        isExternal: false,
                    },
                    {
                        href: 'legal/licensing',
                        text: 'Licensing',
                        isExternal: false,
                    },
                    {
                        href: 'legal/terms',
                        text: 'Terms',
                        isExternal: false,
                    },
                ],
            },
        ],
    },
    productsPage: {
        productsContent: {
            title: 'Products',
        },
        categoriesContent: {
            title: 'Categories',
        },
    },
    aboutUsPage: {
        title: 'Orun',
        text: [
            "I designed clothes that I wanted to wear that I couldn't find for sale - that was basically it. From then on, I reactivated and pacified my taste for the image, giving opportunity to the vein of creativity to express itself, now in a mature way. I intend to uncomplicate and sensualize the male image by working with fluid fabrics and cuts that provide smoothness, movement and sensitivity.",
            'There is a personal process that accompanies the birth of Orun: it is as if it were the culmination of a phase in which I kept for myself, and only for myself, the creative freedom that in my case takes on multiple forms. The notion of harmony, the taste for beauty, and the will to create typical of a Libra, led him to design a concept brand for a man who breaks with a closed image of masculinity and surrenders to character, daring and liberation of pre-defined concepts.',
            'Awaken male sensuality. With something sacred and something profane. As the textile industry is the one that most contributes to pollution, I took the urgent need to use resources that are industrial waste in the textile sector, supporting myself in an ideology of sustainability and reuse.',
            'I create timeless pieces within the definition of Slow Fashion, with small-scale production and free from the volatility of market trends. Free-form work: without seasonal collections, defending the quality of materials, design, exclusivity, local and artisanal production, choosing raw materials that guarantee greater durability.',
            'The sky and the wind inspire me. Earth, fire and water. Inspire me what is divine. Inspire me who freed himself.',
            'Like me. Carla, Conceição, Carlos, and Berto inspire me. Thiago, Rodrigo, Diogo, Andréia and Rafael. I am inspired by those who conspire in favor of Good. Like me. This is free territory. And so it will continue to be.',
            'Orun.',
            'Tiago Bastos.',
        ],
    },
    contactUsPage: {
        title: 'Contact Us',
        description: 'You can contact us directly by email or WhatsApp.',
        formContent: {
            nameInput: {
                name: 'name',
                label: 'Name',
                placeholder: 'Your name',
            },
            emailInput: {
                name: 'email',
                label: 'Email',
                placeholder: 'Your email',
            },
            phoneInput: {
                name: 'phone',
                label: 'Phone',
                placeholder: 'Your phone',
            },
            messageInput: {
                name: 'message',
                label: 'Message',
                placeholder: 'Your message',
            },
            submitMessage: 'Send',
            loadingMessage: 'Sending...',
        },
    },
    privacyPage: {
        title: 'Privacy Policy',
        topics: [
            {
                privacyTopicTitle: 'Content Information',
                privacyTopicText: [
                    'The Orun Online Store reserves the right to modify at any time the information and commercial offer presented on: products, prices, promotions, commercial conditions and services.',
                    'It is strictly forbidden to insert links on this site for commercial purposes without prior authorization. Likewise, the use of the www.orun.pt domain for abusive purposes, and without prior authorization, may be subject to recourse to the competent legal means by the Orun Online Store.',
                    'If you find links on other sites that allow access, we inform you that we are not responsible for the origin of the page or for the contents registered therein.',
                    'We make every effort to ensure that the information presented is free of typographical errors and whenever they occur, we will correct them as quickly as possible.',
                    'The photos presented on the website are merely illustrative and correspond to the product for sale. We recommend that you consult the detailed product information for information about its features.',
                    'Product prices and specifications are subject to change without notice.',
                    'Despite the best efforts of the Orun online store, some products may be incorrectly priced, so we check prices every time we process orders. If the price of the product is lower than the advertised price, we will refund the difference.',
                    'If the price is higher, we will inform the customer by email and await their decision to accept the new proposal or cancel the order. In the event of product unavailability and/or out of stock, you will be informed of the partial or total cancellation of your order with the right to a refund of the amount paid.',
                ],
            },
            {
                privacyTopicTitle: 'Industrial and Intellectual Property',
                privacyTopicText: [
                    'All texts, comments, works, illustrations, works and images reproduced or represented on the website www.orun.pt are strictly reserved in terms of copyright, as well as intellectual property rights, worldwide.',
                    'Thus, and under the terms of the Intellectual Property Code, use for private purposes is only authorized under provisions to the contrary, including more restrictive provisions contained in that code.',
                    'Any total or partial reproduction or representation of www.orun.pt or of all or part of the elements included therein is strictly prohibited.',
                ],
            },
            {
                privacyTopicTitle: 'Product Availability',
                privacyTopicText: [
                    'The Orun Online Store only processes an order placed by a customer after confirmation of the respective payment, so it cannot guarantee the availability of the articles until the beginning of said processing.',
                    'Estimated shipping date: up to 1/2 business days.',
                    'In addition to the estimated shipping time, there is also the shipping time, which depends on the carrier you choose and the destination of your order.',
                    'For deliveries in mainland national territory, we estimate a delivery time of up to 5 working days, from the moment of confirmation of payment.',
                    "Orun's online store only ships on weekdays. In this way, neither weekends nor holidays are counted for the order delivery estimate.",
                    'Any delay in sending the items, taking into account the estimated dates presented, does not confer the right to compensation.',
                    'In the event of a stock break, the customer will be informed. If the replacement takes longer than 5 business days, the customer will be given the option to cancel, with the respective refund, part or all of the order.',
                ],
            },
            {
                privacyTopicTitle: 'Personal Data Protection',
                privacyTopicText: [
                    'In compliance with Law n.0 67/98, of October 26, on the Protection of Personal Data, we inform you that the processing of personal data collected on the website www.orun.pt is the responsibility of Tiago Filipe Frederico Bastos, a natural person carrying the taxpayer number 240866444.',
                    'Personal data are processed by computer, for shipments corresponding to your orders, respective administrative support, and for statistical purposes.',
                    "The personal data collected may be communicated to third parties of recognized reputation for the purposes of direct marketing. It's guaranteed gives the holder the right to access, rectify, change or delete their personal data, to do so, or contact us indicating their name, surname, address and customer number, via email: info@orun.pt.",
                    'The Customer authorizes Orun to automatically process the personal data provided, namely through the use of cookies.',
                    'Although Orun can collect and process data safely and prevent its loss or manipulation, using the most perfected techniques for this purpose, we inform you that the collection in an open network allows the circulation of personal data without security conditions, under the risk of being seen and used by unauthorized third parties.',
                ],
            },
        ],
    },
};

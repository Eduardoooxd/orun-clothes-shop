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
                    {
                        href: 'http://tiktok.com/@orunfreespiritmen',
                        text: 'tik tok',
                        isExternal: true,
                    },
                    {
                        href: 'https://pin.it/3KhN1lp',
                        text: 'pinterest',
                        isExternal: true,
                    },
                ],
            },
            {
                title: 'Legal',
                links: [
                    {
                        href: '',
                        text: 'Privacy Policy',
                        isExternal: false,
                    },
                    {
                        href: '',
                        text: 'Licensing',
                        isExternal: false,
                    },
                    {
                        href: '',
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
};

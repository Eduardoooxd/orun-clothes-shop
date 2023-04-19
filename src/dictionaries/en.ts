import { Dictionary } from './dictionaries';

export const dictionary: Dictionary = {
    language: 'en',
    navBar: {
        NAVBAR_LINKS: {
            Category: {
                text: 'Categories',
                href: '/',
            },
            AboutUs: {
                text: 'About us',
                href: '#aboutUs',
            },
            ContactUs: {
                text: 'Contact us',
                href: '/',
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
                        href: '/en/#aboutUs',
                        text: 'Our Story',
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
                    },
                    {
                        href: '/delivery',
                        text: 'Returns',
                    },
                ],
            },
            {
                title: 'Social',
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
                title: 'Legal',
                links: [
                    {
                        href: '',
                        text: 'Privacy Policy',
                    },
                    {
                        href: '',
                        text: 'Licensing',
                    },
                    {
                        href: '',
                        text: 'Terms',
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
};

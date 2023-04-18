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
                href: '/',
            },
            ContactUs: {
                text: 'Contact us',
                href: '/',
            },
        },
    },
    aboutUs: {
        title: 'About us',
        content: [
            {
                title: 'Orun. Sky. Freedom. Free Spirit.',
                paragraphs: [
                    'Emerges from a desire for differentiation. In a world where conformity prevails, Orun comes to deconstruct, to break patterns and to celebrate the uniqueness and authenticity of each individual. Orun doesn’t follow trends, it creates freely. Bringing unique styles and designs, exclusive pieces or produced on a small scale. So, when you see an Orun piece, look closely at it, as it’s unlikely that you’ll see it again.',
                    'It also carries in its DNA the care for nature, using high-quality fabrics from industrial waste in the textile sector. Our ideology is based on sustainability and the reuse of materials. Orun brings back manual labor. In a world of machines and automation, Orun returns to the power of artisanal work. Our pieces are produced by those who dedicate themselves to the power of detail and precision, governed by their love for the fabric. Produced in Portugal, handmade.',
                ],
            },
            {
                title: 'For the Spirit Men',
                paragraphs: [
                    'The man who breaks away from a closed image of masculinity and surrenders to character, boldness and the liberation of predefined concepts - we aim to uncomplicate and sensualize the male image by working with fluid fabrics and cuts that confer softness, movement and sensitivity. We consider the use of resources that are industrial waste in the textile sector urgent and we support our ideology in sustainability and reuse. We create timeless pieces that fit into the definition of Slow Fashion, departing from the obligation of producing by seasons or following market trends. We work freely: without seasonal collections, defending the quality of materials, design, exclusivity, local and artisanal production. Inspired in heaven, made by earth.',
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
        comingSoonText: 'Online Shop Coming Soon',
        orderText: 'Order',
    },
    footer: {
        ABOUT_LINKS: [
            {
                title: 'About',
                links: [
                    {
                        href: '/story',
                        text: 'Our Story',
                    },
                    {
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
                    },
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
                    {
                        href: '/accessibility',
                        text: 'accessibility',
                    },
                ],
            },
            {
                title: 'Social',
                links: [
                    {
                        href: 'https://www.instagram.com/orun.menclothing/',
                        text: 'instagram',
                    },
                    {
                        href: 'https://www.instagram.com/orun.menclothing/',
                        text: 'facebook',
                    },
                    {
                        href: 'https://www.instagram.com/orun.menclothing/',
                        text: 'tik tok',
                    },
                    {
                        href: 'https://www.instagram.com/orun.menclothing/',
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
};

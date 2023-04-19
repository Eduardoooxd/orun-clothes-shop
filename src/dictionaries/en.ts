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
                    'Emerges from a desire for differentiation. In a world where conformity prevails, Orun comes to deconstruct, to break patterns and to celebrate the uniqueness and authenticity of each individual. Orun doesn’t follow trends, it creates freely. Bringing unique styles and designs, exclusive pieces or produced on a small scale. So, when you see an Orun piece, look closely at it, as it’s unlikely that you’ll see it again.',
                    'It also carries in its DNA the care for nature, using high-quality fabrics from industrial waste in the textile sector. Our ideology is based on sustainability and the reuse of materials. Orun brings back manual labor. In a world of machines and automation, Orun returns to the power of artisanal work. Our pieces are produced by those who dedicate themselves to the power of detail and precision, governed by their love for the fabric. Produced in Portugal, handmade.',
                ],
            },
            {
                title: 'For the Spirit Men',
                paragraphs: [
                    'The man who breaks away from a closed image of masculinity and surrenders to character, boldness and the liberation of predefined concepts - we aim to uncomplicate and sensualize the male image by working with fluid fabrics and cuts that confer softness, movement and sensitivity. We consider the use of resources that are industrial waste in the textile sector urgent and we support our ideology in sustainability and reuse.',
                    'We create timeless pieces that fit into the definition of Slow Fashion, departing from the obligation of producing by seasons or following market trends. We work freely: without seasonal collections, defending the quality of materials, design, exclusivity, local and artisanal production. Inspired in heaven, made by earth.',
                ],
            },
        ],
        mobileContent: [
            {
                title: 'Orun. Sky. Freedom. Free Spirit.',
                paragraphs: [
                    'Emerges from a desire for differentiation. In a world where conformity prevails, Orun comes to deconstruct, to break patterns and to celebrate the uniqueness and authenticity of each individual. Orun doesn’t follow trends, it creates freely. Bringing unique styles and designs, exclusive pieces or produced on a small scale. So, when you see an Orun piece, look closely at it, as it’s unlikely that you’ll see it again.',
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
                "Hello,%0D%0A%0D%0A%20%20%20%20I'm interested in purchasing the following product:%0D%0A%20%20%20%20${title} with size (if applicable) [to be chosen].%0D%0A%0D%0A%20%20%20%20Shipping details:%0D%0A------------------%0D%0A%0D%0A%20%20%20%20 Mobile: [to be filled]%0D%0A %20%20%20%20 Address : [to be filled]%0D%0A%20%20%20%20 NIF : [to be filled] (Optional)%0D%0A%0D%0AProduct Details:%0D%0A------------------%0D%0A%20%20%20%20Product: ${title}%0D%0A%20%20%20%20Price: ${price} euros%0D%0A%0D%0A%0D%0A%0D%0AThank you!",
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
};

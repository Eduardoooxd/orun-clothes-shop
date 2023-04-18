import CloseUpProduct1 from '@/images/products/product1/closeup.jpg';
import FrontImageProduct1 from '@/images/products/product1/front.jpg';
import PreviewProduct1 from '@/images/products/product1/preview.jpg';
import SideProduct1 from '@/images/products/product1/side.jpg';
import PreviewProduct2 from '@/images/products/product2/preview.jpg';
import CloseUpProduct3 from '@/images/products/product3/closeup.jpg';
import FrontImageProduct3 from '@/images/products/product3/front.jpg';
import PreviewProduct3 from '@/images/products/product3/preview.jpg';
import SideProduct3 from '@/images/products/product3/side.jpg';
import CloseUpProduct4 from '@/images/products/product4/closeup.jpg';
import PreviewProduct4 from '@/images/products/product4/preview.jpg';
import SideProduct4 from '@/images/products/product4/side.jpg';
import { Product } from './products';

export const TunicsProducts: Product[] = [
    {
        id: 'LYNX',
        title: 'Trespasse Tunic - LYNX',
        price: 89,
        description:
            'A piece that evokes male sensuality in an uncomplicated and bold way. Free neckline in a low-cut piece, in high-quality, semi-transparent two-ply knit. With unique details on the shoulder marking and defining the style of the Orun man.',
        category: 'Tunic',
        sizes: ['S/M', 'M/L'],
        colors: ['Black', 'Green'],
        images: [PreviewProduct1, FrontImageProduct1, CloseUpProduct1, SideProduct1],
    },
    {
        id: 'HAMMAL',
        title: 'Open Tunic - HAMMAL',
        price: 89,
        description:
            'Fluid piece inspired by medicine men who are knowledgeable about the secrets and mysteries of the Earth and who are confident in themselves. A piece that evokes the wind through its composition and refers to a tribal imaginary composed of warriors, shamans, and men who express their masculinity sensually.',
        category: 'Tunics',
        sizes: ['S/M', 'M/L'],
        colors: ['Black'],
        images: [PreviewProduct2, PreviewProduct2],
    },
    {
        id: 'ADHIL',
        title: 'Open Tunic - ADHIL',
        price: 89,
        description:
            'Fluidity, naturalness, purity: traits that define the Orun Man. A piece of unique knit that exalts sensuality, the sacred, and love.',
        category: 'Tunics',
        sizes: ['Fluid'],
        colors: ['White'],
        images: [PreviewProduct3, FrontImageProduct3, CloseUpProduct3, SideProduct3],
    },
    {
        id: 'VEGA',
        title: 'Open Tunic - VEGA',
        price: 79,
        sizes: ['Fluid'],
        colors: ['Beige'],
        description:
            'Relaxation, cultural inspiration from South America, and the image of a modern and spiritual man. Easily adaptable to a more formal or informal style, this piece intends to bring to those who wear it the image of a confident, timeless, elegant, and spiritual man.',
        category: 'Tunics',
        images: [PreviewProduct4, PreviewProduct4, CloseUpProduct4, SideProduct4],
    },
];

export const SweatersProducts: Product[] = [
    {
        id: 'RIGEL',
        title: 'Sweater - RIGEL',
        price: 120,
        description:
            'Piece inspired by the Sports and Streetwear movement of the 70s. Bold V-neckline, sleeveless. With classic style but with the necessary contemporaneity to bring innovation to the man who wears it. Cotton knit that provides superior comfort.',
        category: 'Sweater',
        sizes: ['S/M', 'M/L'],
        colors: ['White'],
        images: [PreviewProduct1, FrontImageProduct1, CloseUpProduct1, SideProduct1],
    },
];

export const ShirtProducts: Product[] = [
    {
        id: 'CEPTUS',
        title: 'Kimono Shirt - CEPTUS',
        price: 77,
        description:
            'Fluid superior quality fabric with a soft touch. Wide cut and free neckline. Ideal to be worn as a shirt or as an open piece corresponding to a casual, sensual, discreet, and striking style.',
        category: 'Shirt',
        sizes: ['S/M', 'M/L'],
        colors: ['Terracotta', 'Black'],
        images: [PreviewProduct2, PreviewProduct2],
    },
];

export const ShortsProducts: Product[] = [
    {
        id: 'AZHA-BEACH',
        title: 'Beach Shorts - AZHA-BEACH',
        price: 55,
        description:
            'With three layers of fabric and a unique design, these shorts provide a relaxed, fluid, and differentiated look. Wear your swimsuit underneath and the AZHA-BEACH shorts on top, and get ready for days of beach, heat, sensuality, and relaxation.',
        category: 'Shorts',
        sizes: ['Adjustable size'],
        colors: ['Black', 'Green'],
        images: [PreviewProduct3, FrontImageProduct3, CloseUpProduct3, SideProduct3],
    },
    {
        id: 'AZHA-STREET',
        title: 'Sport Shorts - AZHA-STREET',
        price: 72,
        description:
            'Fluid cut shorts with rustic finishes that confer a piece of unique, bold design, and at the same time classic and elegant.',
        category: 'Shorts',
        sizes: ['Adjustable size'],
        colors: ['Khaki Green'],
        images: [PreviewProduct4, PreviewProduct4, CloseUpProduct4, SideProduct4],
    },
];

export const ExclusiveProducts: Product[] = [
    {
        id: 'DIWO',
        title: 'Kimono - DIWO',
        price: 189,
        description:
            'Unique, exclusive, and unrepeatable piece. High-quality fabric with oriental influences. Wide cut and adjustable to any size.',
        category: 'Exclusive',
        sizes: ['Adjustable size'],
        colors: [''],
        images: [PreviewProduct1, FrontImageProduct1, CloseUpProduct1, SideProduct1],
    },
];

export const ENProducts = [
    TunicsProducts,
    SweatersProducts,
    ShirtProducts,
    ShortsProducts,
    ExclusiveProducts,
].flat();

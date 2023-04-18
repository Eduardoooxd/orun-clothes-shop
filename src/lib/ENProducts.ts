import { Product } from './products';
import {
    BackADHIL,
    BackBlackImageCEPTUS,
    BackGreenImageLYNX,
    BackImageAZHA_STREET,
    BackImageCEPTUS,
    BackImageGreenAZHA_BEACH,
    BackImageLYNX,
    BackImageRIGEL,
    BackImageSUOPUS,
    CloseUpADHIL,
    CloseUpAZHA_BEACH,
    CloseUpImage2CEPTUS,
    CloseUpImage3CEPTUS,
    CloseUpImageCEPTUS,
    CloseUpImageLYNX,
    CloseUpImageRIGEL,
    CloseUpVEGA,
    FrontImage2CEPTUS,
    FrontImageADHIL,
    FrontImageAZHA_BEACH,
    FrontImageAZHA_STREET,
    FrontImageCEPTUS,
    FrontImageDIWO,
    FrontImageGreenAZHA_BEACH,
    FrontImageGreenLYNX,
    FrontImageHAMMAL,
    FrontImageLYNX,
    FrontImageRIGEL,
    FrontImageSUOPUS,
    FrontImageVEGA,
    PreviewImageCEPTUS,
    PreviewImageDIWO,
    PreviewImageGreenLYNX,
    PreviewImageLYNX,
    PreviewImageSUOPUS,
    PrincipalADHIL,
    PrincipalImageCEPTUS,
    SideADHIL,
    SideAZHA_BEACH,
    SideBlackImageCEPTUS,
    SideGreenAZHA_BEACH,
    SideGreenImageLYNX,
    SideImageDIWO,
    SideImageHAMMAL,
    SideImageSUOPUS,
    SideVEGA,
} from './ProductsImages';

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
        images: [
            PreviewImageLYNX,
            FrontImageLYNX,
            PreviewImageGreenLYNX,
            BackImageLYNX,
            BackGreenImageLYNX,
            CloseUpImageLYNX,
            FrontImageGreenLYNX,
            SideGreenImageLYNX,
        ],
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
        images: [FrontImageHAMMAL, SideImageHAMMAL],
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
        images: [PrincipalADHIL, FrontImageADHIL, CloseUpADHIL, SideADHIL, BackADHIL],
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
        images: [FrontImageVEGA, SideVEGA, CloseUpVEGA],
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
        images: [FrontImageRIGEL, CloseUpImageRIGEL, BackImageRIGEL],
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
        images: [
            PrincipalImageCEPTUS,
            PreviewImageCEPTUS,
            FrontImageCEPTUS,
            SideBlackImageCEPTUS,
            CloseUpImageCEPTUS,
            CloseUpImage2CEPTUS,
            FrontImage2CEPTUS,
            CloseUpImage3CEPTUS,
            BackBlackImageCEPTUS,
            BackImageCEPTUS,
        ],
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
        images: [
            FrontImageAZHA_BEACH,
            FrontImageGreenAZHA_BEACH,
            CloseUpAZHA_BEACH,
            BackImageAZHA_STREET,
            BackImageGreenAZHA_BEACH,
            SideAZHA_BEACH,
            SideGreenAZHA_BEACH,
        ],
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
        images: [FrontImageAZHA_STREET, BackImageAZHA_STREET],
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
        images: [PreviewImageDIWO, FrontImageDIWO, SideImageDIWO],
    },
    {
        id: 'SUOPUS',
        title: 'Kimono - SUOPUS',
        price: 143,
        description: 'Unique and unrepeatable piece. Wide cut and adjustable to any size.',
        category: 'Exclusive',
        sizes: ['Adjustable size'],
        colors: [''],
        images: [PreviewImageSUOPUS, FrontImageSUOPUS, BackImageSUOPUS, SideImageSUOPUS],
    },
];

export const ENProducts = [
    TunicsProducts,
    SweatersProducts,
    ShirtProducts,
    ShortsProducts,
    ExclusiveProducts,
].flat();

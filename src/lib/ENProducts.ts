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
    PreviewImageAZHA_STREET,
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
    SideImageAZHA_STREET,
    SideImageDIWO,
    SideImageHAMMAL,
    SideImageSUOPUS,
    SideVEGA,
} from './ProductsImages';

export const TunicsProducts: Product[] = [
    {
        id: 'LYNX-BLACK',
        title: 'Trespasse Tunic - LYNX BLACK',
        price: 89,
        description:
            'A piece that evokes male sensuality in an uncomplicated and bold way. Free neckline in a low-cut piece, in high-quality, semi-transparent two-ply knit. With unique details on the shoulder marking and defining the style of the Orun man.',
        category: 'Tunic',
        sizes: ['S/M', 'M/L'],
        colors: ['Black'],
        images: [FrontImageLYNX, PreviewImageLYNX, BackImageLYNX, CloseUpImageLYNX],
    },
    {
        id: 'LYNX-GREEN',
        title: 'Trespasse Tunic - LYNX GREEN',
        price: 89,
        description:
            'A piece that evokes male sensuality in an uncomplicated and bold way. Free neckline in a low-cut piece, in high-quality, semi-transparent two-ply knit. With unique details on the shoulder marking and defining the style of the Orun man.',
        category: 'Tunic',
        sizes: ['S/M', 'M/L'],
        colors: ['Green'],
        images: [
            PreviewImageGreenLYNX,
            BackGreenImageLYNX,
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
        category: 'Tunic',
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
        category: 'Tunic',
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
        category: 'Tunic',
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
        images: [CloseUpImageRIGEL, FrontImageRIGEL, BackImageRIGEL],
    },
];

export const ShirtProducts: Product[] = [
    {
        id: 'CEPTUS-TERRACOTA',
        title: 'Kimono Shirt - CEPTUS TERRACOTA',
        price: 77,
        description:
            'Fluid superior quality fabric with a soft touch. Wide cut and free neckline. Ideal to be worn as a shirt or as an open piece corresponding to a casual, sensual, discreet, and striking style.',
        category: 'Shirt',
        sizes: ['S/M', 'M/L'],
        colors: ['Terracotta'],
        images: [
            FrontImage2CEPTUS,
            FrontImageCEPTUS,
            PreviewImageCEPTUS,
            CloseUpImageCEPTUS,
            CloseUpImage2CEPTUS,
            BackImageCEPTUS,
        ],
    },
    {
        id: 'CEPTUS-BLACK',
        title: 'Kimono Shirt - CEPTUS BLACK',
        price: 77,
        description:
            'Fluid superior quality fabric with a soft touch. Wide cut and free neckline. Ideal to be worn as a shirt or as an open piece corresponding to a casual, sensual, discreet, and striking style.',
        category: 'Shirt',
        sizes: ['S/M', 'M/L'],
        colors: ['Black'],
        images: [PrincipalImageCEPTUS, SideBlackImageCEPTUS, BackBlackImageCEPTUS],
    },
];

export const ShortsProducts: Product[] = [
    {
        id: 'AZHA-BEACH-BLACK',
        title: 'Beach Shorts - AZHA-BEACH BLACK',
        price: 55,
        description:
            'With three layers of fabric and a unique design, these shorts provide a relaxed, fluid, and differentiated look. Wear your swimsuit underneath and the AZHA-BEACH shorts on top, and get ready for days of beach, heat, sensuality, and relaxation.',
        category: 'Shorts',
        sizes: ['Adjustable size'],
        colors: ['Black'],
        images: [FrontImageAZHA_BEACH, CloseUpAZHA_BEACH, SideAZHA_BEACH],
    },
    {
        id: 'AZHA-BEACH-GREEN',
        title: 'Beach Shorts - AZHA-BEACH GREEN',
        price: 55,
        description:
            'With three layers of fabric and a unique design, these shorts provide a relaxed, fluid, and differentiated look. Wear your swimsuit underneath and the AZHA-BEACH shorts on top, and get ready for days of beach, heat, sensuality, and relaxation.',
        category: 'Shorts',
        sizes: ['Adjustable size'],
        colors: ['Green'],
        images: [SideGreenAZHA_BEACH, FrontImageGreenAZHA_BEACH, BackImageGreenAZHA_BEACH],
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
        images: [
            PreviewImageAZHA_STREET,
            FrontImageAZHA_STREET,
            BackImageAZHA_STREET,
            SideImageAZHA_STREET,
        ],
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
        colors: [],
        images: [PreviewImageDIWO, FrontImageDIWO, SideImageDIWO],
    },
    {
        id: 'SUOPUS',
        title: 'Kimono - SUOPUS',
        price: 143,
        description: 'Unique and unrepeatable piece. Wide cut and adjustable to any size.',
        category: 'Exclusive',
        sizes: ['Adjustable size'],
        colors: [],
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

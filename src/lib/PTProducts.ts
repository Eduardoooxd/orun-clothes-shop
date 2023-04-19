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

export const TunicasProducts: Product[] = [
    {
        id: 'LYNX-BLACK',
        title: 'Túnica Trespasse - LYNX PRETA',
        price: 89,
        description:
            'Peça que evoca a sensualidade masculina de forma descomplexada e arrojada. Decote livre numa peça cavada, em malha de duas folhas semi-transparente de alta qualidade. Com detalhes únicos no ombro a marcar e a definir o estilo do homem Orun.',
        category: 'Túnicas',
        sizes: ['S/M', 'M/L'],
        colors: ['Preta'],
        images: [PreviewImageLYNX, FrontImageLYNX, BackImageLYNX, CloseUpImageLYNX],
    },
    {
        id: 'LYNX-GREEN',
        title: 'Túnica Trespasse - LYNX VERDE',
        price: 89,
        description:
            'Peça que evoca a sensualidade masculina de forma descomplexada e arrojada. Decote livre numa peça cavada, em malha de duas folhas semi-transparente de alta qualidade. Com detalhes únicos no ombro a marcar e a definir o estilo do homem Orun.',
        category: 'Túnicas',
        sizes: ['S/M', 'M/L'],
        colors: ['Verde'],
        images: [
            PreviewImageGreenLYNX,
            BackGreenImageLYNX,
            FrontImageGreenLYNX,
            SideGreenImageLYNX,
        ],
    },
    {
        id: 'HAMMAL',
        title: 'Túnica aberta - HAMMAL',
        price: 89,
        description:
            'Peça fluída, inspirada nos homens medicina, conhecedores dos segredos e mistérios da Terra e que são seguros de si. Peça que evoca o vento pela sua composição e que remete a um imaginário tribal composto por guerreiros, xamãs, e homens que expressam a sua masculinidade de forma sensual.',
        category: 'Túnicas',
        sizes: ['S/M', 'M/L'],
        colors: ['Preta'],
        images: [FrontImageHAMMAL, SideImageHAMMAL],
    },
    {
        id: 'ADHIL',
        title: 'Túnica aberta - ADHIL',
        price: 89,
        description:
            'Fluidez, naturalidade, pureza: traços que definem o Homem Orun. Peça em malha de caimento único que exalta a sensualidade, o sagrado e o amor.',
        category: 'Túnicas',
        sizes: ['Fluído'],
        colors: ['Branca'],
        images: [PrincipalADHIL, FrontImageADHIL, CloseUpADHIL, SideADHIL, BackADHIL],
    },
    {
        id: 'VEGA',
        title: 'Túnica aberta - VEGA',
        price: 79,
        sizes: ['Fluído'],
        colors: ['Beje'],
        description:
            'Descontração, inspiração cultural da América do Sul e a imagem de um homem moderno e espiritual. Fácilmente adaptável a um estilo mais formal ou informal, esta peça pretende trazer a quem a veste a imagem de um homem seguro, intemporal, elegante e espiritual.',
        category: 'Túnicas',
        images: [FrontImageVEGA, SideVEGA, CloseUpVEGA],
    },
];

export const CamisolasProducts: Product[] = [
    {
        id: 'RIGEL',
        title: 'Camisola - RIGEL',
        price: 120,
        description:
            'Peça inspirada no movimento Sports and streetwear dos anos 70. Decote arrojado em V, manga cava. Com estilo clássico mas com a contemporaniedade necessária para trazer inovação ao homem que a veste. Malha de algodão que confere conforto superior.',
        category: 'Camisola',
        sizes: ['S/M', 'M/L'],
        colors: ['Branca'],
        images: [CloseUpImageRIGEL, FrontImageRIGEL, BackImageRIGEL],
    },
];

export const CamisasProducts: Product[] = [
    {
        id: 'CEPTUS-TERRACOTA',
        title: 'Camisa-Quimono - CEPTUS TERRACOTA',
        price: 77,
        description:
            'Malha de qualidade superior fluída, de toque macio. Corte largo e de decote livre. Ideal para ser usada como camisa ou como peça aberta correspondendo a um estilo descomprometido, sensual, discreto e marcante.',
        category: 'Camisa',
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
        title: 'Camisa-Quimono - CEPTUS PRETA',
        price: 77,
        description:
            'Malha de qualidade superior fluída, de toque macio. Corte largo e de decote livre. Ideal para ser usada como camisa ou como peça aberta correspondendo a um estilo descomprometido, sensual, discreto e marcante.',
        category: 'Camisa',
        sizes: ['S/M', 'M/L'],
        colors: ['Preta'],
        images: [PrincipalImageCEPTUS, SideBlackImageCEPTUS, BackBlackImageCEPTUS],
    },
];

export const CalcaoProducts: Product[] = [
    {
        id: 'AZHA-BEACH',
        title: 'Calção praia - AZHA-BEACH',
        price: 55,
        description:
            'Com três folhas de malha e um design único este calção proporciona um look descontraído, fluído, e diferenciado. Veste a tua sunga e por cima o calção AZHA- BEACH, e prepara-te para dias de praia, calor, sensualidade e descontração.',
        category: 'Calção',
        sizes: ['Tamanho ajustável'],
        colors: ['Preto', 'Verde'],
        images: [
            SideGreenAZHA_BEACH,
            FrontImageAZHA_BEACH,
            FrontImageGreenAZHA_BEACH,
            CloseUpAZHA_BEACH,
            BackImageGreenAZHA_BEACH,
            SideAZHA_BEACH,
        ],
    },
    {
        id: 'AZHA-STREET',
        title: 'Calção Sport - AZHA-STREET',
        price: 72,
        description:
            'Calção de corte fluído, com acabamentos rústicos que conferem uma peça de design único, arrojado e ao mesmo tempo clássico e elegante.',
        category: 'Calção',
        sizes: ['Tamanho ajustável'],
        colors: ['Verde Caqui'],
        images: [FrontImageAZHA_STREET, BackImageAZHA_STREET],
    },
];

export const ExclusivoProducts: Product[] = [
    {
        id: 'DIWO',
        title: 'Quimono - DIWO',
        price: 189,
        description:
            'Peça única, exclusiva e irrepetível. Tecido de alta qualidade de influências orientais. Corte largo e ajustável a qualquer tamanho.',
        category: 'Exclusivo',
        sizes: ['Tamanho ajustável'],
        colors: [],
        images: [PreviewImageDIWO, FrontImageDIWO, SideImageDIWO],
    },
    {
        id: 'SUOPUS',
        title: 'Quimono - SUOPUS',
        price: 143,
        description: 'Peça única e irrepetível. Corte largo e ajustável a qualquer tamanho.',
        category: 'Exclusivo',
        sizes: ['Tamanho ajustável'],
        colors: [],
        images: [PreviewImageSUOPUS, FrontImageSUOPUS, BackImageSUOPUS, SideImageSUOPUS],
    },
];

export const PTProducts = [
    TunicasProducts,
    CamisolasProducts,
    CamisasProducts,
    CalcaoProducts,
    ExclusivoProducts,
].flat();

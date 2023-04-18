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

export const TunicasProducts: Product[] = [
    {
        id: 'LYNX',
        title: 'Túnica Trespasse - LYNX',
        price: 89,
        description:
            'Peça que evoca a sensualidade masculina de forma descomplexada e arrojada. Decote livre numa peça cavada, em malha de duas folhas semi-transparente de alta qualidade. Com detalhes únicos no ombro a marcar e a definir o estilo do homem Orun.',
        category: 'Túnicas',
        sizes: ['S/M', 'M/L'],
        colors: ['Preta', 'Verde'],
        images: [PreviewProduct1, FrontImageProduct1, CloseUpProduct1, SideProduct1],
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
        images: [PreviewProduct2, PreviewProduct2],
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
        images: [PreviewProduct3, FrontImageProduct3, CloseUpProduct3, SideProduct3],
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
        images: [PreviewProduct4, PreviewProduct4, CloseUpProduct4, SideProduct4],
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
        images: [PreviewProduct1, FrontImageProduct1, CloseUpProduct1, SideProduct1],
    },
];

export const CamisasProducts: Product[] = [
    {
        id: 'CEPTUS',
        title: 'Camisa-Quimono - CEPTUS',
        price: 77,
        description:
            'Malha de qualidade superior fluída, de toque macio. Corte largo e de decote livre. Ideal para ser usada como camisa ou como peça aberta correspondendo a um estilo descomprometido, sensual, discreto e marcante.',
        category: 'Camisa',
        sizes: ['S/M', 'M/L'],
        colors: ['Terracota', 'Preta'],
        images: [PreviewProduct2, PreviewProduct2],
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
        images: [PreviewProduct3, FrontImageProduct3, CloseUpProduct3, SideProduct3],
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
        images: [PreviewProduct4, PreviewProduct4, CloseUpProduct4, SideProduct4],
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
        colors: [''],
        images: [PreviewProduct1, FrontImageProduct1, CloseUpProduct1, SideProduct1],
    },
];

export const PTProducts = [
    TunicasProducts,
    CamisolasProducts,
    CamisasProducts,
    CalcaoProducts,
    ExclusivoProducts,
].flat();

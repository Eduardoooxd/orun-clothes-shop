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
import { StaticImageData } from 'next/image';

export interface Product {
    id: string;
    title: string;
    price: number;
    description: string;
    category: string;
    images: StaticImageData[];
}

export const exampleProducts: Product[] = [
    {
        id: '1',
        title: 'Finibus Bonorum',
        price: 109,
        description:
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
        category: "men's clothing",
        images: [PreviewProduct1, FrontImageProduct1, CloseUpProduct1, SideProduct1],
    },
    {
        id: '2',
        title: 'Nunc augue orci',
        price: 269,
        description:
            'Nullam vitae ultrices risus, blandit vehicula lectus. Duis ut velit eu erat euismod malesuada sit amet a tellus. Maecenas id mollis purus. Duis lectus arcu, malesuada sed pretium eu, placerat et sem. In sem tellus, lacinia et vestibulum eu, sodales at ligula. Etiam leo sapien, semper in consequat ac, viverra sit amet sem.',
        category: "men's clothing",
        images: [PreviewProduct2, PreviewProduct2],
    },
    {
        id: '3',
        title: 'Fusce laoreet',
        price: 329,
        description:
            ' Etiam quis quam porta, mollis mi eu, faucibus metus. Donec pharetra est ornare urna cursus pellentesque. Aliquam tincidunt venenatis tortor, a congue velit fringilla nec. Sed fermentum, ipsum a vestibulum elementum, magna est scelerisque massa, ac ultricies velit risus at nibh.',
        category: "men's clothing",
        images: [PreviewProduct3, FrontImageProduct3, CloseUpProduct3, SideProduct3],
    },
    {
        id: '4',
        title: 'Ut vel tempus tortor',
        price: 59,
        description:
            'Vestibulum eleifend mollis ipsum nec molestie. Ut at nisi ut risus eleifend aliquet. Donec efficitur odio at dolor dapibus dictum. Praesent lobortis sem et justo laoreet rutrum. Proin eu neque nec lorem finibus facilisis.',
        category: "men's clothing",
        images: [PreviewProduct4, PreviewProduct4, CloseUpProduct4, SideProduct4],
    },
];

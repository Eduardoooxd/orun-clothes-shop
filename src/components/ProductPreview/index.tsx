import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { FunctionComponent } from 'react';

export interface ProductPreviewProps {
    image: StaticImageData;
    productName: string;
}

const ProductPreview: FunctionComponent<ProductPreviewProps> = ({ image, productName }) => {
    return (
        <div className="mt-4 sm:m-0">
            <Link href="">
                <div className="relative aspect-square">
                    <Image src={image} alt={productName} fill style={{ objectFit: 'cover' }} />
                </div>
                <div className="mt-2">
                    <h4 className="font-semibold uppercase">{productName}</h4>
                    <p className="text-gray-600">$ 15</p>
                </div>
            </Link>
        </div>
    );
};

export default ProductPreview;

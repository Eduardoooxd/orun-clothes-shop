import { futuraPTLight } from '@/lib/fontLoader';
import { Product } from '@/lib/products';
import Image from 'next/image';
import { FunctionComponent } from 'react';
import LinkI18N from '../Layout/LinkI18N';

export interface ProductPreviewProps {
    product: Product;
}

const ProductPreview: FunctionComponent<ProductPreviewProps> = ({ product }) => {
    const { id, title, price, description, images } = product;
    const [previewImage] = images;

    return (
        <div className="mt-4 sm:m-0">
            <LinkI18N href={`/product/${id}`}>
                <div className="relative aspect-square">
                    <Image
                        src={previewImage}
                        alt={description}
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                </div>
                <div className="mt-2">
                    <h4
                        className={`${futuraPTLight.variable} font-futuraPTLight text-base font-bold uppercase text-black`}
                    >
                        {title}
                    </h4>
                    <p
                        className={`${futuraPTLight.variable} font-futuraPTLight text-base font-semibold uppercase text-black`}
                    >
                        {price}&nbsp;EUR
                    </p>
                </div>
            </LinkI18N>
        </div>
    );
};

export default ProductPreview;

import { futuraPTLight } from '@/lib/fontLoader';
import { Product } from '@/lib/products';
import Image from 'next/image';
import { FunctionComponent } from 'react';
import LinkI18N from '../Shared/I18N/LinkI18N';

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
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 25vw, 20vw"
                        style={{ objectFit: 'cover' }}
                    />
                </div>
                <div className="mt-2">
                    <h4
                        className={`${futuraPTLight.variable} font-futuraPTLight text-base font-bold uppercase text-black`}
                    >
                        {title}
                    </h4>
                </div>
            </LinkI18N>
        </div>
    );
};

export default ProductPreview;

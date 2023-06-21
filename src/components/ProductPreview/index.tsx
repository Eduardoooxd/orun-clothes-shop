import { futuraPTLight } from '@/lib/fontLoader';
import { Product } from '@/lib/shopify/types';
import Image from 'next/image';
import { FunctionComponent } from 'react';
import LinkI18N from '../Shared/I18N/LinkI18N';

export interface ProductPreviewProps {
    product: Product;
}

const ProductPreview: FunctionComponent<ProductPreviewProps> = ({ product }) => {
    const { title, featuredImage, handle } = product;

    return (
        <div className="mt-4 sm:m-0">
            <LinkI18N href={`/product/${handle}`}>
                <div className="relative aspect-square">
                    <Image
                        src={featuredImage.url}
                        alt={featuredImage.altText}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw"
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

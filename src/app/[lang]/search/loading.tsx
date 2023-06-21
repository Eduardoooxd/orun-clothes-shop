import { ProductPreviewSkeleton } from '@/components/ProductPreview/skeleton';

export default function Loading() {
    return (
        <section className="grid-cols-2 lg:grid-cols-3">
            {Array(12)
                .fill(0)
                .map((_, index) => {
                    return <ProductPreviewSkeleton key={index} />;
                })}
        </section>
    );
}

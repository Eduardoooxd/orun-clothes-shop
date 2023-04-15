import Container from '@/components/Container';

interface ProductsLayoutProps {
    children: React.ReactNode;
}

export default async function ProductsLayout({ children }: ProductsLayoutProps) {
    return (
        <div className="w-full">
            <Container>{children}</Container>
        </div>
    );
}

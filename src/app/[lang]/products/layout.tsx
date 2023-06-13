import Container from '@/components/Container';

interface ProductsLayoutProps {
    children: React.ReactNode;
}

export default async function ProductsLayout({ children }: ProductsLayoutProps) {
    return (
        <div className="w-full">
            <Container>
                <div className="flex flex-col justify-between md:flex-row">{children}</div>
            </Container>
        </div>
    );
}

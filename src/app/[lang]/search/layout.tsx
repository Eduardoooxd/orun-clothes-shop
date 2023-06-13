import Container from '@/components/Container';
import { Suspense } from 'react';

interface SearchLayoutProps {
    children: React.ReactNode;
}

export default async function ProductsLayout({ children }: SearchLayoutProps) {
    return (
        <Suspense>
            <Container>
                {/*
                <div className="flex-none order-first md:w-1/6">
                    <Collections />
                </div>
                */}
                <div className="order-last min-h-screen w-full md:order-none">{children}</div>
                {/* 
                <div className="order-none md:order-last md:w-1/6 md:flex-none">
                    <FilterList list={sorting} title="Sort by" />
                </div>
                */}
            </Container>
        </Suspense>
    );
}

import Container from '@/components/Container';

interface AboutUsLayoutProps {
    children: React.ReactNode;
}

export default async function AboutUsLayout({ children }: AboutUsLayoutProps) {
    return (
        <div className="flex w-full items-center justify-center">
            <Container>{children}</Container>
        </div>
    );
}

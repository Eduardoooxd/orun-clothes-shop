import Container from '@/components/Container';

interface ContactLayoutProps {
    children: React.ReactNode;
}

export default async function ContactLayout({ children }: ContactLayoutProps) {
    return (
        <div className="flex  w-full items-center justify-center">
            <Container>{children}</Container>
        </div>
    );
}

import Container from '@/components/Container';

interface ContactLayoutProps {
    children: React.ReactNode;
}

export default async function ContactLayout({ children }: ContactLayoutProps) {
    return (
        <div className="w-full flex-1">
            <Container>{children}</Container>
        </div>
    );
}

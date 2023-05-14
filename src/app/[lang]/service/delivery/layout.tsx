import Container from '@/components/Container';

interface ContactLayoutProps {
    children: React.ReactNode;
}

export default async function ContactLayout({ children }: ContactLayoutProps) {
    return (
        <div className="flex-1 w-full">
            <Container>{children}</Container>
        </div>
    );
}

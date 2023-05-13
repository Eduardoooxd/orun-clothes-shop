import Container from '@/components/Container';

interface PrivacyLayoutProps {
    children: React.ReactNode;
}

export default async function PrivacyLayout({ children }: PrivacyLayoutProps) {
    return (
        <div className="w-full flex-1">
            <Container>{children}</Container>
        </div>
    );
}

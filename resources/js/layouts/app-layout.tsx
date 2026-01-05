import Navbar from '@/components/navbar';

type AppLayoutProps = {
    children: React.ReactNode;
};

const AppLayout = ({ children }: AppLayoutProps) => {
    return (
        <div className="min-h-screen">
            <Navbar />
            <main className="p-6">{children}</main>
        </div>
    );
};

export default AppLayout;

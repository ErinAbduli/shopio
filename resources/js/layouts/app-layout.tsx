import Navbar from '@/components/navbar';
import { Toaster } from '@/components/ui/sonner';

type AppLayoutProps = {
    children: React.ReactNode;
};

const AppLayout = ({ children }: AppLayoutProps) => {
    return (
        <div className="min-h-screen">
            <Navbar />
            <main className="p-6">{children}</main>
            <Toaster position="top-center" />
        </div>
    );
};

export default AppLayout;

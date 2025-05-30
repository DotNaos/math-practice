import { Providers } from '@/components/providers';
import { cn } from '@/lib/utils';
import { Inter } from 'next/font/google';
import { Toaster } from 'sonner';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head></head>
            <body className={cn(inter.className, 'antialiased dark')}>
                <Providers>
                    <main className="dark text-foreground bg-background">
                        <Toaster position="top-center" richColors />
                        {children}
                    </main>
                </Providers>
            </body>
        </html>
    );
}

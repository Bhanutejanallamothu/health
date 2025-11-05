
import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster"
import { AuthenticatedLayout } from '@/components/layout/authenticated-layout';

export const metadata: Metadata = {
  title: 'SWECHA Healthcare',
  description: 'Community healthcare support',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&family=Nunito+Sans:wght@400&family=Inter:wght@500&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background">
          <AuthenticatedLayout>
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <main className="flex-grow bg-transparent">
                {children}
              </main>
              <Footer />
            </div>
          </AuthenticatedLayout>
          <Toaster />
      </body>
    </html>
  );
}

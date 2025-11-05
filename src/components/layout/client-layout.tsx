
'use client';

import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { AuthenticatedLayout } from '@/components/layout/authenticated-layout';
import { AppBody } from '@/components/layout/app-body';

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthenticatedLayout>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow flex flex-col bg-transparent">
          <AppBody>{children}</AppBody>
        </main>
        <Footer />
      </div>
    </AuthenticatedLayout>
  );
}

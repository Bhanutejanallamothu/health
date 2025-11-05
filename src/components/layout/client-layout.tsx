
'use client';

import { usePathname } from 'next/navigation';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { LowPolyHeartBackground } from './low-poly-heart-background';

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAuthPage = pathname.startsWith('/volunteer') || pathname.startsWith('/admin');

  return (
      <div className="flex flex-col min-h-screen">
        {isAuthPage && <LowPolyHeartBackground />}
        <Navbar />
        <main className="flex-grow flex flex-col bg-transparent">
          <div className="relative">
            <div className="relative z-10">{children}</div>
          </div>
        </main>
        <Footer />
      </div>
  );
}

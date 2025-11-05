
'use client';

import { usePathname } from 'next/navigation';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { LowPolyHeartBackground } from './low-poly-heart-background';
import { useLayout } from '@/context/layout-context';
import { useEffect } from 'react';

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { setBackgroundVisible } = useLayout();

  useEffect(() => {
    const isAuthPage = pathname.startsWith('/volunteer') || pathname.startsWith('/admin');
    setBackgroundVisible(isAuthPage);
  }, [pathname, setBackgroundVisible]);

  return (
      <div className="flex flex-col min-h-screen">
        <LowPolyHeartBackground />
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

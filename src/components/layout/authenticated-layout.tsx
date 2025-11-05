
'use client';

import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { LowPolyHeartBackground } from './low-poly-heart-background';

export function AuthenticatedLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAuthPage = pathname.startsWith('/volunteer') || pathname.startsWith('/admin');

  return (
    <div className="flex-grow flex flex-col">
      {isAuthPage && <LowPolyHeartBackground />}
      {children}
    </div>
  );
}

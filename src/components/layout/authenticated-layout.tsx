
'use client';

import { LowPolyHeartBackground } from './low-poly-heart-background';

export function AuthenticatedLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LowPolyHeartBackground />
      {children}
    </>
  );
}

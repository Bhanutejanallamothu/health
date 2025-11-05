
'use client';

import { LowPolyHeartBackground } from './low-poly-heart-background';

export function AuthenticatedLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex-grow flex flex-col">
      <LowPolyHeartBackground />
      {children}
    </div>
  );
}

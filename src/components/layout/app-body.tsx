
'use client';

export function AppBody({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <div className="relative z-10">{children}</div>
    </div>
  );
}

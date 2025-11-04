'use client';

import { HeartbeatBackground } from './heartbeat-background';

export function AppBody({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <HeartbeatBackground />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

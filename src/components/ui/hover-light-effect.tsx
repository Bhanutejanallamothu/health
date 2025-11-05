"use client";

import React, { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface HoverLightEffectProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  borderRadius?: string;
}

export function HoverLightEffect({ children, className, borderRadius = '0.75rem' }: HoverLightEffectProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      container.style.setProperty('--mouse-x', `${x}px`);
      container.style.setProperty('--mouse-y', `${y}px`);
    };

    container.addEventListener('mousemove', handleMouseMove);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ borderRadius }}
      className={cn("relative overflow-hidden group p-[1px]", className)}
    >
      <div 
        className="absolute inset-[-100%] -z-10 [background:radial-gradient(250px_circle_at_var(--mouse-x)_var(--mouse-y),_hsl(var(--accent))_0%,_transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />
      <div className="h-full w-full" style={{ borderRadius }}>
        {children}
      </div>
    </div>
  );
}

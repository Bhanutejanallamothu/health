'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LayoutContextType {
  isBackgroundVisible: boolean;
  setBackgroundVisible: (isVisible: boolean) => void;
}

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

export function LayoutProvider({ children }: { children: ReactNode }) {
  const [isBackgroundVisible, setBackgroundVisible] = useState(false);

  return (
    <LayoutContext.Provider value={{ isBackgroundVisible, setBackgroundVisible }}>
      {children}
    </LayoutContext.Provider>
  );
}

export function useLayout() {
  const context = useContext(LayoutContext);
  if (context === undefined) {
    throw new Error('useLayout must be used within a LayoutProvider');
  }
  return context;
}

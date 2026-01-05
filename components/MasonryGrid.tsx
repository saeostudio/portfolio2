'use client';

import { ReactNode } from 'react';

interface MasonryGridProps {
  children: ReactNode;
}

export default function MasonryGrid({ children }: MasonryGridProps) {
  return (
    <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8 p-4 md:p-12 pt-24">
      {children}
    </div>
  );
}

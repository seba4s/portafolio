import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export function Badge({ children, className = '' }: BadgeProps) {
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full bg-[#22C55E]/10 text-[#22C55E] text-sm border border-[#22C55E]/20 ${className}`}>
      {children}
    </span>
  );
}

import { ReactNode } from 'react';

interface FloatingInfoBoxProps {
  children: ReactNode;
  className?: string;
}

export default function FloatingInfoBox({ children, className = '' }: FloatingInfoBoxProps) {
  return (
    <div className={`absolute -top-0 lg:-top-0 right-4 lg:right-20 bg-white rounded-xl shadow-xl p-6 w-72 fade-section z-100 ${className}`}>
      {children}
    </div>
  );
}

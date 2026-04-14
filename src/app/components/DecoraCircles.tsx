import React from 'react';

interface DecoCircleProps {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  size?: 'sm' | 'md' | 'lg';
  delay?: number;
}

const sizeClasses = {
  sm: 'w-24 h-24',
  md: 'w-40 h-40',
  lg: 'w-56 h-56',
};

export function DecoCircle({ top, left, right, bottom, size = 'md', delay = 0 }: DecoCircleProps) {
  const sizeClass = sizeClasses[size];
  
  return (
    <div
      className={`absolute ${sizeClass} pointer-events-none`}
      style={{
        top,
        left,
        right,
        bottom,
        animation: `float 6s ease-in-out ${delay}s infinite`,
      }}
    >
      {/* Outer circle */}
      <div className="absolute inset-0 rounded-full border-2 border-[#22C55E] opacity-40"></div>
      
      {/* Inner circle */}
      <div className="absolute inset-4 rounded-full border-2 border-[#3B82F6]/60 opacity-30"></div>
      
      {/* Code icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-[#22C55E] font-bold opacity-60 select-none">&lt;/&gt;</span>
      </div>
      
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-10px) translateX(5px);
          }
        }
      `}</style>
    </div>
  );
}

interface DecoCirclesGroupProps {
  count?: number;
}

export function DecoCirclesGroup({ count = 3 }: DecoCirclesGroupProps) {
  const positions = [
    { top: '10%', left: '5%', size: 'md' as const, delay: 0 },
    { top: '60%', right: '8%', size: 'lg' as const, delay: 0.5 },
    { bottom: '10%', left: '15%', size: 'sm' as const, delay: 1 },
    { top: '30%', right: '20%', size: 'sm' as const, delay: 1.5 },
    { bottom: '30%', right: '5%', size: 'md' as const, delay: 0.8 },
  ];

  return (
    <>
      {positions.slice(0, count).map((pos, idx) => (
        <DecoCircle key={idx} {...pos} />
      ))}
    </>
  );
}

import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={hover ? { y: -8, transition: { duration: 0.3 } } : {}}
      className={`bg-[#111827] rounded-2xl p-6 border border-gray-800 hover:border-[#22C55E]/50 transition-all duration-300 ${
        hover ? 'hover:shadow-xl hover:shadow-[#22C55E]/10' : ''
      } ${className}`}
    >
      {children}
    </motion.div>
  );
}

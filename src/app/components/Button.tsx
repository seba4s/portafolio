import { ButtonHTMLAttributes } from 'react';
import { motion } from 'motion/react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '',
  ...props 
}: ButtonProps) {
  const baseStyles = 'rounded-lg transition-all duration-300 font-medium inline-flex items-center justify-center gap-2';
  
  const variants = {
    primary: 'bg-[#22C55E] text-white hover:bg-[#16A34A] shadow-lg shadow-[#22C55E]/20 hover:shadow-xl hover:shadow-[#22C55E]/30',
    secondary: 'bg-[#3B82F6] text-white hover:bg-[#2563EB] shadow-lg shadow-[#3B82F6]/20 hover:shadow-xl hover:shadow-[#3B82F6]/30',
    outline: 'border-2 border-[#22C55E] text-[#22C55E] hover:bg-[#22C55E] hover:text-white',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3',
    lg: 'px-8 py-4',
  };
  
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}

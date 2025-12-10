import React from 'react';
import { motion } from 'framer-motion';

interface NeonButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  onClick?: () => void;
  fullWidth?: boolean;
}

const NeonButton: React.FC<NeonButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick,
  fullWidth = false
}) => {
  const baseClasses = "relative px-8 py-4 font-bold rounded-lg overflow-hidden group transition-all duration-300 flex items-center justify-center uppercase tracking-widest text-sm font-orbitron";
  
  const variants = {
    primary: "bg-purple-600/20 text-purple-100 border border-purple-500 hover:bg-purple-600/40 neon-box-purple",
    secondary: "bg-cyan-600/20 text-cyan-100 border border-cyan-500 hover:bg-cyan-600/40 shadow-[0_0_15px_rgba(34,211,238,0.4)]"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseClasses} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      onClick={onClick}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 ${variant === 'primary' ? 'bg-purple-400' : 'bg-cyan-400'} blur-md`}></div>
    </motion.button>
  );
};

export default NeonButton;
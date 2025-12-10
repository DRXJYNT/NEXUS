import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  delay?: number;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', hoverEffect = true, delay = 0 }) => {
  return (
    <motion.div 
      className={`glass-panel rounded-2xl p-8 relative overflow-hidden ${className}`}
      whileHover={hoverEffect ? { y: -10, boxShadow: '0 0 30px rgba(168, 85, 247, 0.2)' } : {}}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, margin: "-50px", amount: 0.1 }}
      transition={{ duration: 0.6, delay, type: "spring", stiffness: 260, damping: 20 }}
    >
      {/* Subtle sheen effect */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent opacity-50" />
      {children}
    </motion.div>
  );
};

export default GlassCard;
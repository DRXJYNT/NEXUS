import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', hoverEffect = true }) => {
  return (
    <motion.div 
      className={`glass-panel rounded-2xl p-8 relative overflow-hidden ${className}`}
      whileHover={hoverEffect ? { y: -10, boxShadow: '0 0 25px rgba(168, 85, 247, 0.15)' } : {}}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      {/* Subtle sheen effect */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent opacity-50" />
      {children}
    </motion.div>
  );
};

export default GlassCard;
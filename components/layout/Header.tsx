import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import NeonButton from '../ui/NeonButton';

const Header: React.FC = () => {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setScrolled(latest > 50);
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: -100 }
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="text-2xl font-black font-orbitron tracking-tighter text-white cursor-pointer select-none">
          NEXUS<span className="text-cyan-400">.</span>
        </div>

        <nav className="hidden md:flex gap-8 items-center">
          {['Benefits', 'Reviews', 'FAQ'].map((item) => (
            <button 
              key={item}
              onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors uppercase tracking-wide"
            >
              {item}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
           <a href="#" className="hidden md:block text-sm font-bold text-slate-300 hover:text-white">Login</a>
           <NeonButton className="px-6 py-2 text-xs" onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}>
             Enroll Now
           </NeonButton>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
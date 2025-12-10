import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Code, Briefcase, Users, Zap, Award, Globe, ArrowRight, Bot, Terminal } from 'lucide-react';

interface BenefitsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const benefits = [
  {
    icon: <Code size={20} />,
    title: "Portfolio Architecture",
    desc: "Build a narrative hiring managers can't ignore."
  },
  {
    icon: <Briefcase size={20} />,
    title: "Interview Hacking",
    desc: "Decode behavioral and technical matrices."
  },
  {
    icon: <Users size={20} />,
    title: "Network Node Access",
    desc: "Direct access to alumni in top-tier tech."
  },
  {
    icon: <Zap size={20} />,
    title: "Resume Optimization",
    desc: "Algorithmic keyword optimization."
  },
  {
    icon: <Award size={20} />,
    title: "Salary Negotiation",
    desc: "Scripts to increase offers by 20%+."
  },
  {
    icon: <Globe size={20} />,
    title: "Remote Work Protocols",
    desc: "Land high-paying remote roles."
  },
  {
    icon: <Bot size={20} />,
    title: "AI Workflow Mastery",
    desc: "10x coding speed with AI tools."
  },
  {
    icon: <Terminal size={20} />,
    title: "Prompt Engineering",
    desc: "Master LLM communication for complex tasks."
  }
];

const BenefitsModal: React.FC<BenefitsModalProps> = ({ isOpen, onClose }) => {
  // Close on Escape key
  React.useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50, rotateX: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50, rotateX: -10 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-3xl bg-slate-900 border border-purple-500/30 rounded-2xl p-8 shadow-[0_0_80px_rgba(168,85,247,0.25)] overflow-hidden max-h-[90vh] overflow-y-auto custom-scrollbar"
            onClick={(e) => e.stopPropagation()}
          >
             {/* Background Effects */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none"></div>

            <div className="flex justify-between items-start mb-8 relative z-10">
              <div>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <h3 className="text-3xl font-bold font-orbitron text-white mb-2">
                    Course <span className="text-cyan-400 text-shadow-cyan">Modules</span>
                  </h3>
                  <p className="text-slate-400">Everything included in the Nexus Blueprint™</p>
                </motion.div>
              </div>
              <button 
                onClick={onClose}
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors border border-transparent hover:border-white/10"
              >
                <X size={24} />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20, y: 10 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ delay: 0.15 + (index * 0.05) }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-purple-500/40 hover:bg-white/10 hover:shadow-[0_0_15px_rgba(168,85,247,0.1)] transition-all duration-300 group cursor-default"
                >
                  <div className="mt-1 p-2 rounded-lg bg-slate-950 border border-slate-800 text-purple-400 group-hover:text-cyan-400 group-hover:border-cyan-500/30 transition-colors shadow-lg">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-100 text-base mb-1 group-hover:text-white transition-colors">{benefit.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{benefit.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-10 flex justify-end items-center gap-4 relative z-10 border-t border-white/5 pt-6"
            >
               <span className="text-slate-500 text-sm hidden sm:block">Ready to architect your future?</span>
               <button 
                 onClick={() => {
                   onClose();
                   document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
                 }}
                 className="group relative px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-lg overflow-hidden transition-all shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)]"
               >
                 <span className="relative z-10 flex items-center gap-2">
                   Get Access Now <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                 </span>
                 <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-cyan-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300 mix-blend-overlay"></div>
               </button>
            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default BenefitsModal;
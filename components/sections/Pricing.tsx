import React from 'react';
import { motion } from 'framer-motion';
import { Check, ShieldCheck } from 'lucide-react';
import SectionContainer from '../ui/SectionContainer';
import NeonButton from '../ui/NeonButton';

const Pricing: React.FC = () => {
  return (
    <SectionContainer id="pricing" className="relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-900/20 rounded-full blur-[100px] z-0"></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-12">
           <h2 className="text-4xl md:text-5xl font-bold text-white font-orbitron mb-4">Initialize <span className="text-purple-400">Sequence</span></h2>
           <p className="text-slate-400">One investment. Infinite ROI.</p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 100, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ type: "spring", duration: 0.8 }}
          className="relative bg-slate-900/80 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-8 md:p-12 overflow-hidden neon-box-purple"
        >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 via-cyan-400 to-purple-500"></div>
            
            <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="flex-1">
                    <div className="inline-block px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-bold uppercase tracking-wider mb-4 border border-purple-500/30">
                        Limited Cohort Entry
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-2">The Nexus Blueprint™</h3>
                    <p className="text-slate-400 mb-6 text-sm">Complete Step-by-Step Career Acceleration System</p>
                    
                    <ul className="space-y-4 mb-8">
                        {[
                            "6-Week Video Training Core",
                            "The 'Perfect' Resume Templates",
                            "GitHub Portfolio Codebases",
                            "Negotiation Scripts & Email Swipes",
                            "Private Discord Community Access",
                            "Lifetime Updates"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-slate-200">
                                <div className="p-1 rounded-full bg-cyan-500/20 text-cyan-400">
                                    <Check size={14} strokeWidth={3} />
                                </div>
                                <span className="text-sm">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="w-full md:w-auto flex flex-col items-center justify-center p-8 bg-black/20 rounded-2xl border border-white/5">
                    <div className="text-slate-500 line-through text-lg font-semibold mb-1">$997</div>
                    <div className="text-5xl font-black text-white font-orbitron mb-2">$297</div>
                    <div className="text-purple-400 text-sm font-bold mb-6">One-time payment</div>
                    
                    <NeonButton fullWidth className="mb-4">
                        Join The Cohort
                    </NeonButton>
                    
                    <div className="flex items-center gap-2 text-slate-500 text-xs">
                        <ShieldCheck size={14} />
                        <span>30-Day Money-Back Guarantee</span>
                    </div>
                </div>
            </div>
        </motion.div>
      </div>
    </SectionContainer>
  );
};

export default Pricing;
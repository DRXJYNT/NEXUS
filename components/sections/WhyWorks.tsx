import React from 'react';
import { motion } from 'framer-motion';
import SectionContainer from '../ui/SectionContainer';
import GlassCard from '../ui/GlassCard';

const WhyWorks: React.FC = () => {
  return (
    <SectionContainer className="bg-gradient-to-b from-slate-950 to-[#050b1e]">
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white font-orbitron">
          Why The Blueprint <span className="text-cyan-400 neon-text-cyan">Works</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Universities teach you Computer Science. We teach you Career Science. The gap between the two is where most students fail.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2 flex flex-col justify-center">
             <GlassCard className="h-full flex flex-col justify-center border-purple-500/30">
                <h3 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-white font-orbitron mb-2">
                    87%
                </h3>
                <p className="text-xl text-white font-bold mb-4">Placement Rate</p>
                <p className="text-slate-400">
                    Within 3 months of completing the blueprint, our students secure offers.
                </p>
             </GlassCard>
        </div>
        
        <div className="col-span-1 md:col-span-2 grid grid-rows-2 gap-8">
             <GlassCard className="flex items-center gap-6 border-cyan-500/30">
                <div className="text-4xl font-bold text-cyan-400 font-orbitron">$92k</div>
                <div>
                    <div className="text-white font-bold uppercase tracking-wide text-sm">Avg Starting Salary</div>
                    <div className="text-slate-500 text-xs">For 2023 Cohort Graduates</div>
                </div>
             </GlassCard>
             <GlassCard className="flex items-center gap-6 border-white/10">
                <div className="text-4xl font-bold text-slate-200 font-orbitron">3.5x</div>
                <div>
                    <div className="text-white font-bold uppercase tracking-wide text-sm">Interview ROI</div>
                    <div className="text-slate-500 text-xs">More interviews per application sent</div>
                </div>
             </GlassCard>
        </div>
      </div>

      <div className="mt-20 relative">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-800 -z-10 hidden md:block"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {[
                  { step: "01", title: "Audit & Fix", text: "We patch the holes in your resume and profile." },
                  { step: "02", title: "Build & Deploy", text: "Create proof-of-work that validates your skills." },
                  { step: "03", title: "Connect & Close", text: "Network strategically and negotiate the offer." }
              ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.2 }}
                    className="bg-slate-950 p-6 rounded-xl border border-white/10 relative"
                  >
                      <div className="w-12 h-12 mx-auto bg-slate-900 rounded-full border border-purple-500 flex items-center justify-center text-white font-bold mb-4 shadow-[0_0_15px_rgba(168,85,247,0.4)] relative z-10">
                          {item.step}
                      </div>
                      <h4 className="text-xl font-bold text-white mb-2 font-orbitron">{item.title}</h4>
                      <p className="text-slate-400 text-sm">{item.text}</p>
                  </motion.div>
              ))}
          </div>
      </div>
    </SectionContainer>
  );
};

export default WhyWorks;
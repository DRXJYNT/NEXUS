import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Lock, CheckCircle2 } from 'lucide-react';
import SectionContainer from '../ui/SectionContainer';
import { CourseModule } from '../../types';

const modules: CourseModule[] = [
  {
    id: 1,
    title: "Module 01: The Foundation",
    subtitle: "Rebranding yourself as a professional.",
    duration: "Week 1",
    details: [
      "Audit your current digital footprint",
      "LinkedIn algorithm mastery",
      "Github profile restructuring",
      "The 'Senior' mindset shift"
    ]
  },
  {
    id: 2,
    title: "Module 02: The Portfolio Engine",
    subtitle: "Building projects that solve business problems.",
    duration: "Week 2-3",
    details: [
      "Selecting high-value stack technologies",
      "Documentation standards that impress CTOs",
      "Deploying for performance (Vercel/AWS)",
      "Case study writing workshop"
    ]
  },
  {
    id: 3,
    title: "Module 03: The Network Infiltration",
    subtitle: "Getting referrals without being annoying.",
    duration: "Week 4",
    details: [
      "Cold outreach templates that get 40% response rates",
      "Informational interview scripts",
      "Finding the 'Hidden Job Market'",
      "Leveraging alumni networks effectively"
    ]
  },
  {
    id: 4,
    title: "Module 04: Interview Domination",
    subtitle: "Cracking the code to technical and behavioral rounds.",
    duration: "Week 5-6",
    details: [
      "LeetCode patterns (not memorization)",
      "System Design basics for fresh grads",
      "Mock interviews with senior engineers",
      "The STAR method on steroids"
    ]
  }
];

const Modules: React.FC = () => {
  const [activeModule, setActiveModule] = useState<number | null>(1);

  return (
    <SectionContainer id="modules" className="bg-slate-950">
      <div className="flex flex-col md:flex-row gap-12">
        {/* Left Side: Header */}
        <div className="md:w-1/3 sticky top-32 h-fit">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white font-orbitron">
            Protocol <br /><span className="text-cyan-400">Sequence</span>
          </h2>
          <p className="text-slate-400 mb-8">
            A 6-week intensive sprint designed to take you from "Student" to "Hired Professional".
          </p>
          <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-900/20 to-slate-900 border border-purple-500/20">
            <div className="flex items-center gap-3 mb-2 text-purple-300">
              <Lock className="w-5 h-5" />
              <span className="font-bold tracking-wider text-sm uppercase">Full Access</span>
            </div>
            <p className="text-xs text-slate-400">Instant access to all modules upon enrollment.</p>
          </div>
        </div>

        {/* Right Side: Accordion */}
        <div className="md:w-2/3 flex flex-col gap-4">
          {modules.map((module) => (
            <motion.div
              key={module.id}
              initial={false}
              className={`border rounded-xl overflow-hidden transition-colors duration-300 ${
                activeModule === module.id 
                  ? 'bg-white/5 border-purple-500/50 shadow-[0_0_20px_rgba(168,85,247,0.1)]' 
                  : 'bg-transparent border-white/10 hover:border-white/20'
              }`}
            >
              <button
                onClick={() => setActiveModule(activeModule === module.id ? null : module.id)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <div>
                  <span className={`text-xs font-bold tracking-widest uppercase mb-1 block ${activeModule === module.id ? 'text-purple-400' : 'text-slate-500'}`}>
                    {module.duration}
                  </span>
                  <h3 className="text-xl font-bold text-white font-orbitron">{module.title}</h3>
                  <p className="text-sm text-slate-400 mt-1">{module.subtitle}</p>
                </div>
                <div className={`p-2 rounded-full border transition-all duration-300 ${
                  activeModule === module.id ? 'bg-purple-500 border-purple-500 text-white rotate-180' : 'border-slate-700 text-slate-400'
                }`}>
                  {activeModule === module.id ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>

              <AnimatePresence>
                {activeModule === module.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 pt-0 border-t border-white/5">
                      <ul className="space-y-3 mt-4">
                        {module.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-slate-300 text-sm">
                            <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default Modules;
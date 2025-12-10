import React from 'react';
import { Target, TrendingUp, AlertTriangle } from 'lucide-react';
import SectionContainer from '../ui/SectionContainer';
import GlassCard from '../ui/GlassCard';

const Audience: React.FC = () => {
  const personas = [
    {
      icon: <AlertTriangle className="w-8 h-8 text-yellow-400" />,
      title: "The Panic-Stricken Junior",
      desc: "You just realized graduation is looming, your GPA is okay, but your portfolio is empty and internships are ghosting you."
    },
    {
      icon: <Target className="w-8 h-8 text-cyan-400" />,
      title: "The Ambition-Locked Senior",
      desc: "You have skills, but you're failing technical interviews or getting filtered out by ATS algorithms before you even speak to a human."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-400" />,
      title: "The Career Switcher",
      desc: "You picked the wrong major. Now you want to pivot into high-growth tech roles but don't know the entry codes."
    }
  ];

  return (
    <SectionContainer id="audience" className="bg-slate-950">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
          Is This <span className="text-cyan-400">System</span> For You?
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          We don't teach generic theory. We engineer career outcomes. If you fit one of these profiles, we can help.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {personas.map((persona, index) => (
          <GlassCard key={index} className="flex flex-col items-center text-center group">
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
              {persona.icon}
            </div>
            <h3 className="text-xl font-bold mb-3 text-white font-orbitron">{persona.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{persona.desc}</p>
          </GlassCard>
        ))}
      </div>
    </SectionContainer>
  );
};

export default Audience;
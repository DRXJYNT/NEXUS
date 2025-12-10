import React from 'react';
import { Code, Briefcase, Users, Zap, Award, Globe, Bot, Terminal } from 'lucide-react';
import SectionContainer from '../ui/SectionContainer';
import { motion } from 'framer-motion';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <Code />,
      title: "Portfolio Architecture",
      desc: "Don't just build projects. Build a narrative that hiring managers can't ignore."
    },
    {
      icon: <Briefcase />,
      title: "Interview Hacking",
      desc: "Decode the behavioral and technical matrix used by FAANG recruiters."
    },
    {
      icon: <Users />,
      title: "Network Node Access",
      desc: "Direct access to alumni planted in top-tier tech giants."
    },
    {
      icon: <Zap />,
      title: "Resume Optimization",
      desc: "Algorithmic keyword optimization to bypass automated filters instantly."
    },
    {
      icon: <Award />,
      title: "Salary Negotiation",
      desc: "Scripts and leverage tactics to increase your starting offer by 20%+."
    },
    {
      icon: <Globe />,
      title: "Remote Work Protocols",
      desc: "How to land high-paying remote roles straight out of college."
    },
    {
      icon: <Bot />,
      title: "AI Workflow Mastery",
      desc: "Integrate AI tools to 10x your coding speed and operational efficiency."
    },
    {
      icon: <Terminal />,
      title: "Prompt Engineering",
      desc: "Master the art of communicating with LLMs to solve complex problems faster."
    }
  ];

  return (
    <SectionContainer id="benefits" className="relative">
       {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-[120px] z-0"></div>

      <div className="relative z-10 mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white font-orbitron">
          Upgrade Your <span className="text-purple-400 neon-text-purple">Career OS</span>
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50, rotateX: 10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ delay: index * 0.05, type: "spring", stiffness: 300, damping: 20 }}
            className="group p-6 rounded-xl border border-white/5 bg-slate-900/50 hover:bg-slate-800/50 transition-colors duration-300 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="w-12 h-12 mb-4 rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 flex items-center justify-center text-purple-400 group-hover:text-cyan-400 group-hover:border-cyan-500/30 transition-all duration-300 shadow-lg">
              {benefit.icon}
            </div>
            
            <h3 className="text-xl font-bold text-white mb-2 font-orbitron group-hover:translate-x-2 transition-transform duration-300">
              {benefit.title}
            </h3>
            <p className="text-slate-400 text-sm">
              {benefit.desc}
            </p>
            
            {/* Corner Accent */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-white/5 to-transparent -translate-y-10 translate-x-10 rotate-45 group-hover:from-purple-500/20 transition-all duration-500"></div>
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default Benefits;
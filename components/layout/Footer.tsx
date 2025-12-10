import React from 'react';
import { Twitter, Linkedin, Instagram, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-2xl font-bold font-orbitron text-white tracking-tighter mb-2">
            NEXUS<span className="text-purple-500">.</span>
          </h2>
          <p className="text-slate-500 text-sm">Architect Your Future.</p>
        </div>

        <div className="flex gap-6">
           <a href="#" className="text-slate-400 hover:text-white transition-colors">Privacy</a>
           <a href="#" className="text-slate-400 hover:text-white transition-colors">Terms</a>
           <a href="#" className="text-slate-400 hover:text-white transition-colors">Support</a>
        </div>

        <div className="flex gap-4">
          {[Twitter, Linkedin, Instagram, Github].map((Icon, i) => (
            <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:bg-white/10 transition-all duration-300">
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
      <div className="text-center mt-12 text-slate-700 text-xs">
        © 2024 Nexus Career Accelerator. All Systems Operational.
      </div>
    </footer>
  );
};

export default Footer;
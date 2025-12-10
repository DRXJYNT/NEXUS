import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Testimonial } from '../../types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Alex Chen",
    role: "Software Engineer",
    company: "Google",
    image: "https://picsum.photos/100/100?random=1",
    content: "The resume module alone was worth the price. I went from 0 interviews in 6 months to 3 FAANG offers in 4 weeks."
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    role: "Frontend Dev",
    company: "Airbnb",
    image: "https://picsum.photos/100/100?random=2",
    content: "Nexus taught me how to treat my job hunt like a sales funnel. Totally changed my perspective and my bank account."
  },
  {
    id: 3,
    name: "Marcus Johnson",
    role: "Full Stack Dev",
    company: "Netflix",
    image: "https://picsum.photos/100/100?random=3",
    content: "I was a biology major with a bootcamp cert and no hope. This course gave me the structure I was missing."
  },
  {
    id: 4,
    name: "Priya Patel",
    role: "Product Designer",
    company: "Spotify",
    image: "https://picsum.photos/100/100?random=4",
    content: "The negotiation scripts are lethal. I got an extra $15k signing bonus just by using one phrase from Module 5."
  },
  {
    id: 5,
    name: "David Kim",
    role: "Backend Engineer",
    company: "Uber",
    image: "https://picsum.photos/100/100?random=5",
    content: "Stop wasting time on random YouTube tutorials. This is the blueprint. Just follow it."
  }
];

const Testimonials: React.FC = () => {
  return (
    <div id="reviews" className="py-24 bg-slate-950 overflow-hidden relative border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
         <h2 className="text-3xl font-bold text-white font-orbitron">Decoded <span className="text-purple-400">Success Stories</span></h2>
      </div>

      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-950 to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-950 to-transparent z-10"></div>

      <div className="flex gap-6 w-full">
        <motion.div 
          className="flex gap-6 min-w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity }}
        >
          {[...testimonials, ...testimonials].map((t, i) => (
            <div 
              key={`${t.id}-${i}`}
              className="w-[400px] p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm relative group hover:bg-white/10 transition-colors duration-300"
            >
              <Quote className="absolute top-6 right-6 text-white/10 w-10 h-10 group-hover:text-purple-500/20 transition-colors" />
              
              <p className="text-slate-300 mb-6 leading-relaxed relative z-10">
                "{t.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full border-2 border-purple-500/50 grayscale group-hover:grayscale-0 transition-all" />
                <div>
                  <h4 className="text-white font-bold">{t.name}</h4>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-cyan-400 font-semibold">{t.role}</span>
                    <span className="text-slate-600 text-xs">•</span>
                    <span className="text-xs text-slate-500 font-orbitron">{t.company}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
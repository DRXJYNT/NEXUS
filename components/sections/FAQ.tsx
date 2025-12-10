import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import SectionContainer from '../ui/SectionContainer';
import { FAQItem } from '../../types';

const faqs: FAQItem[] = [
  {
    question: "I'm not a CS major. Can I still join?",
    answer: "Absolutely. 30% of our students come from non-CS backgrounds (Math, Physics, even Biology). If you have basic coding knowledge, we teach you how to professionalize it."
  },
  {
    question: "How much time does this require per week?",
    answer: "We designed this for full-time students. Expect to commit 4-6 hours per week. The system is built for efficiency, not busy work."
  },
  {
    question: "Do you guarantee a job?",
    answer: "Legally, no one can guarantee a job. However, if you complete all action items and don't land an interview within 60 days, we will personally audit your application package for free."
  },
  {
    question: "Is this course live or pre-recorded?",
    answer: "It is a hybrid. The core curriculum is pre-recorded high-quality video so you can go at your own pace. The Q&A and community aspects are live."
  },
  {
      question: "What if I hate it?",
      answer: "We offer a 30-day no-questions-asked refund policy. If the blueprint doesn't click for you, just email support."
  }
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <SectionContainer className="bg-slate-950">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white font-orbitron mb-12">
          System <span className="text-cyan-400">Queries</span>
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-white/10 last:border-0">
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full flex items-center justify-between py-6 text-left group"
              >
                <span className={`text-lg font-medium transition-colors duration-300 ${activeIndex === index ? 'text-cyan-400' : 'text-slate-300 group-hover:text-white'}`}>
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`transition-transform duration-300 text-slate-500 ${activeIndex === index ? 'rotate-180 text-cyan-400' : ''}`} 
                />
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-slate-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default FAQ;
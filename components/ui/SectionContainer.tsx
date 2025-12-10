import React from 'react';
import { SectionProps } from '../../types';

const SectionContainer: React.FC<SectionProps> = ({ children, className = '', id }) => {
  return (
    <section id={id} className={`py-20 md:py-32 relative ${className}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;
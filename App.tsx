import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Audience from './components/sections/Audience';
import Benefits from './components/sections/Benefits';
import Modules from './components/sections/Modules';
import WhyWorks from './components/sections/WhyWorks';
import Testimonials from './components/sections/Testimonials';
import Pricing from './components/sections/Pricing';
import FAQ from './components/sections/FAQ';

const App: React.FC = () => {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 selection:bg-purple-500/30 selection:text-white">
      <Header />
      <main>
        <Hero />
        <Audience />
        <Benefits />
        <Modules />
        <WhyWorks />
        <Testimonials />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;
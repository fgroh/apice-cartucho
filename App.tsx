import React from 'react';
import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { Benefits } from './components/sections/Benefits';
import { Services } from './components/sections/Services';
import { Testimonials } from './components/sections/Testimonials';
import { CTA } from './components/sections/CTA';
import { Footer } from './components/layout/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-cyan-100 selection:text-cyan-900">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Services />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
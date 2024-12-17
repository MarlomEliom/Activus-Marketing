import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import CTASection from './components/CTASection';

function App() {
  return (
    <div className="bg-navy-900 min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <CTASection />
      <Portfolio />
      <Testimonials />
    </div>
  );
}

export default App;
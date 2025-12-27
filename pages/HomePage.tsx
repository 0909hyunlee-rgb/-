
import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import Reservation from '../components/Reservation';

const HomePage: React.FC = () => {
  return (
    <div className="scroll-smooth">
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Reservation />
    </div>
  );
};

export default HomePage;

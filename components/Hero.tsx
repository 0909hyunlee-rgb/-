
import React from 'react';
import { COMPANY_INFO } from '../lib/data';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-black/80 z-10"></div>
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      
      {/* Background Image - Full Screen */}
      <img 
        src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=2670" 
        alt="Premium Beauty" 
        className="absolute inset-0 w-full h-full object-cover grayscale opacity-50 mix-blend-luminosity scale-105"
        style={{ objectPosition: 'center 35%' }}
      />

      <div className="relative z-20 text-center px-4 max-w-5xl">
        <p className="text-purple-500 uppercase tracking-[0.4em] font-semibold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          Premium Art Makeup Association
        </p>
        <h1 className="text-6xl md:text-9xl font-black mb-8 tracking-tighter leading-none animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
          <span className="block text-white">JOY</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-800">STORY</span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-400 font-light max-w-2xl mx-auto mb-14 leading-relaxed animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
          {COMPANY_INFO.tagline}
          <br />
          <span className="text-sm mt-4 block text-gray-500 tracking-widest font-normal uppercase italic">Experience the Luxury of Permanent Beauty</span>
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-300">
          <a 
            href="#reservation" 
            className="px-12 py-5 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-full transition-all duration-500 hover:scale-105 shadow-[0_0_40px_rgba(147,51,234,0.3)] w-full sm:w-auto text-lg text-center"
          >
            지금 예약하기
          </a>
          <a 
            href="#services" 
            className="px-12 py-5 border border-white/10 hover:border-purple-500/50 hover:bg-purple-500/5 text-white font-bold rounded-full transition-all duration-500 w-full sm:w-auto text-lg text-center backdrop-blur-sm"
          >
            시술 프로그램
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4 opacity-50">
        <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-gray-500">Scroll</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-purple-500 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;

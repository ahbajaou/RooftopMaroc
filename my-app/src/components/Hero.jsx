import React from 'react';
import mainImage from '../assets/img.avif';
import Navbar from './Navbar';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen ">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center animate-fade-in"
        style={{
          backgroundImage: `url(${mainImage})`,
        }}
      >
        {/* Changed opacity from bg-black/50 to bg-black/70 for darker overlay */}
        <div className="absolute inset-0  backdrop-blur-sm" />
      </div>

      {/* Navbar */}
      <Navbar />
      
      {/* Main Content */}
      <div className="relative h-full flex items-center justify-center text-center px-4">
        <div className="max-w-4xl animate-fade-in-up">
          {/* Logo/Brand */}
          <div className="mb-8">
            <h1 className="text-7xl md:text-8xl font-normal text-white tracking-wide mb-4 chewy-regular ">
              ROOFTOP MOROCCO
            </h1>
            <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
          </div>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-white/90 mb-12 tracking-wider uppercase font-medium max-w-2xl mx-auto leading-relaxed">
            Explore the best rooftops Marrakech has to offer — sunsets, chill zones, and skyline vibes
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-6 justify-center">

            <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-full text-lg font-medium backdrop-blur-sm transition-all border border-white/30">
              Explore Rooftops
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent" />
    </section>
  );
}
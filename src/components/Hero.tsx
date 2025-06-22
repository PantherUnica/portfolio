
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 pt-20">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Profile Photo */}
          <div className="mb-8">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" 
                alt="Aditya Raj" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Hi, I'm <span className="text-blue-600">Aditya Raj</span>
          </h1>
          
          {/* Subheading */}
          <h2 className="text-xl md:text-2xl text-gray-700 mb-4 font-medium">
            Building data-first products that solve messy problems
          </h2>
          
          {/* Tagline */}
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Turning ambiguity into scalable products with design, data & execution
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => scrollToSection('portfolio')}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all duration-200 flex items-center justify-center gap-2 hover:scale-105"
            >
              Explore My Work
              <ArrowRight size={20} />
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-all duration-200 hover:scale-105"
            >
              Get in Touch
            </button>
          </div>

          {/* Featured Highlight */}
          <div className="bg-white rounded-xl p-6 shadow-lg max-w-md mx-auto">
            <p className="text-sm text-blue-600 font-semibold mb-2">FEATURED PROJECT</p>
            <h3 className="text-lg font-bold text-gray-900 mb-2">SwapVerse.ev</h3>
            <p className="text-gray-600 text-sm">
              Revolutionizing EV battery swapping with a BaaS model that reduced swap downtime by 60%
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

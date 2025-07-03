
import { ArrowLeft, ArrowRight, Download } from 'lucide-react';
const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Modern Gradient Background */}
    <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-100/30"></div>

    {/* Animated Background Elements */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute -top-4 -left-4 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/3 -right-8 w-64 h-64 bg-indigo-200/20 rounded-full blur-3xl animate-pulse delay-700"></div>
      <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-purple-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </div>

    <div className="relative container mx-auto px-6 text-center pt-20">
      <div className="max-w-5xl mx-auto">
        {/* Badge */}


        {/* Profile Photo with Modern Design */}
        <div className="mb-8 relative">
          <div className="relative w-56 h-56 mx-auto">
            {/* Gradient Ring */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-full p-1 animate-pulse">
              <div className="w-full h-full bg-white rounded-full p-2">
                <img src="https://i.postimg.cc/B6JrRXtJ/Whats-App-Image-2025-06-02-at-12-22-35-1.jpg" alt="Aditya" className="w-full h-full object-cover rounded-full" />
              </div>
            </div>

            {/* Floating Dots */}
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-500 rounded-full animate-bounce"></div>
            <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-purple-500 rounded-full animate-bounce delay-300"></div>
          </div>
        </div>

        {/* Enhanced Typography */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 mb-6 leading-tight tracking-tight">
          Hi, I'm{' '}
          <span className="relative text-slate-900">
            Aditya
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </span>
        </h1>

        {/* Modern Subheading */}
        <h2 className="text-xl md:text-3xl text-slate-700 mb-4 font-semibold max-w-4xl mx-auto leading-relaxed">
          I operate at the intersection of <span className="text-blue-600 font-bold">product innovation, finance, and social impact</span>, blending strategic thinking with technical depth to build meaningful, user-centric solutions that scale and solve real-world challenges.
        </h2>

        {/* Modern CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <button onClick={() => scrollToSection('internship')} className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1">
            Explore My Work
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>

          <button onClick={() => scrollToSection('contact')} className="group bg-white/80 backdrop-blur-sm border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:border-blue-300 hover:text-blue-700 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1">
            Get in Touch
          </button>
          <a href='https://drive.google.com/file/d/1u1hERfVcmu3G7e1cCyBnwIpEdZUZcJcL/view?usp=sharing' target="_blank">

            <button className="group bg-slate-100/80 backdrop-blur-sm border border-slate-200 text-slate-700 px-8 py-4 rounded-2xl font-semibold hover:bg-slate-200 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1">
              <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
              Resume
            </button>
          </a>
        </div>

        {/* Enhanced Featured Project Card */}
        <div className="relative max-w-md mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl"></div>
          <div className="relative bg-white/90 backdrop-blur-sm p-8 shadow-2xl border border-white/50 rounded-3xl px-[32px] mx-0 my-[30px]">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full tracking-wider uppercase">
                Featured Project
              </span>
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse delay-150"></div>
                <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse delay-300"></div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">
              SwapVerse.ev
            </h3>

            <p className="text-slate-600 leading-relaxed mb-4">
              Raised {' '}
              <span className="font-bold text-blue-500">₹2.5L+ from Hyundai & Nirmaan </span>
              post concept validation; launched BaaS model via mechanic led swap station
            </p>

            <div className="flex items-center justify-end">
              <a
                href="https://drive.google.com/file/d/1tOMz59LCrOxPxX8xM__yTghwQeFRiUEf/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex items-center text-purple-600 font-semibold text-sm group cursor-pointer">
                  View Pitch Deck
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>

  </section>;
};
export default Hero;

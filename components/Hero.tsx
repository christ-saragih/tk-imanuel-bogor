import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-kid-yellow rounded-full opacity-20 blur-2xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-kid-blue rounded-full opacity-20 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-6">
            <RevealOnScroll delay={0}>
              <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full border border-blue-100 mx-auto lg:mx-0">
                <span className="bg-kid-blue text-white text-xs font-bold px-2 py-0.5 rounded-full">Baru</span>
                <span className="text-kid-blue text-sm font-medium">Pendaftaran Tahun Ajaran 2025 Buka!</span>
              </div>
            </RevealOnScroll>
            
            <RevealOnScroll delay={100}>
              <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-tight text-kid-dark">
                Belajar Sambil <br/>
                <span className="text-kid-red inline-block transform -rotate-2">Bermain</span>, <br/>
                Tumbuh <span className="text-kid-green">Bahagia</span>
              </h1>
            </RevealOnScroll>
            
            <RevealOnScroll delay={200}>
              <p className="text-lg md:text-xl text-gray-600 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Membangun karakter anak yang cerdas, kreatif, dan mandiri dengan metode pembelajaran yang menyenangkan dan penuh kasih sayang.
              </p>
            </RevealOnScroll>
            
            <RevealOnScroll delay={300}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <button 
                  onClick={() => scrollToSection('#contact')} 
                  className="group bg-kid-yellow text-kid-dark font-display font-bold text-lg px-8 py-4 rounded-2xl shadow-[0_6px_0_rgb(217,119,6)] hover:shadow-[0_3px_0_rgb(217,119,6)] hover:translate-y-1 transition-all flex items-center justify-center gap-2"
                >
                  Daftar Trial Class
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => scrollToSection('#programs')} 
                  className="bg-white border-2 border-gray-200 text-gray-700 font-display font-bold text-lg px-8 py-4 rounded-2xl hover:border-kid-blue hover:text-kid-blue transition-colors flex items-center justify-center"
                >
                  Lihat Program
                </button>
              </div>
            </RevealOnScroll>
            
            <RevealOnScroll delay={400}>
              <div className="pt-8 flex items-center justify-center lg:justify-start gap-8 text-gray-500 text-sm font-medium">
                <div className="flex items-center gap-2">
                  <Sparkles size={18} className="text-kid-yellow" />
                  <span>Metode Montessori</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles size={18} className="text-kid-green" />
                  <span>Guru Bersertifikat</span>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Image Content */}
          <RevealOnScroll delay={200} className="relative">
            <div className="relative z-10 rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://picsum.photos/800/600?random=1" 
                alt="Anak-anak bermain di sekolah" 
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3 animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="bg-green-100 p-2 rounded-full">
                <span className="text-2xl">🎨</span>
              </div>
              <div>
                <p className="font-bold text-gray-800">Kreativitas</p>
                <p className="text-xs text-gray-500">Kelas Seni Harian</p>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3 animate-bounce" style={{ animationDuration: '4s' }}>
              <div className="bg-red-100 p-2 rounded-full">
                <span className="text-2xl">🧸</span>
              </div>
              <div>
                <p className="font-bold text-gray-800">Playground</p>
                <p className="text-xs text-gray-500">Aman & Luas</p>
              </div>
            </div>
          </RevealOnScroll>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
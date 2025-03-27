import React, { useEffect, useRef } from 'react';
import AnimatedText from './AnimatedText';
import ScrollMarquee from './ScrollMarquee';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { width, height, left, top } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left - width / 2) / 20;
      const y = (clientY - top - height / 2) / 20;
      
      heroRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };

    // Reset position on scroll to prevent dislocation
    const handleScroll = () => {
      if (!heroRef.current) return;
      heroRef.current.style.transform = 'translate(0, 0)';
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const logos = [
    "Otipy", "Onebanc", "Homeville", "Phablecare", "Bimaplan", "Falconbrick", "Orbo", "SuperKalam","Foxtale","Finly","Wizklub","Zippmat","Zocket","InPrime","Onwo","Finhaat","GigaFun","VS Mani","Singularity","Sumosave","Elivaas","Gravity"
  ];

  return (
    <section className="relative min-h-screen w-full pt-24 pb-10 flex flex-col justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[#f5f5f7] -z-10"></div>
      
      <div className="content-container flex flex-col justify-center items-center text-center h-full z-10 pt-2 md:pt-2 lg:pt-2">
        <div className="relative mb-4">
          <div className="absolute -inset-1 bg-gradient-to-r from-gray-200 to-gray-100 rounded-full blur opacity-60"></div>
          <AnimatedText
            text="Kettleborough VC"
            className="relative font-sans text-sm uppercase tracking-[0.2em] text-gray-500 mb-3"
            animation="fade-in"
            delay={0.1}
            tag="p"
          />
        </div>
        
        <div ref={heroRef} className="transition-transform duration-200 ease-out mb-6">
          <AnimatedText
            text="Fueling Visionary Ideas"
            className="font-serif text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-4"
            animation="fade-in"
            delay={0.3}
            tag="h1"
          />
          <AnimatedText
            text="with Capital & Expertise"
            className="font-serif text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-8"
            animation="fade-in"
            delay={0.5}
            tag="h1"
          />
        </div>
        
        <AnimatedText
          text="Investing in transformative technologies and entrepreneurs who are building the future."
          className="max-w-xl mx-auto text-md md:text-lg lg:text-xl text-gray-600 mb-12"
          animation="fade-in"
          delay={0.7}
          tag="p"
        />
        
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <AnimatedText
            text=""
            className="opacity-0"
            animation="fade-in"
            delay={0.9}
          >
            <a href="#contact" className="btn-primary">
              Pitch Your Startup
            </a>
          </AnimatedText>
          <AnimatedText
            text=""
            className="opacity-0"
            animation="fade-in"
            delay={1.1}
          >
            <a href="#portfolio" className="btn-secondary">
              Explore Our Portfolio
            </a>
          </AnimatedText>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 py-8 bg-white/70 backdrop-blur-sm whitespace-nowrap">
        <ScrollMarquee logos={logos} />
      </div>
      
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-8 h-14 rounded-full border-2 border-gray-400 flex justify-center items-start p-1">
          <div className="w-1 h-3 bg-gray-400 rounded-full animate-pulse-subtle"></div>
        </div>
      </div> */}
    </section>
  );
};

export default Hero;

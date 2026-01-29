import { useEffect, useState, useRef } from 'react';
import { ChevronRight, Cloud, Cpu, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  const sectionRef = useRef<HTMLElement>(null);
  
  const fullText = "AI-Powered Cloud Solutions";
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Typewriter effect
  useEffect(() => {
    if (isVisible) {
      let currentIndex = 0;
      const timer = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setTypedText(fullText.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(timer);
        }
      }, 100);
      
      return () => clearInterval(timer);
    }
  }, [isVisible]);

  return (
    <section 
      id="home" 
      ref={sectionRef}
      className="min-h-screen relative flex items-center justify-center overflow-hidden px-4 sm:px-6 touch-pan-y"
    >
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a192f] via-[#112240] to-[#0a192f]">
        <div className="absolute inset-0 opacity-20">
          {[...Array(40)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-gradient-to-r from-teal-400 to-blue-500 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${Math.random() * 3 + 2}s`
              }}
            />
          ))}
        </div>
        
        {/* Floating binary code */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="absolute text-teal-400 text-xs font-mono animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${Math.random() * 3 + 2}s`
              }}
            >
              {Math.random() > 0.5 ? '1' : '0'}
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto text-center relative z-10 py-16 sm:py-20">
        <div className={`transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
            <span className="text-white">AI-Powered</span>
            <br />
            <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent inline-block">
              {typedText}
              <span className="animate-pulse">|</span>
            </span>
            <br />
            <span className={`text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl transform transition-all duration-1000 delay-500 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              for the Future-Ready Enterprise
            </span>
          </h1>
          
          <p className={`text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto px-4 transform transition-all duration-1000 delay-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Empowering businesses through AI-integrated cloud transformation and digital infrastructure services
          </p>

          <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 px-4 transform transition-all duration-1000 delay-900 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <Link 
              to="/services"
              className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:shadow-lg hover:shadow-teal-500/25 transition-all duration-300 flex items-center justify-center group transform hover:scale-105 touch-manipulation min-h-[48px]"
            >
              Explore Services
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/contact"
              className="border-2 border-teal-400 text-teal-400 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-teal-400 hover:text-[#0a192f] transition-all duration-300 hover:shadow-lg hover:shadow-teal-400/25 transform hover:scale-105 touch-manipulation min-h-[48px] flex items-center justify-center"
            >
              Contact Us
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto px-4">
            {[
              { icon: Cpu, title: 'AI + Cloud Strategy', desc: 'Intelligent migration and optimization' },
              { icon: Cloud, title: 'Modern Infrastructure', desc: 'Scalable and secure cloud solutions' },
              { icon: Zap, title: '24/7 AIOps Support', desc: 'Proactive monitoring and management' }
            ].map((item, index) => (
              <div
                key={index}
                className={`bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 sm:p-6 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:shadow-lg hover:shadow-teal-500/20 group ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${1100 + index * 200}ms` }}
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <item.icon className="text-teal-400 w-10 h-10 sm:w-12 sm:h-12 mx-auto group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-400/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 group-hover:text-teal-400 transition-colors duration-300">{item.title}</h3>
                <p className="text-gray-300 text-sm sm:text-base">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className={`absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`} style={{ transitionDelay: '1500ms' }}>
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-teal-400 rounded-full flex justify-center hover:border-teal-300 transition-colors duration-300">
          <div className="w-1 h-2 sm:h-3 bg-teal-400 rounded-full mt-1 sm:mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

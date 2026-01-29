
import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Cloud, Code, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSwipeGesture } from '../hooks/useSwipeGesture';

const BannerCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  const banners = [{
    id: 1,
    title: "AI-Powered Cloud Solutions",
    subtitle: "Transform Your Business with Intelligent Cloud Infrastructure",
    description: "Leverage cutting-edge AI technology to optimize your cloud operations, reduce costs, and enhance performance with our comprehensive cloud migration and management services.",
    icon: Cloud,
    gradient: "from-teal-500 to-blue-600",
    cta: "Explore Cloud Services",
    link: "/services",
    image: "/lovable-uploads/4a737218-e28b-4b60-8be3-f0b35291fb0e.png"
  }, {
    id: 2,
    title: "Custom Software Development",
    subtitle: "Tailored Solutions for Your Unique Business Needs",
    description: "From web applications to mobile apps and enterprise software, we deliver scalable, secure, and innovative solutions that drive your business forward.",
    icon: Code,
    gradient: "from-blue-500 to-purple-600",
    cta: "View Development Services",
    link: "/services",
    image: "/lovable-uploads/e5e98b25-cbf2-421d-8fe7-cf3a2bbb0b87.png"
  }, {
    id: 3,
    title: "AI & Machine Learning",
    subtitle: "Unlock the Power of Artificial Intelligence",
    description: "Implement intelligent automation, predictive analytics, and machine learning models to gain competitive advantages and make data-driven decisions.",
    icon: Cpu,
    gradient: "from-purple-500 to-pink-600",
    cta: "Discover AI Solutions",
    link: "/services",
    image: "/lovable-uploads/44d76a37-0a27-45ab-88f9-c913480516ad.png"
  }];

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + banners.length) % banners.length);
  };

  // Add swipe gesture support for mobile
  const swipeRef = useSwipeGesture({
    onSwipeLeft: nextSlide,
    onSwipeRight: prevSlide,
  }, { threshold: 50 });

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

  useEffect(() => {
    if (isPaused) return;
    
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % banners.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, [banners.length, isPaused]);

  return (
    <section 
      ref={(el) => {
        sectionRef.current = el;
        if (swipeRef.current !== el) {
          (swipeRef as any).current = el;
        }
      }}
      className="relative h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[550px] overflow-hidden touch-pan-x select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Carousel Container */}
      <div className="relative h-full will-change-transform">
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
              index === currentSlide 
                ? 'opacity-100 translate-x-0 scale-100' 
                : index < currentSlide 
                ? 'opacity-0 -translate-x-full scale-95' 
                : 'opacity-0 translate-x-full scale-95'
            }`}
            style={{
              backgroundImage: banner.image ? `url(${banner.image})` : 'none',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0a192f]/90 via-[#112240]/85 to-[#0a192f]/90" />
            
            {/* Enhanced Background Animation */}
            <div className="absolute inset-0 opacity-20">
              {[...Array(30)].map((_, i) => (
                <div
                  key={i}
                  className="absolute bg-gradient-to-r from-teal-400 to-blue-500 rounded-full animate-pulse"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    width: `${Math.random() * 3 + 1}px`,
                    height: `${Math.random() * 3 + 1}px`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${Math.random() * 3 + 2}s`
                  }}
                />
              ))}
            </div>

            {/* Matrix-like code rain effect */}
            <div className="absolute inset-0 opacity-5">
              {[...Array(15)].map((_, i) => (
                <div
                  key={i}
                  className="absolute text-teal-400 text-xs font-mono animate-pulse"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`
                  }}
                >
                  {Math.random().toString(36).substring(2, 8)}
                </div>
              ))}
            </div>

            <div className="container mx-auto px-4 sm:px-6 h-full flex items-center relative z-10">
              <div className="w-full max-w-3xl">
                {/* Enhanced Content with Stagger Animation */}
                <div className={`text-white text-center lg:text-left transform transition-all duration-1000 ${
                  isVisible && index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}>
                  <div className="flex items-center justify-center lg:justify-start mb-4">
                    <div className={`p-2 sm:p-3 rounded-full bg-gradient-to-r ${banner.gradient} mr-3 sm:mr-4 transform hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <banner.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                  </div>
                  
                  <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight transform transition-all duration-1000 delay-200 ${
                    isVisible && index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}>
                    {banner.title}
                  </h1>
                  
                  <h2 className={`text-lg sm:text-xl md:text-2xl text-gray-300 mb-4 sm:mb-6 transform transition-all duration-1000 delay-300 ${
                    isVisible && index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}>
                    {banner.subtitle}
                  </h2>
                  
                  <p className={`text-sm sm:text-base lg:text-lg text-gray-300 mb-6 sm:mb-8 leading-relaxed px-4 lg:px-0 transform transition-all duration-1000 delay-400 ${
                    isVisible && index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}>
                    {banner.description}
                  </p>
                  
                  <Link 
                    to={banner.link} 
                    className={`inline-flex items-center px-4 sm:px-6 md:px-8 py-3 sm:py-4 bg-gradient-to-r ${banner.gradient} text-white font-semibold rounded-full hover:shadow-lg hover:shadow-teal-500/25 transition-all duration-300 group text-sm sm:text-base transform hover:scale-105 touch-manipulation ${
                      isVisible && index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}
                    style={{ transitionDelay: '500ms' }}
                  >
                    {banner.cta}
                    <ChevronRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Enhanced Navigation Arrows */}
      <button 
        onClick={prevSlide} 
        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-teal-500/25 z-20 touch-manipulation"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
      </button>

      <button 
        onClick={nextSlide} 
        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-teal-500/25 z-20 touch-manipulation"
        aria-label="Next slide"
      >
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
      </button>

      {/* Enhanced Slide Indicators */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3 z-20">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 sm:h-3 rounded-full transition-all duration-500 hover:scale-110 ${
              index === currentSlide 
                ? 'bg-gradient-to-r from-teal-400 to-blue-500 w-6 sm:w-8 shadow-lg' 
                : 'bg-white/40 hover:bg-white/60 w-2 sm:w-3'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default BannerCarousel;

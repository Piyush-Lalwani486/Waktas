
import { lazy, Suspense } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';


// Lazy load components
const BannerCarousel = lazy(() => import('@/components/BannerCarousel'));
const Hero = lazy(() => import('@/components/Hero'));
const Testimonials = lazy(() => import('@/components/Testimonials'));

// Loading component with tech animation
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-[200px] bg-[#0a192f]">
    <div className="relative">
      <div className="w-16 h-16 border-4 border-teal-400/20 rounded-full animate-spin"></div>
      <div className="absolute top-0 left-0 w-16 h-16 border-4 border-transparent border-t-teal-400 rounded-full animate-spin"></div>
      <div className="absolute top-2 left-2 w-12 h-12 border-2 border-blue-400/40 rounded-full animate-pulse"></div>
    </div>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0a192f] text-white overflow-x-hidden relative">
      {/* Animated tech background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 opacity-5">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-gradient-to-r from-teal-400 to-blue-500 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 3 + 2}s`
              }}
            />
          ))}
        </div>
        
        {/* Floating geometric shapes */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute border border-teal-400/30 animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 20 + 10}px`,
                height: `${Math.random() * 20 + 10}px`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${Math.random() * 4 + 3}s`,
                transform: Math.random() > 0.5 ? 'rotate(45deg)' : 'rotate(0deg)'
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10">
        <Header />
        
        <main className="pt-24 md:pt-28">
        <Suspense fallback={<LoadingSpinner />}>
          <BannerCarousel />
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <Hero />
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <Testimonials />
        </Suspense>
        
        <Footer />
        </main>
      </div>
    </div>
  );
};

export default Index;

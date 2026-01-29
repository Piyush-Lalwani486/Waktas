
import { useEffect, useRef, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Services from '@/components/Services';

const ServicesPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    console.log('Services page mounting...');
    setIsLoaded(true);
    return () => {
      console.log('Services page unmounting...');
    };
  }, []);

  console.log('Services page rendering, isLoaded:', isLoaded);

  return (
    <div className="min-h-screen bg-[#0a192f] text-white overflow-x-hidden">
      <Header />
      
      <main className="pt-24 md:pt-28">
        <Services />
      </main>

      <Footer />
    </div>
  );
};

export default ServicesPage;

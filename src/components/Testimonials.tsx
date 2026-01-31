import React, { useRef, useEffect, useState } from 'react';
import { Star, User } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  const testimonials = [
    {
      id: 1,
      name: "Alice Rodriguez",
      content: "I am amazed by the transformative impact WAKTYS has had on our operations. Their expertise in Cloud modernization is unmatched.",
      initials: "AR"
    },
    {
      id: 2,
      name: "Mohammed Khan", 
      content: "Working with WAKTYS was a game-changer for our company. Their AI solutions have boosted our productivity and efficiency.",
      initials: "MK"
    },
    {
      id: 3,
      name: "Sophie Chen",
      content: "WAKTYS's consulting services have truly optimized our infrastructure. We are now more agile and competitive in the market.",
      initials: "SC"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-16 sm:py-20 bg-gradient-to-br from-[#0a192f] via-[#112240] to-[#0a192f] relative overflow-hidden"
    >
      {/* Enhanced Background Animation */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
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

      {/* Floating tech elements */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(15)].map((_, i) => (
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
            {'</>'}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className={`text-center mb-12 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Client <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">Testimonials</span>
          </h2>
          <p className={`text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto transform transition-all duration-1000 delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Hear what our clients have to say about their experience with WAKTYS
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              className={`bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:shadow-lg hover:shadow-teal-500/20 group ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${400 + index * 200}ms` }}
            >
              <CardContent className="p-6 relative overflow-hidden">
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="w-4 h-4 text-yellow-400 fill-current group-hover:scale-110 transition-transform duration-300" 
                        style={{ transitionDelay: `${i * 50}ms` }}
                      />
                    ))}
                  </div>
                  
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center">
                    <Avatar className="w-10 h-10 mr-3 group-hover:scale-110 transition-transform duration-300">
                      <AvatarFallback className="bg-gradient-to-r from-teal-500 to-blue-600 text-white font-semibold">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-white font-semibold text-sm sm:text-base group-hover:text-teal-400 transition-colors duration-300">
                        {testimonial.name}
                      </p>
                      <p className="text-teal-400 text-xs sm:text-sm">
                        Verified Client
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

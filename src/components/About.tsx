
import { useEffect, useRef, useState } from 'react';
import { Target, Eye, Award, Users } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-gradient-to-b from-[#0a192f] to-[#112240]">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-teal-400">Waktys</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We empower organizations to modernize faster, operate smarter, and scale securely—unlocking 
            new value from cloud investments through AI-powered solutions that enhance reliability, 
            optimize costs, and support sustainability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            { icon: Target, title: 'Mission', desc: 'Transforming businesses through intelligent cloud solutions' },
            { icon: Eye, title: 'Vision', desc: 'Leading the future of AI-driven cloud infrastructure' },
            { icon: Award, title: 'Excellence', desc: 'Delivering world-class cloud and AI services' },
            { icon: Users, title: 'Partnership', desc: 'Building lasting relationships with our clients' }
          ].map((item, index) => (
            <div
              key={index}
              className={`text-center transform transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="bg-gradient-to-br from-teal-500/20 to-blue-600/20 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center border border-teal-400/30">
                <item.icon className="text-teal-400 w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
              <p className="text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className={`bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`} style={{ transitionDelay: '800ms' }}>
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-teal-400">AI-Powered Platform</h3>
            <p className="text-lg text-gray-300 mb-6">
              Our cutting-edge AI platform integrates seamlessly with cloud infrastructure to provide 
              predictive analytics, automated optimization, and intelligent resource management.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { number: '500+', label: 'AI Tools Integrated' },
                { number: '50+', label: 'Cloud Platforms' },
                { number: '1000+', label: 'Successful Migrations' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-teal-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

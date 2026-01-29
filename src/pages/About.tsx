
import { useEffect, useRef, useState } from 'react';
import { Target, Eye, Award, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AboutPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    console.log('About page mounting...');
    setIsLoaded(true);
    
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

    return () => {
      console.log('About page unmounting...');
      observer.disconnect();
    };
  }, []);

  console.log('About page rendering, isLoaded:', isLoaded, 'isVisible:', isVisible);

  return (
    <div className="min-h-screen bg-[#0a192f] text-white overflow-x-hidden">
      <Header />
      
      <main className="pt-24 md:pt-28">
        <section 
          ref={sectionRef} 
          className="py-16 md:py-20 bg-gradient-to-b from-[#0a192f] to-[#112240] relative"
        >
          <div className="container mx-auto px-6 md:px-8">
            <div className={`text-center mb-8 md:mb-12 lg:mb-16 transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6">
                About <span className="text-teal-400">Waktys</span>
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-2 md:px-0">
                We empower organizations to modernize faster, operate smarter, and scale securely—unlocking 
                new value from cloud investments through AI-powered solutions that enhance reliability, 
                optimize costs, and support sustainability.
              </p>
            </div>

            {/* Company Values */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-12 lg:mb-16">
              {[
                { 
                  icon: Target, 
                  title: 'Our Mission', 
                  desc: 'Transforming businesses through intelligent cloud solutions that drive innovation and growth',
                  detail: 'We believe in the power of AI-integrated cloud infrastructure to revolutionize how businesses operate and scale.'
                },
                { 
                  icon: Eye, 
                  title: 'Our Vision', 
                  desc: 'Leading the future of AI-driven cloud infrastructure globally',
                  detail: 'To be the premier partner for organizations seeking to harness the full potential of cloud and AI technologies.'
                },
                { 
                  icon: Award, 
                  title: 'Excellence', 
                  desc: 'Delivering world-class cloud and AI services with proven results',
                  detail: 'Our commitment to excellence drives us to continuously innovate and exceed client expectations.'
                },
                { 
                  icon: Users, 
                  title: 'Partnership', 
                  desc: 'Building lasting relationships with our clients through trust and collaboration',
                  detail: 'We work alongside our clients as trusted advisors, ensuring their success is our success.'
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className={`text-center transform transition-all duration-1000 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                   <div className="bg-gradient-to-br from-teal-500/20 to-blue-600/20 rounded-full p-3 md:p-6 w-14 h-14 md:w-20 md:h-20 mx-auto mb-4 flex items-center justify-center border border-teal-400/30 hover:scale-110 transition-transform duration-300">
                     <item.icon className="text-teal-400 w-5 h-5 md:w-8 md:h-8" />
                   </div>
                   <h3 className="text-base md:text-xl font-semibold mb-2 text-white">{item.title}</h3>
                   <p className="text-gray-300 mb-3 text-xs md:text-base">{item.desc}</p>
                   <p className="text-xs md:text-sm text-gray-400">{item.detail}</p>
                </div>
              ))}
            </div>

            {/* AI Platform Section */}
            <div className={`bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 mb-16 transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`} style={{ transitionDelay: '800ms' }}>
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4 text-teal-400">AI-Powered Platform</h2>
                <p className="text-lg text-gray-300 mb-6">
                  Our cutting-edge AI platform integrates seamlessly with cloud infrastructure to provide 
                  predictive analytics, automated optimization, and intelligent resource management.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                {[
                  { number: '500+', label: 'AI Tools Integrated', desc: 'Comprehensive suite of AI-powered tools for cloud optimization' },
                  { number: '50+', label: 'Cloud Platforms', desc: 'Supporting major cloud providers with seamless integration' },
                  { number: '1000+', label: 'Successful Migrations', desc: 'Proven track record of successful cloud transformations' }
                ].map((stat, index) => (
                  <div key={index} className="text-center bg-white/5 rounded-xl p-6">
                    <div className="text-4xl font-bold text-teal-400 mb-2">{stat.number}</div>
                    <div className="text-white font-semibold mb-2">{stat.label}</div>
                    <div className="text-gray-300 text-sm">{stat.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Company Story */}
            <div className={`grid lg:grid-cols-2 gap-12 items-center transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`} style={{ transitionDelay: '1000ms' }}>
              <div>
                <h2 className="text-3xl font-bold mb-6 text-white">Our Story</h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    Founded with a vision to bridge the gap between traditional IT infrastructure and 
                    the AI-powered future, Waktys has emerged as a leader in intelligent cloud solutions.
                  </p>
                  <p>
                    Our team of experts combines deep technical knowledge with innovative thinking to 
                    deliver solutions that not only meet today's challenges but anticipate tomorrow's opportunities.
                  </p>
                  <p>
                    We understand that every organization's journey to the cloud is unique, which is why 
                    we provide tailored solutions that align with specific business goals and technical requirements.
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-teal-500/10 to-blue-600/10 rounded-2xl p-12 text-center border border-teal-400/20">
                <Target className="text-teal-400 w-24 h-24 mx-auto mb-6 opacity-50" />
                <h3 className="text-2xl font-bold text-white mb-4">Innovation at Core</h3>
                <p className="text-gray-300">
                  Driving digital transformation through cutting-edge AI and cloud technologies
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;


import React, { useEffect, useRef, useState } from 'react';
import { Brain, Cloud, Shield, Code, Database, Cpu } from 'lucide-react';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

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

  const serviceCategories = [
    {
      title: 'AI & Cloud Services',
      icon: Brain,
      services: [
        'AI-based Migration Strategy',
        'Predictive Incident Management',
        'AIOps Implementation',
        'Root Cause Analysis',
        'Machine Learning Operations'
      ]
    },
    {
      title: 'Modern Infrastructure',
      icon: Cloud,
      services: [
        'Data Lake Design & Implementation',
        'OpenShift Deployment',
        'VMware Migration',
        'SRE Services',
        'Kubernetes Orchestration'
      ]
    },
    {
      title: 'Digital & Technology Services',
      icon: Code,
      services: [
        'Cloud Strategy Consulting',
        'End User Computing (EUC)',
        'Virtual Desktop Infrastructure',
        'Cybersecurity Solutions',
        'IT Staff Augmentation'
      ]
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="py-16 sm:py-20 bg-[#0a192f]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className={`text-center mb-12 sm:mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Our <span className="text-teal-400">Services</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4 sm:px-0">
            Comprehensive AI-powered cloud solutions tailored to your business needs
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Service Category Tabs */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center mb-12 gap-3 sm:gap-4">
            {serviceCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`flex items-center justify-center space-x-2 px-4 sm:px-6 py-3 rounded-full transition-all duration-300 min-h-[44px] text-sm sm:text-base ${
                  activeCategory === index
                    ? 'bg-gradient-to-r from-teal-500 to-blue-600 text-white shadow-lg shadow-teal-500/25'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10'
                }`}
              >
                <category.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="truncate">{category.title}</span>
              </button>
            ))}
          </div>

          {/* Active Service Category */}
          <div className={`transform transition-all duration-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 sm:p-6 md:p-8">
              <div className="text-center mb-6 sm:mb-8">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-teal-500/20 to-blue-600/20 rounded-full border border-teal-400/30 mb-4">
                  {React.createElement(serviceCategories[activeCategory].icon, {
                    className: "w-6 h-6 sm:w-8 sm:h-8 text-teal-400"
                  })}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  {serviceCategories[activeCategory].title}
                </h3>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {serviceCategories[activeCategory].services.map((service, index) => (
                  <div
                    key={index}
                    className="bg-white/5 border border-white/10 rounded-xl p-4 sm:p-6 hover:bg-white/10 hover:border-teal-400/30 transition-all duration-300 group cursor-pointer"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-teal-400 rounded-full group-hover:scale-150 transition-transform duration-300 flex-shrink-0"></div>
                      <h4 className="text-white font-semibold group-hover:text-teal-400 transition-colors duration-300 text-sm sm:text-base">
                        {service}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Service Stats */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-12 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`} style={{ transitionDelay: '600ms' }}>
            {[
              { icon: Shield, number: '99.9%', label: 'Uptime Guarantee' },
              { icon: Database, number: '24/7', label: 'Monitoring & Support' },
              { icon: Cpu, number: '50+', label: 'AI Models Deployed' },
              { icon: Cloud, number: '100+', label: 'Cloud Migrations' }
            ].map((stat, index) => (
              <div key={index} className="text-center bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 sm:p-6 hover:bg-white/10 transition-all duration-300">
                <stat.icon className="text-teal-400 w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 sm:mb-3" />
                <div className="text-lg sm:text-2xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

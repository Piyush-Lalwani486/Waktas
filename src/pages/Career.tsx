import { useEffect, useRef, useState } from 'react';
import { Users, Rocket, Heart, Award, MapPin, Clock, DollarSign } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CareerPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.1
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const openPositions = [
    {
      title: 'Senior Cloud Solutions Architect',
      department: 'Engineering',
      location: 'Sydney, Australia',
      type: 'Full-time',
      salary: '$120k - $150k',
      description: 'Lead the design and implementation of cloud infrastructure solutions for enterprise clients.'
    },
    {
      title: 'AI/ML Engineer',
      department: 'Data Science',
      location: 'Remote',
      type: 'Full-time',
      salary: '$100k - $130k',
      description: 'Develop and deploy machine learning models for predictive analytics and automation.'
    },
    {
      title: 'DevOps Engineer',
      department: 'Operations',
      location: 'Sydney, Australia',
      type: 'Full-time',
      salary: '$90k - $120k',
      description: 'Build and maintain CI/CD pipelines and infrastructure automation tools.'
    },
    {
      title: 'Cloud Security Specialist',
      department: 'Security',
      location: 'Hybrid',
      type: 'Full-time',
      salary: '$110k - $140k',
      description: 'Implement and maintain security frameworks for cloud environments.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a192f] text-white">
      <Header />
      
      <main className="pt-24 md:pt-28">
        <section ref={sectionRef} className="py-16 md:py-20 bg-gradient-to-b from-[#112240] to-[#0a192f]">
          <div className="container mx-auto px-6 md:px-8">
            <div className={`text-center mb-8 md:mb-12 lg:mb-16 transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6">
                Join the Future of <span className="text-teal-400">AI</span>
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto px-2 md:px-4">
                Be part of a team that's shaping the future of AI-powered cloud solutions. 
                Work with cutting-edge technology and brilliant minds in a collaborative environment.
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              {/* Why Join Us */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-12 lg:mb-16 px-2 md:px-4">
                {[
                  {
                    icon: Rocket,
                    title: 'Innovation',
                    desc: 'Work with the latest AI and cloud technologies',
                    detail: 'Access to cutting-edge tools and technologies in AI, machine learning, and cloud computing.'
                  },
                  {
                    icon: Users,
                    title: 'Collaboration',
                    desc: 'Join a team of passionate tech experts',
                    detail: 'Work alongside industry veterans and innovative thinkers who share your passion for technology.'
                  },
                  {
                    icon: Heart,
                    title: 'Work-Life Balance',
                    desc: 'Flexible remote and hybrid options',
                    detail: 'Enjoy flexible working arrangements that support your personal and professional growth.'
                  },
                  {
                    icon: Award,
                    title: 'Growth',
                    desc: 'Continuous learning and career development',
                    detail: 'Comprehensive training programs, certifications, and career advancement opportunities.'
                  }
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`text-center transform transition-all duration-1000 ${
                      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                     <div className="bg-gradient-to-br from-teal-500/20 to-blue-600/20 rounded-full p-3 md:p-6 w-14 h-14 md:w-20 md:h-20 mx-auto mb-3 md:mb-4 flex items-center justify-center border border-teal-400/30 hover:scale-110 transition-transform duration-300">
                       <item.icon className="text-teal-400 w-5 h-5 md:w-8 md:h-8" />
                     </div>
                     <h3 className="text-base md:text-xl font-semibold mb-2 text-white">{item.title}</h3>
                     <p className="text-gray-300 mb-2 text-xs md:text-base">{item.desc}</p>
                     <p className="text-xs md:text-sm text-gray-400">{item.detail}</p>
                  </div>
                ))}
              </div>

              {/* Open Positions */}
              <div className={`mb-12 md:mb-16 px-4 transform transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`} style={{ transitionDelay: '800ms' }}>
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-white">Open Positions</h2>
                
                <div className="grid lg:grid-cols-2 gap-4 md:gap-6">
                  {openPositions.map((position, index) => (
                    <div key={index} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 md:p-6 hover:bg-white/10 hover:border-teal-400/30 transition-all duration-300">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                        <div className="mb-2 md:mb-0">
                          <h3 className="text-lg md:text-xl font-semibold text-white mb-1">{position.title}</h3>
                          <p className="text-teal-400 font-semibold text-sm md:text-base">{position.department}</p>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 mb-4 text-sm md:text-base">{position.description}</p>
                      
                      <div className="flex flex-wrap gap-3 md:gap-4 text-xs md:text-sm text-gray-400 mb-4">
                        <div className="flex items-center">
                          <MapPin className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                          {position.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                          {position.type}
                        </div>
                      </div>
                      
                      <button className="w-full bg-gradient-to-r from-teal-500 to-blue-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg text-sm md:text-base font-semibold hover:shadow-lg hover:shadow-teal-500/25 transition-all duration-300">
                        Apply Now
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits Section */}
              <div className={`bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 mb-12 md:mb-16 mx-4 transform transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`} style={{ transitionDelay: '1000ms' }}>
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8 text-white">Benefits & Perks</h2>
                
                <div className="grid md:grid-cols-3 gap-4 md:gap-6">
                  {[
                    {
                      title: 'Health & Wellness',
                      items: ['Comprehensive health insurance', 'Mental health support', 'Fitness membership', 'Annual health checkups']
                    },
                    {
                      title: 'Professional Development',
                      items: ['Conference attendance', 'Online course subscriptions', 'Certification support', 'Internal training programs']
                    },
                    {
                      title: 'Work Environment',
                      items: ['Flexible working hours', 'Remote work options', 'Modern office spaces', 'Team building events']
                    }
                  ].map((benefit, index) => (
                    <div key={index} className="bg-white/5 rounded-xl p-4 md:p-6">
                      <h3 className="text-lg md:text-xl font-semibold text-teal-400 mb-3 md:mb-4">{benefit.title}</h3>
                      <ul className="space-y-2">
                        {benefit.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-gray-300 flex items-center text-sm md:text-base">
                            <div className="w-2 h-2 bg-teal-400 rounded-full mr-3 flex-shrink-0"></div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Career CTA */}
              <div className={`bg-gradient-to-r from-teal-500/10 to-blue-600/10 rounded-2xl p-8 md:p-12 text-center border border-teal-400/20 mx-4 transform transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`} style={{ transitionDelay: '1200ms' }}>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-white">
                  Ready to Shape the Future?
                </h2>
                <p className="text-base md:text-lg text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto">
                  We're always looking for talented individuals who share our passion for AI and cloud innovation. 
                  Join our team and help us build tomorrow's technology today.
                </p>
                <div className="flex flex-col md:flex-row gap-4 justify-center">
                  <button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold hover:shadow-lg hover:shadow-teal-500/25 transition-all duration-300">
                    Get In Touch
                  </button>
                  <button className="border-2 border-teal-400 text-teal-400 px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold hover:bg-teal-400 hover:text-[#0a192f] transition-all duration-300">
                    Submit Your Resume
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CareerPage;

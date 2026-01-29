
import { useEffect, useRef, useState } from 'react';
import { Users, Rocket, Heart, Award } from 'lucide-react';

const Career = () => {
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
    <section id="career" ref={sectionRef} className="py-20 bg-gradient-to-b from-[#112240] to-[#0a192f]">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join the Future of <span className="text-teal-400">AI</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Be part of a team that's shaping the future of AI-powered cloud solutions. 
            Work with cutting-edge technology and brilliant minds.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Why Join Us */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { icon: Rocket, title: 'Innovation', desc: 'Work with the latest AI and cloud technologies' },
              { icon: Users, title: 'Collaboration', desc: 'Join a team of passionate tech experts' },
              { icon: Heart, title: 'Work-Life Balance', desc: 'Flexible remote and hybrid options' },
              { icon: Award, title: 'Growth', desc: 'Continuous learning and career development' }
            ].map((item, index) => (
              <div
                key={index}
                className={`text-center transform transition-all duration-1000 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="bg-gradient-to-br from-teal-500/20 to-blue-600/20 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center border border-teal-400/30 hover:scale-110 transition-transform duration-300">
                  <item.icon className="text-teal-400 w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Career CTA */}
          <div className={`bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-12 text-center transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`} style={{ transitionDelay: '800ms' }}>
            <h3 className="text-3xl font-bold mb-6 text-white">
              Ready to Shape the Future?
            </h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion for AI and cloud innovation. 
              Join our team and help us build tomorrow's technology today.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-teal-500/25 transition-all duration-300">
                View Open Positions
              </button>
              <button className="border-2 border-teal-400 text-teal-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-teal-400 hover:text-[#0a192f] transition-all duration-300">
                Submit Your Resume
              </button>
            </div>
          </div>

          {/* Team Image Placeholder */}
          <div className={`mt-12 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`} style={{ transitionDelay: '1000ms' }}>
            <div className="bg-gradient-to-r from-teal-500/10 to-blue-600/10 rounded-2xl p-16 text-center border border-teal-400/20">
              <Users className="text-teal-400 w-24 h-24 mx-auto mb-4 opacity-50" />
              <p className="text-gray-400 text-lg">
                Collaborative AI-Enhanced Workplace Visualization
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;


import { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram, Send } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-[#0a192f]">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get in <span className="text-teal-400">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your business with AI-powered cloud solutions? Let's start the conversation.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <h3 className="text-2xl font-bold mb-8 text-white">Contact Information</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-br from-teal-500/20 to-blue-600/20 rounded-full p-3 border border-teal-400/30">
                  <MapPin className="text-teal-400 w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Address</h4>
                  <p className="text-gray-300">Suite 129 / Mezzanine, 32 York Street, Sydney NSW 2000</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-br from-teal-500/20 to-blue-600/20 rounded-full p-3 border border-teal-400/30">
                  <Phone className="text-teal-400 w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Phone</h4>
                  <p className="text-gray-300">+61 02 8415 0414</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-br from-teal-500/20 to-blue-600/20 rounded-full p-3 border border-teal-400/30">
                  <Mail className="text-teal-400 w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Email</h4>
                  <p className="text-gray-300">info@waktys.com.au</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {[
                  { icon: Facebook, href: '#', label: 'Facebook' },
                  { icon: Twitter, href: '#', label: 'Twitter' },
                  { icon: Linkedin, href: '#', label: 'LinkedIn' },
                  { icon: Instagram, href: '#', label: 'Instagram' }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="bg-white/5 hover:bg-gradient-to-br hover:from-teal-500/20 hover:to-blue-600/20 border border-white/10 hover:border-teal-400/30 rounded-full p-3 transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <social.icon className="text-gray-300 group-hover:text-teal-400 w-5 h-5 transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 h-48 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="text-teal-400 w-12 h-12 mx-auto mb-2 opacity-50" />
                <p className="text-gray-400">Interactive Map</p>
                <p className="text-gray-500 text-sm">Suite 129 / Mezzanine, 32 York Street, Sydney NSW 2000</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`} style={{ transitionDelay: '400ms' }}>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-white">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white mb-2 font-medium">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-all duration-300"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white mb-2 font-medium">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-all duration-300"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-white mb-2 font-medium">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-all duration-300"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white mb-2 font-medium">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-all duration-300 resize-none"
                    placeholder="Tell us about your project..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-teal-500 to-blue-600 text-white px-6 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-teal-500/25 transition-all duration-300 flex items-center justify-center group"
                >
                  Send Message
                  <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

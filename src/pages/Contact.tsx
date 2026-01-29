import { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ContactPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
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
    <div className="min-h-screen bg-[#0a192f] text-white overflow-x-hidden">
      <Header />
      
      <main className="pt-24 md:pt-28">
        <section ref={sectionRef} className="py-16 sm:py-20 bg-[#0a192f]">
          <div className="container mx-auto px-4 sm:px-6">
            <div className={`text-center mb-12 sm:mb-16 transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                Get in <span className="text-teal-400">Touch</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto px-4 sm:px-0">
                Ready to transform your business with AI-powered cloud solutions? Let's start the conversation 
                and explore how we can help you achieve your digital transformation goals.
              </p>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
              {/* Contact Information */}
              <div className={`transform transition-all duration-1000 ${
                isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
              }`}>
                <h2 className="text-3xl font-bold mb-8 text-white">Contact Information</h2>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-br from-teal-500/20 to-blue-600/20 rounded-full p-3 border border-teal-400/30 mt-1">
                      <MapPin className="text-teal-400 w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Office Address</h3>
                      <p className="text-gray-300">Suite 129 / Mezzanine, 32 York Street, Sydney NSW 2000</p>
                      <p className="text-gray-400 text-sm mt-1">Visit us during business hours for in-person consultations</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-br from-teal-500/20 to-blue-600/20 rounded-full p-3 border border-teal-400/30 mt-1">
                      <Phone className="text-teal-400 w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Phone Number</h3>
                      <p className="text-gray-300">+61 02 8415 0414</p>
                      <p className="text-gray-400 text-sm mt-1">Available Monday to Friday, 9 AM - 5 PM AEST</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-br from-teal-500/20 to-blue-600/20 rounded-full p-3 border border-teal-400/30 mt-1">
                      <Mail className="text-teal-400 w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Email Address</h3>
                      <p className="text-gray-300">info@waktys.com.au</p>
                      <p className="text-gray-400 text-sm mt-1">We typically respond within 24 hours</p>
                    </div>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 mb-8">
                  <h3 className="text-white font-semibold mb-4">Office Hours</h3>
                  <div className="space-y-2 text-gray-300">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>10:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h3 className="text-white font-semibold mb-4">Follow Us</h3>
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
                <div className="mt-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 h-64 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="text-teal-400 w-16 h-16 mx-auto mb-4 opacity-50" />
                    <p className="text-gray-400 text-lg font-semibold">Interactive Map</p>
                    <p className="text-gray-500">Suite 129 / Mezzanine, 32 York Street, Sydney NSW 2000</p>
                    <p className="text-gray-500 text-sm mt-2">Click to view directions</p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className={`transform transition-all duration-1000 ${
                isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
              }`} style={{ transitionDelay: '400ms' }}>
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
                  <h2 className="text-3xl font-bold mb-6 text-white">Send us a Message</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-white mb-2 font-medium">Full Name *</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-all duration-300"
                          placeholder="Your Full Name"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-white mb-2 font-medium">Email Address *</label>
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

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                        <label htmlFor="phone" className="block text-white mb-2 font-medium">Phone Number</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-all duration-300"
                          placeholder="+61 xxx xxx xxx"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-white mb-2 font-medium">Subject *</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-all duration-300"
                        placeholder="What is this about?"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-white mb-2 font-medium">Message *</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-all duration-300 resize-none"
                        placeholder="Tell us about your project, requirements, or any questions you have..."
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
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;

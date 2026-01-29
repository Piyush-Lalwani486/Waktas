import { Heart, Facebook, Twitter, Linkedin, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const quickLinks = [{
    name: 'Home',
    path: '/'
  }, {
    name: 'About',
    path: '/about'
  }, {
    name: 'Services',
    path: '/services'
  }, {
    name: 'Career',
    path: '/career'
  }, {
    name: 'Contact',
    path: '/contact'
  }];
  const services = ['Cloud Migration', 'AI Integration', 'Custom Development', 'Cloud Security', 'DevOps Solutions', 'Data Analytics'];
  return <footer className="bg-[#0a192f] border-t border-white/10">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="text-2xl sm:text-3xl font-bold text-teal-400 mb-4">
              wakt<span className="text-white">ys</span>
            </div>
            <p className="text-gray-300 text-sm sm:text-base mb-6 leading-relaxed">
              Empowering businesses through AI-integrated cloud transformation. 
              We modernize, optimize, and scale your infrastructure for the future.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-teal-500 text-white p-2 rounded-full transition-all duration-300 group">
                <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-teal-500 text-white p-2 rounded-full transition-all duration-300 group">
                <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-teal-500 text-white p-2 rounded-full transition-all duration-300 group">
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => <li key={index}>
                  <Link to={link.path} className="text-gray-300 hover:text-teal-400 transition-colors duration-300 flex items-center group text-sm sm:text-base">
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => <li key={index} className="text-gray-300 text-sm sm:text-base">
                  {service}
                </li>)}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm sm:text-base">
                  Suite 129 / Mezzanine,<br />
                  32 York Street, Sydney NSW 2000
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-teal-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm sm:text-base">+61 02 8415 0414</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-teal-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm sm:text-base">info@waktys.com.au</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10 py-6 sm:py-8">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
            <p className="text-gray-400 text-sm mb-4 sm:mb-0">
              © {currentYear} Waktys. All rights reserved.
            </p>
            <div className="flex items-center text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 mx-1 text-teal-400" />
              <span>by Waktys Team</span>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;
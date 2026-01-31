import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import cloudiLogo from '/lovable-uploads/758e2810-9191-4c79-847c-3484b92bda8c.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navigationItems = [{
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
    name: 'Blog',
    path: '/blog'
  }, {
    name: 'Contact',
    path: '/contact'
  }];

  const handleLinkClick = () => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  };

  return <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0a192f]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
    <div className="container mx-auto px-2 sm:px-4 py-1 sm:py-1 md:py-2">
      <div className="flex items-center justify-between">


        <div className="flex-1 flex justify-start">
          <Link to="/" onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-2 sm:gap-3 touch-manipulation">
            <img
              src={cloudiLogo}
              alt="Cloudi Logo"
              className="h-12 sm:h-14 md:h-16 lg:h-20 xl:h-24 w-auto object-contain max-w-[160px] sm:max-w-[180px] md:max-w-[220px] lg:max-w-[260px]"
            />
          </Link>
        </div>

 
        <nav className="hidden md:flex flex-[2] justify-center space-x-2 md:space-x-3 lg:space-x-6 xl:space-x-8 items-center">
          {navigationItems.map(item => <Link key={item.name} to={item.path} onClick={() => window.scrollTo(0, 0)} className={`transition-colors duration-300 relative group text-xs md:text-sm lg:text-base xl:text-base py-2 px-1 md:px-2 touch-manipulation ${location.pathname === item.path ? 'text-teal-400' : 'text-white hover:text-teal-400'}`}>
            {item.name}
            <span className={`absolute -bottom-1 left-0 h-0.5 bg-teal-400 transition-all duration-300 ${location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
          </Link>)}
        </nav>

        <div className="flex-1 flex justify-end">
          <Link to="/contact" onClick={() => window.scrollTo(0, 0)} className="hidden md:block bg-gradient-to-r from-teal-500 to-blue-600 text-white px-2 md:px-3 lg:px-4 xl:px-6 py-2 rounded-full hover:shadow-lg hover:shadow-teal-500/25 transition-all duration-300 text-xs md:text-sm lg:text-sm xl:text-base min-h-[36px] md:min-h-[40px] flex items-center whitespace-nowrap touch-manipulation">
            Let's Talk
          </Link>

          <button className="md:hidden text-white p-3 hover:bg-white/10 rounded-lg transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center touch-manipulation" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {isOpen && <nav className="md:hidden mt-4 pb-4 space-y-2 bg-[#0a192f]/95 backdrop-blur-md rounded-lg p-4 -mx-4 sm:-mx-6 border border-white/10">
        {navigationItems.map(item => <Link key={item.name} to={item.path} onClick={handleLinkClick} className={`block w-full text-left transition-colors duration-300 py-3 px-3 rounded-lg hover:bg-white/5 min-h-[44px] flex items-center touch-manipulation ${location.pathname === item.path ? 'text-teal-400 bg-teal-400/10' : 'text-white hover:text-teal-400'}`}>
          {item.name}
        </Link>)}
        <Link to="/contact" onClick={handleLinkClick} className="w-full bg-gradient-to-r from-teal-500 to-blue-600 text-white px-6 py-3 rounded-full mt-4 block text-center text-sm font-semibold hover:shadow-lg hover:shadow-teal-500/25 transition-all duration-300 min-h-[44px] flex items-center justify-center touch-manipulation">
          Let's Talk
        </Link>
      </nav>}
    </div>
  </header>;
};

export default Header;
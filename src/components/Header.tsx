import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Phone, 
  MapPin, 
  ChevronDown, 
  Menu as MenuIcon, 
  X, 
  Send, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { COMPANY_INFO, PRODUCTS_LIST } from '../data/websiteData';
import { FacebookIcon, YoutubeIcon, InstagramIcon } from './SocialIcons';

interface HeaderProps {
  onOpenQuoteModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 shadow-2xl">
      
      {/* 1. TOP INFORMATION BAR */}
      <div className="bg-[#061322] text-white py-2 px-4 border-b border-white/10 text-xs hidden lg:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-2 text-gray-300 font-medium">
              <Sparkles className="w-3.5 h-3.5 text-[#00B8D9] animate-pulse" />
              <span>Welcome to {COMPANY_INFO.name}</span>
            </span>
            <span className="flex items-center space-x-2 text-gray-300 font-medium">
              <MapPin className="w-3.5 h-3.5 text-[#FFB703]" />
              <span>Udaipur, Rajasthan</span>
            </span>
          </div>

          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-3">
              <Phone className="w-3.5 h-3.5 text-[#00B8D9]" />
              <span className="text-gray-300 font-medium">Call Now:</span>
              <a href={`tel:${COMPANY_INFO.phones[0].raw}`} className="text-white hover:text-[#00B8D9] font-bold transition-colors">
                {COMPANY_INFO.phones[0].display}
              </a>
              <span className="text-gray-500">|</span>
              <a href={`tel:${COMPANY_INFO.phones[1].raw}`} className="text-white hover:text-[#00B8D9] font-bold transition-colors">
                {COMPANY_INFO.phones[1].display}
              </a>
            </div>

            <div className="flex items-center space-x-2.5 border-l border-white/20 pl-4">
              <a 
                href={COMPANY_INFO.socials.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#00B8D9] hover:text-[#0B1F35] transition-all text-white"
                title="Facebook"
              >
                <FacebookIcon className="w-3.5 h-3.5" />
              </a>
              <a 
                href={COMPANY_INFO.socials.youtube} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#00B8D9] hover:text-[#0B1F35] transition-all text-white"
                title="YouTube"
              >
                <YoutubeIcon className="w-3.5 h-3.5" />
              </a>
              <a 
                href={COMPANY_INFO.socials.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#00B8D9] hover:text-[#0B1F35] transition-all text-white"
                title="Instagram"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION BAR */}
      <nav 
        className={`w-full bg-[#0B1F35] border-b border-white/10 transition-all duration-300 ${
          isScrolled ? 'py-3 shadow-2xl' : 'py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-[#00B8D9] to-[#123B63] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform border border-white/20">
                <span className="font-poppins font-black text-white text-xl tracking-tighter">FTS</span>
              </div>
              <div className="flex flex-col">
                <span className="font-poppins font-black text-lg text-white leading-tight tracking-wide group-hover:text-[#00B8D9] transition-colors">
                  FUTURE TENSILE
                </span>
                <span className="text-[10px] text-gray-300 font-semibold tracking-wider uppercase">
                  Structure Pvt. Ltd.
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-8">
              
              <Link 
                to="/" 
                className={`font-poppins font-bold text-sm transition-colors py-2 relative ${
                  location.pathname === '/' ? 'text-[#00B8D9]' : 'text-white hover:text-[#00B8D9]'
                }`}
              >
                Home
                {location.pathname === '/' && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#00B8D9] rounded-full" />
                )}
              </Link>

              <Link 
                to="/about-us.htm" 
                className={`font-poppins font-bold text-sm transition-colors py-2 relative ${
                  location.pathname === '/about-us.htm' || location.pathname === '/about-us' ? 'text-[#00B8D9]' : 'text-white hover:text-[#00B8D9]'
                }`}
              >
                About Us
                {(location.pathname === '/about-us.htm' || location.pathname === '/about-us') && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#00B8D9] rounded-full" />
                )}
              </Link>

              {/* Products Mega Dropdown */}
              <div className="relative group py-2">
                <Link
                  to="/tensile-structure.htm"
                  className={`font-poppins font-bold text-sm flex items-center space-x-1.5 transition-colors ${
                    location.pathname.includes('tensile') ? 'text-[#00B8D9]' : 'text-white hover:text-[#00B8D9]'
                  }`}
                >
                  <span>Tensile Structure</span>
                  <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200 text-[#00B8D9]" />
                </Link>

                {/* Mega Menu Dropdown */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[760px] bg-[#0B1F35] border border-white/20 rounded-2xl shadow-2xl p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-1">
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#00B8D9] flex items-center space-x-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Explore Structural Categories (31 Items)</span>
                    </span>
                    <Link to="/tensile-structure.htm" className="text-xs text-[#FFB703] font-bold hover:underline flex items-center space-x-1">
                      <span>View All Products</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  <div className="grid grid-cols-3 gap-x-4 gap-y-2 max-h-[360px] overflow-y-auto pr-2 custom-scrollbar">
                    {PRODUCTS_LIST.map((prod) => (
                      <Link
                        key={prod.id}
                        to={`/${prod.slug}.htm`}
                        className="text-xs text-gray-200 hover:text-[#00B8D9] hover:bg-white/10 px-2.5 py-1.5 rounded-lg transition-colors flex items-center space-x-2 truncate font-medium"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00B8D9] flex-shrink-0" />
                        <span className="truncate">{prod.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link 
                to="/projects.htm" 
                className={`font-poppins font-bold text-sm transition-colors py-2 relative ${
                  location.pathname === '/projects.htm' || location.pathname === '/projects' ? 'text-[#00B8D9]' : 'text-white hover:text-[#00B8D9]'
                }`}
              >
                Projects
                {(location.pathname === '/projects.htm' || location.pathname === '/projects') && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#00B8D9] rounded-full" />
                )}
              </Link>

              <Link 
                to="/blogs.htm" 
                className={`font-poppins font-bold text-sm transition-colors py-2 relative ${
                  location.pathname === '/blogs.htm' || location.pathname === '/blogs' ? 'text-[#00B8D9]' : 'text-white hover:text-[#00B8D9]'
                }`}
              >
                Blogs
                {(location.pathname === '/blogs.htm' || location.pathname === '/blogs') && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#00B8D9] rounded-full" />
                )}
              </Link>

              <Link 
                to="/contact-us.htm" 
                className={`font-poppins font-bold text-sm transition-colors py-2 relative ${
                  location.pathname === '/contact-us.htm' || location.pathname === '/contact-us' ? 'text-[#00B8D9]' : 'text-white hover:text-[#00B8D9]'
                }`}
              >
                Contact Us
                {(location.pathname === '/contact-us.htm' || location.pathname === '/contact-us') && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#00B8D9] rounded-full" />
                )}
              </Link>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <button
                onClick={onOpenQuoteModal}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#00B8D9] via-[#123B63] to-[#FFB703] text-white font-poppins font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition-transform flex items-center space-x-2 border border-white/20"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Get A Quote</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl bg-white/10 text-white hover:text-[#00B8D9] focus:outline-none border border-white/20"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0B1F35] border-t border-white/10 px-4 pt-4 pb-6 mt-3 space-y-3 max-h-[85vh] overflow-y-auto">
            <Link
              to="/"
              className="block px-3 py-2 rounded-lg text-base font-bold text-white hover:bg-white/10 hover:text-[#00B8D9]"
            >
              Home
            </Link>

            <Link
              to="/about-us.htm"
              className="block px-3 py-2 rounded-lg text-base font-bold text-white hover:bg-white/10 hover:text-[#00B8D9]"
            >
              About Us
            </Link>

            <div>
              <button
                onClick={() => setMobileSubmenuOpen(!mobileSubmenuOpen)}
                className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-base font-bold text-white hover:bg-white/10 hover:text-[#00B8D9]"
              >
                <span>Tensile Structure</span>
                <ChevronDown className={`w-4 h-4 text-[#00B8D9] transform transition-transform ${mobileSubmenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {mobileSubmenuOpen && (
                <div className="pl-4 pr-2 py-2 space-y-1 bg-black/40 rounded-xl mt-1 max-h-[240px] overflow-y-auto border border-white/10">
                  {PRODUCTS_LIST.map((prod) => (
                    <Link
                      key={prod.id}
                      to={`/${prod.slug}.htm`}
                      className="block px-3 py-1.5 text-xs text-gray-200 hover:text-[#00B8D9] font-medium truncate"
                    >
                      • {prod.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/projects.htm"
              className="block px-3 py-2 rounded-lg text-base font-bold text-white hover:bg-white/10 hover:text-[#00B8D9]"
            >
              Projects
            </Link>

            <Link
              to="/blogs.htm"
              className="block px-3 py-2 rounded-lg text-base font-bold text-white hover:bg-white/10 hover:text-[#00B8D9]"
            >
              Blogs
            </Link>

            <Link
              to="/contact-us.htm"
              className="block px-3 py-2 rounded-lg text-base font-bold text-white hover:bg-white/10 hover:text-[#00B8D9]"
            >
              Contact Us
            </Link>

            <div className="pt-4 border-t border-white/10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full py-3 bg-gradient-to-r from-[#00B8D9] to-[#123B63] text-white font-bold rounded-xl text-center shadow-lg flex items-center justify-center space-x-2 border border-white/20"
              >
                <Send className="w-4 h-4" />
                <span>Get A Quote</span>
              </button>
            </div>
          </div>
        )}
      </nav>

    </header>
  );
};

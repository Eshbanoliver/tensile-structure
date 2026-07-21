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
      if (window.scrollY > 40) {
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
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      <div className="bg-primary text-white py-2 px-4 border-b border-white/10 text-xs hidden lg:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-2 text-gray-300">
              <Sparkles className="w-3.5 h-3.5 text-accent animate-pulse" />
              <span>Welcome to {COMPANY_INFO.name}</span>
            </span>
            <span className="flex items-center space-x-2 text-gray-300">
              <MapPin className="w-3.5 h-3.5 text-highlight" />
              <span>Udaipur, Rajasthan</span>
            </span>
          </div>

          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-3">
              <Phone className="w-3.5 h-3.5 text-accent" />
              <span className="font-medium">Call Now:</span>
              <a href={`tel:${COMPANY_INFO.phones[0].raw}`} className="hover:text-accent transition-colors font-semibold">
                {COMPANY_INFO.phones[0].display}
              </a>
              <span>|</span>
              <a href={`tel:${COMPANY_INFO.phones[1].raw}`} className="hover:text-accent transition-colors font-semibold">
                {COMPANY_INFO.phones[1].display}
              </a>
            </div>

            <div className="flex items-center space-x-3 border-l border-white/20 pl-4">
              <a 
                href={COMPANY_INFO.socials.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-all text-gray-200"
                title="Facebook"
              >
                <FacebookIcon className="w-3.5 h-3.5" />
              </a>
              <a 
                href={COMPANY_INFO.socials.youtube} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-all text-gray-200"
                title="YouTube"
              >
                <YoutubeIcon className="w-3.5 h-3.5" />
              </a>
              <a 
                href={COMPANY_INFO.socials.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-all text-gray-200"
                title="Instagram"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <nav 
        className={`w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-primary/95 backdrop-blur-md shadow-xl py-3 border-b border-white/10' 
            : 'bg-primary/80 backdrop-blur-sm py-4 border-b border-white/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-accent to-secondary flex items-center justify-center shadow-glow-accent group-hover:scale-105 transition-transform">
                <span className="font-poppins font-black text-white text-xl tracking-tighter">FTS</span>
              </div>
              <div className="flex flex-col">
                <span className="font-poppins font-bold text-lg text-white leading-tight tracking-wide group-hover:text-accent transition-colors">
                  FUTURE TENSILE
                </span>
                <span className="text-[10px] text-gray-300 font-medium tracking-wider uppercase">
                  Structure Pvt. Ltd.
                </span>
              </div>
            </Link>

            <div className="hidden lg:flex items-center space-x-8">
              <Link 
                to="/" 
                className={`font-medium text-sm transition-colors py-2 relative ${
                  location.pathname === '/' ? 'text-accent font-semibold' : 'text-gray-200 hover:text-accent'
                }`}
              >
                Home
                {location.pathname === '/' && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent rounded-full" />
                )}
              </Link>

              <Link 
                to="/about-us.htm" 
                className={`font-medium text-sm transition-colors py-2 relative ${
                  location.pathname === '/about-us.htm' ? 'text-accent font-semibold' : 'text-gray-200 hover:text-accent'
                }`}
              >
                About Us
                {location.pathname === '/about-us.htm' && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent rounded-full" />
                )}
              </Link>

              <div className="relative group py-2">
                <Link
                  to="/tensile-structure.htm"
                  className={`font-medium text-sm flex items-center space-x-1.5 transition-colors ${
                    location.pathname.includes('tensile') ? 'text-accent font-semibold' : 'text-gray-200 hover:text-accent'
                  }`}
                >
                  <span>Tensile Structure</span>
                  <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
                </Link>

                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[720px] bg-primary/95 backdrop-blur-xl border border-white/15 rounded-2xl shadow-2xl p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-1">
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                    <span className="text-xs font-semibold uppercase tracking-wider text-accent flex items-center space-x-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Explore Structural Categories (31 Items)</span>
                    </span>
                    <Link to="/tensile-structure.htm" className="text-xs text-highlight hover:underline flex items-center space-x-1">
                      <span>View All Products</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>

                  <div className="grid grid-cols-3 gap-x-4 gap-y-2 max-h-[360px] overflow-y-auto pr-2 custom-scrollbar">
                    {PRODUCTS_LIST.map((prod) => (
                      <Link
                        key={prod.id}
                        to={`/${prod.slug}.htm`}
                        className="text-xs text-gray-300 hover:text-accent hover:bg-white/5 px-2.5 py-1.5 rounded-lg transition-colors flex items-center space-x-2 truncate"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/60 flex-shrink-0" />
                        <span className="truncate">{prod.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link 
                to="/projects.htm" 
                className={`font-medium text-sm transition-colors py-2 relative ${
                  location.pathname === '/projects.htm' ? 'text-accent font-semibold' : 'text-gray-200 hover:text-accent'
                }`}
              >
                Projects
                {location.pathname === '/projects.htm' && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent rounded-full" />
                )}
              </Link>

              <Link 
                to="/blogs.htm" 
                className={`font-medium text-sm transition-colors py-2 relative ${
                  location.pathname === '/blogs.htm' ? 'text-accent font-semibold' : 'text-gray-200 hover:text-accent'
                }`}
              >
                Blogs
                {location.pathname === '/blogs.htm' && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent rounded-full" />
                )}
              </Link>

              <Link 
                to="/contact-us.htm" 
                className={`font-medium text-sm transition-colors py-2 relative ${
                  location.pathname === '/contact-us.htm' ? 'text-accent font-semibold' : 'text-gray-200 hover:text-accent'
                }`}
              >
                Contact Us
                {location.pathname === '/contact-us.htm' && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent rounded-full" />
                )}
              </Link>
            </div>

            <div className="hidden lg:flex items-center space-x-4">
              <button
                onClick={onOpenQuoteModal}
                className="relative inline-flex items-center justify-center p-0.5 overflow-hidden font-medium text-xs rounded-xl group bg-gradient-to-br from-accent via-secondary to-highlight hover:text-white text-white shadow-glow-accent transition-all duration-300 hover:scale-105"
              >
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-primary/80 rounded-[10px] group-hover:bg-opacity-0 flex items-center space-x-2">
                  <Send className="w-3.5 h-3.5 text-accent group-hover:text-white transition-colors" />
                  <span className="font-semibold tracking-wide uppercase">Get A Quote</span>
                </span>
              </button>
            </div>

            <div className="flex lg:hidden items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl bg-white/10 text-white hover:text-accent focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-primary/98 backdrop-blur-xl border-t border-white/10 px-4 pt-4 pb-6 mt-3 space-y-3 max-h-[85vh] overflow-y-auto">
            <Link
              to="/"
              className="block px-3 py-2 rounded-lg text-base font-medium text-white hover:bg-white/10 hover:text-accent"
            >
              Home
            </Link>

            <Link
              to="/about-us.htm"
              className="block px-3 py-2 rounded-lg text-base font-medium text-white hover:bg-white/10 hover:text-accent"
            >
              About Us
            </Link>

            <div>
              <button
                onClick={() => setMobileSubmenuOpen(!mobileSubmenuOpen)}
                className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-base font-medium text-white hover:bg-white/10 hover:text-accent"
              >
                <span>Tensile Structure</span>
                <ChevronDown className={`w-4 h-4 transform transition-transform ${mobileSubmenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {mobileSubmenuOpen && (
                <div className="pl-4 pr-2 py-2 space-y-1 bg-black/20 rounded-xl mt-1 max-h-[240px] overflow-y-auto">
                  {PRODUCTS_LIST.map((prod) => (
                    <Link
                      key={prod.id}
                      to={`/${prod.slug}.htm`}
                      className="block px-3 py-1.5 text-xs text-gray-300 hover:text-accent truncate"
                    >
                      • {prod.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/projects.htm"
              className="block px-3 py-2 rounded-lg text-base font-medium text-white hover:bg-white/10 hover:text-accent"
            >
              Projects
            </Link>

            <Link
              to="/blogs.htm"
              className="block px-3 py-2 rounded-lg text-base font-medium text-white hover:bg-white/10 hover:text-accent"
            >
              Blogs
            </Link>

            <Link
              to="/contact-us.htm"
              className="block px-3 py-2 rounded-lg text-base font-medium text-white hover:bg-white/10 hover:text-accent"
            >
              Contact Us
            </Link>

            <div className="pt-4 border-t border-white/10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full py-3 bg-gradient-to-r from-accent to-secondary text-white font-semibold rounded-xl text-center shadow-lg flex items-center justify-center space-x-2"
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

import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Award, 
  Sparkles, 
  MapPin, 
  Phone, 
  MessageCircle, 
  Clock, 
  ArrowRight
} from 'lucide-react';
import { COMPANY_INFO, PRODUCTS_LIST } from '../data/websiteData';
import { FacebookIcon, YoutubeIcon, InstagramIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-6 relative overflow-hidden border-t border-white/10">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-12 mb-12 border-b border-white/10">
          <div className="flex items-start space-x-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-accent/30 transition-all">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-poppins font-bold text-sm text-white mb-1">End-to-End Solutions</h4>
              <p className="text-xs text-gray-300 leading-relaxed">
                We handle design, fabrication, and flawless installation seamlessly.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-accent/30 transition-all">
            <div className="w-12 h-12 rounded-xl bg-highlight/10 flex items-center justify-center text-highlight flex-shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-poppins font-bold text-sm text-white mb-1">Premium Materials</h4>
              <p className="text-xs text-gray-300 leading-relaxed">
                We use high-grade, weather-resistant fabrics for maximum durability.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-accent/30 transition-all">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-poppins font-bold text-sm text-white mb-1">Innovative Designs</h4>
              <p className="text-xs text-gray-300 leading-relaxed">
                We craft stunning, custom architectural forms for every space.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-accent/30 transition-all">
            <div className="w-12 h-12 rounded-xl bg-secondary/30 flex items-center justify-center text-accent flex-shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-poppins font-bold text-sm text-white mb-1">Pan-India Service</h4>
              <p className="text-xs text-gray-300 leading-relaxed">
                We deliver timely, expert execution across all Indian states.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-white/10">
          <div className="lg:col-span-3 space-y-4">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-accent to-secondary flex items-center justify-center">
                <span className="font-poppins font-black text-white text-lg">FTS</span>
              </div>
              <div>
                <span className="font-poppins font-bold text-base text-white block leading-none">
                  FUTURE TENSILE
                </span>
                <span className="text-[9px] text-accent font-semibold tracking-wider uppercase">
                  Structure Pvt. Ltd.
                </span>
              </div>
            </Link>

            <p className="text-xs text-gray-300 leading-relaxed">
              Future Tensile Structure Pvt. Ltd. is a premier manufacturer and supplier of top tensile structure solutions based in Udaipur, Rajasthan. Transforming commercial and architectural spaces since 2010.
            </p>

            <div className="pt-2">
              <span className="text-xs font-semibold text-accent uppercase tracking-wider block mb-3">Follow Us</span>
              <div className="flex items-center space-x-3">
                <a 
                  href={COMPANY_INFO.socials.facebook} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-gray-300 hover:bg-accent hover:text-primary transition-all"
                  title="Facebook"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
                <a 
                  href={COMPANY_INFO.socials.youtube} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-gray-300 hover:bg-accent hover:text-primary transition-all"
                  title="YouTube"
                >
                  <YoutubeIcon className="w-4 h-4" />
                </a>
                <a 
                  href={COMPANY_INFO.socials.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-gray-300 hover:bg-accent hover:text-primary transition-all"
                  title="Instagram"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-poppins font-bold text-sm text-white uppercase tracking-wider flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span>Useful Links</span>
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-300">
              <li>
                <Link to="/about-us.htm" className="hover:text-accent transition-colors flex items-center space-x-1.5">
                  <ArrowRight className="w-3 h-3 text-accent" />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link to="/blogs.htm" className="hover:text-accent transition-colors flex items-center space-x-1.5">
                  <ArrowRight className="w-3 h-3 text-accent" />
                  <span>Blogs</span>
                </Link>
              </li>
              <li>
                <Link to="/contact-us.htm" className="hover:text-accent transition-colors flex items-center space-x-1.5">
                  <ArrowRight className="w-3 h-3 text-accent" />
                  <span>Contact Us</span>
                </Link>
              </li>
              <li>
                <Link to="/sitemap.htm" className="hover:text-accent transition-colors flex items-center space-x-1.5">
                  <ArrowRight className="w-3 h-3 text-accent" />
                  <span>Sitemap</span>
                </Link>
              </li>
              <li>
                <Link to="/tensile-structure.htm" className="hover:text-accent transition-colors flex items-center space-x-1.5">
                  <ArrowRight className="w-3 h-3 text-accent" />
                  <span>Market Area</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-poppins font-bold text-sm text-white uppercase tracking-wider flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span>Tensile Structure Solutions</span>
            </h4>
            <div className="grid grid-cols-2 gap-x-3 gap-y-2 text-xs text-gray-300">
              {PRODUCTS_LIST.slice(0, 14).map((prod) => (
                <Link 
                  key={prod.id} 
                  to={`/${prod.slug}.htm`}
                  className="hover:text-accent transition-colors truncate block"
                >
                  • {prod.name}
                </Link>
              ))}
              <Link 
                to="/tensile-structure.htm" 
                className="text-highlight font-semibold hover:underline flex items-center space-x-1 col-span-2 pt-1"
              >
                <span>View All 31 Categories</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-poppins font-bold text-sm text-white uppercase tracking-wider flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span>Contact Info</span>
            </h4>
            
            <div className="space-y-3 text-xs text-gray-300">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">{COMPANY_INFO.address}</span>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                <div>
                  <a href={`tel:${COMPANY_INFO.phones[0].raw}`} className="hover:text-accent transition-colors block">
                    {COMPANY_INFO.phones[0].display}
                  </a>
                  <a href={`tel:${COMPANY_INFO.phones[1].raw}`} className="hover:text-accent transition-colors block">
                    {COMPANY_INFO.phones[1].display}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <MessageCircle className="w-4 h-4 text-accent flex-shrink-0" />
                <span>
                  WhatsApp: {' '}
                  <a 
                    href={`https://wa.me/${COMPANY_INFO.whatsapp}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-accent font-semibold text-white"
                  >
                    {COMPANY_INFO.phones[0].display}
                  </a>
                </span>
              </div>

              <div className="flex items-center space-x-3 pt-1">
                <Clock className="w-4 h-4 text-highlight flex-shrink-0" />
                <span className="text-gray-300">{COMPANY_INFO.hours}</span>
              </div>
            </div>
          </div>

        </div>

        <div className="pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400">
          <p>© 2026 {COMPANY_INFO.name}. All Rights Reserved.</p>
          <p className="mt-2 md:mt-0">
            Top Tensile Structure Manufacturers in Udaipur, Rajasthan, India
          </p>
        </div>

      </div>
    </footer>
  );
};

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Award, 
  Sparkles, 
  MapPin, 
  Phone, 
  MessageCircle, 
  Clock, 
  ArrowRight,
  Send,
  CheckCircle2
} from 'lucide-react';
import { COMPANY_INFO, PRODUCTS_LIST } from '../data/websiteData';
import { FacebookIcon, YoutubeIcon, InstagramIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  const [emailSub, setEmailSub] = useState('');
  const [subDone, setSubDone] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubDone(true);
    setTimeout(() => {
      setSubDone(false);
      setEmailSub('');
    }, 3000);
  };

  return (
    <footer className="bg-[#F8FAFC] text-[#0B1F35] pt-16 pb-6 relative overflow-hidden border-t border-gray-200">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 1. LIGHT VALUE PROPS CARDS STRIP */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-12 mb-12 border-b border-gray-200">
          
          <div className="p-5 rounded-2xl bg-white border border-gray-200 shadow-md hover:shadow-xl hover:border-[#00B8D9] transition-all hover:-translate-y-1 flex items-start space-x-4 group">
            <div className="w-12 h-12 rounded-xl bg-[#00B8D9]/10 text-[#00B8D9] flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform flex-shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-poppins font-bold text-sm text-[#0B1F35] mb-1 group-hover:text-[#00B8D9] transition-colors">End-to-End Solutions</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Design, fabrication, and site installation executed seamlessly.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-gray-200 shadow-md hover:shadow-xl hover:border-[#FFB703] transition-all hover:-translate-y-1 flex items-start space-x-4 group">
            <div className="w-12 h-12 rounded-xl bg-[#FFB703]/15 text-[#FFB703] flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform flex-shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-poppins font-bold text-sm text-[#0B1F35] mb-1 group-hover:text-[#FFB703] transition-colors">Premium Materials</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                PVDF & PTFE weather-resistant fabrics for 15-30 yrs durability.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-gray-200 shadow-md hover:shadow-xl hover:border-[#d946ef] transition-all hover:-translate-y-1 flex items-start space-x-4 group">
            <div className="w-12 h-12 rounded-xl bg-[#d946ef]/10 text-[#d946ef] flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform flex-shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-poppins font-bold text-sm text-[#0B1F35] mb-1 group-hover:text-[#d946ef] transition-colors">Innovative CAD Designs</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Stunning, custom 3D architectural forms tailored to your site.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-gray-200 shadow-md hover:shadow-xl hover:border-[#10b981] transition-all hover:-translate-y-1 flex items-start space-x-4 group">
            <div className="w-12 h-12 rounded-xl bg-[#10b981]/10 text-[#10b981] flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform flex-shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-poppins font-bold text-sm text-[#0B1F35] mb-1 group-hover:text-[#10b981] transition-colors">Pan-India Service</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Timely, expert site installation across 300+ Indian cities.
              </p>
            </div>
          </div>

        </div>

        {/* 2. DATASHEET REQUEST STRIP */}
        <div className="mb-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0B1F35] via-[#123B63] to-[#0B1F35] text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-poppins font-bold text-base text-white flex items-center justify-center md:justify-start space-x-2">
              <Sparkles className="w-4 h-4 text-[#FFB703]" />
              <span>Get Architectural Specs & Price Brochure</span>
            </h4>
            <p className="text-xs text-gray-200">Enter your email to receive direct technical PDF datasheets.</p>
          </div>

          {subDone ? (
            <div className="flex items-center space-x-2 text-[#00B8D9] font-bold text-xs bg-white/10 px-4 py-2.5 rounded-xl border border-white/20">
              <CheckCircle2 className="w-4 h-4 text-[#00B8D9]" />
              <span>Datasheet request received! Check inbox soon.</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex items-center w-full md:w-auto max-w-md">
              <input
                type="email"
                required
                placeholder="Enter Email Address..."
                value={emailSub}
                onChange={(e) => setEmailSub(e.target.value)}
                className="w-full px-4 py-2.5 rounded-l-xl bg-white/10 border border-white/20 text-xs text-white placeholder-gray-300 focus:outline-none focus:border-[#00B8D9]"
              />
              <button
                type="submit"
                className="px-5 py-2.5 rounded-r-xl bg-[#00B8D9] text-[#0B1F35] font-poppins font-bold text-xs uppercase tracking-wider hover:bg-white transition-colors flex items-center space-x-1 flex-shrink-0"
              >
                <span>Subscribe</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
        </div>

        {/* 3. MAIN FOOTER CONTENT COLUMNS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-gray-200">
          
          {/* Column 1: Company Profile & Socials */}
          <div className="lg:col-span-3 space-y-4">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-11 h-11 rounded-xl bg-[#0B1F35] flex items-center justify-center shadow-md border border-gray-200">
                <span className="font-poppins font-black text-[#00B8D9] text-lg">FTS</span>
              </div>
              <div>
                <span className="font-poppins font-black text-base text-[#0B1F35] block leading-none group-hover:text-[#00B8D9] transition-colors">
                  FUTURE TENSILE
                </span>
                <span className="text-[9px] text-gray-500 font-bold tracking-wider uppercase">
                  Structure Pvt. Ltd.
                </span>
              </div>
            </Link>

            <p className="text-xs text-gray-600 leading-relaxed">
              Future Tensile Structure Pvt. Ltd. is a premier manufacturer and supplier of top tensile structure solutions based in Udaipur, Rajasthan. Transforming commercial and architectural spaces since 2010.
            </p>

            <div className="pt-2">
              <span className="text-xs font-bold text-[#0B1F35] uppercase tracking-wider block mb-3">Connect With Us</span>
              <div className="flex items-center space-x-3">
                <a 
                  href={COMPANY_INFO.socials.facebook} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-[#00B8D9] hover:text-[#0B1F35] transition-all shadow-sm"
                  title="Facebook"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
                <a 
                  href={COMPANY_INFO.socials.youtube} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-[#FF0000] hover:text-white transition-all shadow-sm"
                  title="YouTube"
                >
                  <YoutubeIcon className="w-4 h-4" />
                </a>
                <a 
                  href={COMPANY_INFO.socials.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-[#E4405F] hover:text-white transition-all shadow-sm"
                  title="Instagram"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Useful Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-poppins font-bold text-sm text-[#0B1F35] uppercase tracking-wider flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-[#00B8D9]" />
              <span>Useful Links</span>
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-600 font-semibold">
              <li>
                <Link to="/about-us.htm" className="hover:text-[#00B8D9] transition-colors flex items-center space-x-1.5">
                  <ArrowRight className="w-3 h-3 text-[#00B8D9]" />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link to="/blogs.htm" className="hover:text-[#00B8D9] transition-colors flex items-center space-x-1.5">
                  <ArrowRight className="w-3 h-3 text-[#00B8D9]" />
                  <span>Blogs</span>
                </Link>
              </li>
              <li>
                <Link to="/contact-us.htm" className="hover:text-[#00B8D9] transition-colors flex items-center space-x-1.5">
                  <ArrowRight className="w-3 h-3 text-[#00B8D9]" />
                  <span>Contact Us</span>
                </Link>
              </li>
              <li>
                <Link to="/sitemap.htm" className="hover:text-[#00B8D9] transition-colors flex items-center space-x-1.5">
                  <ArrowRight className="w-3 h-3 text-[#00B8D9]" />
                  <span>Sitemap</span>
                </Link>
              </li>
              <li>
                <Link to="/tensile-structure.htm" className="hover:text-[#00B8D9] transition-colors flex items-center space-x-1.5">
                  <ArrowRight className="w-3 h-3 text-[#00B8D9]" />
                  <span>Market Area</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Tensile Categories Grid */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-poppins font-bold text-sm text-[#0B1F35] uppercase tracking-wider flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-[#00B8D9]" />
              <span>Tensile Structure Solutions</span>
            </h4>
            <div className="grid grid-cols-2 gap-x-3 gap-y-2 text-xs text-gray-600 font-medium">
              {PRODUCTS_LIST.slice(0, 14).map((prod) => (
                <Link 
                  key={prod.id} 
                  to={`/${prod.slug}.htm`}
                  className="hover:text-[#00B8D9] transition-colors truncate block"
                >
                  • {prod.name}
                </Link>
              ))}
              <Link 
                to="/tensile-structure.htm" 
                className="text-[#123B63] font-bold hover:text-[#00B8D9] hover:underline flex items-center space-x-1 col-span-2 pt-1"
              >
                <span>View All 31 Categories</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Column 4: Contact Info Block */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-poppins font-bold text-sm text-[#0B1F35] uppercase tracking-wider flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-[#00B8D9]" />
              <span>Contact Info</span>
            </h4>
            
            <div className="space-y-3 text-xs text-gray-600">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[#00B8D9] flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed text-gray-700">{COMPANY_INFO.address}</span>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 text-[#00B8D9] flex-shrink-0 mt-0.5" />
                <div>
                  <a href={`tel:${COMPANY_INFO.phones[0].raw}`} className="hover:text-[#00B8D9] transition-colors block font-bold text-[#0B1F35]">
                    {COMPANY_INFO.phones[0].display}
                  </a>
                  <a href={`tel:${COMPANY_INFO.phones[1].raw}`} className="hover:text-[#00B8D9] transition-colors block font-bold text-[#0B1F35]">
                    {COMPANY_INFO.phones[1].display}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <MessageCircle className="w-4 h-4 text-[#25D366] flex-shrink-0" />
                <span>
                  WhatsApp: {' '}
                  <a 
                    href={`https://wa.me/${COMPANY_INFO.whatsapp}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-[#00B8D9] font-bold text-[#0B1F35]"
                  >
                    {COMPANY_INFO.phones[0].display}
                  </a>
                </span>
              </div>

              <div className="flex items-center space-x-3 pt-1">
                <Clock className="w-4 h-4 text-[#FFB703] flex-shrink-0" />
                <span className="text-gray-600">{COMPANY_INFO.hours}</span>
              </div>
            </div>
          </div>

        </div>

        {/* 4. BOTTOM LIGHT COPYRIGHT BAR */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 font-medium">
          <p>© 2026 {COMPANY_INFO.name}. All Rights Reserved.</p>
          <p className="mt-2 md:mt-0 text-[#0B1F35] font-semibold">
            Top Tensile Structure Manufacturers in Udaipur, Rajasthan, India
          </p>
        </div>

      </div>
    </footer>
  );
};

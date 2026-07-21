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
    <footer className="bg-[#061322] text-white pt-16 pb-6 relative overflow-hidden border-t border-white/10">
      
      {/* Background Decorative Glow Blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00B8D9]/10 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FFB703]/10 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 1. TOP CREATIVE VALUE PROPS STRIP (4 MULTI-COLORED CARDS) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-12 mb-12 border-b border-white/10">
          
          <div className="p-5 rounded-2xl bg-[#0B1F35] border border-[#00B8D9]/30 hover:border-[#00B8D9] transition-all shadow-xl hover:-translate-y-1 flex items-start space-x-4 group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#00B8D9] to-[#008BA4] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform flex-shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-poppins font-bold text-sm text-white mb-1 group-hover:text-[#00B8D9] transition-colors">End-to-End Solutions</h4>
              <p className="text-xs text-gray-300 leading-relaxed">
                Design, fabrication, and site installation executed seamlessly.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[#0B1F35] border border-[#FFB703]/30 hover:border-[#FFB703] transition-all shadow-xl hover:-translate-y-1 flex items-start space-x-4 group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#FFB703] to-[#d97706] text-[#0B1F35] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform flex-shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-poppins font-bold text-sm text-white mb-1 group-hover:text-[#FFB703] transition-colors">Premium Materials</h4>
              <p className="text-xs text-gray-300 leading-relaxed">
                PVDF & PTFE weather-resistant fabrics for 15-30 yrs durability.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[#0B1F35] border border-[#d946ef]/30 hover:border-[#d946ef] transition-all shadow-xl hover:-translate-y-1 flex items-start space-x-4 group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#d946ef] to-[#a21caf] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform flex-shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-poppins font-bold text-sm text-white mb-1 group-hover:text-[#d946ef] transition-colors">Innovative CAD Designs</h4>
              <p className="text-xs text-gray-300 leading-relaxed">
                Stunning, custom 3D architectural forms tailored to your site.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[#0B1F35] border border-[#10b981]/30 hover:border-[#10b981] transition-all shadow-xl hover:-translate-y-1 flex items-start space-x-4 group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#10b981] to-[#047857] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform flex-shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-poppins font-bold text-sm text-white mb-1 group-hover:text-[#10b981] transition-colors">Pan-India Service</h4>
              <p className="text-xs text-gray-300 leading-relaxed">
                Timely, expert site installation across 300+ Indian cities.
              </p>
            </div>
          </div>

        </div>

        {/* 2. CREATIVE NEWSLETTER / CATALOG SPEC INPUT STRIP */}
        <div className="mb-12 p-6 rounded-3xl bg-gradient-to-r from-[#0B1F35] via-[#102947] to-[#0B1F35] border border-white/15 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-poppins font-bold text-base text-white flex items-center justify-center md:justify-start space-x-2">
              <Sparkles className="w-4 h-4 text-[#00B8D9]" />
              <span>Get Architectural Specs & Price Brochure</span>
            </h4>
            <p className="text-xs text-gray-300">Enter your email to receive direct technical PDF datasheets.</p>
          </div>

          {subDone ? (
            <div className="flex items-center space-x-2 text-[#00B8D9] font-bold text-xs bg-[#00B8D9]/10 px-4 py-2.5 rounded-xl border border-[#00B8D9]/30">
              <CheckCircle2 className="w-4 h-4" />
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
                className="w-full px-4 py-2.5 rounded-l-xl bg-white/10 border border-white/20 text-xs text-white placeholder-gray-400 focus:outline-none focus:border-[#00B8D9]"
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-white/10">
          
          {/* Column 1: Company Profile & Socials */}
          <div className="lg:col-span-3 space-y-4">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-[#00B8D9] to-[#123B63] flex items-center justify-center shadow-lg border border-white/20">
                <span className="font-poppins font-black text-white text-lg">FTS</span>
              </div>
              <div>
                <span className="font-poppins font-bold text-base text-white block leading-none group-hover:text-[#00B8D9] transition-colors">
                  FUTURE TENSILE
                </span>
                <span className="text-[9px] text-[#00B8D9] font-bold tracking-wider uppercase">
                  Structure Pvt. Ltd.
                </span>
              </div>
            </Link>

            <p className="text-xs text-gray-300 leading-relaxed">
              Future Tensile Structure Pvt. Ltd. is a premier manufacturer and supplier of top tensile structure solutions based in Udaipur, Rajasthan. Transforming commercial and architectural spaces since 2010.
            </p>

            <div className="pt-2">
              <span className="text-xs font-bold text-[#00B8D9] uppercase tracking-wider block mb-3">Connect With Us</span>
              <div className="flex items-center space-x-3">
                <a 
                  href={COMPANY_INFO.socials.facebook} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-gray-200 hover:bg-[#00B8D9] hover:text-[#0B1F35] transition-all shadow-md"
                  title="Facebook"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
                <a 
                  href={COMPANY_INFO.socials.youtube} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-gray-200 hover:bg-[#FF0000] hover:text-white transition-all shadow-md"
                  title="YouTube"
                >
                  <YoutubeIcon className="w-4 h-4" />
                </a>
                <a 
                  href={COMPANY_INFO.socials.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-gray-200 hover:bg-[#E4405F] hover:text-white transition-all shadow-md"
                  title="Instagram"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Useful Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-poppins font-bold text-sm text-white uppercase tracking-wider flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-[#00B8D9]" />
              <span>Useful Links</span>
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-300 font-medium">
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
            <h4 className="font-poppins font-bold text-sm text-white uppercase tracking-wider flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-[#00B8D9]" />
              <span>Tensile Structure Solutions</span>
            </h4>
            <div className="grid grid-cols-2 gap-x-3 gap-y-2 text-xs text-gray-300 font-medium">
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
                className="text-[#FFB703] font-bold hover:underline flex items-center space-x-1 col-span-2 pt-1"
              >
                <span>View All 31 Categories</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Column 4: Contact Info Block */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-poppins font-bold text-sm text-white uppercase tracking-wider flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-[#00B8D9]" />
              <span>Contact Info</span>
            </h4>
            
            <div className="space-y-3 text-xs text-gray-300">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[#00B8D9] flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">{COMPANY_INFO.address}</span>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 text-[#00B8D9] flex-shrink-0 mt-0.5" />
                <div>
                  <a href={`tel:${COMPANY_INFO.phones[0].raw}`} className="hover:text-[#00B8D9] transition-colors block font-semibold text-white">
                    {COMPANY_INFO.phones[0].display}
                  </a>
                  <a href={`tel:${COMPANY_INFO.phones[1].raw}`} className="hover:text-[#00B8D9] transition-colors block font-semibold text-white">
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
                    className="hover:text-[#00B8D9] font-bold text-white"
                  >
                    {COMPANY_INFO.phones[0].display}
                  </a>
                </span>
              </div>

              <div className="flex items-center space-x-3 pt-1">
                <Clock className="w-4 h-4 text-[#FFB703] flex-shrink-0" />
                <span className="text-gray-300">{COMPANY_INFO.hours}</span>
              </div>
            </div>
          </div>

        </div>

        {/* 4. BOTTOM COPYRIGHT BAR */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 font-medium">
          <p>© 2026 {COMPANY_INFO.name}. All Rights Reserved.</p>
          <p className="mt-2 md:mt-0 text-[#00B8D9]/80">
            Top Tensile Structure Manufacturers in Udaipur, Rajasthan, India
          </p>
        </div>

      </div>
    </footer>
  );
};

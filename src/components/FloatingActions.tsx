import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ArrowUp, Send } from 'lucide-react';
import { COMPANY_INFO } from '../data/websiteData';

interface FloatingActionsProps {
  onOpenEnquiryModal: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenEnquiryModal }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3 items-end">
      
      {/* Scroll to Top Trigger */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="w-12 h-12 rounded-full bg-primary/90 text-accent border border-accent/40 shadow-glow-accent flex items-center justify-center hover:bg-accent hover:text-primary transition-all duration-300 transform hover:scale-110"
          title="Go to Top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Floating Send Enquiry Button */}
      <button
        onClick={onOpenEnquiryModal}
        className="px-4 py-2.5 rounded-full bg-gradient-to-r from-secondary to-primary text-white border border-accent/40 shadow-xl flex items-center space-x-2 text-xs font-semibold hover:scale-105 transition-transform"
        title="Send Enquiry"
      >
        <Send className="w-4 h-4 text-accent animate-bounce" />
        <span className="hidden sm:inline">Send Enquiry</span>
      </button>

      {/* Floating Call Button */}
      <a
        href={`tel:${COMPANY_INFO.phones[0].raw}`}
        className="w-12 h-12 rounded-full bg-secondary text-white shadow-xl flex items-center justify-center border border-white/20 hover:bg-primary hover:scale-110 transition-all duration-300"
        title="Call Now"
      >
        <Phone className="w-5 h-5 text-highlight animate-pulse" />
      </a>

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello,%20I%20am%20interested%20in%20Future%20Tensile%20Structures.`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-[#25D366] text-white shadow-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 border border-white/30"
        title="Message on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
      </a>

    </div>
  );
};

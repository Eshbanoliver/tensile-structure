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
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col space-y-2.5 items-end">
      
      {/* Scroll to Top Trigger */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#0B1F35] text-[#00B8D9] border border-[#00B8D9]/40 shadow-xl flex items-center justify-center hover:bg-[#00B8D9] hover:text-[#0B1F35] transition-all duration-300 transform hover:scale-110"
          title="Go to Top"
        >
          <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      )}

      {/* Floating Send Enquiry Button */}
      <button
        onClick={onOpenEnquiryModal}
        className="px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-full bg-gradient-to-r from-[#123B63] to-[#0B1F35] text-white border border-[#00B8D9]/40 shadow-xl flex items-center space-x-2 text-[11px] sm:text-xs font-bold hover:scale-105 transition-transform"
        title="Send Enquiry"
      >
        <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#00B8D9] animate-bounce" />
        <span>Enquire</span>
      </button>

      {/* Floating Call Button */}
      <a
        href={`tel:${COMPANY_INFO.phones[0].raw}`}
        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#123B63] text-white shadow-xl flex items-center justify-center border border-white/20 hover:bg-[#0B1F35] hover:scale-110 transition-all duration-300"
        title="Call Now"
      >
        <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[#FFB703] animate-pulse" />
      </a>

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello,%20I%20am%20interested%20in%20Future%20Tensile%20Structures.`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#25D366] text-white shadow-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 border border-white/30"
        title="Message on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />
      </a>

    </div>
  );
};

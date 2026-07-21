import React from 'react';
import { Send, PhoneCall } from 'lucide-react';
import { COMPANY_INFO } from '../../data/websiteData';

interface ContactCTASectionProps {
  onOpenQuoteModal: () => void;
}

export const ContactCTASection: React.FC<ContactCTASectionProps> = ({ onOpenQuoteModal }) => {
  return (
    <section className="py-16 bg-gradient-to-r from-[#061322] via-[#0B1F35] to-[#123B63] text-white relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h2 className="font-poppins font-black text-2xl sm:text-4xl text-white">
          Ready to Transform Your Outdoor Space?
        </h2>
        <p className="text-gray-300 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
          Get in touch with Future Tensile Structure Pvt. Ltd. for custom design consultation, site measurement, and competitive factory quotes.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <button
            onClick={onOpenQuoteModal}
            className="px-8 py-3.5 rounded-xl bg-[#00B8D9] text-[#0B1F35] font-poppins font-black text-xs sm:text-sm uppercase tracking-wider shadow-2xl hover:bg-white hover:scale-105 transition-all flex items-center space-x-2 border border-white/20"
          >
            <Send className="w-4 h-4" />
            <span>Get Instant Factory Quote</span>
          </button>
          <a
            href={`tel:${COMPANY_INFO.phones[0].raw}`}
            className="px-8 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white font-poppins font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-white/20 transition-all flex items-center space-x-2"
          >
            <PhoneCall className="w-4 h-4 text-[#FFB703]" />
            <span>Call +91-988-788-9777</span>
          </a>
        </div>
      </div>
    </section>
  );
};

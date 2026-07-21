import React from 'react';
import { Send, PhoneCall } from 'lucide-react';
import { COMPANY_INFO } from '../../data/websiteData';

interface ContactCTASectionProps {
  onOpenQuoteModal: () => void;
}

export const ContactCTASection: React.FC<ContactCTASectionProps> = ({ onOpenQuoteModal }) => {
  return (
    <section className="py-16 bg-gradient-to-r from-primary via-secondary to-primary text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h2 className="font-poppins font-extrabold text-2xl sm:text-4xl">
          Ready to Transform Your Outdoor Space?
        </h2>
        <p className="text-gray-300 text-sm max-w-xl mx-auto">
          Get in touch with Future Tensile Structure Pvt. Ltd. for custom design consultation, site measurement, and competitive factory quotes.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onOpenQuoteModal}
            className="px-8 py-3.5 rounded-xl bg-accent text-primary font-poppins font-bold text-sm shadow-glow-accent hover:scale-105 transition-all flex items-center space-x-2"
          >
            <Send className="w-4 h-4" />
            <span>Get Instant Factory Quote</span>
          </button>
          <a
            href={`tel:${COMPANY_INFO.phones[0].raw}`}
            className="px-8 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white font-poppins font-semibold text-sm hover:bg-white/20 transition-all flex items-center space-x-2"
          >
            <PhoneCall className="w-4 h-4 text-highlight" />
            <span>Call +91-988-788-9777</span>
          </a>
        </div>
      </div>
    </section>
  );
};

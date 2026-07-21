import React from 'react';
import { motion } from 'framer-motion';
import { Send, PhoneCall, Sparkles, CheckCircle2, Clock, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../../data/websiteData';

interface ContactCTASectionProps {
  onOpenQuoteModal: () => void;
}

export const ContactCTASection: React.FC<ContactCTASectionProps> = ({ onOpenQuoteModal }) => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0B1F35] relative overflow-hidden">
      
      {/* Container with Glassmorphism and Glow Effect */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#061322] via-[#0B2A42] to-[#123B63] border border-[#00B8D9]/40 p-8 sm:p-12 lg:p-16 shadow-[0_0_50px_rgba(0,184,217,0.25)] overflow-hidden text-center text-white space-y-8">
          
          {/* Background Ambient Glow Orbs */}
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-[#00B8D9]/20 rounded-full filter blur-3xl pointer-events-none animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-[#FFB703]/15 rounded-full filter blur-3xl pointer-events-none" />

          {/* Top Live Status Pill */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#00B8D9]/15 border border-[#00B8D9]/40 text-[#00B8D9] text-xs font-bold uppercase tracking-wider shadow-inner"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00B8D9] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00B8D9]"></span>
            </span>
            <Sparkles className="w-3.5 h-3.5 text-[#FFB703]" />
            <span>24-Hour Factory Direct Quote Guarantee</span>
          </motion.div>

          {/* Heading */}
          <div className="max-w-3xl mx-auto space-y-3">
            <h2 className="font-poppins font-black text-3xl sm:text-5xl lg:text-6xl text-white leading-tight">
              Ready to Transform Your <span className="text-[#00B8D9]">Outdoor Space?</span>
            </h2>
            <p className="text-gray-200 text-xs sm:text-base max-w-2xl mx-auto leading-relaxed">
              Get in touch with Future Tensile Structure Pvt. Ltd. for custom CAD architectural drawings, free site measurement, and unbeatable factory prices across Udaipur & Pan-India.
            </p>
          </div>

          {/* Dynamic Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenQuoteModal}
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-[#00B8D9] via-[#008BA4] to-[#FFB703] text-[#0B1F35] font-poppins font-black text-xs sm:text-sm uppercase tracking-wider shadow-[0_0_30px_rgba(0,184,217,0.5)] hover:shadow-[0_0_40px_rgba(255,183,3,0.6)] transition-all flex items-center space-x-2.5 border border-white/30"
            >
              <Send className="w-4 h-4 fill-current" />
              <span>Get Instant Factory Quote</span>
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={`tel:${COMPANY_INFO.phones[0].raw}`}
              className="px-8 py-4 rounded-2xl bg-white/10 border border-white/30 text-white font-poppins font-bold text-xs sm:text-sm uppercase tracking-wider backdrop-blur-md hover:bg-white/20 transition-all flex items-center space-x-2.5"
            >
              <PhoneCall className="w-4 h-4 text-[#FFB703] animate-bounce" />
              <span>Call +91-988-788-9777</span>
            </motion.a>
          </div>

          {/* Trust Highlights Strip */}
          <div className="pt-6 border-t border-white/15 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-semibold text-gray-200">
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-[#00B8D9]" />
              <span>Free Site Survey & Measurement</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-[#FFB703]" />
              <span>15 to 30 Years Membrane Lifespan</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Clock className="w-4 h-4 text-[#00B8D9]" />
              <span>Rapid On-Time Installation</span>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};

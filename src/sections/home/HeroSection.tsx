import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ShieldCheck, Factory, MapPin, Award } from 'lucide-react';
import { HERO_SLIDERS, COMPANY_INFO } from '../../data/websiteData';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/bundle';

const SwiperComp: any = (Swiper as any)?.default || Swiper;
const SwiperSlideComp: any = (SwiperSlide as any)?.default || SwiperSlide;

interface HeroSectionProps {
  onOpenQuoteModal: (title?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenQuoteModal }) => {
  return (
    <section className="relative w-full min-h-[580px] sm:min-h-[640px] lg:min-h-[740px] bg-[#0B1F35] flex flex-col justify-between overflow-hidden">
      
      {/* Slider Container */}
      <div className="relative w-full flex-grow flex items-center">
        <SwiperComp
          modules={[Autoplay, EffectFade, Navigation, Pagination]}
          effect="fade"
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          loop
          className="w-full h-full text-white hero-swiper"
        >
          {HERO_SLIDERS.map((slide) => (
            <SwiperSlideComp key={slide.id}>
              <div className="relative w-full h-full min-h-[500px] sm:min-h-[560px] lg:min-h-[660px] flex items-center justify-center py-12">
                
                {/* Background Image with Dark Dual Gradient Overlays */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105"
                  style={{ backgroundImage: `url(${slide.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F35]/95 via-[#0B1F35]/80 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F35] via-transparent to-[#061322]/60" />
                </div>

                {/* Hero Slide Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8 sm:pt-12">
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-2xl space-y-4 sm:space-y-6"
                  >
                    <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#00B8D9]/20 border border-[#00B8D9]/40 backdrop-blur-md text-[#00B8D9] text-[11px] sm:text-xs font-bold tracking-wider uppercase">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{COMPANY_INFO.tagline}</span>
                    </div>

                    <h1 className="font-poppins font-black text-2xl sm:text-4xl lg:text-6xl text-white leading-tight drop-shadow-md">
                      {slide.title}
                    </h1>

                    <p className="text-gray-200 text-xs sm:text-base lg:text-lg font-normal leading-relaxed max-w-xl">
                      {slide.subtitle}
                    </p>

                    <div className="pt-2 sm:pt-4 flex flex-wrap items-center gap-3 sm:gap-4">
                      <button
                        onClick={() => onOpenQuoteModal(slide.title)}
                        className="px-6 py-3 sm:px-8 sm:py-3.5 rounded-xl bg-gradient-to-r from-[#00B8D9] via-[#123B63] to-[#FFB703] text-white font-poppins font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg hover:scale-105 transition-transform flex items-center space-x-2 border border-white/20"
                      >
                        <span>Request Factory Price</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>

                      <Link
                        to="/tensile-structure.htm"
                        className="px-6 py-3 sm:px-8 sm:py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-poppins font-semibold text-xs sm:text-sm backdrop-blur-md transition-all flex items-center space-x-2"
                      >
                        <span>Explore 31 Products</span>
                      </Link>
                    </div>
                  </motion.div>
                </div>

              </div>
            </SwiperSlideComp>
          ))}
        </SwiperComp>
      </div>

      {/* Bottom Feature Strip Highlight */}
      <div className="relative z-20 bg-[#061322]/90 border-t border-white/10 py-3.5 px-4 backdrop-blur-md hidden sm:block">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-semibold text-gray-200">
          <div className="flex items-center space-x-2.5">
            <ShieldCheck className="w-4 h-4 text-[#00B8D9] flex-shrink-0" />
            <span>100% Weatherproof & UV Shielded</span>
          </div>
          <div className="flex items-center space-x-2.5">
            <Factory className="w-4 h-4 text-[#FFB703] flex-shrink-0" />
            <span>In-House Direct Factory Rates</span>
          </div>
          <div className="flex items-center space-x-2.5">
            <MapPin className="w-4 h-4 text-[#00B8D9] flex-shrink-0" />
            <span>Pan-India Turnkey Installation</span>
          </div>
          <div className="flex items-center space-x-2.5">
            <Award className="w-4 h-4 text-[#FFB703] flex-shrink-0" />
            <span>15-30 Years Membrane Lifespan</span>
          </div>
        </div>
      </div>

    </section>
  );
};

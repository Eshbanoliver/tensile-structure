import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
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
    <section className="relative w-full h-[550px] lg:h-[720px] bg-primary">
      <SwiperComp
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop
        className="w-full h-full text-white"
      >
        {HERO_SLIDERS.map((slide) => (
          <SwiperSlideComp key={slide.id}>
            <div className="relative w-full h-full flex items-center justify-center">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/75 to-transparent" />
              </div>

              <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="max-w-2xl space-y-5"
                >
                  <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-accent/20 border border-accent/40 backdrop-blur-md text-accent text-xs font-semibold tracking-wider uppercase">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{COMPANY_INFO.tagline}</span>
                  </div>

                  <h1 className="font-poppins font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white leading-tight">
                    {slide.title}
                  </h1>

                  <p className="text-gray-200 text-base sm:text-lg font-light leading-relaxed">
                    {slide.subtitle}
                  </p>

                  <div className="pt-4 flex flex-wrap items-center gap-4">
                    <button
                      onClick={() => onOpenQuoteModal(slide.title)}
                      className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-accent via-secondary to-highlight text-white font-poppins font-bold text-sm shadow-glow-accent hover:scale-105 transition-transform flex items-center space-x-2"
                    >
                      <span>Request Factory Price</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <Link
                      to="/tensile-structure.htm"
                      className="px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-poppins font-semibold text-sm backdrop-blur-md transition-all flex items-center space-x-2"
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
    </section>
  );
};

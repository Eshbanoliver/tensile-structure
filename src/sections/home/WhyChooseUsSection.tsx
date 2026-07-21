import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, Factory, Clock, Users, Wrench, Sparkles } from 'lucide-react';

export const WhyChooseUsSection: React.FC = () => {
  const reasons = [
    {
      icon: Factory,
      number: "01",
      badge: "FACTORY DIRECT",
      title: "In-House Manufacturing",
      desc: "Direct factory pricing with high-frequency PVDF/PTFE membrane welding and precision steel frame fabrication.",
      bg: "bg-gradient-to-br from-[#061322] via-[#082835] to-[#0A3D4F]",
      border: "border-[#00B8D9]/40 hover:border-[#00B8D9]",
      glow: "hover:shadow-[0_12px_35px_rgba(0,184,217,0.35)]",
      iconBg: "bg-gradient-to-tr from-[#00B8D9] to-[#008BA4] text-white",
      badgeColor: "text-[#00B8D9] bg-[#00B8D9]/15 border-[#00B8D9]/30"
    },
    {
      icon: ShieldCheck,
      number: "02",
      badge: "WEATHER PROOF",
      title: "Wind & UV Resistance",
      desc: "Structures engineered to withstand winds up to 150 km/h with 100% UV block and waterproof protection.",
      bg: "bg-gradient-to-br from-[#061322] via-[#2D1B06] to-[#452706]",
      border: "border-[#FFB703]/40 hover:border-[#FFB703]",
      glow: "hover:shadow-[0_12px_35px_rgba(255,183,3,0.35)]",
      iconBg: "bg-gradient-to-tr from-[#FFB703] to-[#d97706] text-[#0B1F35]",
      badgeColor: "text-[#FFB703] bg-[#FFB703]/15 border-[#FFB703]/30"
    },
    {
      icon: Award,
      number: "03",
      badge: "HIGH DURABILITY",
      title: "15 to 30 Years Lifespan",
      desc: "Premium architectural fabrics sourced from leading global suppliers ensuring longevity without yellowing.",
      bg: "bg-gradient-to-br from-[#061322] via-[#082E1E] to-[#0A452B]",
      border: "border-[#10b981]/40 hover:border-[#10b981]",
      glow: "hover:shadow-[0_12px_35px_rgba(16,185,129,0.35)]",
      iconBg: "bg-gradient-to-tr from-[#10b981] to-[#047857] text-white",
      badgeColor: "text-[#10b981] bg-[#10b981]/15 border-[#10b981]/30"
    },
    {
      icon: Clock,
      number: "04",
      badge: "CAD TO SITE",
      title: "Turnkey Project Delivery",
      desc: "Complete end-to-end execution from initial CAD design to site installation within agreed timelines.",
      bg: "bg-gradient-to-br from-[#061322] via-[#260C38] to-[#3D1059]",
      border: "border-[#d946ef]/40 hover:border-[#d946ef]",
      glow: "hover:shadow-[0_12px_35px_rgba(217,70,239,0.35)]",
      iconBg: "bg-gradient-to-tr from-[#d946ef] to-[#a21caf] text-white",
      badgeColor: "text-[#d946ef] bg-[#d946ef]/15 border-[#d946ef]/30"
    },
    {
      icon: Users,
      number: "05",
      badge: "15+ YEARS EXP",
      title: "Experienced Team",
      desc: "Over 15 years of industry experience across 300+ cities with 254+ successfully completed installations.",
      bg: "bg-gradient-to-br from-[#061322] via-[#0D2248] to-[#123B63]",
      border: "border-[#3b82f6]/40 hover:border-[#3b82f6]",
      glow: "hover:shadow-[0_12px_35px_rgba(59,130,246,0.35)]",
      iconBg: "bg-gradient-to-tr from-[#3b82f6] to-[#1d4ed8] text-white",
      badgeColor: "text-[#60a5fa] bg-[#3b82f6]/15 border-[#3b82f6]/30"
    },
    {
      icon: Wrench,
      number: "06",
      badge: "24/7 SUPPORT",
      title: "Post-Installation Support",
      desc: "Comprehensive warranty cover, annual maintenance, and rapid response site support services.",
      bg: "bg-gradient-to-br from-[#061322] via-[#330D1B] to-[#541229]",
      border: "border-[#f43f5e]/40 hover:border-[#f43f5e]",
      glow: "hover:shadow-[0_12px_35px_rgba(244,63,94,0.35)]",
      iconBg: "bg-gradient-to-tr from-[#f43f5e] to-[#be123c] text-white",
      badgeColor: "text-[#fb7185] bg-[#f43f5e]/15 border-[#f43f5e]/30"
    }
  ];

  return (
    <section className="pt-24 pb-32 lg:pb-40 bg-[#061322] text-white relative overflow-hidden border-t border-white/10 mb-12 sm:mb-16">
      
      {/* Background Decorative Glow Blobs */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-[#00B8D9]/10 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#FFB703]/10 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#00B8D9] flex items-center justify-center space-x-1.5">
            <Sparkles className="w-4 h-4 text-[#FFB703] animate-pulse" />
            <span>Why Choose Us</span>
          </span>
          <h2 className="font-poppins font-black text-3xl sm:text-5xl text-white">
            Why Future Tensile Structure Is Your Top Choice
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00B8D9] via-[#FFB703] to-[#d946ef] mx-auto rounded-full" />
          <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
            We deliver engineered outdoor shade solutions that combine structural integrity, aesthetic elegance, and direct factory economics across India.
          </p>
        </div>

        {/* Dynamic 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div 
                key={idx}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className={`p-8 rounded-3xl ${item.bg} border ${item.border} ${item.glow} shadow-2xl transition-all duration-300 flex flex-col justify-between space-y-6 relative overflow-hidden group`}
              >
                {/* Large Background Watermark Number */}
                <span className="absolute -top-4 -right-2 font-poppins font-black text-7xl text-white/5 pointer-events-none select-none group-hover:text-white/10 transition-colors">
                  {item.number}
                </span>

                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    {/* Vibrant Gradient Icon Badge */}
                    <div className={`w-14 h-14 rounded-2xl ${item.iconBg} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-7 h-7" />
                    </div>

                    {/* Category Tag Badge */}
                    <span className={`text-[10px] font-extrabold px-3 py-1 rounded-full border ${item.badgeColor} uppercase tracking-wider`}>
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="font-poppins font-bold text-xl text-white group-hover:text-white transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-gray-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-bold text-gray-400 group-hover:text-white transition-colors">
                  <span>Guaranteed Standards</span>
                  <span className="text-xs">✦</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

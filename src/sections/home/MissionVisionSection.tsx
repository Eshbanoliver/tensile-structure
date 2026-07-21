import React from 'react';
import { Target, Eye, ShieldCheck, Flag } from 'lucide-react';
import { MISSION_VISION_VALUES } from '../../data/websiteData';

export const MissionVisionSection: React.FC = () => {
  const cardThemes = [
    {
      // Card 1: Our Mission - Cyan / Emerald Theme
      bg: "bg-gradient-to-br from-[#061322] via-[#0B2A38] to-[#062635]",
      border: "border-[#00B8D9]/40 hover:border-[#00B8D9]",
      iconBg: "bg-gradient-to-tr from-[#00B8D9] to-[#008BA4]",
      accentText: "text-[#00B8D9]",
      glow: "shadow-[0_0_20px_rgba(0,184,217,0.15)]",
      icon: Target
    },
    {
      // Card 2: Our Vision - Sapphire / Electric Blue Theme
      bg: "bg-gradient-to-br from-[#061322] via-[#102542] to-[#123B63]",
      border: "border-[#3b82f6]/40 hover:border-[#3b82f6]",
      iconBg: "bg-gradient-to-tr from-[#3b82f6] to-[#1d4ed8]",
      accentText: "text-[#60a5fa]",
      glow: "shadow-[0_0_20px_rgba(59,130,246,0.15)]",
      icon: Eye
    },
    {
      // Card 3: Quality Policy - Warm Amber / Gold Theme
      bg: "bg-gradient-to-br from-[#061322] via-[#2A1E08] to-[#3B2B0A]",
      border: "border-[#FFB703]/40 hover:border-[#FFB703]",
      iconBg: "bg-gradient-to-tr from-[#FFB703] to-[#d97706]",
      accentText: "text-[#FFB703]",
      glow: "shadow-[0_0_20px_rgba(255,183,3,0.15)]",
      icon: ShieldCheck
    },
    {
      // Card 4: Our Goals - Vibrant Violet / Purple Theme
      bg: "bg-gradient-to-br from-[#061322] via-[#201035] to-[#2E144D]",
      border: "border-[#a855f7]/40 hover:border-[#a855f7]",
      iconBg: "bg-gradient-to-tr from-[#a855f7] to-[#7e22ce]",
      accentText: "text-[#c084fc]",
      glow: "shadow-[0_0_20px_rgba(168,85,247,0.15)]",
      icon: Flag
    }
  ];

  return (
    <section className="py-20 bg-[#0B1F35] text-white relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#00B8D9]">Engineering Excellence</span>
          <h2 className="font-poppins font-black text-3xl sm:text-4xl text-white">
            Precision Engineering Within Your Reach
          </h2>
          <div className="w-16 h-1 bg-[#00B8D9] mx-auto rounded-full" />
          <p className="text-gray-200 text-xs sm:text-sm leading-relaxed">
            We bridge the gap between world-class architectural design and cost-effective execution. Our team focuses on delivering high-performance materials like PTFE and PVC that offer longevity and safety.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MISSION_VISION_VALUES.map((item, idx) => {
            const theme = cardThemes[idx % cardThemes.length];
            const IconComponent = theme.icon;

            return (
              <div 
                key={idx} 
                className={`p-6 rounded-3xl ${theme.bg} border ${theme.border} ${theme.glow} shadow-2xl transition-all duration-300 group space-y-4 hover:-translate-y-1`}
              >
                <div className={`w-12 h-12 rounded-2xl ${theme.iconBg} flex items-center justify-center text-white font-bold shadow-lg group-hover:scale-110 transition-transform`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className={`font-poppins font-bold text-lg text-white group-hover:${theme.accentText} transition-colors`}>
                  {item.title}
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

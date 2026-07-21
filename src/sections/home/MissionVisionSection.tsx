import React from 'react';
import { Target, Eye, ShieldCheck, Flag } from 'lucide-react';
import { MISSION_VISION_VALUES } from '../../data/websiteData';

export const MissionVisionSection: React.FC = () => {
  return (
    <section className="py-20 bg-primary text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-accent">Engineering Excellence</span>
          <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl text-white">
            Precision Engineering Within Your Reach
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
          <p className="text-gray-300 text-sm leading-relaxed">
            We bridge the gap between world-class architectural design and cost-effective execution. Our team focuses on delivering high-performance materials like PTFE and PVC that offer longevity and safety.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MISSION_VISION_VALUES.map((item, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-accent/40 backdrop-blur-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-secondary flex items-center justify-center text-primary font-bold mb-4 shadow-glow-accent">
                {idx === 0 && <Target className="w-6 h-6 text-white" />}
                {idx === 1 && <Eye className="w-6 h-6 text-white" />}
                {idx === 2 && <ShieldCheck className="w-6 h-6 text-white" />}
                {idx === 3 && <Flag className="w-6 h-6 text-white" />}
              </div>
              <h3 className="font-poppins font-bold text-lg text-white mb-2">{item.title}</h3>
              <p className="text-xs text-gray-300 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { STATISTICS_COUNTERS } from '../../data/websiteData';
import { AnimatedCounter } from '../../components/AnimatedCounter';

export const CountersSection: React.FC = () => {
  return (
    <section className="py-16 bg-[#061322] text-white border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {STATISTICS_COUNTERS.map((stat, idx) => (
            <div key={idx} className="space-y-2 p-5 rounded-2xl bg-[#0B1F35] border border-white/15 shadow-xl">
              <div className="font-poppins font-black text-4xl sm:text-5xl text-[#00B8D9]">
                <AnimatedCounter end={stat.count} duration={2.5} suffix={stat.suffix} />
              </div>
              <div className="text-xs font-bold text-gray-300 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

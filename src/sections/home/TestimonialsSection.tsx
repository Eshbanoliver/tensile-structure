import React from 'react';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../../data/websiteData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-accent">Client Reviews</span>
          <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl text-primary">
            Trusted By Industry Leaders
          </h2>
          <div className="w-16 h-1 bg-highlight mx-auto rounded-full" />
          <p className="text-gray-600 text-sm leading-relaxed">
            Building lasting partnerships is at the core of our business. Hear directly from architects, developers, and institution heads about their experiences working with our team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="p-6 rounded-2xl bg-bgLight border border-gray-200 shadow-lg flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-1 text-highlight">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-xs text-gray-600 leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="flex items-center space-x-3 pt-3 border-t border-gray-200">
                <div className="w-10 h-10 rounded-full bg-secondary text-white font-poppins font-bold flex items-center justify-center">
                  {t.initial}
                </div>
                <div>
                  <h4 className="font-poppins font-bold text-sm text-primary">{t.author}</h4>
                  <span className="text-[11px] text-gray-500">{t.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

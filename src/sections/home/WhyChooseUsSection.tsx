import React from 'react';
import { ShieldCheck, Award, Factory, Clock, Users, Wrench } from 'lucide-react';

export const WhyChooseUsSection: React.FC = () => {
  const reasons = [
    {
      icon: Factory,
      title: "In-House Manufacturing",
      desc: "Direct factory pricing with high-frequency PVDF/PTFE membrane welding and precision steel frame fabrication."
    },
    {
      icon: ShieldCheck,
      title: "Wind & UV Resistance",
      desc: "Structures engineered to withstand winds up to 150 km/h with 100% UV block and waterproof protection."
    },
    {
      icon: Award,
      title: "15 to 30 Years Lifespan",
      desc: "Premium architectural fabrics sourced from leading global suppliers ensuring longevity without yellowing."
    },
    {
      icon: Clock,
      title: "Turnkey Project Delivery",
      desc: "Complete end-to-end execution from initial CAD design to site installation within agreed timelines."
    },
    {
      icon: Users,
      title: "Experienced Team",
      desc: "Over 15 years of industry experience across 300+ cities with 254+ successfully completed installations."
    },
    {
      icon: Wrench,
      title: "Post-Installation Support",
      desc: "Comprehensive warranty cover, annual maintenance, and rapid response site support services."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-accent">Why Choose Us</span>
          <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl text-primary">
            Why Future Tensile Structure Is Your Top Choice
          </h2>
          <div className="w-16 h-1 bg-highlight mx-auto rounded-full" />
          <p className="text-gray-600 text-sm leading-relaxed">
            We deliver engineered outdoor shade solutions that combine structural integrity, aesthetic elegance, and direct factory economics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="p-8 rounded-3xl bg-bgLight border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 group space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-primary text-accent flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="font-poppins font-bold text-lg text-primary group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
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

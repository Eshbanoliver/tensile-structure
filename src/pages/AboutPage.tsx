import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Award, Sparkles, Truck, Wrench, PackageCheck, PhoneCall, ArrowRight, Building2, Factory, PenTool, Users } from 'lucide-react';
import { MISSION_VISION_VALUES } from '../data/websiteData';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-bgLight pt-24 lg:pt-32 pb-20">
      <SEO 
        title="About Us | Top Tensile Structure Manufacturers in Udaipur - Future Tensile Structure"
        description="Learn about Future Tensile Structure Pvt. Ltd., Udaipur's leading tensile membrane structure manufacturer since 2010. Architectural tensile shade design, fabrication, and installation."
        keywords="Tensile Structure Manufacturer Udaipur, About Future Tensile Structure, Architectural Membrane Roofing, Tensile Shade Fabrication Rajasthan"
      />

      {/* Page Header Hero Banner */}
      <section className="bg-primary text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary opacity-90" />
        <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Breadcrumbs items={[{ label: 'About Us' }]} />
          
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Established 2010 • Udaipur, Rajasthan</span>
            </span>
            <h1 className="font-poppins font-extrabold text-3xl sm:text-5xl text-white leading-tight">
              Pioneering Architectural Tensile Structures in India
            </h1>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Future Tensile Structure Pvt. Ltd. is Udaipur's premier manufacturer and contractor of tensile membranes, gazebos, car parking shades, and custom architectural roof canopies.
            </p>
          </div>
        </div>
      </section>

      {/* Main Profile & Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-accent">Who We Are</span>
              <h2 className="font-poppins font-extrabold text-2xl sm:text-4xl text-primary leading-tight">
                Crafting The Architectural Skyline of Your Property
              </h2>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed">
              Welcome to <strong>Future Tensile Structure Pvt. Ltd.</strong>, where we don't just build roofs; we craft the skyline of your property. For over 16 years, our team has been the quiet force transforming ordinary open spaces into functional, architectural art across Rajasthan and all over India.
            </p>

            <p className="text-gray-600 text-sm leading-relaxed">
              Our <strong>tensile shade structures</strong> are built to support the needs of luxury resorts, commercial plazas, industrial parks, and residential villas alike. From protecting vehicles against harsh UV radiation to covering swimming pools and outdoor walkways, we create engineering setups that combine durability, style, and extreme weather resilience.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white shadow-lg border border-gray-100 flex items-center space-x-3">
                <ShieldCheck className="w-10 h-10 text-accent flex-shrink-0" />
                <div>
                  <span className="font-poppins font-bold text-lg text-primary block">100% Safety</span>
                  <span className="text-[11px] text-gray-500">IS Code & Wind Compliant</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white shadow-lg border border-gray-100 flex items-center space-x-3">
                <Award className="w-10 h-10 text-highlight flex-shrink-0" />
                <div>
                  <span className="font-poppins font-bold text-lg text-primary block">16+ Years</span>
                  <span className="text-[11px] text-gray-500">Industry Leadership</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
              <img 
                src="https://www.futuretensilestructure.com/uploaded-files/page-images/thumbs/Home-thumbs-440X440.jpg" 
                alt="About Future Tensile Structure Workshop"
                className="w-full h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent flex items-end p-8">
                <div className="text-white space-y-1">
                  <p className="font-poppins font-bold text-lg">In-House Manufacturing Unit</p>
                  <p className="text-xs text-gray-300">State-of-the-art high-frequency fabric welding & steel fabrication facility in Udaipur.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Core Engineering Capabilities */}
      <section className="bg-white py-16 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-accent">Manufacturing Excellence</span>
            <h2 className="font-poppins font-extrabold text-2xl sm:text-4xl text-primary">
              End-to-End Architectural Infrastructure
            </h2>
            <p className="text-gray-600 text-sm">
              We handle every phase of tensile structure execution under one roof to guarantee precision and structural integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-bgLight border border-gray-200 space-y-3 hover:shadow-xl transition-all">
              <PenTool className="w-9 h-9 text-accent" />
              <h3 className="font-poppins font-bold text-base text-primary">3D Structural Design</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Advanced CAD & finite element tension analysis to create wind and rain resistant architectural forms.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-bgLight border border-gray-200 space-y-3 hover:shadow-xl transition-all">
              <Factory className="w-9 h-9 text-highlight" />
              <h3 className="font-poppins font-bold text-base text-primary">Precision Fabrication</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Automated CNC fabric cutting and high-frequency PVC/PVDF/PTFE membrane welding machines.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-bgLight border border-gray-200 space-y-3 hover:shadow-xl transition-all">
              <Building2 className="w-9 h-9 text-accent" />
              <h3 className="font-poppins font-bold text-base text-primary">Steel Framework</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Heavy-duty galvanized steel pipes with anti-corrosion primer coating for 30+ year lifespan.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-bgLight border border-gray-200 space-y-3 hover:shadow-xl transition-all">
              <Users className="w-9 h-9 text-secondary" />
              <h3 className="font-poppins font-bold text-base text-primary">Pan-India Erection</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Expert site installation crews delivering on-time turnkey setup across all Indian states.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Turnkey Delivery Workflow */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-accent">On-Time Execution</span>
          <h2 className="font-poppins font-extrabold text-2xl sm:text-4xl text-primary">
            How We Guarantee Project Delivery
          </h2>
          <p className="text-gray-600 text-sm">
            Streamlined logistics, rigorous quality checks, and site engineer coordination ensure flawless turnkey execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white shadow-xl border border-gray-100 space-y-3">
            <Truck className="w-8 h-8 text-accent" />
            <h3 className="font-poppins font-bold text-base text-primary">All India Delivery</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              We dispatch high-grade membrane rolls and structural steel frameworks across India without delay.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white shadow-xl border border-gray-100 space-y-3">
            <PackageCheck className="w-8 h-8 text-highlight" />
            <h3 className="font-poppins font-bold text-base text-primary">Modular Ready Kits</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              For car parking, walkways, and gazebo orders, we engineer modular pre-fit kits for rapid assembly.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white shadow-xl border border-gray-100 space-y-3">
            <Wrench className="w-8 h-8 text-accent" />
            <h3 className="font-poppins font-bold text-base text-primary">Site Support</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Our site engineers inspect foundation civil works and anchor bolt positioning before erection.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white shadow-xl border border-gray-100 space-y-3">
            <ShieldCheck className="w-8 h-8 text-secondary" />
            <h3 className="font-poppins font-bold text-base text-primary">Protective Packing</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Membranes are wrapped in double-layer protective sheets to prevent abrasion during transport.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Vision Cards */}
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-accent">Core Principles</span>
            <h2 className="font-poppins font-extrabold text-2xl sm:text-4xl text-white">
              Our Values & Vision
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {MISSION_VISION_VALUES.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10 text-white space-y-3 hover:bg-white/10 transition-colors">
                <span className="text-xs font-bold text-accent uppercase tracking-widest">Pillar {idx + 1}</span>
                <h3 className="font-poppins font-bold text-xl text-white">{item.title}</h3>
                <p className="text-xs text-gray-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="bg-[#0B1F35] rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 border border-[#00B8D9]/40">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#00B8D9]">Ready To Upgrade Your Space?</span>
            <h2 className="font-poppins font-extrabold text-2xl sm:text-4xl text-white">
              Request Architectural Consultation
            </h2>
            <p className="text-gray-300 text-xs sm:text-sm">
              Contact our engineering office in Udaipur for free site measurement estimates and custom 3D drawing consultation.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
            <Link 
              to="/contact-us.htm"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#00B8D9] hover:bg-[#FFB703] text-[#0B1F35] font-poppins font-black text-xs uppercase tracking-wider shadow-[0_0_25px_rgba(0,184,217,0.4)] transition-all flex items-center justify-center space-x-2 border border-white/30"
            >
              <span>Contact Engineers</span>
              <ArrowRight className="w-4 h-4 text-[#0B1F35]" />
            </Link>

            <a 
              href="tel:+919887889777"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/15 border border-white/30 text-white font-poppins font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 hover:bg-white/25 transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-[#FFB703]" />
              <span>Call +91-988-788-9777</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

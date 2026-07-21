import React from 'react';
import { ShieldCheck, Award, Sparkles, Truck, Wrench, PackageCheck } from 'lucide-react';
import { MISSION_VISION_VALUES } from '../data/websiteData';

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-bgLight pt-24 lg:pt-32 pb-20">
      
      {/* Page Header Banner */}
      <section className="bg-primary text-white py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-accent flex items-center justify-center space-x-2">
            <Sparkles className="w-4 h-4" />
            <span>Established 2010 • Udaipur, Rajasthan</span>
          </span>
          <h1 className="font-poppins font-extrabold text-3xl sm:text-5xl text-white">
            About Future Tensile Structure
          </h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Leading Tensile Structure Manufacturers in Udaipur, Rajasthan. Designing, engineering, and fabricating world-class architectural shade solutions since 2010.
          </p>
        </div>
      </section>

      {/* Main Profile & Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-5">
            <h2 className="font-poppins font-extrabold text-2xl sm:text-3xl text-primary">
              Crafting The Architectural Skyline of Your Property
            </h2>

            <p className="text-gray-600 text-sm leading-relaxed">
              Welcome to Future Tensile Structure Pvt. Ltd., where we don't just build roofs; we craft the skyline of your property. For over a decade, our team has been the quiet force transforming ordinary open spaces into functional, architectural art. We are dedicated to creating environments that blend safety, comfort, and modern style seamlessly.
            </p>

            <p className="text-gray-600 text-sm leading-relaxed">
              Our <strong>Top Tensile Structure in Udaipur</strong> are built to support the needs of homes, businesses, and public spaces alike. From protecting vehicles to covering walkways, we make setups that help people stay cool and comfortable while adding value to the property. With over a decade of hands-on expertise, we understand how well-planned roofing solutions can positively shape the look and feel of any location.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white shadow border border-gray-100 flex items-center space-x-3">
                <ShieldCheck className="w-8 h-8 text-accent" />
                <div>
                  <span className="font-poppins font-bold text-lg text-primary block">100% Safety</span>
                  <span className="text-[11px] text-gray-500">Structural Compliance</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white shadow border border-gray-100 flex items-center space-x-3">
                <Award className="w-8 h-8 text-highlight" />
                <div>
                  <span className="font-poppins font-bold text-lg text-primary block">16+ Years</span>
                  <span className="text-[11px] text-gray-500">Industry Excellence</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://www.futuretensilestructure.com/uploaded-files/page-images/thumbs/Home-thumbs-440X440.jpg" 
                alt="About Future Tensile Structure"
                className="w-full h-[460px] object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* How We Deliver Excellence */}
      <section className="bg-white py-16 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-accent">Turnkey Execution</span>
            <h2 className="font-poppins font-extrabold text-2xl sm:text-3xl text-primary">
              How Do We Deliver Excellence On Time?
            </h2>
            <p className="text-gray-600 text-sm">
              We want the process from ordering to finishing to be smooth for you. As Outdoor Tensile Shade Structures Manufacturers in Udaipur, we have fixed our supply chain so materials arrive on time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-bgLight border border-gray-200 space-y-3">
              <Truck className="w-8 h-8 text-accent" />
              <h3 className="font-poppins font-bold text-base text-primary">All India Delivery</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                We send high-grade fabric and steel frameworks across all states in India without project delay.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-bgLight border border-gray-200 space-y-3">
              <PackageCheck className="w-8 h-8 text-highlight" />
              <h3 className="font-poppins font-bold text-base text-primary">Ready Kits</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                For standard parking or umbrella shade jobs, we provide modular ready-to-assemble kits for quick assembly.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-bgLight border border-gray-200 space-y-3">
              <Wrench className="w-8 h-8 text-accent" />
              <h3 className="font-poppins font-bold text-base text-primary">Site Assistance</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Our site engineers coordinate directly with your contractors to inspect foundation anchor bolts.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-bgLight border border-gray-200 space-y-3">
              <ShieldCheck className="w-8 h-8 text-secondary" />
              <h3 className="font-poppins font-bold text-base text-primary">Safe Packing</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                We wrap architectural membranes in protective layers to prevent scratching during transit.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Mission Vision Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MISSION_VISION_VALUES.map((item, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-primary text-white space-y-3 shadow-xl">
              <span className="text-xs font-bold text-accent uppercase tracking-widest">Core Pillar</span>
              <h3 className="font-poppins font-bold text-xl text-white">{item.title}</h3>
              <p className="text-xs text-gray-300 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Award, 
  Sparkles, 
  Truck, 
  Wrench, 
  PackageCheck, 
  PhoneCall, 
  ArrowRight, 
  Building2, 
  Factory, 
  PenTool, 
  Users,
  Target,
  Eye,
  Flag,
  CheckCircle2,
  Layers,
  Flame,
  Sun,
  MapPin,
  Clock
} from 'lucide-react';
import { MISSION_VISION_VALUES, STATISTICS_COUNTERS } from '../data/websiteData';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';

export const AboutPage: React.FC = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const engineeringCapabilities = [
    {
      number: "01",
      icon: PenTool,
      title: "3D Structural CAD & Tension Analysis",
      desc: "Advanced finite element tension analysis software to simulate extreme wind pressure, snow loads, and monsoon drainage, creating aerodynamic tensile forms.",
      bg: "bg-gradient-to-br from-[#061322] via-[#082835] to-[#0A3D4F]",
      border: "border-[#00B8D9]/40 hover:border-[#00B8D9]",
      glow: "hover:shadow-[0_12px_35px_rgba(0,184,217,0.35)]",
      iconBg: "bg-gradient-to-tr from-[#00B8D9] to-[#008BA4] text-white",
      badgeColor: "text-[#00B8D9] bg-[#00B8D9]/15 border-[#00B8D9]/30",
      tag: "FINITE ELEMENT ANALYSIS"
    },
    {
      number: "02",
      icon: Factory,
      title: "Precision High-Frequency CNC Welding",
      desc: "In-house automated CNC fabric cutting tables and high-frequency PVC/PVDF/PTFE membrane welding machinery ensuring leakproof structural seams.",
      bg: "bg-gradient-to-br from-[#061322] via-[#2D1B06] to-[#452706]",
      border: "border-[#FFB703]/40 hover:border-[#FFB703]",
      glow: "hover:shadow-[0_12px_35px_rgba(255,183,3,0.35)]",
      iconBg: "bg-gradient-to-tr from-[#FFB703] to-[#d97706] text-[#0B1F35]",
      badgeColor: "text-[#FFB703] bg-[#FFB703]/15 border-[#FFB703]/30",
      tag: "AUTOMATED CNC & HF WELDING"
    },
    {
      number: "03",
      icon: Building2,
      title: "Galvanized Heavy Steel Framework",
      desc: "Heavy-duty structural steel pipes (IS 1161 grade) with multi-coat epoxy primer & polyurethane weather-shield paint for 30+ year corrosion resistance.",
      bg: "bg-gradient-to-br from-[#061322] via-[#082E1E] to-[#0A452B]",
      border: "border-[#10b981]/40 hover:border-[#10b981]",
      glow: "hover:shadow-[0_12px_35px_rgba(16,185,129,0.35)]",
      iconBg: "bg-gradient-to-tr from-[#10b981] to-[#047857] text-white",
      badgeColor: "text-[#10b981] bg-[#10b981]/15 border-[#10b981]/30",
      tag: "IS 1161 COMPLIANT STEEL"
    },
    {
      number: "04",
      icon: Users,
      title: "Pan-India Erection & Site Setup",
      desc: "Certified site engineers and erection riggers ensuring precision anchor bolt setting, cable pretensioning, and smooth turnkey delivery in 300+ cities.",
      bg: "bg-gradient-to-br from-[#061322] via-[#260C38] to-[#3D1059]",
      border: "border-[#d946ef]/40 hover:border-[#d946ef]",
      glow: "hover:shadow-[0_12px_35px_rgba(217,70,239,0.35)]",
      iconBg: "bg-gradient-to-tr from-[#d946ef] to-[#a21caf] text-white",
      badgeColor: "text-[#d946ef] bg-[#d946ef]/15 border-[#d946ef]/30",
      tag: "300+ CITIES NETWORK"
    }
  ];

  const fabricSpotlight = [
    {
      name: "PVDF Coated Membrane",
      lifespan: "15 - 20 Years",
      icon: Sun,
      color: "from-[#00B8D9] to-[#008BA4]",
      badgeBg: "bg-[#00B8D9]/15 text-[#00B8D9] border-[#00B8D9]/30",
      features: [
        "100% UV Ray Blockage & Reflectance",
        "Dust-resistant Fluoropolymer Finish",
        "Ideal for Car Parking & Gazebos",
        "High Tensile & Tear Resistance"
      ]
    },
    {
      name: "PTFE Glass Fiber Membrane",
      lifespan: "30+ Years Lifespan",
      icon: Flame,
      color: "from-[#FFB703] to-[#d97706]",
      badgeBg: "bg-[#FFB703]/15 text-[#FFB703] border-[#FFB703]/30",
      features: [
        "Class-A Fire Retardant & Incombustible",
        "Self-Cleaning Rainwater Hydrophobia",
        "Wide-Span Stadium & Airport Roofing",
        "Extreme Weather Thermal Stability"
      ]
    },
    {
      name: "High-Tenacity PVC Membrane",
      lifespan: "10 - 15 Years",
      icon: Layers,
      color: "from-[#10b981] to-[#047857]",
      badgeBg: "bg-[#10b981]/15 text-[#10b981] border-[#10b981]/30",
      features: [
        "Economical Flexible Shade Coverings",
        "Wide Color Spectrum Availability",
        "Rapid Modular Field Installation",
        "Heavy Monsoon Rain Waterproofing"
      ]
    }
  ];

  const valueIcons = [Target, Eye, ShieldCheck, Flag];

  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-24 lg:pt-32 pb-20 overflow-hidden">
      <SEO 
        title="About Us | Top Tensile Structure Manufacturers in Udaipur - Future Tensile Structure"
        description="Discover Future Tensile Structure Pvt. Ltd., Udaipur's premier manufacturer of architectural tensile membrane structures, car parking shades, gazebos, and wide-span canopies since 2010."
        keywords="Tensile Structure Manufacturer Udaipur, About Future Tensile Structure, Architectural Membrane Roofing, Tensile Shade Fabrication Rajasthan, In-House Tensile Factory Udaipur"
      />

      {/* Hero Banner with Animated Ambient Glow Blobs */}
      <section className="bg-[#061322] text-white py-16 lg:py-24 relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-r from-[#061322] via-[#0B1F35] to-[#123B63] opacity-95" />
        
        {/* Animated Background Blur Orbs */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#00B8D9]/20 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FFB703]/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-10 right-1/4 w-80 h-80 bg-[#d946ef]/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 z-10">
          <Breadcrumbs items={[{ label: 'About Us' }]} />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="lg:col-span-7 space-y-6"
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center space-x-2.5 px-4 py-2 rounded-full bg-[#00B8D9]/15 border border-[#00B8D9]/40 text-[#00B8D9] text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                <Sparkles className="w-4 h-4 text-[#FFB703] animate-pulse" />
                <span>Established 2010 • Udaipur, Rajasthan</span>
              </motion.div>
              
              <motion.h1 variants={fadeInUp} className="font-poppins font-black text-3xl sm:text-5xl lg:text-6xl text-white leading-tight">
                Pioneering <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-100 to-[#00B8D9]">Architectural Tensile</span> Structures in India
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                Future Tensile Structure Pvt. Ltd. is Udaipur's premier manufacturer and contractor of architectural tensile membranes, gazebos, car parking shades, walkway canopies, and custom commercial roofing solutions across India.
              </motion.p>

              {/* Quick Hero Feature Tags */}
              <motion.div variants={fadeInUp} className="flex flex-wrap gap-3 pt-2">
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/15 text-xs text-white">
                  <CheckCircle2 className="w-4 h-4 text-[#00B8D9]" />
                  <span>16+ Years Experience</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/15 text-xs text-white">
                  <CheckCircle2 className="w-4 h-4 text-[#FFB703]" />
                  <span>254+ Projects Built</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/15 text-xs text-white">
                  <CheckCircle2 className="w-4 h-4 text-[#10b981]" />
                  <span>100% In-House Production</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Hero Side Graphic Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5 hidden lg:block"
            >
              <div className="relative rounded-3xl p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#00B8D9] to-[#008BA4] flex items-center justify-center text-white shadow-lg">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-poppins font-bold text-sm text-white">Future Tensile HQ</h4>
                      <p className="text-[11px] text-gray-400">Udaipur Manufacturing Hub</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#10b981]/20 border border-[#10b981]/40 text-[#10b981] text-[10px] font-bold uppercase">
                    IS Code Compliant
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-gray-300">
                    <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-[#00B8D9]" /> Main Office:</span>
                    <span className="font-semibold text-white">Thokar Chouraha, Udaipur</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-300">
                    <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-[#FFB703]" /> Factory Status:</span>
                    <span className="font-semibold text-emerald-400">Operational & Shipping</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-300">
                    <span className="flex items-center gap-1.5"><Award className="w-3.5 h-3.5 text-purple-400" /> Structure Warranty:</span>
                    <span className="font-semibold text-white">Up to 15 Years Cover</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link 
                    to="/contact-us.htm"
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-[#00B8D9] to-[#008BA4] hover:from-[#FFB703] hover:to-[#d97706] text-[#0B1F35] hover:text-[#0B1F35] font-poppins font-bold text-xs uppercase tracking-wider shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <span>Get Factory Price Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Floating Statistics Counter Grid */}
      <section className="-mt-10 relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {STATISTICS_COUNTERS.map((stat, idx) => {
            const styles = [
              { border: "border-[#00B8D9]/40", glow: "shadow-[0_10px_25px_rgba(0,184,217,0.15)]", textColor: "text-[#00B8D9]", bgGradient: "from-white to-[#00B8D9]/5" },
              { border: "border-[#FFB703]/40", glow: "shadow-[0_10px_25px_rgba(255,183,3,0.15)]", textColor: "text-[#FFB703]", bgGradient: "from-white to-[#FFB703]/5" },
              { border: "border-[#10b981]/40", glow: "shadow-[0_10px_25px_rgba(16,185,129,0.15)]", textColor: "text-[#10b981]", bgGradient: "from-white to-[#10b981]/5" },
              { border: "border-[#d946ef]/40", glow: "shadow-[0_10px_25px_rgba(217,70,239,0.15)]", textColor: "text-[#d946ef]", bgGradient: "from-white to-[#d946ef]/5" }
            ][idx % 4];

            return (
              <motion.div 
                key={idx}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className={`p-6 rounded-2xl bg-white bg-gradient-to-br ${styles.bgGradient} border ${styles.border} ${styles.glow} flex flex-col items-center text-center justify-center space-y-1`}
              >
                <span className={`font-poppins font-black text-3xl sm:text-5xl ${styles.textColor}`}>
                  {stat.count}{stat.suffix}
                </span>
                <span className="font-poppins font-bold text-xs sm:text-sm text-primary uppercase tracking-wider">
                  {stat.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Main Profile & Story Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="lg:col-span-6 space-y-6"
          >
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#00B8D9] flex items-center space-x-1.5">
                <Sparkles className="w-4 h-4 text-[#FFB703]" />
                <span>Who We Are</span>
              </span>
              <h2 className="font-poppins font-extrabold text-2xl sm:text-4xl text-[#0B1F35] leading-tight">
                Crafting The Architectural Skyline of Your Property
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[#00B8D9] to-[#FFB703] rounded-full" />
            </div>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Welcome to <strong className="text-[#0B1F35]">Future Tensile Structure Pvt. Ltd.</strong>, where we don't just build roofs; we craft the skyline of your property. For over 16 years, our team has been the quiet force transforming ordinary open spaces into functional, architectural art across Rajasthan and all over India.
            </p>

            <p className="text-gray-600 text-sm leading-relaxed">
              Our <strong className="text-[#00B8D9]">tensile shade structures</strong> are built to support the needs of luxury resorts, commercial plazas, industrial parks, sports auditoriums, and residential villas alike. From protecting vehicles against harsh UV radiation to covering swimming pools and outdoor walkways, we create engineering setups that combine durability, style, and extreme weather resilience.
            </p>

            {/* High Impact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-white to-[#00B8D9]/5 border border-[#00B8D9]/30 shadow-lg flex items-center space-x-3">
                <div className="w-12 h-12 rounded-xl bg-[#00B8D9]/15 flex items-center justify-center text-[#00B8D9] flex-shrink-0">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <div>
                  <span className="font-poppins font-bold text-base text-[#0B1F35] block">100% Safety</span>
                  <span className="text-[11px] text-gray-500">IS Code & Wind Compliant</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-gradient-to-br from-white to-[#FFB703]/5 border border-[#FFB703]/30 shadow-lg flex items-center space-x-3">
                <div className="w-12 h-12 rounded-xl bg-[#FFB703]/15 flex items-center justify-center text-[#FFB703] flex-shrink-0">
                  <Award className="w-7 h-7" />
                </div>
                <div>
                  <span className="font-poppins font-bold text-base text-[#0B1F35] block">16+ Years</span>
                  <span className="text-[11px] text-gray-500">Industry Leadership</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Interactive Workshop Image Spotlight */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
              <img 
                src="https://www.futuretensilestructure.com/uploaded-files/page-images/thumbs/Home-thumbs-440X440.jpg" 
                alt="About Future Tensile Structure Workshop"
                className="w-full h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Image Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#061322] via-[#061322]/40 to-transparent flex items-end p-8">
                <div className="text-white space-y-2">
                  <span className="px-3 py-1 rounded-full bg-[#00B8D9] text-[#0B1F35] text-[10px] font-black uppercase tracking-wider">
                    Factory Unit • Udaipur
                  </span>
                  <h3 className="font-poppins font-bold text-xl text-white">In-House Manufacturing Facility</h3>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    State-of-the-art high-frequency fabric welding, CNC cutting & heavy structural steel fabrication facility in Udaipur, Rajasthan.
                  </p>
                </div>
              </div>

              {/* Floating Badge on Image */}
              <div className="absolute top-4 right-4 bg-[#061322]/90 backdrop-blur-md text-white border border-[#00B8D9]/40 px-4 py-2 rounded-2xl shadow-xl flex items-center space-x-2 text-xs font-bold">
                <Sparkles className="w-4 h-4 text-[#FFB703]" />
                <span>Pan-India Dispatch</span>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Engineering Capabilities 4-Pillar Grid */}
      <section className="bg-[#061322] text-white py-20 relative overflow-hidden border-y border-white/10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00B8D9]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FFB703]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#00B8D9] flex items-center justify-center space-x-1.5">
              <Sparkles className="w-4 h-4 text-[#FFB703]" />
              <span>Manufacturing Excellence</span>
            </span>
            <h2 className="font-poppins font-black text-3xl sm:text-5xl text-white">
              End-to-End Architectural Infrastructure
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#00B8D9] via-[#FFB703] to-[#d946ef] mx-auto rounded-full" />
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
              We handle every phase of tensile structure execution under one roof to guarantee precision, engineering compliance, and longevity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {engineeringCapabilities.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className={`p-8 rounded-3xl ${item.bg} border ${item.border} ${item.glow} shadow-2xl transition-all duration-300 flex flex-col justify-between space-y-6 relative overflow-hidden group`}
                >
                  <span className="absolute -top-4 -right-2 font-poppins font-black text-7xl text-white/5 pointer-events-none select-none group-hover:text-white/10 transition-colors">
                    {item.number}
                  </span>

                  <div className="space-y-5">
                    <div className="flex items-center justify-between">
                      <div className={`w-14 h-14 rounded-2xl ${item.iconBg} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                        <IconComp className="w-7 h-7" />
                      </div>
                      <span className={`text-[9px] font-extrabold px-2.5 py-1 rounded-full border ${item.badgeColor} uppercase tracking-wider`}>
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="font-poppins font-bold text-lg text-white group-hover:text-[#00B8D9] transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs text-gray-300 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-bold text-gray-400 group-hover:text-white transition-colors">
                    <span>Precision Standard</span>
                    <span className="text-xs">✦</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Architectural Fabric Science Spotlight Section (NEW) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#00B8D9]">Material Innovation</span>
          <h2 className="font-poppins font-extrabold text-2xl sm:text-4xl text-[#0B1F35]">
            World-Class Architectural Membrane Technology
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00B8D9] to-[#FFB703] mx-auto rounded-full" />
          <p className="text-gray-600 text-xs sm:text-sm">
            We source non-yellowing, high-tensile coated fabrics engineered for all Indian climatic extremes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {fabricSpotlight.map((fab, idx) => {
            const IconC = fab.icon;
            return (
              <motion.div 
                key={idx}
                whileHover={{ y: -6 }}
                className="p-8 rounded-3xl bg-white border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300 space-y-6 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${fab.color} text-white flex items-center justify-center shadow-md`}>
                      <IconC className="w-6 h-6" />
                    </div>
                    <span className={`text-[10px] font-bold px-3 py-1 rounded-full border ${fab.badgeBg} uppercase`}>
                      {fab.lifespan}
                    </span>
                  </div>

                  <h3 className="font-poppins font-bold text-xl text-[#0B1F35]">
                    {fab.name}
                  </h3>

                  <ul className="space-y-2.5 pt-2">
                    {fab.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center space-x-2 text-xs text-gray-600">
                        <CheckCircle2 className="w-4 h-4 text-[#00B8D9] flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <span className="text-[11px] text-gray-500 font-medium">Verified Weatherproof Coating</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Turnkey Delivery Workflow */}
      <section className="bg-white py-20 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#00B8D9]">On-Time Execution</span>
            <h2 className="font-poppins font-extrabold text-2xl sm:text-4xl text-[#0B1F35]">
              How We Guarantee Turnkey Project Delivery
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm">
              Streamlined logistics, rigorous quality checks, and site engineer coordination ensure flawless execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-gray-200 space-y-4 hover:shadow-xl transition-all">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-[#00B8D9]/15 text-[#00B8D9] flex items-center justify-center">
                  <Truck className="w-6 h-6" />
                </div>
                <span className="text-xs font-black text-gray-400">STEP 01</span>
              </div>
              <h3 className="font-poppins font-bold text-base text-[#0B1F35]">All India Delivery</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                We dispatch high-grade membrane rolls and structural steel frameworks across India without delay.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-gray-200 space-y-4 hover:shadow-xl transition-all">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-[#FFB703]/15 text-[#FFB703] flex items-center justify-center">
                  <PackageCheck className="w-6 h-6" />
                </div>
                <span className="text-xs font-black text-gray-400">STEP 02</span>
              </div>
              <h3 className="font-poppins font-bold text-base text-[#0B1F35]">Modular Ready Kits</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                For car parking, walkways, and gazebo orders, we engineer modular pre-fit kits for rapid assembly.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-gray-200 space-y-4 hover:shadow-xl transition-all">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-[#10b981]/15 text-[#10b981] flex items-center justify-center">
                  <Wrench className="w-6 h-6" />
                </div>
                <span className="text-xs font-black text-gray-400">STEP 03</span>
              </div>
              <h3 className="font-poppins font-bold text-base text-[#0B1F35]">Site Support</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Our site engineers inspect foundation civil works and anchor bolt positioning before erection.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-gray-200 space-y-4 hover:shadow-xl transition-all">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-[#d946ef]/15 text-[#d946ef] flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <span className="text-xs font-black text-gray-400">STEP 04</span>
              </div>
              <h3 className="font-poppins font-bold text-base text-[#0B1F35]">Protective Packing</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Membranes are wrapped in double-layer protective sheets to prevent abrasion during transport.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Mission, Vision & Core Values Dark Glass Cards */}
      <section className="bg-[#061322] text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#00B8D9]">Core Principles</span>
            <h2 className="font-poppins font-extrabold text-2xl sm:text-4xl text-white">
              Our Vision, Values & Strategic Mission
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#00B8D9] to-[#FFB703] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {MISSION_VISION_VALUES.map((item, idx) => {
              const IconV = valueIcons[idx % valueIcons.length];
              return (
                <motion.div 
                  key={idx} 
                  whileHover={{ y: -6 }}
                  className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md text-white space-y-4 hover:bg-white/10 hover:border-[#00B8D9]/40 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#00B8D9] to-[#008BA4] text-white flex items-center justify-center shadow-lg">
                    <IconV className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-extrabold text-[#00B8D9] uppercase tracking-widest block">
                    Pillar {idx + 1}
                  </span>
                  <h3 className="font-poppins font-bold text-xl text-white">{item.title}</h3>
                  <p className="text-xs text-gray-300 leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* High-Impact Bottom CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="bg-gradient-to-r from-[#061322] via-[#0B1F35] to-[#123B63] rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 border border-[#00B8D9]/40">
          
          <div className="space-y-3 max-w-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#00B8D9] flex items-center space-x-1.5">
              <Sparkles className="w-4 h-4 text-[#FFB703]" />
              <span>Ready To Upgrade Your Space?</span>
            </span>
            <h2 className="font-poppins font-black text-2xl sm:text-4xl text-white leading-tight">
              Request Architectural Consultation & Site Estimate
            </h2>
            <p className="text-gray-300 text-xs sm:text-sm">
              Contact our engineering office in Udaipur for free site measurement estimates, structural CAD consultation, and direct factory pricing across India.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
            <Link 
              to="/contact-us.htm"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#00B8D9] to-[#008BA4] hover:from-[#FFB703] hover:to-[#d97706] text-[#0B1F35] font-poppins font-black text-xs uppercase tracking-wider shadow-[0_0_25px_rgba(0,184,217,0.4)] transition-all duration-300 flex items-center justify-center space-x-2 border border-white/30"
            >
              <span>Contact Engineers</span>
              <ArrowRight className="w-4 h-4 text-[#0B1F35]" />
            </Link>

            <a 
              href="tel:+919887889777"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 border border-white/20 text-white font-poppins font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 hover:bg-white/20 transition-colors"
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

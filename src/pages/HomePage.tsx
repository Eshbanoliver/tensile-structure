import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle, 
  Sparkles, 
  ShieldCheck, 
  Target, 
  Eye, 
  Flag, 
  Star, 
  Calendar, 
  ChevronRight,
  Maximize2,
  PhoneCall,
  Send
} from 'lucide-react';
import { 
  COMPANY_INFO, 
  HERO_SLIDERS, 
  PRODUCTS_LIST, 
  PROJECT_GALLERY, 
  TESTIMONIALS, 
  BLOGS_LIST, 
  STATISTICS_COUNTERS,
  MISSION_VISION_VALUES 
} from '../data/websiteData';
import { EnquiryModal } from '../components/EnquiryModal';
import { AnimatedCounter } from '../components/AnimatedCounter';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/bundle';

// Ensure component function interop for Vite
const SwiperComponent: any = (Swiper as any)?.default || Swiper;
const SwiperSlideComponent: any = (SwiperSlide as any)?.default || SwiperSlide;

export const HomePage: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<string | undefined>(undefined);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeGalleryImage, setActiveGalleryImage] = useState<string | null>(null);

  const openQuoteModal = (prodName?: string) => {
    setSelectedProduct(prodName);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-bgLight text-textDark overflow-x-hidden pt-20 lg:pt-28">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[550px] lg:h-[720px] bg-primary">
        <SwiperComponent
          modules={[Autoplay, EffectFade, Navigation, Pagination]}
          effect="fade"
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          loop
          className="w-full h-full text-white"
        >
          {HERO_SLIDERS.map((slide) => (
            <SwiperSlideComponent key={slide.id}>
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
                        onClick={() => openQuoteModal(slide.title)}
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
            </SwiperSlideComponent>
          ))}
        </SwiperComponent>
      </section>

      {/* 2. ABOUT SECTION */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src="https://www.futuretensilestructure.com/uploaded-files/page-images/thumbs/Home-thumbs-440X440.jpg"
                  alt="Top Tensile Structure Manufacturers in Udaipur"
                  className="w-full h-[450px] object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
              </div>

              <div className="absolute -bottom-6 -right-4 sm:right-6 bg-primary text-white p-6 rounded-2xl shadow-2xl border border-white/20 backdrop-blur-xl max-w-[200px] text-center">
                <div className="font-poppins font-black text-4xl text-highlight">
                  {COMPANY_INFO.experienceYears}
                </div>
                <div className="text-xs font-medium text-gray-300 uppercase tracking-wider mt-1">
                  Years Of Experience
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-accent flex items-center space-x-2">
                  <span className="w-8 h-0.5 bg-accent" />
                  <span>About Future Tensile Structure</span>
                </span>
                <h2 className="font-poppins font-extrabold text-2xl sm:text-4xl text-primary mt-2 leading-tight">
                  Top Tensile Structure <span className="text-accent">in Udaipur</span>
                </h2>
              </div>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Welcome to Future Tensile Structure Pvt. Ltd., where we don't just build roofs; we craft the skyline of your property. For over a decade, our team has been the quiet force transforming ordinary open spaces into functional, architectural art. We are dedicated to creating environments that blend safety, comfort, and modern style seamlessly. Our <strong>Top Tensile Structure in Udaipur</strong> are built to support the needs of homes, businesses, and public spaces alike.
              </p>

              <h3 className="font-poppins font-bold text-lg text-primary border-l-4 border-accent pl-3">
                Top Tensile Structure Manufacturers in Udaipur
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                Designing structures for outdoor use requires more than just measurements; it requires understanding how weather impacts materials over time. As <strong>Top Tensile Structure Manufacturers in Udaipur</strong>, we focus on building products that fit naturally into your daily life.
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-medium text-gray-700">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span><strong>Plain Tensile Structure</strong>: Simple, effective coverage for utility areas.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span><strong>Car Parking Tensile Structure</strong>: Heavy-duty shades for vehicle paint protection.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span><strong>Creators Tensile</strong>: Custom artistic shapes matching architectural vision.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span><strong>Commercial Gazebo</strong>: Modular units for outdoor resort dining.</span>
                </li>
              </ul>

              <div className="pt-2">
                <Link
                  to="/about-us.htm"
                  className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-primary text-white font-poppins font-semibold text-xs hover:bg-secondary transition-colors shadow-md"
                >
                  <span>Read Full Company Profile</span>
                  <ArrowRight className="w-4 h-4 text-accent" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. PRODUCT CATEGORIES FEATURE SHOWCASE */}
      <section className="py-16 bg-bgLight">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-100">
            <div className="relative rounded-2xl overflow-hidden h-72 lg:h-96">
              <img 
                src="https://www.futuretensilestructure.com/uploaded-files/category/images/thumbs/Tensile-Structure69aaa01f5b612-home-thumb-big.jpg"
                alt="Tensile Structure Manufacturers in Udaipur"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-4 left-4 bg-primary/80 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-lg font-semibold">
                Tensile Structure
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-poppins font-bold text-2xl text-primary">Tensile Structure</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Tired of dull concrete slabs boxing in your beautiful open spaces? Modern architecture demands smart, flexible shading that breathes life into any environment. At Future Tensile Structure Pvt. Ltd., we make dynamic Tensile Structure in Udaipur that stretch across large areas without column obstruction...
              </p>
              <Link 
                to="/tensile-structure.htm"
                className="inline-flex items-center space-x-2 text-accent font-poppins font-bold text-xs hover:underline"
              >
                <span>Explore Details & Specs</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-100">
            <div className="order-last lg:order-first space-y-4">
              <h3 className="font-poppins font-bold text-2xl text-primary">Car Parking Tensile Structure</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Leaving cars out in the open sun is a bad idea. Rain, heat, and dust ruin expensive paint jobs faster than you might think. You need a real shield. At Future Tensile Structure Pvt. Ltd., we provide premium Car Parking Tensile Structure in Udaipur that protect your vehicles from harsh weather...
              </p>
              <Link 
                to="/car-parking-tensile-structure.htm"
                className="inline-flex items-center space-x-2 text-accent font-poppins font-bold text-xs hover:underline"
              >
                <span>Explore Car Parking Shades</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="relative rounded-2xl overflow-hidden h-72 lg:h-96">
              <img 
                src="https://www.futuretensilestructure.com/uploaded-files/category/images/thumbs/Car-Parking-Tensile-Structure69aa88f715548-home-thumb-big.jpg"
                alt="Car Parking Tensile Structure"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-4 left-4 bg-primary/80 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-lg font-semibold">
                Car Parking Shade
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. PRODUCTS CATALOG SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-accent">Our Turnkey Products</span>
            <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl text-primary">
              Our Products
            </h2>
            <div className="w-16 h-1 bg-highlight mx-auto rounded-full" />
            <p className="text-gray-600 text-sm leading-relaxed">
              We specialize in designing high-performance tensile structures that blend aesthetic elegance with industrial-grade durability. From iconic Stadium Tensile Structures to versatile Gazebos and Domes, our turnkey solutions provide superior weather protection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRODUCTS_LIST.slice(0, 8).map((product) => (
              <motion.div
                key={product.id}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 flex flex-col group"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <button
                      onClick={() => openQuoteModal(product.name)}
                      className="w-full py-2 bg-accent text-primary font-poppins font-bold text-xs rounded-lg shadow"
                    >
                      Enquire Factory Price
                    </button>
                  </div>
                  <span className="absolute top-3 left-3 bg-primary/90 text-accent text-[10px] uppercase font-bold px-2.5 py-1 rounded-md backdrop-blur-md">
                    {product.category}
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="font-poppins font-bold text-base text-primary group-hover:text-accent transition-colors line-clamp-1">
                      {product.name}
                    </h3>
                    <p className="text-gray-500 text-xs mt-2 line-clamp-3 leading-relaxed">
                      {product.shortDesc}
                    </p>
                  </div>

                  <Link
                    to={`/${product.slug}.htm`}
                    className="inline-flex items-center space-x-1.5 text-secondary font-poppins font-bold text-xs hover:text-accent transition-colors pt-2 border-t border-gray-100"
                  >
                    <span>View Product Specs</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/tensile-structure.htm"
              className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-xl bg-primary text-white font-poppins font-bold text-sm shadow-xl hover:bg-secondary transition-all"
            >
              <span>Explore All 31 Product Categories</span>
              <ArrowRight className="w-4 h-4 text-accent" />
            </Link>
          </div>

        </div>
      </section>

      {/* 5. MISSION VISION VALUES SECTION */}
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

      {/* 6. PROJECTS & GALLERY SHOWCASE */}
      <section className="py-20 bg-bgLight">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-accent">Realized Creations</span>
            <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl text-primary">
              Our Project Showcase
            </h2>
            <div className="w-16 h-1 bg-highlight mx-auto rounded-full" />
            <p className="text-gray-600 text-sm leading-relaxed">
              Explore a curated portfolio of completed architectural projects that highlight our commitment to engineering excellence across commercial, hospitality, and public sectors nationwide.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECT_GALLERY.map((proj) => (
              <div 
                key={proj.id}
                className="group relative rounded-2xl overflow-hidden shadow-lg border border-gray-200 cursor-pointer h-64"
                onClick={() => setActiveGalleryImage(proj.bigImage)}
              >
                <img 
                  src={proj.image} 
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity p-5 flex flex-col justify-end">
                  <span className="text-[10px] text-accent font-bold uppercase tracking-wider">{proj.category}</span>
                  <h3 className="font-poppins font-bold text-white text-base mt-1 flex items-center justify-between">
                    <span>{proj.title}</span>
                    <Maximize2 className="w-4 h-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {activeGalleryImage && (
            <div 
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
              onClick={() => setActiveGalleryImage(null)}
            >
              <div className="relative max-w-4xl max-h-[90vh]">
                <img 
                  src={activeGalleryImage} 
                  alt="Project Preview"
                  className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl object-contain"
                />
                <p className="text-center text-xs text-gray-400 mt-2">Click anywhere to close</p>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* 7. STATISTICS COUNTER */}
      <section className="py-16 bg-primary text-white border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {STATISTICS_COUNTERS.map((stat, idx) => (
              <div key={idx} className="space-y-2 p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="font-poppins font-black text-4xl sm:text-5xl text-accent">
                  <AnimatedCounter end={stat.count} duration={2.5} suffix={stat.suffix} />
                </div>
                <div className="text-xs font-semibold text-gray-300 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS SECTION */}
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

      {/* 9. BLOGS SECTION */}
      <section className="py-20 bg-bgLight">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-accent">Knowledge Hub</span>
            <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl text-primary">
              Latest Blogs & Engineering Insights
            </h2>
            <div className="w-16 h-1 bg-highlight mx-auto rounded-full" />
            <p className="text-gray-600 text-sm leading-relaxed">
              Stay updated with the most recent innovations shaping modern architectural landscapes and outdoor shading solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOGS_LIST.map((blog) => (
              <div key={blog.id} className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 flex flex-col group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={blog.image} 
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-accent text-primary text-[10px] font-bold uppercase px-2.5 py-1 rounded-md">
                    {blog.category}
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-2">
                    <span className="text-[11px] text-gray-400 flex items-center space-x-1">
                      <Calendar className="w-3 h-3 text-accent" />
                      <span>{blog.date}</span>
                    </span>
                    <h3 className="font-poppins font-bold text-sm text-primary group-hover:text-accent transition-colors line-clamp-2">
                      {blog.title}
                    </h3>
                  </div>

                  <Link 
                    to={`/blog/${blog.slug}.htm`}
                    className="inline-flex items-center space-x-1 text-xs text-secondary font-bold hover:text-accent pt-2 border-t border-gray-100"
                  >
                    <span>Read Article</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 10. CONTACT CTA BANNER */}
      <section className="py-16 bg-gradient-to-r from-primary via-secondary to-primary text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="font-poppins font-extrabold text-2xl sm:text-4xl">
            Ready to Transform Your Outdoor Space?
          </h2>
          <p className="text-gray-300 text-sm max-w-xl mx-auto">
            Get in touch with Future Tensile Structure Pvt. Ltd. for custom design consultation, site measurement, and competitive factory quotes.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => openQuoteModal()}
              className="px-8 py-3.5 rounded-xl bg-accent text-primary font-poppins font-bold text-sm shadow-glow-accent hover:scale-105 transition-all flex items-center space-x-2"
            >
              <Send className="w-4 h-4" />
              <span>Get Instant Factory Quote</span>
            </button>
            <a
              href={`tel:${COMPANY_INFO.phones[0].raw}`}
              className="px-8 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white font-poppins font-semibold text-sm hover:bg-white/20 transition-all flex items-center space-x-2"
            >
              <PhoneCall className="w-4 h-4 text-highlight" />
              <span>Call +91-988-788-9777</span>
            </a>
          </div>
        </div>
      </section>

      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productName={selectedProduct}
      />

    </div>
  );
};

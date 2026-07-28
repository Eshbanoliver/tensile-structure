import React, { useState } from 'react';
import { PROJECT_GALLERY } from '../data/websiteData';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { EnquiryModal } from '../components/EnquiryModal';
import { Maximize2, Sparkles, Filter, X, Send } from 'lucide-react';

export const ProjectsPage: React.FC = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [activeTitle, setActiveTitle] = useState<string>('');
  const [filter, setFilter] = useState<string>('All');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = ['All', 'Parking Shades', 'Polycarbonate', 'Gazebos', 'Membrane Canopies'];

  const filteredProjects = filter === 'All' 
    ? PROJECT_GALLERY 
    : PROJECT_GALLERY.filter(p => p.category.toLowerCase().includes(filter.toLowerCase()) || filter.toLowerCase().includes(p.category.toLowerCase()));

  const openLightbox = (image: string, title: string) => {
    setActiveImage(image);
    setActiveTitle(title);
  };

  return (
    <div className="min-h-screen bg-bgLight pt-24 lg:pt-32 pb-20">
      <SEO 
        title="Completed Tensile Structure Projects Gallery | Future Tensile Structure Udaipur"
        description="View our portfolio of architectural tensile structures, car parking shade installations, resort gazebos, and commercial entrance canopies installed across India."
        keywords="Tensile Structure Projects, Car Parking Shades Gallery Udaipur, Tensile Roof Installations Rajasthan, Gazebo Tensile Portfolio"
      />

      {/* Hero Banner */}
      <section className="bg-primary text-white py-14 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary opacity-90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Breadcrumbs items={[{ label: 'Projects Gallery' }]} />

          <div className="max-w-3xl space-y-3">
            <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Pan-India Project Portfolio</span>
            </span>
            <h1 className="font-poppins font-extrabold text-3xl sm:text-5xl text-white">
              Our Architectural Projects
            </h1>
            <p className="text-gray-300 text-sm leading-relaxed">
              Explore our portfolio of completed tensile structure installations across commercial complexes, resort gazebos, parking bays, and public walkways.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-gray-200">
          <div className="flex items-center space-x-2 text-xs font-bold text-gray-500 uppercase tracking-wider">
            <Filter className="w-4 h-4 text-accent" />
            <span>Filter Gallery:</span>
          </div>

          <span className="text-xs text-gray-500">
            Showing <strong className="text-primary font-bold">{filteredProjects.length}</strong> Completed Projects
          </span>
        </div>

        <div className="flex flex-wrap justify-start gap-2 mt-4">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-5 py-2.5 rounded-xl text-xs font-poppins font-bold uppercase tracking-wider transition-all ${
                filter === c 
                  ? 'bg-accent text-primary shadow-glow-accent scale-105' 
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((proj) => (
            <div 
              key={proj.id}
              onClick={() => openLightbox(proj.bigImage, proj.title)}
              className="group relative rounded-2xl overflow-hidden shadow-xl border border-gray-200 cursor-pointer h-80 bg-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <img 
                src={proj.image} 
                alt={proj.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent opacity-85 group-hover:opacity-95 transition-opacity p-6 flex flex-col justify-end">
                <span className="text-[10px] text-accent font-bold uppercase tracking-widest bg-accent/10 border border-accent/20 px-2.5 py-0.5 rounded self-start mb-1">
                  {proj.category}
                </span>
                <h3 className="font-poppins font-bold text-white text-lg mt-1 flex items-center justify-between">
                  <span>{proj.title}</span>
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary transition-colors flex-shrink-0 ml-2">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActiveImage(null)}
        >
          <div 
            className="relative max-w-5xl max-h-[90vh] bg-primary rounded-3xl p-4 border border-white/10 overflow-hidden shadow-2xl space-y-3"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between text-white px-2">
              <h4 className="font-poppins font-bold text-base text-accent">{activeTitle}</h4>
              <button 
                onClick={() => setActiveImage(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-accent hover:text-primary flex items-center justify-center text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="rounded-2xl overflow-hidden max-h-[75vh]">
              <img 
                src={activeImage} 
                alt={activeTitle}
                className="max-w-full max-h-[75vh] w-auto h-auto mx-auto shadow-2xl object-contain"
              />
            </div>

            <div className="flex items-center justify-between text-xs text-gray-400 px-2 pt-1">
              <span>Future Tensile Structure Pvt. Ltd. Portfolio</span>
              <button
                onClick={() => {
                  setActiveImage(null);
                  setIsModalOpen(true);
                }}
                className="px-4 py-1.5 rounded-lg bg-accent text-primary font-bold hover:opacity-90 flex items-center space-x-1"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Enquire Similar Project</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Callout Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="bg-gradient-to-r from-secondary to-primary rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-accent">Turnkey Project Execution</span>
            <h2 className="font-poppins font-extrabold text-2xl sm:text-4xl text-white">
              Have a Similar Tensile Project in Mind?
            </h2>
            <p className="text-gray-300 text-xs sm:text-sm">
              Our site engineers and CAD design team are ready to inspect your site location and prepare tailored layout proposals.
            </p>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="px-8 py-4 rounded-xl bg-accent text-primary font-poppins font-bold text-xs shadow-glow-accent hover:opacity-90 transition-opacity flex items-center justify-center space-x-2 whitespace-nowrap"
          >
            <Send className="w-4 h-4" />
            <span>Get Immediate Project Quote</span>
          </button>
        </div>
      </section>

      {/* Enquiry Modal */}
      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productName="Custom Tensile Project Inquiry"
      />
    </div>
  );
};

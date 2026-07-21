import React, { useState } from 'react';
import { PROJECT_GALLERY } from '../data/websiteData';
import { Maximize2, Sparkles } from 'lucide-react';

export const ProjectsPage: React.FC = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Parking Shades', 'Polycarbonate'];

  const filteredProjects = filter === 'All' 
    ? PROJECT_GALLERY 
    : PROJECT_GALLERY.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-bgLight pt-24 lg:pt-32 pb-20">
      
      {/* Banner */}
      <section className="bg-primary text-white py-14 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-accent flex items-center justify-center space-x-2">
            <Sparkles className="w-4 h-4" />
            <span>Pan-India Project Showcase</span>
          </span>
          <h1 className="font-poppins font-extrabold text-3xl sm:text-5xl">
            Our Architectural Projects
          </h1>
          <p className="text-gray-300 text-sm max-w-2xl mx-auto">
            Explore our portfolio of completed tensile structure installations across commercial complexes, resort gazebos, parking bays, and public walkways.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-center space-x-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-5 py-2 rounded-xl text-xs font-poppins font-semibold transition-all ${
                filter === c ? 'bg-accent text-primary shadow-glow-accent' : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((proj) => (
            <div 
              key={proj.id}
              onClick={() => setActiveImage(proj.bigImage)}
              className="group relative rounded-2xl overflow-hidden shadow-xl border border-gray-200 cursor-pointer h-72"
            >
              <img 
                src={proj.image} 
                alt={proj.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity p-6 flex flex-col justify-end">
                <span className="text-[10px] text-accent font-bold uppercase tracking-wider">{proj.category}</span>
                <h3 className="font-poppins font-bold text-white text-base mt-1 flex items-center justify-between">
                  <span>{proj.title}</span>
                  <Maximize2 className="w-4 h-4 text-accent" />
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setActiveImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh]">
            <img 
              src={activeImage} 
              alt="Project High Resolution"
              className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl object-contain"
            />
            <p className="text-center text-xs text-gray-400 mt-2">Click anywhere to close</p>
          </div>
        </div>
      )}

    </div>
  );
};

import React, { useState } from 'react';
import { Maximize2 } from 'lucide-react';
import { PROJECT_GALLERY } from '../../data/websiteData';

export const ProjectsSection: React.FC = () => {
  const [activeGalleryImage, setActiveGalleryImage] = useState<string | null>(null);

  return (
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
  );
};

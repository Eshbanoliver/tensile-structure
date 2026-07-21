import React, { useState } from 'react';
import { Play, Video, X } from 'lucide-react';

export const VideosSection: React.FC = () => {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  const videos = [
    {
      id: "v1",
      title: "Car Parking Tensile Structure Installation",
      desc: "Watch our site engineering team erect a multi-car parking shade in record time.",
      thumbnail: "https://www.futuretensilestructure.com/uploaded-files/banner-image/thumbs/Car-Parking-Tensile-Structure-thumbs-700X337.webp",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: "v2",
      title: "Walkway Tensile Canopy Fabrication",
      desc: "Detailed video walkthrough of high-frequency PVC membrane seam welding.",
      thumbnail: "https://www.futuretensilestructure.com/uploaded-files/banner-image/thumbs/Walkway-Tensile-Structure-thumbs-700X337.webp",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: "v3",
      title: "Resort Gazebo Tensile Structure Showcase",
      desc: "360-degree architectural view of luxury white gazebo shades installed at heritage resorts.",
      thumbnail: "https://www.futuretensilestructure.com/uploaded-files/banner-image/thumbs/Gazebo-Tensile-Structure-thumbs-700X337.webp",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-accent flex items-center justify-center space-x-1">
            <Video className="w-4 h-4" />
            <span>Video Demonstrations</span>
          </span>
          <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl text-primary">
            Engineering & Site Installation Videos
          </h2>
          <div className="w-16 h-1 bg-highlight mx-auto rounded-full" />
          <p className="text-gray-600 text-sm leading-relaxed">
            Watch real footage of our manufacturing processes, membrane tensioning techniques, and site installation execution across India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((vid) => (
            <div 
              key={vid.id}
              onClick={() => setActiveVideoId(vid.embedUrl)}
              className="bg-bgLight rounded-2xl overflow-hidden shadow-lg border border-gray-200 group cursor-pointer flex flex-col justify-between"
            >
              <div className="relative h-52 overflow-hidden">
                <img 
                  src={vid.thumbnail} 
                  alt={vid.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/20 transition-colors flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-accent text-primary flex items-center justify-center shadow-glow-accent group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-current ml-1" />
                  </div>
                </div>
              </div>

              <div className="p-5 space-y-2">
                <h3 className="font-poppins font-bold text-base text-primary group-hover:text-accent transition-colors">
                  {vid.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {vid.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Video Player Modal */}
        {activeVideoId && (
          <div 
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setActiveVideoId(null)}
          >
            <div className="relative w-full max-w-3xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl">
              <button
                onClick={() => setActiveVideoId(null)}
                className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/40"
              >
                <X className="w-5 h-5" />
              </button>
              <iframe
                src={activeVideoId}
                title="Tensile Video Player"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

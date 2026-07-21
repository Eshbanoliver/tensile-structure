import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ChevronRight } from 'lucide-react';
import { BLOGS_LIST } from '../../data/websiteData';

export const BlogsSection: React.FC = () => {
  return (
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
  );
};

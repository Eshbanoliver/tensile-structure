import React from 'react';
import { Link } from 'react-router-dom';
import { BLOGS_LIST } from '../data/websiteData';
import { Calendar, ChevronRight, Sparkles } from 'lucide-react';

export const BlogsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-bgLight pt-24 lg:pt-32 pb-20">
      
      {/* Header Banner */}
      <section className="bg-primary text-white py-14 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-accent flex items-center justify-center space-x-2">
            <Sparkles className="w-4 h-4" />
            <span>Articles & Technical Guides</span>
          </span>
          <h1 className="font-poppins font-extrabold text-3xl sm:text-5xl">
            Latest Blogs & Engineering Articles
          </h1>
          <p className="text-gray-300 text-sm max-w-2xl mx-auto">
            Stay informed with expert guides on tensile structure maintenance, resort upgrades, and commercial value enhancements.
          </p>
        </div>
      </section>

      {/* Blog Directory */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOGS_LIST.map((blog) => (
            <div key={blog.id} className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 flex flex-col justify-between group">
              <div>
                <div className="relative h-52 overflow-hidden">
                  <img 
                    src={blog.image} 
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-accent text-primary text-[10px] font-bold uppercase px-2.5 py-1 rounded-md">
                    {blog.category}
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <span className="text-[11px] text-gray-400 flex items-center space-x-1">
                    <Calendar className="w-3.5 h-3.5 text-accent" />
                    <span>{blog.date}</span>
                  </span>
                  <h2 className="font-poppins font-bold text-base text-primary group-hover:text-accent transition-colors line-clamp-2">
                    {blog.title}
                  </h2>
                  <p className="text-xs text-gray-500 line-clamp-3 leading-relaxed">
                    {blog.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-gray-100">
                <Link 
                  to={`/blog/${blog.slug}.htm`}
                  className="inline-flex items-center space-x-1 text-xs text-secondary font-bold hover:text-accent"
                >
                  <span>Read Maintenance Guide</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

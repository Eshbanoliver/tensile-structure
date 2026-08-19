import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { BLOGS_LIST } from '../data/websiteData';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Calendar, ChevronRight, Sparkles, User, Search, BookOpen, Clock } from 'lucide-react';

export const BlogsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBlogs = useMemo(() => {
    return BLOGS_LIST.filter((b) => 
      b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const featuredBlog = BLOGS_LIST[0];

  return (
    <div className="min-h-screen bg-bgLight pt-24 lg:pt-32 pb-20">
      <SEO 
        title="Tensile Structure Maintenance & Design Guides | Blogs - Best Tensile Structure"
        description="Expert articles and technical guides on tensile membrane structure maintenance, gazebo shade design, resort roofing upgrades, and architectural fabric care."
        keywords="Tensile Structure Maintenance Guide, Tensile Shade Blogs, Architectural Membrane Guide Rajasthan, Best Tensile Articles"
      />

      {/* Header Banner */}
      <section className="bg-primary text-white py-14 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary opacity-90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Breadcrumbs items={[{ label: 'Blogs & Technical Guides' }]} />

          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>Articles & Technical Knowledge</span>
              </span>
              <h1 className="font-poppins font-extrabold text-3xl sm:text-5xl text-white">
                Latest Blogs & Maintenance Guides
              </h1>
              <p className="text-gray-300 text-sm leading-relaxed">
                Stay informed with expert guides on tensile structure maintenance, resort upgrades, and commercial property value enhancements.
              </p>
            </div>

            {/* Search Input */}
            <div className="w-full md:w-80 relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 text-xs focus:outline-none focus:border-accent transition-all"
              />
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        
        {/* Featured Spotlight Card */}
        {featuredBlog && !searchQuery && (
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 grid grid-cols-1 lg:grid-cols-12 gap-0 group">
            <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-auto overflow-hidden">
              <img 
                src={featuredBlog.image} 
                alt={featuredBlog.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <span className="absolute top-4 left-4 bg-accent text-primary text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-xl shadow-lg">
                Featured Guide
              </span>
            </div>

            <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-4 text-xs text-gray-500 font-semibold">
                  <span className="flex items-center space-x-1.5">
                    <Calendar className="w-4 h-4 text-accent" />
                    <span>{featuredBlog.date}</span>
                  </span>
                  <span className="flex items-center space-x-1.5">
                    <User className="w-4 h-4 text-accent" />
                    <span>{featuredBlog.author}</span>
                  </span>
                </div>

                <h2 className="font-poppins font-extrabold text-2xl text-primary group-hover:text-accent transition-colors leading-snug">
                  {featuredBlog.title}
                </h2>

                <p className="text-gray-600 text-xs sm:text-sm line-clamp-4 leading-relaxed">
                  {featuredBlog.excerpt}
                </p>
              </div>

              <Link
                to={`/blog/${featuredBlog.slug}.htm`}
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-primary hover:bg-accent text-white hover:text-primary font-poppins font-bold text-xs uppercase tracking-wider transition-all self-start shadow"
              >
                <span>Read Complete Guide</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}

        {/* Blog Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-gray-200 pb-4">
            <h3 className="font-poppins font-bold text-xl text-primary flex items-center space-x-2">
              <BookOpen className="w-5 h-5 text-accent" />
              <span>All Articles ({filteredBlogs.length})</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredBlogs.map((blog) => (
              <div key={blog.id} className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300">
                <div>
                  <div className="relative h-56 overflow-hidden bg-gray-100">
                    <img 
                      src={blog.image} 
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-primary/95 text-accent text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border border-white/10">
                      {blog.category}
                    </span>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center space-x-3 text-[11px] text-gray-400">
                      <span className="flex items-center space-x-1">
                        <Calendar className="w-3.5 h-3.5 text-accent" />
                        <span>{blog.date}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Clock className="w-3.5 h-3.5 text-highlight" />
                        <span>5 min read</span>
                      </span>
                    </div>

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
                    className="inline-flex items-center space-x-1.5 text-xs text-secondary font-bold hover:text-accent transition-colors"
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
    </div>
  );
};

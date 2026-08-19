import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS_LIST, BLOGS_LIST } from '../data/websiteData';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Search, FileText, Package, Globe, ArrowRight, Sparkles } from 'lucide-react';

export const SitemapPage: React.FC = () => {
  const [query, setQuery] = useState('');

  const mainPages = [
    { name: 'Home Page', path: '/', desc: 'Primary landing page with product showcases and testimonials' },
    { name: 'About Us', path: '/about-us.htm', desc: 'Company overview, manufacturing infrastructure, and credentials' },
    { name: 'Tensile Structure Catalog', path: '/tensile-structure.htm', desc: 'Complete directory of 31 tensile structure products' },
    { name: 'Projects Gallery', path: '/projects.htm', desc: 'Pan-India completed projects portfolio & lightbox gallery' },
    { name: 'Blogs & Articles', path: '/blogs.htm', desc: 'Technical maintenance guides and architectural articles' },
    { name: 'Contact Us', path: '/contact-us.htm', desc: 'Factory address, direct phones, map, and quote inquiry form' }
  ];

  const filteredMainPages = useMemo(() => {
    return mainPages.filter(p => p.name.toLowerCase().includes(query.toLowerCase()) || p.desc.toLowerCase().includes(query.toLowerCase()));
  }, [query]);

  const filteredProducts = useMemo(() => {
    return PRODUCTS_LIST.filter(p => p.name.toLowerCase().includes(query.toLowerCase()) || p.category.toLowerCase().includes(query.toLowerCase()));
  }, [query]);

  const filteredBlogs = useMemo(() => {
    return BLOGS_LIST.filter(b => b.title.toLowerCase().includes(query.toLowerCase()) || b.category.toLowerCase().includes(query.toLowerCase()));
  }, [query]);

  return (
    <div className="min-h-screen bg-bgLight pt-24 lg:pt-32 pb-20">
      <SEO 
        title="Website Sitemap | Index of Tensile Structure Pages & Products"
        description="Comprehensive index of all web pages, 31 tensile membrane products, and engineering blogs of Best Tensile Structure Pvt. Ltd. Udaipur."
        keywords="Tensile Structure Sitemap, Website Index, Tensile Products List Udaipur, Best Tensile Pages"
      />

      {/* Header Banner */}
      <section className="bg-primary text-white py-14 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary opacity-90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Breadcrumbs items={[{ label: 'Website Sitemap' }]} />

          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>Full Directory Index</span>
              </span>
              <h1 className="font-poppins font-extrabold text-3xl sm:text-5xl text-white">
                Website Sitemap & Navigation
              </h1>
              <p className="text-gray-300 text-sm leading-relaxed">
                Browse our complete site architecture including main service pages, product catalogs, and technical knowledge base.
              </p>
            </div>

            {/* Quick Filter Bar */}
            <div className="w-full md:w-80 relative">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Filter sitemap links..."
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 text-xs focus:outline-none focus:border-accent transition-all"
              />
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
            </div>
          </div>
        </div>
      </section>

      {/* Directory Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Main Pages */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-xl border border-gray-100 space-y-4">
            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <h2 className="font-poppins font-bold text-lg text-primary flex items-center space-x-2">
                <Globe className="w-5 h-5 text-accent" />
                <span>Main Pages</span>
              </h2>
              <span className="text-xs bg-bgLight px-2.5 py-1 rounded-full font-bold text-primary">
                {filteredMainPages.length}
              </span>
            </div>

            <ul className="space-y-3">
              {filteredMainPages.map((page, idx) => (
                <li key={idx} className="group">
                  <Link 
                    to={page.path}
                    className="block p-3 rounded-xl hover:bg-bgLight transition-colors space-y-1 border border-transparent hover:border-gray-200"
                  >
                    <div className="font-poppins font-bold text-xs text-primary group-hover:text-accent flex items-center justify-between">
                      <span>{page.name}</span>
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className="text-[11px] text-gray-500 leading-normal">{page.desc}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products List (31 Items) */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-xl border border-gray-100 space-y-4">
            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <h2 className="font-poppins font-bold text-lg text-primary flex items-center space-x-2">
                <Package className="w-5 h-5 text-highlight" />
                <span>Products Catalog</span>
              </h2>
              <span className="text-xs bg-bgLight px-2.5 py-1 rounded-full font-bold text-primary">
                {filteredProducts.length}
              </span>
            </div>

            <div className="max-h-[500px] overflow-y-auto pr-1 space-y-2">
              {filteredProducts.map((p) => (
                <Link
                  key={p.id}
                  to={`/${p.slug}.htm`}
                  className="flex items-center justify-between p-2.5 rounded-xl hover:bg-bgLight text-xs text-gray-700 hover:text-accent font-medium transition-colors border border-transparent hover:border-gray-200"
                >
                  <span className="truncate pr-2">• {p.name}</span>
                  <span className="text-[9px] bg-primary/5 text-secondary font-bold uppercase px-2 py-0.5 rounded flex-shrink-0">
                    {p.category}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Blogs Directory */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-xl border border-gray-100 space-y-4">
            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <h2 className="font-poppins font-bold text-lg text-primary flex items-center space-x-2">
                <FileText className="w-5 h-5 text-accent" />
                <span>Blogs & Guides</span>
              </h2>
              <span className="text-xs bg-bgLight px-2.5 py-1 rounded-full font-bold text-primary">
                {filteredBlogs.length}
              </span>
            </div>

            <ul className="space-y-3">
              {filteredBlogs.map((b) => (
                <li key={b.id}>
                  <Link 
                    to={`/blog/${b.slug}.htm`}
                    className="block p-3 rounded-xl hover:bg-bgLight transition-colors border border-transparent hover:border-gray-200 space-y-1"
                  >
                    <span className="text-[10px] font-bold text-accent uppercase tracking-wider">{b.category}</span>
                    <h3 className="font-poppins font-bold text-xs text-primary hover:text-accent line-clamp-2">
                      {b.title}
                    </h3>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>
    </div>
  );
};

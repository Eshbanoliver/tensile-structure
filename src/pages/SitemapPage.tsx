import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS_LIST, BLOGS_LIST } from '../data/websiteData';

export const SitemapPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-bgLight pt-24 lg:pt-32 pb-20">
      <section className="bg-primary text-white py-12 text-center">
        <h1 className="font-poppins font-extrabold text-3xl sm:text-4xl text-white">Website Sitemap</h1>
        <p className="text-xs text-gray-300 mt-2">Index of all pages, product categories, and blogs</p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow border border-gray-100 space-y-3">
            <h2 className="font-poppins font-bold text-lg text-primary border-b pb-2">Main Pages</h2>
            <ul className="space-y-2 text-xs text-gray-700">
              <li><Link to="/" className="hover:text-accent">Home</Link></li>
              <li><Link to="/about-us.htm" className="hover:text-accent">About Us</Link></li>
              <li><Link to="/tensile-structure.htm" className="hover:text-accent">Tensile Structure</Link></li>
              <li><Link to="/projects.htm" className="hover:text-accent">Projects</Link></li>
              <li><Link to="/blogs.htm" className="hover:text-accent">Blogs</Link></li>
              <li><Link to="/contact-us.htm" className="hover:text-accent">Contact Us</Link></li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow border border-gray-100 space-y-3">
            <h2 className="font-poppins font-bold text-lg text-primary border-b pb-2">Products (31 Items)</h2>
            <ul className="space-y-1.5 text-xs text-gray-700 max-h-[350px] overflow-y-auto">
              {PRODUCTS_LIST.map((p) => (
                <li key={p.id}>
                  <Link to={`/${p.slug}.htm`} className="hover:text-accent">• {p.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow border border-gray-100 space-y-3">
            <h2 className="font-poppins font-bold text-lg text-primary border-b pb-2">Blogs & Articles</h2>
            <ul className="space-y-2 text-xs text-gray-700">
              {BLOGS_LIST.map((b) => (
                <li key={b.id}>
                  <Link to={`/blog/${b.slug}.htm`} className="hover:text-accent">• {b.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

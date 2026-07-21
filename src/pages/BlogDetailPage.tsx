import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BLOGS_LIST } from '../data/websiteData';
import { Calendar, User, ArrowLeft, PhoneCall } from 'lucide-react';

export const BlogDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const cleanSlug = slug ? slug.replace('.htm', '') : '';
  const blog = BLOGS_LIST.find((b) => b.slug === cleanSlug) || BLOGS_LIST[0];

  return (
    <div className="min-h-screen bg-bgLight pt-24 lg:pt-32 pb-20">
      <section className="bg-primary text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blogs.htm" className="inline-flex items-center space-x-2 text-xs text-accent hover:underline mb-4">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Blogs</span>
          </Link>
          <span className="block text-xs font-bold uppercase tracking-widest text-highlight mb-1">{blog.category}</span>
          <h1 className="font-poppins font-extrabold text-2xl sm:text-4xl text-white leading-tight">
            {blog.title}
          </h1>
          <div className="flex items-center space-x-4 text-xs text-gray-300 mt-4">
            <span className="flex items-center space-x-1">
              <Calendar className="w-3.5 h-3.5 text-accent" />
              <span>{blog.date}</span>
            </span>
            <span className="flex items-center space-x-1">
              <User className="w-3.5 h-3.5 text-accent" />
              <span>By {blog.author}</span>
            </span>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-gray-100 space-y-8">
          <div className="rounded-2xl overflow-hidden shadow-lg h-72 sm:h-96">
            <img 
              src={blog.image} 
              alt={blog.title} 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose max-w-none text-gray-700 text-sm sm:text-base leading-relaxed space-y-4 whitespace-pre-line">
            {blog.content}
          </div>

          <div className="pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs font-semibold text-primary">
              Have questions about your tensile structure project?
            </div>
            <a
              href="tel:+919887889777"
              className="px-6 py-2.5 rounded-xl bg-accent text-primary font-poppins font-bold text-xs shadow hover:opacity-90 flex items-center space-x-2"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Speak to an Engineer</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

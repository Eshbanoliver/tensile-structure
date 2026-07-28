import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BLOGS_LIST } from '../data/websiteData';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Calendar, User, ArrowLeft, PhoneCall, ChevronRight, Sparkles, BookOpen } from 'lucide-react';

export const BlogDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const cleanSlug = slug ? slug.replace('.htm', '') : '';
  const blog = BLOGS_LIST.find((b) => b.slug === cleanSlug) || BLOGS_LIST[0];

  const relatedBlogs = BLOGS_LIST.filter((b) => b.id !== blog.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-bgLight pt-24 lg:pt-32 pb-20">
      <SEO 
        title={`${blog.title} | Tensile Engineering Blog`}
        description={blog.excerpt}
        keywords={`${blog.title}, tensile structure guide, ${blog.category}`}
      />

      {/* Header Banner */}
      <section className="bg-primary text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary opacity-90" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Breadcrumbs 
            items={[
              { label: 'Blogs', url: '/blogs.htm' },
              { label: blog.title }
            ]} 
          />

          <div className="space-y-3">
            <Link to="/blogs.htm" className="inline-flex items-center space-x-2 text-xs text-accent hover:underline">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Articles</span>
            </Link>

            <span className="block text-xs font-bold uppercase tracking-widest text-highlight">{blog.category}</span>
            
            <h1 className="font-poppins font-extrabold text-2xl sm:text-4xl text-white leading-tight">
              {blog.title}
            </h1>

            <div className="flex items-center space-x-6 text-xs text-gray-300 pt-2 border-t border-white/10">
              <span className="flex items-center space-x-1.5">
                <Calendar className="w-4 h-4 text-accent" />
                <span>Published on {blog.date}</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <User className="w-4 h-4 text-accent" />
                <span>By {blog.author}</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-gray-100 space-y-8">
          
          <div className="rounded-2xl overflow-hidden shadow-lg h-72 sm:h-96 bg-gray-100">
            <img 
              src={blog.image} 
              alt={blog.title} 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Key Takeaways Callout */}
          <div className="p-6 rounded-2xl bg-bgLight border-l-4 border-accent space-y-2">
            <h3 className="font-poppins font-bold text-sm text-primary uppercase tracking-wider flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-accent" />
              <span>Key Article Takeaways</span>
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              {blog.excerpt}
            </p>
          </div>

          <div className="prose max-w-none text-gray-700 text-sm sm:text-base leading-relaxed space-y-4 whitespace-pre-line border-b border-gray-200 pb-8">
            {blog.content}
          </div>

          {/* Bottom Consultation Box */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 bg-primary text-white p-6 rounded-2xl">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="font-poppins font-bold text-base text-white">Have questions about your tensile project?</h4>
              <p className="text-xs text-gray-300">Speak directly with our senior structural engineers in Udaipur.</p>
            </div>

            <a
              href="tel:+919887889777"
              className="px-6 py-3 rounded-xl bg-accent text-primary font-poppins font-bold text-xs shadow-glow-accent hover:opacity-90 flex items-center space-x-2 whitespace-nowrap"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Call +91-988-788-9777</span>
            </a>
          </div>
        </div>
      </section>

      {/* Related Blogs Section */}
      {relatedBlogs.length > 0 && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="space-y-6">
            <h3 className="font-poppins font-bold text-xl text-primary flex items-center space-x-2">
              <BookOpen className="w-5 h-5 text-accent" />
              <span>More Articles & Guides</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedBlogs.map((rel) => (
                <div key={rel.id} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex flex-col justify-between group">
                  <div className="p-5 space-y-2">
                    <span className="text-[10px] font-bold text-accent uppercase tracking-wider bg-accent/10 px-2 py-0.5 rounded">
                      {rel.category}
                    </span>
                    <h4 className="font-poppins font-bold text-sm text-primary group-hover:text-accent transition-colors line-clamp-2 mt-1">
                      {rel.title}
                    </h4>
                  </div>

                  <div className="p-5 pt-0">
                    <Link
                      to={`/blog/${rel.slug}.htm`}
                      className="text-xs font-bold text-secondary hover:text-accent flex items-center space-x-1"
                    >
                      <span>Read Guide</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

    </div>
  );
};

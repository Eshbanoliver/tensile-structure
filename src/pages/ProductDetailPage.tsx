import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS_LIST } from '../data/websiteData';
import { EnquiryModal } from '../components/EnquiryModal';
import { CheckCircle2, Send, ShieldCheck, PhoneCall, ArrowLeft } from 'lucide-react';

export const ProductDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const cleanSlug = slug ? slug.replace('.htm', '') : '';
  const product = PRODUCTS_LIST.find((p) => p.slug === cleanSlug) || PRODUCTS_LIST[0];

  return (
    <div className="min-h-screen bg-bgLight pt-24 lg:pt-32 pb-20">
      <section className="bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/tensile-structure.htm" className="inline-flex items-center space-x-2 text-xs text-accent hover:underline mb-4">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Products</span>
          </Link>
          <span className="block text-xs font-bold uppercase tracking-widest text-highlight">{product.category}</span>
          <h1 className="font-poppins font-extrabold text-3xl sm:text-4xl text-white mt-1">
            {product.name}
          </h1>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-8">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-[450px] object-cover"
              />
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 space-y-6">
              <h2 className="font-poppins font-bold text-2xl text-primary">
                Product Description & Technical Specifications
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
                {product.fullDesc}
              </p>

              <h3 className="font-poppins font-bold text-lg text-primary border-l-4 border-accent pl-3">
                Key Features & Engineering Advantages
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-700 font-medium">
                <div className="flex items-center space-x-2 p-3 bg-bgLight rounded-xl">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  <span>High Tensile Membrane Strength</span>
                </div>
                <div className="flex items-center space-x-2 p-3 bg-bgLight rounded-xl">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  <span>100% Waterproof & UV Shielded</span>
                </div>
                <div className="flex items-center space-x-2 p-3 bg-bgLight rounded-xl">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  <span>Wind Load Tested Framework</span>
                </div>
                <div className="flex items-center space-x-2 p-3 bg-bgLight rounded-xl">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  <span>Customizable Dimensions & Colors</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="bg-primary text-white p-6 rounded-3xl shadow-xl space-y-4">
              <h3 className="font-poppins font-bold text-lg text-white">Get Factory Direct Price</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Contact Future Tensile Structure Pvt. Ltd. for instant quote estimates and custom architectural design drawings.
              </p>

              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full py-3.5 rounded-xl bg-accent text-primary font-poppins font-bold text-xs shadow-glow-accent hover:opacity-90 transition-opacity flex items-center justify-center space-x-2"
              >
                <Send className="w-4 h-4" />
                <span>Enquire Now for {product.name}</span>
              </button>

              <a
                href="tel:+919887889777"
                className="w-full py-3.5 rounded-xl bg-white/10 border border-white/20 text-white font-poppins font-semibold text-xs flex items-center justify-center space-x-2 hover:bg-white/20 transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-highlight" />
                <span>Call +91-988-788-9777</span>
              </a>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-xl border border-gray-100 space-y-4">
              <h4 className="font-poppins font-bold text-sm text-primary uppercase">Why Choose Our {product.name}?</h4>
              <ul className="space-y-2 text-xs text-gray-600">
                <li className="flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-accent" />
                  <span>15 to 30 Years Membrane Lifespan</span>
                </li>
                <li className="flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-accent" />
                  <span>All-India Delivery & On-Site Assembly</span>
                </li>
                <li className="flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-accent" />
                  <span>Direct Factory Manufacturing Pricing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productName={product.name}
      />
    </div>
  );
};

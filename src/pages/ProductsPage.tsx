import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS_LIST } from '../data/websiteData';
import { EnquiryModal } from '../components/EnquiryModal';
import { ArrowRight, Send } from 'lucide-react';

export const ProductsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [modalProduct, setModalProduct] = useState<string | undefined>(undefined);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = ['All', 'Parking Shades', 'Canopies', 'Outdoor Leisure', 'Membrane Structures', 'Industrial Sheds', 'Umbrellas'];

  const filteredProducts = selectedCategory === 'All' 
    ? PRODUCTS_LIST 
    : PRODUCTS_LIST.filter(p => p.category.toLowerCase().includes(selectedCategory.toLowerCase()) || selectedCategory.toLowerCase().includes(p.category.toLowerCase()));

  const openQuote = (pName: string) => {
    setModalProduct(pName);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-bgLight pt-24 lg:pt-32 pb-20">
      
      {/* Header Banner */}
      <section className="bg-[#0B1F35] text-white py-14 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#00B8D9]">Turnkey Tensile Catalog</span>
          <h1 className="font-poppins font-black text-3xl sm:text-5xl text-white">
            Tensile Structure Products & Solutions
          </h1>
          <p className="text-gray-300 text-sm max-w-2xl mx-auto leading-relaxed">
            Browse our complete collection of 31 premium tensile structure products engineered for residential, commercial, industrial, and public infrastructure.
          </p>
        </div>
      </section>

      {/* Category Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2.5 rounded-xl text-xs font-poppins font-bold uppercase tracking-wider transition-all ${
                selectedCategory === cat
                  ? 'bg-[#00B8D9] text-[#0B1F35] shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((prod) => (
            <div 
              key={prod.id} 
              className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 flex flex-col justify-between group hover:border-[#00B8D9]/40 transition-all duration-300"
            >
              <div>
                <div className="relative h-60 overflow-hidden">
                  <img 
                    src={prod.image} 
                    alt={prod.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-[#0B1F35]/90 text-[#00B8D9] text-[10px] uppercase font-bold px-2.5 py-1 rounded-md border border-white/10">
                    {prod.category}
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="font-poppins font-bold text-lg text-[#0B1F35] group-hover:text-[#00B8D9] transition-colors">
                    {prod.name}
                  </h3>
                  <p className="text-gray-500 text-xs line-clamp-3 leading-relaxed">
                    {prod.shortDesc}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-gray-100">
                <Link
                  to={`/${prod.slug}.htm`}
                  className="text-xs font-bold text-[#123B63] hover:text-[#00B8D9] flex items-center space-x-1"
                >
                  <span>Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <button
                  onClick={() => openQuote(prod.name)}
                  className="px-4 py-2 rounded-lg bg-[#0B1F35] hover:bg-[#00B8D9] text-white hover:text-[#0B1F35] font-poppins font-bold text-xs uppercase tracking-wider transition-colors flex items-center space-x-1.5 shadow"
                >
                  <Send className="w-3 h-3" />
                  <span>Enquire Price</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Enquiry Modal */}
      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productName={modalProduct}
      />
    </div>
  );
};

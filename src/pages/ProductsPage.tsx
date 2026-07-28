import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS_LIST } from '../data/websiteData';
import { EnquiryModal } from '../components/EnquiryModal';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ArrowRight, Send, Search, Sparkles, Filter, CheckCircle2 } from 'lucide-react';

export const ProductsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [modalProduct, setModalProduct] = useState<string | undefined>(undefined);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = ['All', 'Parking Shades', 'Canopies', 'Outdoor Leisure', 'Membrane Structures', 'Industrial Sheds', 'Umbrellas'];

  const filteredProducts = useMemo(() => {
    return PRODUCTS_LIST.filter(p => {
      const matchesCategory = selectedCategory === 'All' 
        || p.category.toLowerCase().includes(selectedCategory.toLowerCase()) 
        || selectedCategory.toLowerCase().includes(p.category.toLowerCase());
      
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase())
        || p.shortDesc.toLowerCase().includes(searchQuery.toLowerCase())
        || p.category.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const openQuote = (pName: string) => {
    setModalProduct(pName);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-bgLight pt-24 lg:pt-32 pb-20">
      <SEO 
        title="Tensile Structure Products Catalog | Car Parking, Gazebos, Canopies - Future Tensile Structure"
        description="Explore 31+ tensile structure products in Udaipur, Rajasthan. High-strength PVC & PVDF tensile parking shades, entrance canopies, gazebos, and modular membrane roofs."
        keywords="Tensile Structure Catalog, Car Parking Tensile Structure, Tensile Canopy Supplier Udaipur, Resort Tensile Structure Rajasthan"
      />

      {/* Header Banner */}
      <section className="bg-primary text-white py-14 border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary opacity-90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Breadcrumbs items={[{ label: 'Products & Solutions' }]} />

          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-accent flex items-center space-x-2">
                <Sparkles className="w-4 h-4" />
                <span>Turnkey Tensile Catalog</span>
              </span>
              <h1 className="font-poppins font-black text-3xl sm:text-5xl text-white">
                Tensile Structure Products & Solutions
              </h1>
              <p className="text-gray-300 text-sm leading-relaxed">
                Browse our complete collection of 31 premium tensile membrane products engineered for residential, commercial, industrial, and public infrastructure.
              </p>
            </div>

            {/* Search Input Bar */}
            <div className="w-full md:w-80 relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products (e.g. Parking, Gazebo)..."
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 text-xs focus:outline-none focus:border-accent focus:bg-white/15 transition-all"
              />
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-3 text-xs text-gray-400 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-gray-200">
          <div className="flex items-center space-x-2 text-xs font-bold text-gray-500 uppercase tracking-wider">
            <Filter className="w-4 h-4 text-accent" />
            <span>Filter Categories:</span>
          </div>

          <span className="text-xs text-gray-500">
            Showing <strong className="text-primary font-bold">{filteredProducts.length}</strong> of {PRODUCTS_LIST.length} Products
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-start gap-2 mt-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2.5 rounded-xl text-xs font-poppins font-bold uppercase tracking-wider transition-all ${
                selectedCategory === cat
                  ? 'bg-accent text-primary shadow-glow-accent scale-105'
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
        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center space-y-4 border border-gray-200 max-w-md mx-auto">
            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center text-accent mx-auto">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="font-poppins font-bold text-xl text-primary">No matching products found</h3>
            <p className="text-xs text-gray-500">
              Try adjusting your category filter or search query. Or contact our design team for custom architectural structures.
            </p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="px-6 py-2.5 rounded-xl bg-primary text-white font-poppins font-bold text-xs hover:bg-secondary transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((prod) => (
              <div 
                key={prod.id} 
                className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 flex flex-col justify-between group hover:border-accent/40 transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  <div className="relative h-60 overflow-hidden bg-gray-100">
                    <img 
                      src={prod.image} 
                      alt={prod.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-primary/95 text-accent text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-md border border-white/10 shadow-md">
                      {prod.category}
                    </span>
                  </div>

                  <div className="p-6 space-y-3">
                    <h2 className="font-poppins font-bold text-lg text-primary group-hover:text-accent transition-colors">
                      {prod.name}
                    </h2>
                    <p className="text-gray-500 text-xs line-clamp-3 leading-relaxed">
                      {prod.shortDesc}
                    </p>

                    <div className="pt-2 flex flex-wrap gap-2 text-[10px] text-gray-600 font-semibold">
                      <span className="px-2.5 py-1 bg-bgLight rounded-md border border-gray-200 flex items-center space-x-1">
                        <CheckCircle2 className="w-3 h-3 text-accent" />
                        <span>PVDF / PTFE Fabric</span>
                      </span>
                      <span className="px-2.5 py-1 bg-bgLight rounded-md border border-gray-200 flex items-center space-x-1">
                        <CheckCircle2 className="w-3 h-3 text-accent" />
                        <span>100% Waterproof</span>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-3 flex items-center justify-between border-t border-gray-100 bg-gray-50/50">
                  <Link
                    to={`/${prod.slug}.htm`}
                    className="text-xs font-bold text-secondary hover:text-accent flex items-center space-x-1"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <button
                    onClick={() => openQuote(prod.name)}
                    className="px-4 py-2.5 rounded-lg bg-primary hover:bg-accent text-white hover:text-primary font-poppins font-bold text-xs uppercase tracking-wider transition-all flex items-center space-x-1.5 shadow"
                  >
                    <Send className="w-3 h-3" />
                    <span>Get Quote</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Bottom CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="bg-[#0B1F35] rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 border border-[#00B8D9]/40">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#00B8D9]">Need Custom Dimensions?</span>
            <h2 className="font-poppins font-extrabold text-2xl sm:text-3xl text-white">
              Can't Find Your Exact Tensile Structure Spec?
            </h2>
            <p className="text-gray-200 text-xs sm:text-sm leading-relaxed">
              We manufacture 100% customized tensile structures according to your plot area, height, wind load requirements, and color preferences.
            </p>
          </div>

          <button
            onClick={() => openQuote("Custom Architectural Tensile Structure")}
            className="px-8 py-4 rounded-xl bg-[#00B8D9] hover:bg-[#FFB703] text-[#0B1F35] font-poppins font-black text-xs uppercase tracking-wider shadow-[0_0_25px_rgba(0,184,217,0.4)] transition-all flex items-center justify-center space-x-2 whitespace-nowrap border border-white/30"
          >
            <Send className="w-4 h-4 text-[#0B1F35]" />
            <span>Request Custom Design Quote</span>
          </button>
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

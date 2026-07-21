import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { PRODUCTS_LIST } from '../../data/websiteData';

interface ProductsSectionProps {
  onOpenQuoteModal: (name: string) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({ onOpenQuoteModal }) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-accent">Our Turnkey Products</span>
          <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl text-primary">
            Our Products
          </h2>
          <div className="w-16 h-1 bg-highlight mx-auto rounded-full" />
          <p className="text-gray-600 text-sm leading-relaxed">
            We specialize in designing high-performance tensile structures that blend aesthetic elegance with industrial-grade durability. From iconic Stadium Tensile Structures to versatile Gazebos and Domes, our turnkey solutions provide superior weather protection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS_LIST.slice(0, 8).map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 flex flex-col group"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <button
                    onClick={() => onOpenQuoteModal(product.name)}
                    className="w-full py-2 bg-accent text-primary font-poppins font-bold text-xs rounded-lg shadow"
                  >
                    Enquire Factory Price
                  </button>
                </div>
                <span className="absolute top-3 left-3 bg-primary/90 text-accent text-[10px] uppercase font-bold px-2.5 py-1 rounded-md backdrop-blur-md">
                  {product.category}
                </span>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="font-poppins font-bold text-base text-primary group-hover:text-accent transition-colors line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="text-gray-500 text-xs mt-2 line-clamp-3 leading-relaxed">
                    {product.shortDesc}
                  </p>
                </div>

                <Link
                  to={`/${product.slug}.htm`}
                  className="inline-flex items-center space-x-1.5 text-secondary font-poppins font-bold text-xs hover:text-accent transition-colors pt-2 border-t border-gray-100"
                >
                  <span>View Product Specs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/tensile-structure.htm"
            className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-xl bg-primary text-white font-poppins font-bold text-sm shadow-xl hover:bg-secondary transition-all"
          >
            <span>Explore All 31 Product Categories</span>
            <ArrowRight className="w-4 h-4 text-accent" />
          </Link>
        </div>

      </div>
    </section>
  );
};

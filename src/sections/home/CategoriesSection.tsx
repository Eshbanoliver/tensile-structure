import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const CategoriesSection: React.FC = () => {
  return (
    <section className="py-16 bg-bgLight">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-100">
          <div className="relative rounded-2xl overflow-hidden h-72 lg:h-96">
            <img 
              src="https://www.futuretensilestructure.com/uploaded-files/category/images/thumbs/Tensile-Structure69aaa01f5b612-home-thumb-big.jpg"
              alt="Tensile Structure Manufacturers in Udaipur"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-4 left-4 bg-primary/80 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-lg font-semibold">
              Tensile Structure
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-poppins font-bold text-2xl text-primary">Tensile Structure</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Tired of dull concrete slabs boxing in your beautiful open spaces? Modern architecture demands smart, flexible shading that breathes life into any environment. At Future Tensile Structure Pvt. Ltd., we make dynamic Tensile Structure in Udaipur that stretch across large areas without column obstruction...
            </p>
            <Link 
              to="/tensile-structure.htm"
              className="inline-flex items-center space-x-2 text-accent font-poppins font-bold text-xs hover:underline"
            >
              <span>Explore Details & Specs</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-100">
          <div className="order-last lg:order-first space-y-4">
            <h3 className="font-poppins font-bold text-2xl text-primary">Car Parking Tensile Structure</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Leaving cars out in the open sun is a bad idea. Rain, heat, and dust ruin expensive paint jobs faster than you might think. You need a real shield. At Future Tensile Structure Pvt. Ltd., we provide premium Car Parking Tensile Structure in Udaipur that protect your vehicles from harsh weather...
            </p>
            <Link 
              to="/car-parking-tensile-structure.htm"
              className="inline-flex items-center space-x-2 text-accent font-poppins font-bold text-xs hover:underline"
            >
              <span>Explore Car Parking Shades</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="relative rounded-2xl overflow-hidden h-72 lg:h-96">
            <img 
              src="https://www.futuretensilestructure.com/uploaded-files/category/images/thumbs/Car-Parking-Tensile-Structure69aa88f715548-home-thumb-big.jpg"
              alt="Car Parking Tensile Structure"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-4 left-4 bg-primary/80 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-lg font-semibold">
              Car Parking Shade
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

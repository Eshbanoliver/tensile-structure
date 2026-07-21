import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../../data/websiteData';

export const AboutSection: React.FC = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://www.futuretensilestructure.com/uploaded-files/page-images/thumbs/Home-thumbs-440X440.jpg"
                alt="Top Tensile Structure Manufacturers in Udaipur"
                className="w-full h-[450px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
            </div>

            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-primary text-white p-6 rounded-2xl shadow-2xl border border-white/20 backdrop-blur-xl max-w-[200px] text-center">
              <div className="font-poppins font-black text-4xl text-highlight">
                {COMPANY_INFO.experienceYears}
              </div>
              <div className="text-xs font-medium text-gray-300 uppercase tracking-wider mt-1">
                Years Of Experience
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-accent flex items-center space-x-2">
                <span className="w-8 h-0.5 bg-accent" />
                <span>About Future Tensile Structure</span>
              </span>
              <h2 className="font-poppins font-extrabold text-2xl sm:text-4xl text-primary mt-2 leading-tight">
                Top Tensile Structure <span className="text-accent">in Udaipur</span>
              </h2>
            </div>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Welcome to Future Tensile Structure Pvt. Ltd., where we don't just build roofs; we craft the skyline of your property. For over a decade, our team has been the quiet force transforming ordinary open spaces into functional, architectural art. We are dedicated to creating environments that blend safety, comfort, and modern style seamlessly. Our <strong>Top Tensile Structure in Udaipur</strong> are built to support the needs of homes, businesses, and public spaces alike.
            </p>

            <h3 className="font-poppins font-bold text-lg text-primary border-l-4 border-accent pl-3">
              Top Tensile Structure Manufacturers in Udaipur
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed">
              Designing structures for outdoor use requires more than just measurements; it requires understanding how weather impacts materials over time. As <strong>Top Tensile Structure Manufacturers in Udaipur</strong>, we focus on building products that fit naturally into your daily life.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-medium text-gray-700">
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <span><strong>Plain Tensile Structure</strong>: Simple, effective coverage for utility areas.</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <span><strong>Car Parking Tensile Structure</strong>: Heavy-duty shades for vehicle paint protection.</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <span><strong>Creators Tensile</strong>: Custom artistic shapes matching architectural vision.</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <span><strong>Commercial Gazebo</strong>: Modular units for outdoor resort dining.</span>
              </li>
            </ul>

            <div className="pt-2">
              <Link
                to="/about-us.htm"
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-primary text-white font-poppins font-semibold text-xs hover:bg-secondary transition-colors shadow-md"
              >
                <span>Read Full Company Profile</span>
                <ArrowRight className="w-4 h-4 text-accent" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

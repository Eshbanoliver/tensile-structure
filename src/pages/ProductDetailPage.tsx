import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS_LIST } from '../data/websiteData';
import { EnquiryModal } from '../components/EnquiryModal';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { CheckCircle2, Send, ShieldCheck, PhoneCall, ArrowLeft, ArrowRight, Award, Layers, Sparkles } from 'lucide-react';

export const ProductDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const cleanSlug = slug ? slug.replace('.htm', '') : '';
  const product = PRODUCTS_LIST.find((p) => p.slug === cleanSlug) || PRODUCTS_LIST[0];

  // Related products from the same or similar category
  const relatedProducts = PRODUCTS_LIST
    .filter((p) => p.id !== product.id && (p.category === product.category || PRODUCTS_LIST.indexOf(p) < 6))
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-bgLight pt-24 lg:pt-32 pb-20">
      <SEO 
        title={`${product.name} Manufacturers in Udaipur, Rajasthan | Future Tensile Structure`}
        description={`Get factory price for ${product.name}. High tensile membrane strength, 100% waterproof, wind load certified by Future Tensile Structure Pvt. Ltd.`}
        keywords={`${product.name}, ${product.category} Udaipur, Tensile Structure Manufacturer, Commercial Gazebo Rajasthan`}
      />

      {/* Header Banner */}
      <section className="bg-primary text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary opacity-90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Breadcrumbs 
            items={[
              { label: 'Products', url: '/tensile-structure.htm' },
              { label: product.name }
            ]} 
          />

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-accent bg-accent/10 border border-accent/30 px-3 py-1 rounded-full mb-2">
                {product.category}
              </span>
              <h1 className="font-poppins font-black text-3xl sm:text-4xl text-white">
                {product.name}
              </h1>
            </div>

            <Link 
              to="/tensile-structure.htm" 
              className="inline-flex items-center space-x-2 text-xs text-gray-300 hover:text-accent font-semibold transition-colors bg-white/5 border border-white/10 px-4 py-2 rounded-xl self-start sm:self-auto"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Catalog</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Content Column */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Product Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gray-100 group">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-[450px] sm:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-md text-accent text-xs font-bold px-3.5 py-1.5 rounded-xl border border-white/10 flex items-center space-x-1.5 shadow-lg">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Premium Grade PVDF Membrane</span>
              </div>
            </div>

            {/* Description & Overview */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-100 space-y-6">
              <div className="border-b border-gray-100 pb-4">
                <h2 className="font-poppins font-bold text-2xl text-primary">
                  Product Overview & Details
                </h2>
                <p className="text-xs text-accent font-semibold mt-1">
                  Engineered & Fabricated by Future Tensile Structure Pvt. Ltd.
                </p>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
                {product.fullDesc}
              </p>

              {/* Technical Specifications Matrix */}
              <div className="pt-4 space-y-4">
                <h3 className="font-poppins font-bold text-lg text-primary border-l-4 border-accent pl-3 flex items-center space-x-2">
                  <Layers className="w-5 h-5 text-accent" />
                  <span>Technical Specifications Matrix</span>
                </h3>

                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left border-collapse">
                    <tbody>
                      <tr className="border-b border-gray-100 bg-bgLight">
                        <td className="p-3 font-bold text-primary w-1/3">Membrane Fabric</td>
                        <td className="p-3 text-gray-700">High Tensile Architectural PVC / PVDF / PTFE Coated Fabric</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="p-3 font-bold text-primary">Structural Steel</td>
                        <td className="p-3 text-gray-700">Heavy Duty Galvanized Steel (IS 1161 / IS 1239 Grade)</td>
                      </tr>
                      <tr className="border-b border-gray-100 bg-bgLight">
                        <td className="p-3 font-bold text-primary">Surface Treatment</td>
                        <td className="p-3 text-gray-700">Anti-Corrosion Epoxy Primer & Polyurethane Finish Coating</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="p-3 font-bold text-primary">Wind Resistance</td>
                        <td className="p-3 text-gray-700">Tested & Engineered up to 150 km/h Wind Velocity</td>
                      </tr>
                      <tr className="border-b border-gray-100 bg-bgLight">
                        <td className="p-3 font-bold text-primary">Temperature Range</td>
                        <td className="p-3 text-gray-700">-30°C to +70°C Operational Range</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="p-3 font-bold text-primary">Membrane Lifespan</td>
                        <td className="p-3 text-gray-700">15 to 25+ Years with Minimal Maintenance</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Key Advantages Grid */}
              <div className="pt-4 space-y-4">
                <h3 className="font-poppins font-bold text-lg text-primary border-l-4 border-highlight pl-3 flex items-center space-x-2">
                  <Award className="w-5 h-5 text-highlight" />
                  <span>Key Advantages & Performance Factors</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-700 font-medium">
                  <div className="flex items-center space-x-3 p-3.5 bg-bgLight rounded-xl border border-gray-200">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                    <span>100% Waterproof & Zero UV Degradation</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3.5 bg-bgLight rounded-xl border border-gray-200">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                    <span>High Tensile & Tear Resistance</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3.5 bg-bgLight rounded-xl border border-gray-200">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                    <span>Self-Cleaning Anti-Fouling Surface</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3.5 bg-bgLight rounded-xl border border-gray-200">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                    <span>Custom Color & Translucency Options</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Sidebar Quote & Actions Column */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Quotation Form Card */}
            <div className="bg-[#0B1F35] text-white p-6 sm:p-8 rounded-3xl shadow-xl space-y-5 relative overflow-hidden border border-[#00B8D9]/40">
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-[#00B8D9] uppercase tracking-widest bg-[#00B8D9]/15 px-2.5 py-1 rounded-md border border-[#00B8D9]/30">
                  Direct Factory Pricing
                </span>
                <h3 className="font-poppins font-extrabold text-xl text-white">Get Custom Price Quote</h3>
                <p className="text-xs text-gray-200 leading-relaxed">
                  Request instant cost estimates, site measurement schedules, and CAD drawing mockups for {product.name}.
                </p>
              </div>

              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full py-4 rounded-xl bg-[#00B8D9] hover:bg-[#FFB703] text-[#0B1F35] font-poppins font-black text-xs uppercase tracking-wider shadow-[0_0_25px_rgba(0,184,217,0.4)] transition-all flex items-center justify-center space-x-2 border border-white/30"
              >
                <Send className="w-4 h-4 text-[#0B1F35]" />
                <span>Enquire Price Now</span>
              </button>

              <a
                href="tel:+919887889777"
                className="w-full py-3.5 rounded-xl bg-white/15 border border-white/30 text-white font-poppins font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 hover:bg-white/25 transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-[#FFB703]" />
                <span>Call +91-988-788-9777</span>
              </a>

              <a
                href={`https://wa.me/919887889777?text=Hello,%20I%20am%20interested%20in%20${encodeURIComponent(product.name)}.%20Please%20send%20quote.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl bg-emerald-600 border border-emerald-400 text-white font-poppins font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 hover:bg-emerald-500 transition-colors shadow-md"
              >
                <Send className="w-4 h-4 text-white" />
                <span>WhatsApp Instant Inquiry</span>
              </a>
            </div>

            {/* Quality & Service Guarantee */}
            <div className="bg-white p-6 rounded-3xl shadow-xl border border-gray-100 space-y-4">
              <h4 className="font-poppins font-bold text-sm text-primary uppercase tracking-wider flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-accent" />
                <span>Why Buy From Future Tensile?</span>
              </h4>

              <ul className="space-y-3 text-xs text-gray-600">
                <li className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>10 to 15 Years Warranty on Tensile Membrane</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>Pan-India On-Site Turnkey Installation</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>Direct Factory Manufacturing Pricing</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>Custom Engineering & Site Inspections</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* Related Products Grid */}
      {relatedProducts.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-200">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-accent">Recommendations</span>
                <h3 className="font-poppins font-extrabold text-2xl text-primary">Related Tensile Structures</h3>
              </div>

              <Link 
                to="/tensile-structure.htm"
                className="text-xs font-bold text-secondary hover:text-accent flex items-center space-x-1"
              >
                <span>View All Products</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((rel) => (
                <div key={rel.id} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex flex-col justify-between group">
                  <div>
                    <div className="relative h-48 overflow-hidden bg-gray-100">
                      <img 
                        src={rel.image} 
                        alt={rel.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-2 left-2 bg-primary/90 text-accent text-[9px] font-bold uppercase px-2 py-0.5 rounded">
                        {rel.category}
                      </span>
                    </div>

                    <div className="p-5 space-y-2">
                      <h4 className="font-poppins font-bold text-base text-primary group-hover:text-accent transition-colors">
                        {rel.name}
                      </h4>
                      <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                        {rel.shortDesc}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 pt-0">
                    <Link
                      to={`/${rel.slug}.htm`}
                      className="w-full py-2.5 rounded-xl bg-bgLight hover:bg-accent text-primary font-poppins font-bold text-xs transition-colors flex items-center justify-center space-x-1"
                    >
                      <span>Explore Product</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Enquiry Modal */}
      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productName={product.name}
      />
    </div>
  );
};

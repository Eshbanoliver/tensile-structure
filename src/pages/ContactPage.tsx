import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/websiteData';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { MapPin, Phone, Clock, MessageSquare, Send, CheckCircle2, Sparkles, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    location: '',
    structureType: 'Car Parking Tensile Shade',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', mobile: '', location: '', structureType: 'Car Parking Tensile Shade', message: '' });
    }, 5000);
  };

  const faqs = [
    {
      q: "What is the typical lead time for a custom tensile structure?",
      a: "Standard modular structures (like car parking or gazebo kits) are ready within 7 to 10 working days. Large custom architectural structures take approximately 15 to 25 days from engineering design sign-off to site erection."
    },
    {
      q: "Do you offer on-site civil measurement and installation across India?",
      a: "Yes! We manufacture in Udaipur, Rajasthan and send our site engineering teams to execute foundation anchor bolt civil work, steel frame erection, and tension membrane stressing all over India."
    },
    {
      q: "What fabric membranes do you use and what is the warranty?",
      a: "We utilize top architectural PVC, PVDF, and PTFE coated polyester fabrics imported from leading international manufacturers (Mehler, Serge Ferrari, Heytex). Warranty ranges from 10 to 15 years against UV degradation and color fading."
    },
    {
      q: "Can tensile structures withstand heavy monsoon rains and high winds?",
      a: "Absolution. All our structures are CAD engineered with 3D tension analysis to resist wind speeds up to 150 km/h and are 100% waterproof with integrated gutter drainage channels."
    }
  ];

  return (
    <div className="min-h-screen bg-bgLight pt-24 lg:pt-32 pb-20">
      <SEO 
        title="Contact Us | Future Tensile Structure Manufacturers in Udaipur, Rajasthan"
        description="Get in touch with Future Tensile Structure Pvt. Ltd. Udaipur. Call +91-988-788-9777 for site measurement estimates, factory pricing, and structural design drawings."
        keywords="Contact Tensile Structure Manufacturer, Tensile Shade Office Udaipur, Contact Future Tensile, Tensile Roofing Quote Rajasthan"
      />

      {/* Header Banner */}
      <section className="bg-primary text-white py-14 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary opacity-90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Breadcrumbs items={[{ label: 'Contact Us' }]} />

          <div className="max-w-3xl space-y-3">
            <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Connect With Our Site Engineers</span>
            </span>
            <h1 className="font-poppins font-extrabold text-3xl sm:text-5xl text-white">
              Contact Future Tensile Structure
            </h1>
            <p className="text-gray-300 text-sm leading-relaxed">
              Reach out for site measurements, structural design consultations, factory pricing, and nationwide turnkey execution assistance.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Details & Map */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 space-y-6">
              <h2 className="font-poppins font-bold text-2xl text-primary border-b border-gray-100 pb-3">
                Head Office & Works
              </h2>
              
              <div className="space-y-5 text-sm text-gray-600">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent flex-shrink-0 mt-1">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-bold text-primary text-sm">Factory & Office Address</h4>
                    <p className="text-xs leading-relaxed text-gray-500 mt-1">{COMPANY_INFO.address}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-highlight/10 flex items-center justify-center text-highlight flex-shrink-0 mt-1">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-bold text-primary text-sm">Call Direct Lines</h4>
                    <a href={`tel:${COMPANY_INFO.phones[0].raw}`} className="text-xs text-secondary hover:text-accent font-bold block mt-1">
                      {COMPANY_INFO.phones[0].display}
                    </a>
                    <a href={`tel:${COMPANY_INFO.phones[1].raw}`} className="text-xs text-secondary hover:text-accent font-bold block">
                      {COMPANY_INFO.phones[1].display}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 flex-shrink-0 mt-1">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-bold text-primary text-sm">WhatsApp Fast Inquiry</h4>
                    <a 
                      href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello,%20I%20want%20to%20enquire%20about%20tensile%20structures.`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs text-emerald-600 font-bold hover:underline block mt-1"
                    >
                      {COMPANY_INFO.phones[0].display} (Click to Chat Now)
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary flex-shrink-0 mt-1">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-bold text-primary text-sm">Business Working Hours</h4>
                    <p className="text-xs text-gray-500 mt-1">{COMPANY_INFO.hours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Box */}
            <div className="bg-white p-3 rounded-3xl shadow-xl border border-gray-100 overflow-hidden h-72">
              <iframe 
                title="Best Tensile Structure Location Map"
                src={COMPANY_INFO.mapEmbedUrl}
                className="w-full h-full rounded-2xl border-0"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>

          {/* Direct Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-xl border border-gray-100 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-accent">Direct Project Form</span>
                <h2 className="font-poppins font-extrabold text-2xl sm:text-3xl text-primary mt-1">
                  Request Free Technical Quote
                </h2>
                <p className="text-xs text-gray-500 mt-1">
                  Fill in your project requirements below to receive CAD drawings and factory pricing.
                </p>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-3 bg-bgLight rounded-2xl border border-accent/30">
                  <CheckCircle2 className="w-16 h-16 text-accent mx-auto animate-bounce" />
                  <h3 className="font-poppins font-bold text-xl text-primary">Inquiry Submitted Successfully!</h3>
                  <p className="text-xs text-gray-600 max-w-sm mx-auto">
                    Thank you. Our senior engineering team in Udaipur will review your specs and call you within 2 business hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Full Name*</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-bgLight border border-gray-200 text-xs text-gray-800 focus:outline-none focus:border-accent"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Email ID*</label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-bgLight border border-gray-200 text-xs text-gray-800 focus:outline-none focus:border-accent"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Mobile Number*</label>
                      <input
                        type="tel"
                        required
                        maxLength={10}
                        placeholder="9887889777"
                        value={formData.mobile}
                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value.replace(/\D/g, '') })}
                        className="w-full px-4 py-3 rounded-xl bg-bgLight border border-gray-200 text-xs text-gray-800 focus:outline-none focus:border-accent"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Your City / Location*</label>
                      <input
                        type="text"
                        required
                        placeholder="Udaipur, Jaipur, Ahmedabad..."
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-bgLight border border-gray-200 text-xs text-gray-800 focus:outline-none focus:border-accent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Select Structure Type*</label>
                    <select
                      value={formData.structureType}
                      onChange={(e) => setFormData({ ...formData, structureType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-bgLight border border-gray-200 text-xs text-gray-800 focus:outline-none focus:border-accent font-medium"
                    >
                      <option value="Car Parking Tensile Shade">Car Parking Tensile Shade</option>
                      <option value="Gazebo & Resort Tensile Structure">Gazebo & Resort Tensile Structure</option>
                      <option value="Entrance Tensile Canopy">Entrance Tensile Canopy</option>
                      <option value="Walkway Tensile Canopy">Walkway Tensile Canopy</option>
                      <option value="Polycarbonate Sheet Roofing">Polycarbonate Sheet Roofing</option>
                      <option value="Swimming Pool Tensile Cover">Swimming Pool Tensile Cover</option>
                      <option value="Custom Architectural Structure">Custom Architectural Structure</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Your Requirements / Dimensions*</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Please specify estimated dimensions, site location, or special design requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-bgLight border border-gray-200 text-xs text-gray-800 focus:outline-none focus:border-accent"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#0B1F35] hover:bg-[#00B8D9] text-white hover:text-[#0B1F35] font-poppins font-black text-xs sm:text-sm uppercase tracking-wider shadow-xl transition-all flex items-center justify-center space-x-2 border border-white/10"
                  >
                    <Send className="w-4 h-4 text-[#00B8D9] group-hover:text-[#0B1F35]" />
                    <span>Send Project Inquiry Now</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-accent flex items-center justify-center space-x-2">
            <HelpCircle className="w-4 h-4" />
            <span>Got Questions?</span>
          </span>
          <h2 className="font-poppins font-extrabold text-2xl sm:text-3xl text-primary">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm transition-all"
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full p-5 text-left font-poppins font-bold text-sm text-primary flex items-center justify-between hover:text-accent transition-colors"
              >
                <span>{faq.q}</span>
                {openFaq === index ? (
                  <ChevronUp className="w-4 h-4 text-accent flex-shrink-0 ml-2" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-gray-400 flex-shrink-0 ml-2" />
                )}
              </button>

              {openFaq === index && (
                <div className="px-5 pb-5 pt-0 text-xs text-gray-600 leading-relaxed border-t border-gray-100">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

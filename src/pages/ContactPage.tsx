import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/websiteData';
import { MapPin, Phone, Clock, MessageSquare, Send, CheckCircle2, Sparkles } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    location: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', mobile: '', location: '', message: '' });
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-bgLight pt-24 lg:pt-32 pb-20">
      <section className="bg-primary text-white py-14 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-accent flex items-center justify-center space-x-2">
            <Sparkles className="w-4 h-4" />
            <span>Connect With Our Engineers</span>
          </span>
          <h1 className="font-poppins font-extrabold text-3xl sm:text-5xl">
            Contact Future Tensile Structure
          </h1>
          <p className="text-gray-300 text-sm max-w-2xl mx-auto">
            Reach out for site measurements, structural design consultations, factory pricing, and nationwide execution assistance.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 space-y-6">
              <h2 className="font-poppins font-bold text-2xl text-primary">Get In Touch</h2>
              
              <div className="space-y-4 text-sm text-gray-600">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent flex-shrink-0 mt-1">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-bold text-primary text-sm">Head Office Address</h4>
                    <p className="text-xs leading-relaxed text-gray-500 mt-0.5">{COMPANY_INFO.address}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-highlight/10 flex items-center justify-center text-highlight flex-shrink-0 mt-1">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-bold text-primary text-sm">Phone Numbers</h4>
                    <a href={`tel:${COMPANY_INFO.phones[0].raw}`} className="text-xs text-secondary hover:text-accent font-semibold block mt-0.5">
                      {COMPANY_INFO.phones[0].display}
                    </a>
                    <a href={`tel:${COMPANY_INFO.phones[1].raw}`} className="text-xs text-secondary hover:text-accent font-semibold block">
                      {COMPANY_INFO.phones[1].display}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent flex-shrink-0 mt-1">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-bold text-primary text-sm">WhatsApp Inquiry</h4>
                    <a 
                      href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello,%20I%20want%20to%20enquire%20about%20tensile%20structures.`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs text-emerald-600 font-semibold hover:underline block mt-0.5"
                    >
                      {COMPANY_INFO.phones[0].display} (Click to Chat)
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary flex-shrink-0 mt-1">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-bold text-primary text-sm">Business Hours</h4>
                    <p className="text-xs text-gray-500 mt-0.5">{COMPANY_INFO.hours}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-2 rounded-3xl shadow-xl border border-gray-100 overflow-hidden h-64">
              <iframe 
                title="Office Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.273618491845!2d73.7214993!3d24.584809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDM1JzA1LjMiTiA3M8KwNDMnMjUuMyJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full rounded-2xl border-0"
                loading="lazy"
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-xl border border-gray-100 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-accent">Send Inquiry</span>
                <h2 className="font-poppins font-extrabold text-2xl text-primary mt-1">
                  Submit Direct Project Specs
                </h2>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-3">
                  <CheckCircle2 className="w-16 h-16 text-accent mx-auto animate-bounce" />
                  <h3 className="font-poppins font-bold text-xl text-primary">Inquiry Submitted!</h3>
                  <p className="text-xs text-gray-600 max-w-sm mx-auto">
                    We have received your project details. Our Udaipur engineering office will get in touch with you shortly.
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
                        className="w-full px-4 py-2.5 rounded-xl bg-bgLight border border-gray-200 text-xs text-gray-800 focus:outline-none focus:border-accent"
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
                        className="w-full px-4 py-2.5 rounded-xl bg-bgLight border border-gray-200 text-xs text-gray-800 focus:outline-none focus:border-accent"
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
                        className="w-full px-4 py-2.5 rounded-xl bg-bgLight border border-gray-200 text-xs text-gray-800 focus:outline-none focus:border-accent"
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
                        className="w-full px-4 py-2.5 rounded-xl bg-bgLight border border-gray-200 text-xs text-gray-800 focus:outline-none focus:border-accent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Your Requirements / Message*</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Please specify structure type, dimensions, or site location details..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-bgLight border border-gray-200 text-xs text-gray-800 focus:outline-none focus:border-accent"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-primary text-white font-poppins font-bold text-xs shadow-xl hover:bg-secondary transition-colors flex items-center justify-center space-x-2"
                  >
                    <Send className="w-4 h-4 text-accent" />
                    <span>Send Project Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

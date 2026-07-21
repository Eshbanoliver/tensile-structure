import React, { useState } from 'react';
import { X, Send, CheckCircle2, User, Mail, Phone, MapPin, MessageSquare, Package } from 'lucide-react';
import { COMPANY_INFO } from '../data/websiteData';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({ isOpen, onClose, productName }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    location: '',
    quantity: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', mobile: '', location: '', quantity: '', message: '' });
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg bg-primary border border-white/20 rounded-3xl shadow-2xl overflow-hidden text-white">
        
        {/* Modal Header */}
        <div className="px-6 py-5 bg-secondary/60 border-b border-white/10 flex items-center justify-between">
          <div>
            <h3 className="font-poppins font-bold text-lg text-white">
              {productName ? `Enquire about ${productName}` : 'Quick Business Enquiry'}
            </h3>
            <p className="text-xs text-accent">
              Get factory direct prices & fast delivery specs
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/20 transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {submitted ? (
            <div className="py-10 text-center space-y-3">
              <CheckCircle2 className="w-16 h-16 text-accent mx-auto animate-bounce" />
              <h4 className="font-poppins font-bold text-xl text-white">Enquiry Sent Successfully!</h4>
              <p className="text-sm text-gray-300 max-w-xs mx-auto">
                Thank you for contacting {COMPANY_INFO.shortName}. Our engineering team will get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="relative">
                <User className="w-4 h-4 text-accent absolute left-3.5 top-3.5" />
                <input
                  type="text"
                  required
                  placeholder="Full Name*"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                  <Mail className="w-4 h-4 text-accent absolute left-3.5 top-3.5" />
                  <input
                    type="email"
                    required
                    placeholder="Email ID*"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>

                <div className="relative">
                  <Phone className="w-4 h-4 text-accent absolute left-3.5 top-3.5" />
                  <input
                    type="tel"
                    required
                    maxLength={10}
                    placeholder="Mobile Number*"
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value.replace(/\D/g, '') })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                  <MapPin className="w-4 h-4 text-accent absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    required
                    placeholder="Your Location/City*"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>

                <div className="relative">
                  <Package className="w-4 h-4 text-accent absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    placeholder="Order Sq.Ft / Quantity"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
              </div>

              <div className="relative">
                <MessageSquare className="w-4 h-4 text-accent absolute left-3.5 top-3.5" />
                <textarea
                  required
                  rows={3}
                  placeholder="Your Requirements / Project Details*"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-accent via-secondary to-highlight font-poppins font-bold text-sm text-white shadow-glow-accent hover:opacity-95 transition-opacity flex items-center justify-center space-x-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Instant Enquiry</span>
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};

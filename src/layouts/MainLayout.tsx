import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { FloatingActions } from '../components/FloatingActions';
import { EnquiryModal } from '../components/EnquiryModal';
import { SEO } from '../components/SEO';

interface MainLayoutProps {
  children: React.ReactNode;
  seoTitle?: string;
  seoDesc?: string;
  seoKeywords?: string;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ 
  children,
  seoTitle,
  seoDesc,
  seoKeywords
}) => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-bgLight text-textDark selection:bg-accent selection:text-primary">
      <SEO title={seoTitle} description={seoDesc} keywords={seoKeywords} />
      
      {/* Header Navigation */}
      <Header onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Shared Footer */}
      <Footer />

      {/* Floating Buttons */}
      <FloatingActions onOpenEnquiryModal={() => setIsQuoteModalOpen(true)} />

      {/* Shared Quote Modal */}
      <EnquiryModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />
    </div>
  );
};

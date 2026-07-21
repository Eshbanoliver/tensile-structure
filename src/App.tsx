import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { EnquiryModal } from './components/EnquiryModal';
import { SEO } from './components/SEO';
import { ErrorBoundary } from './components/ErrorBoundary';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProductsPage } from './pages/ProductsPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { BlogsPage } from './pages/BlogsPage';
import { BlogDetailPage } from './pages/BlogDetailPage';
import { ContactPage } from './pages/ContactPage';
import { SitemapPage } from './pages/SitemapPage';

// Scroll to top on navigation helper
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export const AppContent: React.FC = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-bgLight text-textDark selection:bg-accent selection:text-primary">
      <SEO />

      <ScrollToTop />
      
      {/* Header Navigation */}
      <Header onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />

      {/* Main Page Router */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us.htm" element={<AboutPage />} />
          <Route path="/about-us" element={<AboutPage />} />
          
          <Route path="/tensile-structure.htm" element={<ProductsPage />} />
          <Route path="/tensile-structure" element={<ProductsPage />} />
          
          <Route path="/projects.htm" element={<ProjectsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          
          <Route path="/blogs.htm" element={<BlogsPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          
          <Route path="/blog/:slug" element={<BlogDetailPage />} />
          <Route path="/contact-us.htm" element={<ContactPage />} />
          <Route path="/contact-us" element={<ContactPage />} />
          
          <Route path="/sitemap.htm" element={<SitemapPage />} />
          <Route path="/sitemap" element={<SitemapPage />} />

          {/* Dynamic Product Pages */}
          <Route path="/:slug" element={<ProductDetailPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
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

export const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <Router>
        <AppContent />
      </Router>
    </ErrorBoundary>
  );
};

export default App;

import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { ErrorBoundary } from './components/ErrorBoundary';

// Lazy load page components for lightning fast dynamic bundle loading
const HomePage = lazy(() => import('./pages/HomePage').then(m => ({ default: m.HomePage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })));
const ProductsPage = lazy(() => import('./pages/ProductsPage').then(m => ({ default: m.ProductsPage })));
const ProductDetailPage = lazy(() => import('./pages/ProductDetailPage').then(m => ({ default: m.ProductDetailPage })));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage').then(m => ({ default: m.ProjectsPage })));
const BlogsPage = lazy(() => import('./pages/BlogsPage').then(m => ({ default: m.BlogsPage })));
const BlogDetailPage = lazy(() => import('./pages/BlogDetailPage').then(m => ({ default: m.BlogDetailPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));
const SitemapPage = lazy(() => import('./pages/SitemapPage').then(m => ({ default: m.SitemapPage })));

// Scroll to top helper
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Premium, lightweight Page Loading Bar & Spinner
const PageLoader: React.FC = () => (
  <div className="min-h-[70vh] flex flex-col items-center justify-center bg-[#0B1F35] text-white py-20 px-4">
    <div className="w-full max-w-xs space-y-4 text-center">
      <div className="w-12 h-12 mx-auto border-3 border-[#00B8D9]/30 border-t-[#00B8D9] rounded-full animate-spin" />
      <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-[#00B8D9] to-[#FFB703] animate-page-progress rounded-full" />
      </div>
      <p className="text-xs font-poppins font-semibold tracking-wider text-gray-300 uppercase">Loading Experience...</p>
    </div>
  </div>
);

export const AppContent: React.FC = () => {
  return (
    <MainLayout>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
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
      </Suspense>
    </MainLayout>
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

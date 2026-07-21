import React, { useState } from 'react';
import { HeroSection } from '../sections/home/HeroSection';
import { AboutSection } from '../sections/home/AboutSection';
import { CategoriesSection } from '../sections/home/CategoriesSection';
import { ProductsSection } from '../sections/home/ProductsSection';
import { MissionVisionSection } from '../sections/home/MissionVisionSection';
import { ProjectsSection } from '../sections/home/ProjectsSection';
import { VideosSection } from '../sections/home/VideosSection';
import { CountersSection } from '../sections/home/CountersSection';
import { TestimonialsSection } from '../sections/home/TestimonialsSection';
import { BlogsSection } from '../sections/home/BlogsSection';
import { WhyChooseUsSection } from '../sections/home/WhyChooseUsSection';
import { ContactCTASection } from '../sections/home/ContactCTASection';
import { EnquiryModal } from '../components/EnquiryModal';

export const HomePage: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<string | undefined>(undefined);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openQuoteModal = (prodName?: string) => {
    setSelectedProduct(prodName);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-bgLight text-textDark overflow-x-hidden pt-20 lg:pt-28">
      {/* 1. Hero Section */}
      <HeroSection onOpenQuoteModal={openQuoteModal} />

      {/* 2. About Section */}
      <AboutSection />

      {/* 3. Product Categories */}
      <CategoriesSection />

      {/* 4. Products Section */}
      <ProductsSection onOpenQuoteModal={openQuoteModal} />

      {/* 5. Mission Vision Values */}
      <MissionVisionSection />

      {/* 6. Projects Showcase */}
      <ProjectsSection />

      {/* 7. Video Demonstrations */}
      <VideosSection />

      {/* 8. Statistics Counter */}
      <CountersSection />

      {/* 9. Testimonials */}
      <TestimonialsSection />

      {/* 10. Blogs & Knowledge Hub */}
      <BlogsSection />

      {/* 11. Why Choose Us */}
      <WhyChooseUsSection />

      {/* 12. Contact CTA Banner */}
      <ContactCTASection onOpenQuoteModal={() => openQuoteModal()} />

      {/* Local Quote Modal */}
      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productName={selectedProduct}
      />
    </div>
  );
};

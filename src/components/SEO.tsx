import React, { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
}

export const SEO: React.FC<SEOProps> = ({ 
  title = "Top Tensile Structure Manufacturers in Udaipur, Commercial Gazebo Tensile Structure Suppliers in Rajasthan",
  description = "Best Tensile Structure Pvt. Ltd. Top Tensile Structure Manufacturers in Udaipur, since 2010. Premium Quality Commercial Gazebo Tensile Structure Suppliers in Rajasthan.",
  keywords = "Top Tensile Structure Manufacturers, Commercial Gazebo Tensile Structure Suppliers, Top Tensile Structure Suppliers, Commercial Gazebo Tensile Structure Manufacturers in Udaipur"
}) => {
  useEffect(() => {
    document.title = title;

    // Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // Update Meta Keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', keywords);

    // Update Theme Color to Primary (#0B1F35)
    let metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (!metaThemeColor) {
      metaThemeColor = document.createElement('meta');
      metaThemeColor.setAttribute('name', 'theme-color');
      document.head.appendChild(metaThemeColor);
    }
    metaThemeColor.setAttribute('content', '#0B1F35');
  }, [title, description, keywords]);

  return null;
};

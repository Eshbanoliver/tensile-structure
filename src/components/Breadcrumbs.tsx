import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  url?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="py-3 px-4 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 inline-block max-w-full overflow-x-auto">
      <ol className="flex items-center space-x-2 text-xs font-medium text-gray-300 whitespace-nowrap">
        <li>
          <Link 
            to="/" 
            className="flex items-center space-x-1.5 text-gray-300 hover:text-accent transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center space-x-2">
            <ChevronRight className="w-3.5 h-3.5 text-gray-500 flex-shrink-0" />
            {item.url ? (
              <Link 
                to={item.url} 
                className="text-gray-300 hover:text-accent transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-accent font-semibold truncate max-w-[200px] sm:max-w-md">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

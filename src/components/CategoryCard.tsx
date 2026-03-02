import React from 'react';
import Link from 'next/link';

interface CategoryCardProps {
  name: string;
  description?: string;
  image?: string;
  link: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  name,
  description,
  image,
  link,
}) => {
  return (
    <Link href={link} className="group card overflow-hidden hover:shadow-xl transition-all duration-300">
      {image && (
        <div className="relative h-48 bg-gray-200 overflow-hidden">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gold-600 transition-colors">
          {name}
        </h3>
        {description && <p className="text-gray-600 text-sm mb-4 leading-relaxed">{description}</p>}
        <span className="inline-block text-gold-600 font-semibold group-hover:translate-x-1 transition-transform">
          Shop Now →
        </span>
      </div>
    </Link>
  );
};

export default CategoryCard;

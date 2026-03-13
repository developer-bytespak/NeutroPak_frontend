import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface BlogCardProps {
  title: string;
  excerpt: string;
  image?: string;
  slug: string;
  date?: string;
  category?: string;
  author?: string;
  readTime?: number;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  excerpt,
  image,
  slug,
  date,
  category,
  author,
  readTime,
}) => {
  return (
    <Link href={`/blog/${slug}`} className="block group h-full">
      <div className="bg-gradient-to-br from-gold-100 to-gold-200 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col border-2 border-gold-600 hover:border-gold-700 transform hover:-translate-y-1">
        {image && (
          <div className="relative h-48 sm:h-56 bg-gradient-to-br from-gold-100 to-gold-50 overflow-hidden">
            <Image
              src={image}
              alt={title}
              width={400}
              height={300}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {category && (
              <span className="absolute top-3 left-3 bg-gradient-to-r from-gold-600 to-gold-700 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg hover:shadow-xl transform group-hover:scale-110 transition-transform duration-300">
                {category}
              </span>
            )}
          </div>
        )}
        
        <div className="p-4 sm:p-5 flex flex-col flex-grow">
          {/* Title */}
          <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-gold-700 transition-colors duration-300 leading-snug">
            {title}
          </h3>
          
          {/* Excerpt */}
          <p className="text-gray-600 text-xs sm:text-sm mb-4 line-clamp-2 leading-relaxed flex-grow group-hover:text-gray-700 transition-colors duration-300">
            {excerpt}
          </p>
          
          {/* Divider */}
          <div className="border-t border-gold-300 group-hover:border-gold-400 transition-colors duration-300 pt-3 mb-3" />
          
          {/* Meta Info */}
          <div className="flex flex-col gap-3">
            <div className="flex gap-2 text-xs text-gray-600 flex-wrap">
              {date && (
                <span className="flex items-center gap-1 bg-gold-100 group-hover:bg-gold-200 px-2 py-0.5 rounded transition-colors duration-300 whitespace-nowrap">
                  <span>📅</span>
                  <span className="font-medium">{date}</span>
                </span>
              )}
              {readTime && (
                <span className="flex items-center gap-1 bg-gold-100 group-hover:bg-gold-200 px-2 py-0.5 rounded transition-colors duration-300 whitespace-nowrap">
                  <span>⏱️</span>
                  <span className="font-medium">{readTime}m</span>
                </span>
              )}
            </div>
            
            {author && (
              <span className="text-xs text-gray-600 flex items-center gap-1">
                <span>✍️</span>
                <span className="font-medium">{author}</span>
              </span>
            )}
            
            {/* Read More Link */}
            <div className="text-gold-700 font-bold text-sm group-hover:text-gold-800 transition-all duration-300 inline-flex items-center gap-2 mt-1">
              <span>Read More</span>
              <span className="text-base group-hover:translate-x-1 transition-transform duration-300">→</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;

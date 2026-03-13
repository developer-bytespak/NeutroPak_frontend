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
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  excerpt,
  image,
  slug,
  date,
  category,
  author,
}) => {
  return (
    <Link href={`/blog/${slug}`} className="block group h-full">
      <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full flex flex-col border border-gray-100 hover:border-red-900 transform hover:-translate-y-2">
        {image && (
          <div className="relative h-48 sm:h-56 md:h-64 bg-gradient-to-br from-gray-300 to-gray-400 overflow-hidden">
            <Image
              src={image}
              alt={title}
              width={400}
              height={300}
              className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-500 ease-out"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {category && (
              <span className="absolute top-4 left-4 bg-gradient-to-r from-red-900 to-red-800 text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg hover:shadow-xl transform group-hover:scale-110 transition-transform duration-300">
                {category}
              </span>
            )}
          </div>
        )}
        
        <div className="p-6 sm:p-7 flex flex-col flex-grow">
          {/* Title */}
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-red-900 transition-colors duration-300 leading-snug">
            {title}
          </h3>
          
          {/* Excerpt */}
          <p className="text-gray-600 text-sm sm:text-base mb-5 line-clamp-2 leading-relaxed flex-grow group-hover:text-gray-700 transition-colors duration-300">
            {excerpt}
          </p>
          
          {/* Divider */}
          <div className="border-t-2 border-gray-100 group-hover:border-red-900 transition-colors duration-300 pt-4 mb-4" />
          
          {/* Meta Info */}
          <div className="flex flex-col gap-4">
            <div className="flex gap-3 text-xs sm:text-sm text-gray-500 flex-wrap">
              {date && (
                <span className="flex items-center gap-1 bg-gray-50 group-hover:bg-red-50 px-2 py-1 rounded transition-colors duration-300">
                  <span className="text-base">📅</span>
                  <span className="font-medium">{date}</span>
                </span>
              )}
              {author && (
                <span className="flex items-center gap-1 bg-gray-50 group-hover:bg-red-50 px-2 py-1 rounded transition-colors duration-300">
                  <span className="text-base">✍️</span>
                  <span className="font-medium">{author}</span>
                </span>
              )}
            </div>
            
            {/* Read More Link */}
            <div className="text-red-900 font-bold text-sm sm:text-base group-hover:text-red-800 transition-all duration-300 inline-flex items-center gap-2">
              <span>Read Article</span>
              <span className="text-lg group-hover:translate-x-2 transition-transform duration-300">→</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;

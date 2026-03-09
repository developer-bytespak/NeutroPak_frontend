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
    <Link href={`/blog/${slug}`} className="card overflow-hidden group hover:shadow-xl transition-all duration-300">
      {image && (
        <div className="relative h-48 bg-gray-200 overflow-hidden">
          <Image
            src={image}
            alt={title}
            width={300}
            height={200}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {category && (
            <span className="absolute top-3 left-3 bg-gold-100 text-gold-700 px-3 py-1 rounded-full text-xs font-semibold">
              {category}
            </span>
          )}
        </div>
      )}
      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-gold-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
          {excerpt}
        </p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex gap-3">
            {date && <span>{date}</span>}
            {author && <span>by {author}</span>}
          </div>
          <span className="text-gold-600 font-semibold group-hover:translate-x-1 transition-transform">
            →
          </span>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;

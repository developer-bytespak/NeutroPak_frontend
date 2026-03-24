'use client';

import React, { useContext, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CartContext from '@/store/CartContext';
import { Product } from '@/types';
import { getOptimizedImageUrl } from '@/utils/cloudinaryImage';

interface ProductCardProps extends Partial<Product> {
  id?: string;
  name?: string;
  price?: number;
  image?: string;
  rating?: number;
  reviews?: number;
  slug?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id = '',
  name = 'Product Name',
  price = 99.99,
  image = '/product-placeholder.jpg',
  reviews = 120,
  slug = 'product-slug',
  ...rest
}) => {
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);
  const cartContext = useContext(CartContext);
  
  const optimizedImage = getOptimizedImageUrl(image, 'medium');

  const handleAddToCart = () => {
    if (!cartContext) {
      alert('Cart is not available. Please refresh the page.');
      return;
    }
    const product: Product = {
      id: id || slug || '',
      name: name || '',
      price: price as number,
      originalPrice: price as number,
      slug: slug || '',
      category: rest.category || '',
      description: rest.description || '',
      fullDescription: rest.fullDescription || '',
      rating: rest.rating || 5,
      reviews: reviews || 0,
      images: image ? [image] : [],
      variants: rest.variants || [],
      inStock: rest.inStock !== false,
      sku: rest.sku || '',
    };
    cartContext.addToCart(product, 1);
  };
  return (
    <div className="card overflow-hidden group hover:shadow-2xl active:shadow-xl transition-all duration-300 flex flex-col h-full">
      <div className="relative h-40 xs:h-48 sm:h-56 md:h-64 bg-white overflow-hidden flex items-center justify-center">
        <Link href={`/product/${id || slug}`} className="block w-full h-full flex items-center justify-center">
          {isImageLoading && (
            <div className="absolute inset-0 bg-white animate-pulse flex items-center justify-center">
              <span className="text-gray-400 text-xs sm:text-sm">Loading...</span>
            </div>
          )}
          <Image
            src={imageError ? '/product-placeholder.jpg' : optimizedImage}
            alt={name}
            width={500}
            height={500}
            quality={80}
            priority
            onLoadingComplete={() => setIsImageLoading(false)}
            onError={() => {
              setImageError(true);
              setIsImageLoading(false);
            }}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            style={{ imageRendering: 'crisp-edges' }}
          />
        </Link>
        <div className={`absolute top-1.5 xs:top-2 right-1.5 xs:right-2 sm:top-3 sm:right-3 ${rest.inStock === false ? 'bg-red-600' : 'bg-gold-600'} text-white px-2 xs:px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-semibold`}>
          {rest.inStock === false ? 'Out of Stock' : 'Sale'}
        </div>
      </div>

      <div className="p-2.5 xs:p-3 sm:p-4 flex flex-col flex-grow">
        <h3 className="text-xs xs:text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-gold-600 transition-colors">
          <Link href={`/product/${id || slug}`}>{name}</Link>
        </h3>

        <div className="flex items-center gap-1.5 xs:gap-2 mb-2 xs:mb-3">
          <span className="text-gold-400 text-xs xs:text-sm">★★★★★</span>
          <span className="text-gray-500 text-xs">({reviews})</span>
        </div>

        <p className="text-base xs:text-lg sm:text-xl md:text-2xl font-bold text-gold-600 mb-2.5 xs:mb-3 sm:mb-4">
          ₨{(price as number).toLocaleString()}
        </p>

        <div className="flex gap-1.5 xs:gap-2 mt-auto">
          <button 
            onClick={handleAddToCart}
            disabled={rest.inStock === false}
            className={`flex-1 text-xs xs:text-xs sm:text-sm px-2 xs:px-3 py-2 xs:py-2.5 sm:py-3 min-h-[44px] ${rest.inStock === false ? 'btn-disabled text-gray-400 cursor-not-allowed bg-gray-300' : 'btn-primary hover:bg-gold-700 transition-colors'}`}
          >
            {rest.inStock === false ? 'Out of Stock' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

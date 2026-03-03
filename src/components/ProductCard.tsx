'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/store/CartContext';
import { Product } from '@/types';

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
  const { addToCart } = useCart();

  const handleAddToCart = () => {
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
    addToCart(product, 1);
  };
  return (
    <div className="card overflow-hidden group hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
      <div className="relative h-56 bg-gray-200 overflow-hidden">
        <Link href={`/product/${slug}`} className="block w-full h-full">
          <Image
            src={image}
            alt={name}
            width={500}
            height={500}
            quality={90}
            priority
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            style={{ imageRendering: 'crisp-edges' }}
          />
        </Link>
        <div className="absolute top-3 right-3 bg-gold-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          Sale
        </div>
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-gold-600 transition-colors">
          <Link href={`/product/${slug}`}>{name}</Link>
        </h3>

        <div className="flex items-center gap-2 mb-3">
          <span className="text-gold-400 text-sm">★★★★★</span>
          <span className="text-gray-500 text-xs">({reviews})</span>
        </div>

        <p className="text-2xl font-bold text-gold-600 mb-4">
          ₨{(price as number).toLocaleString()}
        </p>

        <div className="flex gap-2 mt-auto">
          <button 
            onClick={handleAddToCart}
            className="flex-1 btn-primary text-sm hover:bg-gold-700 transition-colors"
          >
            Add to Cart
          </button>
          <button className="btn-sm border border-gray-300 text-gray-600 hover:text-amber-600 transition-colors">♡</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

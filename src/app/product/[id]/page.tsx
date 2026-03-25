'use client';

import React, { useState, useEffect, useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CartContext from '@/store/CartContext';
import { productService } from '@/services/productService';
import { getOptimizedImageUrl } from '@/utils/cloudinaryImage';

// Calculate the markup price (30% increase)
const calculateMarkupPrice = (actualPrice: number): number => {
  return Math.round(actualPrice * 1.3 * 100) / 100;
};

interface ProductDetailPageProps {
  params: {
    id: string;
  };
}

interface Product {
  id: string | number;
  name: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  imageUrl?: string | null;
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ params }) => {
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);
  const cartContext = useContext(CartContext);

  // Fetch product directly using ID
  useEffect(() => {
    const fetchProductData = async () => {
      try {
        setLoading(true);
        setError('');

        // Get the product directly by ID (much more efficient)
        const response = await productService.getProductById(parseInt(params.id));
        
        if (response.data.success && response.data.data) {
          const productData = response.data.data;
          setProduct(productData);
        } else {
          setError('Product not found');
        }
      } catch (err) {
        console.error('Error fetching product:', err);
        setError(`Failed to load product: ${err instanceof Error ? err.message : 'Unknown error'}`);
      } finally {
        setLoading(false);
      }
    };

    fetchProductData();
  }, [params.id]);

  if (loading) {
    return (
      <main className="bg-white">
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-lg text-gray-600">Loading product...</p>
          </div>
        </section>
      </main>
    );
  }

  if (error || !product) {
    return (
      <main className="bg-white">
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-lg text-red-600">{error || 'Product not found'}</p>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="bg-white">
      {/* Product Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Product Images */}
            <div className="flex flex-col gap-4 md:gap-6">
              <div className="rounded-lg overflow-hidden flex items-center justify-center bg-white h-72 xs:h-80 sm:h-96 md:h-96 relative">
                {imageLoading && (
                  <div className="absolute inset-0 bg-white animate-pulse flex items-center justify-center">
                    <span className="text-gray-400">Loading image...</span>
                  </div>
                )}
                <Image
                  src={imageError ? '/product-placeholder.jpg' : getOptimizedImageUrl(product?.imageUrl || '', 'large')}
                  alt={product?.name || 'Product'}
                  width={500}
                  height={500}
                  priority
                  quality={90}
                  onLoadingComplete={() => setImageLoading(false)}
                  onError={() => {
                    setImageError(true);
                    setImageLoading(false);
                  }}
                  className="w-full h-full object-contain p-4"
                />
              </div>
            </div>

            {/* Product Details */}
            <div>
              <div className="mb-6 hidden sm:block">
                <Link href="/" className="text-gray-600 hover:text-gray-800 text-sm">Home</Link> / 
                <Link href="/shop" className="text-gray-600 hover:text-gray-800 text-sm"> Shop</Link> / 
                <span className="text-gray-800 text-sm"> {product.category}</span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>

              {/* Price Display with Markup */}
              <div className="mb-6 space-y-2">
                {/* Markup Price (Original Display Price with Strikethrough) */}
                <p className="text-lg text-black line-through decoration-red-600 decoration-2">
                  ₨{calculateMarkupPrice(product.price).toLocaleString()}
                </p>
                {/* Actual Price (Sale Price) */}
                <p className="text-4xl font-bold text-gold-600">
                  ₨{product.price.toLocaleString()}
                </p>
              </div>

              <p className="text-gray-700 mb-8">{product.description}</p>

              {/* Quantity */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Quantity</h3>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() =>
                      setQuantity(Math.max(1, quantity - 1))
                    }
                    className="w-12 h-12 rounded-lg bg-gray-100 hover:bg-gray-200 font-bold text-lg"
                  >
                    −
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    readOnly
                    className="w-16 h-12 text-center border border-gray-300 rounded-lg"
                  />
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-12 rounded-lg bg-gray-100 hover:bg-gray-200 font-bold text-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to Cart */}
              <div className="flex gap-4 mb-8">
                <button
                  onClick={() => {
                    if (cartContext && product) {
                      // Map API Product to Cart Product type
                      const cartProduct = {
                        id: String(product.id),
                        name: product.name,
                        slug: `product-${product.id}`,
                        description: product.description,
                        fullDescription: product.description,
                        price: product.price,
                        originalPrice: product.price,
                        category: product.category,
                        rating: 0,
                        reviews: 0,
                        images: product.imageUrl ? [product.imageUrl] : [],
                        variants: [],
                        inStock: product.stock > 0,
                        sku: `SKU-${product.id}`,
                        imageUrl: product.imageUrl || undefined,
                      };
                      cartContext.addToCart(cartProduct, quantity);
                    } else {
                      alert('Cart is not available. Please refresh the page.');
                    }
                  }}
                  className="flex-1 bg-gold-600 hover:bg-gold-700 text-white font-bold py-4 rounded-lg transition-colors disabled:opacity-50"
                  disabled={product?.stock <= 0}
                >
                  Add to Cart
                </button>
                <button className="w-14 h-14 border-2 border-gray-300 rounded-lg hover:border-gold-600 text-2xl flex items-center justify-center">
                  ♡
                </button>
              </div>

              {/* Product Info */}
              <div className="bg-gray-50 p-6 rounded-lg space-y-3">
                <div className="flex justify-between">
                  <strong className="text-gray-700">Product ID:</strong>
                  <span className="text-gray-600">{product.id}</span>
                </div>
                <div className="flex justify-between">
                  <strong className="text-gray-700">Category:</strong>
                  <span className="text-gray-600">{product.category}</span>
                </div>
                <div className="flex justify-between">
                  <strong className="text-gray-700">Stock Status:</strong>
                  <span className={product.stock > 0 ? 'text-green-600' : 'text-red-600'}>
                    {product.stock > 0 ? `In Stock (${product.stock})` : 'Out of Stock'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description Tab */}
      <section className="py-20 bg-gradient-to-b from-yellow-50 via-amber-50 to-yellow-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl shadow-lg p-12 lg:p-16 border-2 border-yellow-200">
            <h2 className="text-4xl lg:text-5xl font-bold text-red-900 mb-4 pb-4 border-b-4 border-gold-600">
              About {product.name}
            </h2>
            
            <div className="mt-12 space-y-8 text-lg text-gray-800 leading-relaxed">
              <p>{product.description}</p>
            </div>

            {/* Key Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-8 border-t-2 border-yellow-200">
              <div className="bg-gradient-to-br from-yellow-100 to-amber-100 p-6 rounded-xl border-2 border-yellow-300 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-4xl">🐝</span>
                  <h4 className="font-bold text-red-900 text-lg">100% Pure</h4>
                </div>
                <p className="text-gray-800 text-sm leading-relaxed">Unprocessed and unheated, preserving all natural benefits and enzymes</p>
              </div>
              
              <div className="bg-gradient-to-br from-amber-100 to-yellow-100 p-6 rounded-xl border-2 border-amber-300 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-4xl">🧪</span>
                  <h4 className="font-bold text-red-900 text-lg">Lab Tested</h4>
                </div>
                <p className="text-gray-800 text-sm leading-relaxed">Rigorous quality testing for purity and authenticity</p>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-100 to-amber-100 p-6 rounded-xl border-2 border-yellow-300 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-4xl">🌿</span>
                  <h4 className="font-bold text-red-900 text-lg">Ethically Sourced</h4>
                </div>
                <p className="text-gray-800 text-sm leading-relaxed">From trusted beekeepers using traditional methods</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default ProductDetailPage;

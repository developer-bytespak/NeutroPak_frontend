'use client';

import React, { useState, useEffect, useContext } from 'react';
import ProductCard from '@/components/ProductCard';
import Image from 'next/image';
import CartContext from '@/store/CartContext';
import { productService } from '@/services/productService';

interface ProductDetailPageProps {
  params: {
    slug: string;
  };
}

interface Product {
  id: string | number;
  name: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  imageUrl?: string;
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ params }) => {
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState<Product | null>(null);
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const cartContext = useContext(CartContext);

  // Fetch all products from API
  useEffect(() => {
    const fetchProductData = async () => {
      try {
        setLoading(true);
        const response = await productService.getAllProducts(1, 100);
        console.log('Product detail - API Response:', response);
        
        // Extract products from response (axios wraps in response.data, API wraps in data field)
        const productsFromResponse = response?.data?.data?.products as unknown;
        let products: Product[] = [];
        
        if (Array.isArray(productsFromResponse)) {
          products = productsFromResponse;
        }
        
        if (products.length > 0) {
          setAllProducts(products);
          
          // Extract product ID from slug (format: product-{id})
          const idFromSlug = params.slug.split('-').pop();
          const foundProduct = products.find(p => String(p.id) === idFromSlug);
          
          if (foundProduct) {
            setProduct(foundProduct);
          } else {
            setError('Product not found');
          }
        }
      } catch (err) {
        console.error('Error fetching product:', err);
        setError(`Failed to load product: ${err instanceof Error ? err.message : 'Unknown error'}`);
      } finally {
        setLoading(false);
      }
    };

    fetchProductData();
  }, [params.slug]);

  // Get related products (exclude current product)
  const relatedProducts = allProducts
    .filter(p => String(p.id) !== (product?.id ? String(product.id) : ''))
    .slice(0, 3);

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
      {/* Preload main image */}
      <link rel="preload" as="image" href={product.imageUrl || '/product-placeholder.jpg'} />
      
      {/* Product Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="flex flex-col gap-6">
              <div className="bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center h-96">
                <Image
                  src={product.imageUrl || '/product-placeholder.jpg'}
                  alt={product.name}
                  width={400}
                  height={400}
                  priority
                  quality={100}
                  unoptimized
                  loading="eager"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Product Details */}
            <div>
              <div className="mb-6">
                <a href="/" className="text-gray-600 hover:text-gray-800 text-sm">Home</a> / 
                <a href="/shop" className="text-gray-600 hover:text-gray-800 text-sm"> Shop</a> / 
                <span className="text-gray-800 text-sm"> {product.category}</span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>

              <div className="flex items-center gap-4 mb-6">
                <span className="text-gold-400 text-lg">★★★★★</span>
                <span className="text-gray-600 text-sm">(Based on customer reviews)</span>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-bold text-gold-600">
                  ₨{product.price.toLocaleString()}
                </span>
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
                        imageUrl: product.imageUrl,
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

      {/* Related Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Related Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard
                key={relatedProduct.id}
                id={String(relatedProduct.id)}
                name={relatedProduct.name}
                price={relatedProduct.price}
                image={relatedProduct.imageUrl || '/product-placeholder.jpg'}
                slug={`product-${relatedProduct.id}`}
                category={relatedProduct.category}
                description={relatedProduct.description}
                inStock={relatedProduct.stock > 0}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductDetailPage;

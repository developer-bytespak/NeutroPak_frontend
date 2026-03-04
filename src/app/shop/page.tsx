'use client';

import React, { useState, useEffect } from 'react';
import ProductCard from '@/components/ProductCard';
import { productService } from '@/services/productService';

interface Product {
  id: string | number;
  name: string;
  price: number;
  description: string;
  category: string;
  stock: number;
  imageUrl?: string;
}

const ShopPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [priceRange, setPriceRange] = useState([790, 6000]);
  const [appliedFilters, setAppliedFilters] = useState({
    priceRange: [790, 6000],
    stockStatus: null as 'onSale' | 'inStock' | 'onBackorder' | null,
  });
  const [tempStockStatus, setTempStockStatus] = useState<'onSale' | 'inStock' | 'onBackorder' | null>(null);
  const [sortBy, setSortBy] = useState('popularity');

  // Fetch products from backend API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await productService.getAllProducts(1, 100);
        console.log('API Response:', response);
        
        // Extract products from response (axios wraps in response.data, API wraps in data field)
        const productsFromResponse = response?.data?.data?.products as unknown;
        let productsData: Product[] = [];
        
        if (Array.isArray(productsFromResponse)) {
          productsData = productsFromResponse;
        }
        
        if (productsData.length > 0) {
          setProducts(productsData);
        } else {
          console.error('No products found in response:', response);
          setError('Failed to load products');
        }
      } catch (err) {
        console.error('Error fetching products:', err);
        setError(`Failed to load products: ${err instanceof Error ? err.message : 'Unknown error'}`);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const allProducts = products;

  const filteredProducts = allProducts.filter((product) => {
    const priceMatch =
      product.price >= appliedFilters.priceRange[0] &&
      product.price <= appliedFilters.priceRange[1];
    return priceMatch;
  });

  const handleFilterClick = () => {
    setAppliedFilters({
      priceRange: [...priceRange],
      stockStatus: tempStockStatus,
    });
  };

  return (
    <main>
      {/* Page Header */}
      <section
        className="relative bg-center bg-cover py-32"
        style={{
          backgroundImage: 'url(/shop_sec.png)',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-2">Shop</h1>
          <p className="text-lg text-yellow-50">Browse our collection of pure, raw honey</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="md:col-span-1">
            {/* Price Filter */}
            <div className="py-6 border-b border-gray-200">
              <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">Filter by Price</h3>
              <div className="space-y-4">
                <input
                  type="range"
                  min="0"
                  max="5000"
                  value={priceRange[1]}
                  onChange={(e) =>
                    setPriceRange([
                      priceRange[0],
                      parseInt(e.target.value),
                    ])
                  }
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-red-900"
                />
                <div className="flex justify-between items-center pt-2">
                  <p className="text-gray-700 font-medium text-sm">
                    Price: ₨ {priceRange[0]} — ₨ {priceRange[1]}
                  </p>
                </div>
                <button 
                  onClick={handleFilterClick}
                  className="text-xs font-bold text-gray-700 hover:text-red-900 transition-colors uppercase tracking-wider w-full text-center py-2"
                >
                  Filter
                </button>
              </div>
            </div>

            {/* Stock Status Filter */}
            <div className="py-6">
              <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">Stock Status</h3>
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer hover:text-red-900 transition-colors">
                  <input 
                    type="checkbox" 
                    checked={tempStockStatus === 'onSale'}
                    onChange={() => setTempStockStatus(tempStockStatus === 'onSale' ? null : 'onSale')}
                    className="w-5 h-5 rounded border-2 border-gray-300 cursor-pointer accent-red-900" 
                  />
                  <span className="text-gray-700 text-sm">On sale</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer hover:text-red-900 transition-colors">
                  <input 
                    type="checkbox" 
                    checked={tempStockStatus === 'inStock'}
                    onChange={() => setTempStockStatus(tempStockStatus === 'inStock' ? null : 'inStock')}
                    className="w-5 h-5 rounded border-2 border-gray-300 cursor-pointer accent-red-900" 
                  />
                  <span className="text-gray-700 text-sm">In stock</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer hover:text-red-900 transition-colors">
                  <input 
                    type="checkbox" 
                    checked={tempStockStatus === 'onBackorder'}
                    onChange={() => setTempStockStatus(tempStockStatus === 'onBackorder' ? null : 'onBackorder')}
                    className="w-5 h-5 rounded border-2 border-gray-300 cursor-pointer accent-red-900" 
                  />
                  <span className="text-gray-700 text-sm">On backorder</span>
                </label>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <section className="md:col-span-3">
            {/* Sorting */}
            <div className="flex justify-between items-center mb-8">
              <div className="text-gray-700 font-medium">
                Showing {filteredProducts.length} products
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="select-field"
              >
                <option value="popularity">
                  Sort by Popularity
                </option>
                <option value="price-low">
                  Sort by Price: Low to High
                </option>
                <option value="price-high">
                  Sort by Price: High to Low
                </option>
                <option value="newest">Sort by Newest</option>
              </select>
            </div>

            {/* Products Grid */}
            {loading ? (
              <div className="text-center py-12">
                <p className="text-lg text-gray-600">Loading products...</p>
              </div>
            ) : error ? (
              <div className="text-center py-12">
                <p className="text-lg text-red-600">{error}</p>
              </div>
            ) : filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    id={String(product.id)}
                    name={product.name}
                    price={product.price}
                    image={product.imageUrl || '/product-placeholder.jpg'}
                    slug={`product-${product.id}`}
                    category={product.category}
                    description={product.description}
                    inStock={product.stock > 0}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-gray-600">No products found matching your criteria.</p>
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
};

export default ShopPage;

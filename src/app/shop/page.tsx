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
    stockStatus: null as 'onSale' | 'inStock' | null,
  });
  const [tempStockStatus, setTempStockStatus] = useState<'onSale' | 'inStock' | null>(null);
  const [sortBy, setSortBy] = useState('price-low');

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

  const maxPrice = Math.max(...allProducts.map(p => p.price), 6000);

  const filteredProducts = allProducts
    .filter((product) => {
      const priceMatch =
        product.price >= appliedFilters.priceRange[0] &&
        product.price <= appliedFilters.priceRange[1];
      
      let stockMatch = true;
      if (appliedFilters.stockStatus === 'inStock') {
        stockMatch = product.stock > 0;
      }
      
      return priceMatch && stockMatch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        default:
          return 0;
      }
    });

  const handleFilterClick = () => {
    setAppliedFilters({
      priceRange: [...priceRange],
      stockStatus: tempStockStatus,
    });
  };

  return (
    <main className="overflow-x-hidden">
      {/* Page Header */}
      <section
        className="relative bg-center bg-cover py-12 sm:py-20 md:py-32"
        style={{
          backgroundImage: 'url(/shop_sec.png)',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">Shop</h1>
          <p className="text-sm sm:text-base md:text-lg text-yellow-50">Browse our collection of pure, raw honey</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8 md:gap-8">
          {/* Sidebar */}
          <aside className="md:col-span-1">
            {/* Price Filter */}
            <div className="py-2 sm:py-6 border-b border-gray-200">
              <h3 className="hidden sm:block text-xs sm:text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">Filter by Price</h3>
              <div className="space-y-2 sm:space-y-4">
                <input
                  type="range"
                  min="0"
                  max={maxPrice}
                  value={priceRange[1]}
                  onChange={(e) =>
                    setPriceRange([
                      priceRange[0],
                      parseInt(e.target.value),
                    ])
                  }
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-red-900"
                />
                <div className="hidden sm:flex justify-between items-center pt-1 sm:pt-2">
                  <p className="text-gray-700 font-medium text-xs sm:text-sm">
                    Price: ₨ {priceRange[0]} — ₨ {priceRange[1]}
                  </p>
                </div>
                <button 
                  onClick={handleFilterClick}
                  className="hidden sm:block text-xs font-bold text-white bg-red-900 hover:bg-red-800 transition-colors uppercase tracking-wider w-full text-center py-2 rounded"
                >
                  Apply Filters
                </button>
                <button 
                  onClick={() => {
                    setPriceRange([790, maxPrice]);
                    setTempStockStatus(null);
                    setAppliedFilters({
                      priceRange: [790, maxPrice],
                      stockStatus: null,
                    });
                  }}
                  className="hidden sm:block text-xs font-bold text-gray-700 hover:text-red-900 transition-colors uppercase tracking-wider w-full text-center py-2 border border-gray-300 rounded"
                >
                  Reset Filters
                </button>
              </div>
            </div>

            {/* Stock Status Filter */}
            <div className="py-4 sm:py-6">
              <h3 className="text-xs sm:text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">Stock Status</h3>
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer hover:text-red-900 transition-colors">
                  <input 
                    type="checkbox" 
                    checked={tempStockStatus === 'onSale'}
                    onChange={() => setTempStockStatus(tempStockStatus === 'onSale' ? null : 'onSale')}
                    className="w-5 h-5 rounded border-2 border-gray-300 cursor-pointer accent-red-900" 
                  />
                  <span className="text-gray-700 text-xs sm:text-sm">On sale</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer hover:text-red-900 transition-colors">
                  <input 
                    type="checkbox" 
                    checked={tempStockStatus === 'inStock'}
                    onChange={() => setTempStockStatus(tempStockStatus === 'inStock' ? null : 'inStock')}
                    className="w-5 h-5 rounded border-2 border-gray-300 cursor-pointer accent-red-900" 
                  />
                  <span className="text-gray-700 text-xs sm:text-sm">In stock</span>
                </label>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <section className="md:col-span-3">
            {/* Sorting */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 gap-4">
              <div className="text-gray-700 font-medium text-sm sm:text-base">
                Showing {filteredProducts.length} products
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded text-xs sm:text-sm text-gray-900 bg-white hover:border-gray-400 focus:outline-none focus:border-red-900 focus:ring-1 focus:ring-red-900 transition-colors"
              >
                <option value="price-low">
                  Sort by Price: Low to High
                </option>
                <option value="price-high">
                  Sort by Price: High to Low
                </option>
              </select>
            </div>

            {/* Products Grid */}
            {loading ? (
              <div className="text-center py-8 sm:py-12">
                <p className="text-base sm:text-lg text-gray-600">Loading products...</p>
              </div>
            ) : error ? (
              <div className="text-center py-8 sm:py-12">
                <p className="text-base sm:text-lg text-red-600">{error}</p>
              </div>
            ) : filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
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
              <div className="text-center py-8 sm:py-12">
                <p className="text-base sm:text-lg text-gray-600">No products found matching your criteria.</p>
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
};

export default ShopPage;

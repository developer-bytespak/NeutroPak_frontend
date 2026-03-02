'use client';

import React, { useState } from 'react';
import ProductCard from '@/components/ProductCard';
import Link from 'next/link';

const ShopPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [sortBy, setSortBy] = useState('popularity');

  // Sample products data
  const allProducts = [
    {
      slug: 'sidr-honey-125g',
      name: 'Sidr (Beri) Honey - 125g',
      price: 799,
      image: '/sidr-honey-125g.jpg',
      reviews: 150,
      category: 'farm-honey',
    },
    {
      slug: 'sidr-honey-250g',
      name: 'Sidr (Beri) Honey - 250g',
      price: 1599,
      image: '/sidr-honey-250g.jpg',
      reviews: 200,
      category: 'farm-honey',
    },
    {
      slug: 'sidr-honey-500g',
      name: 'Sidr (Beri) Honey - 500g',
      price: 2399,
      image: '/sidr-honey-500g.jpg',
      reviews: 180,
      category: 'farm-honey',
    },
    {
      slug: 'sidr-honey-1kg',
      name: 'Sidr (Beri) Honey - 1kg',
      price: 4399,
      image: '/sidr-honey-1kg.jpg',
      reviews: 220,
      category: 'farm-honey',
    },
    {
      slug: 'wild-forest-honey-250g',
      name: 'Wild Forest Honey - 250g',
      price: 1899,
      image: '/wild-honey-250g.jpg',
      reviews: 160,
      category: 'wild-honey',
    },
    {
      slug: 'wild-forest-honey-500g',
      name: 'Wild Forest Honey - 500g',
      price: 3299,
      image: '/wild-honey-500g.jpg',
      reviews: 190,
      category: 'wild-honey',
    },
  ];

  const filteredProducts = allProducts.filter((product) => {
    const categoryMatch =
      selectedCategory === 'all' ||
      product.category === selectedCategory;
    const priceMatch =
      product.price >= priceRange[0] &&
      product.price <= priceRange[1];
    return categoryMatch && priceMatch;
  });

  const categories = [
    { value: 'all', label: 'All Products' },
    { value: 'wild-honey', label: 'Wild Honey' },
    { value: 'farm-honey', label: 'Farm Honey' },
  ];

  return (
    <main>
      {/* Page Header */}
      <section className="bg-gold-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Shop Honey Products</h1>
          <p className="text-lg text-gray-600">Browse our collection of pure, raw honey</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="md:col-span-1">
            {/* Category Filter */}
            <div className="py-6 border-b border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Category</h3>
              <ul className="space-y-3">
                {categories.map((cat) => (
                  <li key={cat.value}>
                    <label className="flex items-center gap-2 cursor-pointer hover:text-gold-600 transition-colors">
                      <input
                        type="radio"
                        name="category"
                        value={cat.value}
                        checked={selectedCategory === cat.value}
                        onChange={(e) =>
                          setSelectedCategory(e.target.value)
                        }
                        className="w-4 h-4"
                      />
                      <span className="text-gray-700">{cat.label}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price Filter */}
            <div className="py-6 border-b border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Price Range</h3>
              <div className="space-y-3">
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
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gold-600"
                />
                <p className="text-gray-700 font-medium">
                  ₨{priceRange[0]} - ₨{priceRange[1]}
                </p>
              </div>
            </div>

            {/* Stock Filter */}
            <div className="py-6 border-b border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Availability</h3>
              <label className="flex items-center gap-2 cursor-pointer hover:text-amber-600 transition-colors">
                <input type="checkbox" defaultChecked className="w-4 h-4 rounded focus:ring-2 focus:ring-amber-600" />
                <span className="text-gray-700">In Stock</span>
              </label>
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
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.slug}
                    {...product}
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

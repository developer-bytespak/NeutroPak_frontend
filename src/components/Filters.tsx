'use client';

import React, { useState } from 'react';

const Filters: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [sortBy, setSortBy] = useState('latest');

  return (
    <div className="filters">
      <div className="filter-group">
        <h3>Category</h3>
        <div className="filter-options">
          <label>
            <input
              type="checkbox"
              checked={selectedCategory === 'electronics'}
              onChange={(e) => setSelectedCategory(e.target.checked ? 'electronics' : '')}
            />
            Electronics
          </label>
          <label>
            <input
              type="checkbox"
              checked={selectedCategory === 'clothing'}
              onChange={(e) => setSelectedCategory(e.target.checked ? 'clothing' : '')}
            />
            Clothing
          </label>
          <label>
            <input
              type="checkbox"
              checked={selectedCategory === 'home'}
              onChange={(e) => setSelectedCategory(e.target.checked ? 'home' : '')}
            />
            Home & Garden
          </label>
          <label>
            <input
              type="checkbox"
              checked={selectedCategory === 'books'}
              onChange={(e) => setSelectedCategory(e.target.checked ? 'books' : '')}
            />
            Books
          </label>
        </div>
      </div>

      <div className="filter-group">
        <h3>Price Range</h3>
        <div className="price-range">
          <input
            type="range"
            min="0"
            max="1000"
            value={priceRange[0]}
            onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
            className="price-slider"
          />
          <input
            type="range"
            min="0"
            max="1000"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
            className="price-slider"
          />
          <div className="price-display">
            ${priceRange[0]} - ${priceRange[1]}
          </div>
        </div>
      </div>

      <div className="filter-group">
        <h3>Sort By</h3>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="sort-select">
          <option value="latest">Latest</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Highest Rated</option>
          <option value="popular">Most Popular</option>
        </select>
      </div>

      <div className="filter-group">
        <h3>Rating</h3>
        <div className="filter-options">
          <label>
            <input type="checkbox" />
            ★★★★★ 5 Stars
          </label>
          <label>
            <input type="checkbox" />
            ★★★★☆ 4 Stars & up
          </label>
          <label>
            <input type="checkbox" />
            ★★★☆☆ 3 Stars & up
          </label>
        </div>
      </div>

      <button className="btn-reset-filters">Reset Filters</button>
    </div>
  );
};

export default Filters;

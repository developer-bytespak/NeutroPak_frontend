'use client';

import React, { useState } from 'react';
import ProductCard from '@/components/ProductCard';
import Image from 'next/image';

interface ProductDetailPageProps {
  params: {
    slug: string;
  };
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ params }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState('250g');

  // Sample product data - would be fetched from backend
  const product = {
    id: '1',
    name: 'Sidr (Beri) Honey - Pure Raw Honey',
    slug: params.slug,
    price: 1599,
    originalPrice: 1800,
    rating: 4.9,
    reviews: 200,
    description:
      'Pure, raw Sidr honey collected from trusted beekeepers in Pakistan. 100% organic, unheated, and lab-tested for quality. Contains all natural enzymes and antioxidants.',
    fullDescription: `Sidr (Beri) honey is one of the most sought-after honey varieties due to its exceptional health benefits and rich taste. Our Sidr honey is sourced from the best beekeepers in Pakistan who use traditional methods to maintain purity.

Key Benefits:
• Boosts immunity and energy levels
• Rich in antioxidants and enzymes
• Natural antibacterial properties
• Supports digestive health
• Improves sleep quality

Our Process:
Every batch is cold-extracted, gently filtered to preserve nutrients, and lab-tested for purity. We never add sugar or use artificial processing methods.`,
    images: [
      '/sidr-honey-250g.jpg',
      '/sidr-honey-250g-back.jpg',
      '/sidr-honey-bottle.jpg',
    ],
    variants: [
      { size: '125g', price: 799 },
      { size: '250g', price: 1599 },
      { size: '500g', price: 2399 },
      { size: '1kg', price: 4399 },
    ],
    inStock: true,
    sku: 'SIDR-250G-001',
    category: 'Farm Honey',
  };

  const relatedProducts = [
    {
      slug: 'wild-forest-honey-250g',
      name: 'Wild Forest Honey - 250g',
      price: 1899,
      image: '/wild-honey-250g.jpg',
      reviews: 160,
    },
    {
      slug: 'sidr-honey-500g',
      name: 'Sidr Honey - 500g',
      price: 2399,
      image: '/sidr-honey-500g.jpg',
      reviews: 180,
    },
    {
      slug: 'acacia-honey-250g',
      name: 'Acacia Honey - 250g',
      price: 1499,
      image: '/acacia-honey-250g.jpg',
      reviews: 140,
    },
  ];

  return (
    <main className="product-detail-page">
      <section className="product-section">
        <div className="container">
          <div className="product-grid">
            {/* Product Images */}
            <div className="product-images">
              <div className="main-image">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  width={400}
                  height={400}
                  priority
                />
              </div>
              <div className="thumbnail-images">
                {product.images.map((img, idx) => (
                  <div key={idx} className="thumbnail">
                    <Image
                      src={img}
                      alt={`${product.name} ${idx + 1}`}
                      width={80}
                      height={80}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="product-details">
              <div className="breadcrumb">
                <a href="/">Home</a> / <a href="/shop">Shop</a> /{' '}
                <span>{product.category}</span>
              </div>

              <h1>{product.name}</h1>

              <div className="rating">
                <span className="stars">
                  {'★'.repeat(Math.floor(product.rating))}
                  {'☆'.repeat(5 - Math.floor(product.rating))}
                </span>
                <span className="rating-value">
                  {product.rating}/5 ({product.reviews} reviews)
                </span>
              </div>

              <div className="price-section">
                <span className="current-price">
                  ₨{product.price}
                </span>
                {product.originalPrice && (
                  <span className="original-price">
                    ₨{product.originalPrice}
                  </span>
                )}
              </div>

              <p className="description">{product.description}</p>

              {/* Variants */}
              <div className="variants-section">
                <h3>Select Size</h3>
                <div className="variants-grid">
                  {product.variants.map((variant) => (
                    <button
                      key={variant.size}
                      className={`variant-btn ${
                        selectedVariant === variant.size
                          ? 'active'
                          : ''
                      }`}
                      onClick={() =>
                        setSelectedVariant(variant.size)
                      }
                    >
                      {variant.size} - ₨{variant.price}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="quantity-section">
                <h3>Quantity</h3>
                <div className="quantity-input">
                  <button
                    onClick={() =>
                      setQuantity(Math.max(1, quantity - 1))
                    }
                  >
                    −
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    readOnly
                  />
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to Cart */}
              <div className="product-actions">
                <button
                  className="btn btn-primary btn-large"
                  disabled={!product.inStock}
                >
                  Add to Cart
                </button>
                <button className="btn btn-outlined btn-large">
                  Add to Wishlist ♡
                </button>
              </div>

              {/* Product Info */}
              <div className="product-info">
                <div className="info-item">
                  <strong>SKU:</strong> {product.sku}
                </div>
                <div className="info-item">
                  <strong>Category:</strong>{' '}
                  {product.category}
                </div>
                <div className="info-item">
                  <strong>Stock Status:</strong>{' '}
                  {product.inStock ? (
                    <span className="in-stock">
                      In Stock
                    </span>
                  ) : (
                    <span className="out-stock">
                      Out of Stock
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description Tab */}
      <section className="product-description-section">
        <div className="container">
          <h2>Product Details</h2>
          <div
            className="description-content"
            dangerouslySetInnerHTML={{
              __html: product.fullDescription.replace(
                /\n/g,
                '<br/>'
              ),
            }}
          />
        </div>
      </section>

      {/* Related Products */}
      <section className="related-products">
        <div className="container">
          <h2>Related Products</h2>
          <div className="products-grid">
            {relatedProducts.map((product) => (
              <ProductCard key={product.slug} {...product} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductDetailPage;

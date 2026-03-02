import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  id?: string;
  name?: string;
  price?: number;
  image?: string;
  rating?: number;
  reviews?: number;
  slug?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name = 'Product Name',
  price = 99.99,
  image = '/product-placeholder.jpg',
  reviews = 120,
  slug = 'product-slug',
}) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <Link href={`/product/${slug}`}>
          <Image
            src={image}
            alt={name}
            width={200}
            height={200}
            priority={false}
          />
        </Link>
        <div className="product-badge">New</div>
      </div>

      <div className="product-content">
        <h3>
          <Link href={`/product/${slug}`}>{name}</Link>
        </h3>

        <div className="product-rating">
          <div className="stars">★★★★☆</div>
          <span className="reviews">({reviews} reviews)</span>
        </div>

        <p className="product-price">${price.toFixed(2)}</p>

        <div className="product-actions">
          <button className="btn-add-cart">Add to Cart</button>
          <button className="btn-wishlist">♡</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

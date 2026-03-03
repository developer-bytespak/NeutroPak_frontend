'use client';

import React, { useState, useEffect, useContext } from 'react';
import ProductCard from '@/components/ProductCard';
import Image from 'next/image';
import CartContext from '@/store/CartContext';

interface ProductDetailPageProps {
  params: {
    slug: string;
  };
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ params }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState<string>('');
  const cartContext = useContext(CartContext);

  useEffect(() => {
    // Set initial variant after component mounts
    const productsDatabase: { [key: string]: any } = {
      'cinnamon-infused-honey-500g': {
        variants: [{ size: 'Standard', price: 1450 }]
      },
      'chilli-infused-honey-500g': {
        variants: [{ size: 'Standard', price: 1450 }]
      },
      'acacia-honey-500g': {
        variants: [{ size: 'Standard', price: 1380 }]
      },
      'acacia-honey-250g': {
        variants: [{ size: 'Standard', price: 850 }]
      },
      'chilli-infused-honey-250g': {
        variants: [{ size: 'Standard', price: 930 }]
      },
      'cinnamon-infused-honey-250g': {
        variants: [{ size: 'Standard', price: 930 }]
      },
      'gift-box-250g': {
        variants: [{ size: 'Standard', price: 2450 }]
      },
    };
    
    const product = productsDatabase[params.slug];
    if (product && product.variants.length > 0) {
      setSelectedVariant(product.variants[0].size);
    }
  }, [params.slug]);

  // All products database
  const productsDatabase: { [key: string]: any } = {
    'cinnamon-infused-honey-500g': {
      id: '1',
      name: 'Cinnamon Infused Honey (500g)',
      slug: 'cinnamon-infused-honey-500g',
      price: 1450,
      originalPrice: 1599,
      rating: 4.9,
      reviews: 150,
      category: 'Infused Honey',
      description: 'Premium cinnamon-infused honey combining the warmth of cinnamon with pure raw honey. Perfect for health-conscious consumers looking for natural flavor and medicinal benefits.',
      fullDescription: `Our Cinnamon Infused Honey is a perfect blend of premium raw honey and premium-grade cinnamon powder. This natural infusion provides all the benefits of raw honey combined with cinnamon's warming properties.

Key Benefits:
• Boosts metabolism and energy
• Rich in antioxidants and cinnamon's natural healing properties
• Supports healthy blood sugar levels
• Natural anti-inflammatory properties
• Perfect for tea, warm milk, or direct consumption

Our Process:
We carefully infuse premium cinnamon powder into cold-extracted honey, maintaining all natural enzymes and nutrients. No artificial flavoring or additives—just pure honey and pure cinnamon.`,
      images: [
        '/cinamin(500g).JPG',
        '/cinamin(500g).JPG',
        '/cinamin(500g).JPG',
      ],
      variants: [
        { size: 'Standard', price: 1450 }
      ],
      inStock: true,
      sku: 'CINNAMON-500G-001',
    },
    'chilli-infused-honey-500g': {
      id: '2',
      name: 'Chilli Infused Honey (500g)',
      slug: 'chilli-infused-honey-500g',
      price: 1450,
      originalPrice: 1599,
      rating: 4.8,
      reviews: 200,
      category: 'Infused Honey',
      description: 'Fiery chilli-infused honey that brings heat and wellness together. Ideal for those seeking a unique taste with thermogenic benefits.',
      fullDescription: `Our Chilli Infused Honey combines the smoothness of raw honey with the warming kick of premium chilli peppers. This bold infusion is perfect for those who want natural spice with health benefits.

Key Benefits:
• Boosts metabolism and thermogenesis
• Rich in capsaicin for circulation and energy
• Natural antibacterial properties
• Supports respiratory and digestive health
• Adds unique flavor to food and beverages

Our Process:
Premium chilli is carefully infused into our cold-extracted honey, preserving all beneficial compounds. No artificial heat or additives—purely natural ingredients.`,
      images: [
        '/chilli(500g).JPG',
        '/chilli(500g).JPG',
        '/chilli(500g).JPG',
      ],
      variants: [
        { size: 'Standard', price: 1450 }
      ],
      inStock: true,
      sku: 'CHILLI-500G-001',
    },
    'acacia-honey-500g': {
      id: '3',
      name: 'Acacia Honey (500g)',
      slug: 'acacia-honey-500g',
      price: 1380,
      originalPrice: 1599,
      rating: 4.9,
      reviews: 180,
      category: 'Farm Honey',
      description: 'Pure acacia honey known for its light flavor and rapid crystallization. One of the finest honey varieties for direct consumption and health benefits.',
      fullDescription: `Acacia honey is among the most sought-after varieties due to its light color, mild taste, and exceptional health benefits. Our acacia honey is sourced from pristine acacia forests.

Key Benefits:
• Gentle on stomach and digestive system
• High in antioxidants and minerals
• Ideal for allergy management
• Natural energy boost
• Excellent for skin health

Our Process:
Collected from acacia flowers in untouched regions, our honey undergoes cold extraction and gentle filtration to preserve all nutrients. Lab-tested for purity and quality.`,
      images: [
        '/acacia(500g).JPG',
        '/acacia(500g).JPG',
        '/acacia(500g).JPG',
      ],
      variants: [
        { size: 'Standard', price: 1380 }
      ],
      inStock: true,
      sku: 'ACACIA-500G-001',
    },
    'acacia-honey-250g': {
      id: '4',
      name: 'Acacia Honey (250g)',
      slug: 'acacia-honey-250g',
      price: 850,
      originalPrice: 999,
      rating: 4.9,
      reviews: 220,
      category: 'Farm Honey',
      description: 'Premium acacia honey in a convenient 250g size. Perfect for sampling premium quality or gifting.',
      fullDescription: `Our Acacia Honey (250g) is the perfect introduction to premium honey. Same quality as our larger sizes, packaged for convenience and value.

Key Benefits:
• Light, pure taste perfect for all ages
• Health-promoting minerals and enzymes
• Smaller size for experimentation
• Great gift option
• Lab-tested for purity

Our Process:
Same cold-extraction and rigorous testing as all our products, just in a smaller convenient size.`,
      images: [
        '/acaciaa(250g).png',
        '/acaciaa(250g).png',
        '/acaciaa(250g).png',
      ],
      variants: [
        { size: 'Standard', price: 850 }
      ],
      inStock: true,
      sku: 'ACACIA-250G-001',
    },
    'chilli-infused-honey-250g': {
      id: '5',
      name: 'Chilli Infused Honey (250g)',
      slug: 'chilli-infused-honey-250g',
      price: 930,
      originalPrice: 1099,
      rating: 4.8,
      reviews: 160,
      category: 'Infused Honey',
      description: 'Compact size of our signature chilli-infused honey. Experience the heat without commitment.',
      fullDescription: `Try our Chilli Infused Honey in a smaller 250g size. Perfect for testing or use as a flavorful gift.

Key Benefits:
• Premium infused honey in compact size
• Perfect for trying before investing in larger quantity
• Great for gifting
• Full nutritional benefits of chilli-infused honey

Our Process:
Same premium infusion process as our standard size with rigorous quality control.`,
      images: [
        '/chilli(250g).png',
        '/chilli(250g).png',
        '/chilli(250g).png',
      ],
      variants: [
        { size: 'Standard', price: 930 }
      ],
      inStock: true,
      sku: 'CHILLI-250G-001',
    },
    'cinnamon-infused-honey-250g': {
      id: '6',
      name: 'Cinnamon Infused Honey (250g)',
      slug: 'cinnamon-infused-honey-250g',
      price: 930,
      originalPrice: 1099,
      rating: 4.9,
      reviews: 190,
      category: 'Infused Honey',
      description: 'Cinnamon-infused honey in 250g. Perfect for warming beverages and natural health benefits.',
      fullDescription: `Our Cinnamon Infused Honey (250g) brings warmth and wellness to your daily routine in a convenient size.

Key Benefits:
• Smaller size for experimentation
• Full cinnamon and honey benefits
• Perfect for tea and warm beverages
• Great gift option
• Maintains all natural properties

Our Process:
Premium infusion maintained in this smaller size with same rigorous quality standards.`,
      images: [
        '/cinamin_infused(250g).png',
        '/cinamin_infused(250g).png',
        '/cinamin_infused(250g).png',
      ],
      variants: [
        { size: 'Standard', price: 930 }
      ],
      inStock: true,
      sku: 'CINNAMON-250G-001',
    },
    'gift-box-250g': {
      id: '7',
      name: 'Gift Box (250g)',
      slug: 'gift-box-250g',
      price: 2450,
      originalPrice: 2999,
      rating: 5.0,
      reviews: 210,
      category: 'Gift Sets',
      description: 'Premium gift-packaged honey set. Perfect for special occasions and corporate gifting.',
      fullDescription: `Our Gift Box is the perfect present for honey lovers. Beautifully packaged with premium protection for safe delivery.

Contents:
• Premium 250g honey selection
• Elegant gift packaging
• Perfect presentation
• Ideal for corporate gifts and special occasions

Our Process:
Same premium honey quality with added gift packaging for that special touch. Carefully packaged to ensure safe delivery.`,
      images: [
        '/giftbox.jpeg',
        '/giftbox.jpeg',
        '/giftbox.jpeg',
      ],
      variants: [
        { size: 'Standard', price: 2450 }
      ],
      inStock: true,
      sku: 'GIFTBOX-250G-001',
    },
  };

  // Get product from database based on slug
  const product = productsDatabase[params.slug] || productsDatabase['cinnamon-infused-honey-500g'];

  const relatedProducts = [
    {
      slug: 'cinnamon-infused-honey-500g',
      name: 'Cinnamon Infused Honey (500g)',
      price: 1450,
      image: '/cinamin(500g).JPG',
      reviews: 150,
    },
    {
      slug: 'chilli-infused-honey-500g',
      name: 'Chilli Infused Honey (500g)',
      price: 1450,
      image: '/chilli(500g).JPG',
      reviews: 200,
    },
    {
      slug: 'gift-box-250g',
      name: 'Gift Box (250g)',
      price: 2450,
      image: '/giftbox.jpeg',
      reviews: 210,
    },
  ];

  return (
    <main className="bg-white">
      {/* Preload main image */}
      <link rel="preload" as="image" href={product.images[0]} />
      
      {/* Product Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="flex flex-col gap-6">
              <div className="bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center h-96">
                <Image
                  src={product.images[0]}
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
              <div className="flex gap-3">
                {product.images.map((img, idx) => (
                  <div key={idx} className="bg-gray-100 rounded-lg overflow-hidden w-20 h-20 flex items-center justify-center cursor-pointer hover:border-2 hover:border-gold-600">
                    <Image
                      src={img}
                      alt={`${product.name} ${idx + 1}`}
                      width={80}
                      height={80}
                      quality={100}
                      unoptimized
                      loading="eager"
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
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
                <span className="text-gold-400 text-lg">
                  {'★'.repeat(Math.floor(product.rating))}
                  {'☆'.repeat(5 - Math.floor(product.rating))}
                </span>
                <span className="text-gray-600 text-sm">
                  {product.rating}/5 ({product.reviews} reviews)
                </span>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-bold text-gold-600">
                  ₨{product.price.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-400 line-through">
                    ₨{product.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>

              <p className="text-gray-700 mb-8">{product.description}</p>

              {/* Variants */}
              {product.variants.length > 1 && (
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Select Size</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {product.variants.map((variant) => (
                      <button
                        key={variant.size}
                        className={`py-3 px-4 rounded-lg font-bold transition-all ${
                          selectedVariant === variant.size
                            ? 'bg-gold-600 text-white'
                            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                        }`}
                        onClick={() =>
                          setSelectedVariant(variant.size)
                        }
                      >
                        {variant.size} - ₨{variant.price.toLocaleString()}
                      </button>
                    ))}
                  </div>
                </div>
              )}

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
                    if (cartContext) {
                      cartContext.addToCart(product, quantity);
                    } else {
                      alert('Cart is not available. Please refresh the page.');
                    }
                  }}
                  className="flex-1 bg-gold-600 hover:bg-gold-700 text-white font-bold py-4 rounded-lg transition-colors disabled:opacity-50"
                  disabled={!product.inStock}
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
                  <strong className="text-gray-700">SKU:</strong>
                  <span className="text-gray-600">{product.sku}</span>
                </div>
                <div className="flex justify-between">
                  <strong className="text-gray-700">Category:</strong>
                  <span className="text-gray-600">{product.category}</span>
                </div>
                <div className="flex justify-between">
                  <strong className="text-gray-700">Stock Status:</strong>
                  <span className={product.inStock ? 'text-green-600' : 'text-red-600'}>
                    {product.inStock ? 'In Stock' : 'Out of Stock'}
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
              Product Details
            </h2>
            
            <div className="mt-12 space-y-8 text-lg text-gray-800 leading-relaxed">
              <div
                className="whitespace-pre-wrap"
                dangerouslySetInnerHTML={{
                  __html: product.fullDescription
                    .replace(/Key Benefits:/g, '<h3 class="text-2xl font-bold text-red-900 mt-8 mb-4">Key Benefits:</h3>')
                    .replace(/Our Process:/g, '<h3 class="text-2xl font-bold text-red-900 mt-8 mb-4">Our Process:</h3>')
                    .replace(/• /g, '<div class="flex items-start gap-4 ml-4 my-3"><span class="text-gold-600 text-2xl font-bold flex-shrink-0">✓</span><span>')
                    .replace(/\n/g, '\n')
                    .split('\n')
                    .map((line: string) => {
                      if (line.includes('text-2xl')) return line;
                      if (line.includes('✓')) return line + '</span></div>';
                      return line;
                    })
                    .join('\n')
                }}
              />
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

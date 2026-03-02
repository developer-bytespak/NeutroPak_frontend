interface ProductDetailProps {
  params: {
    slug: string;
  };
}

export const metadata = {
  title: 'Product - NeutroPak',
  description: 'Product details',
};

export default function ProductDetail({ params }: ProductDetailProps) {

  return (
    <main className="product-detail-page">
      <div className="product-container">
        <div className="product-image">
          {/* Product image will be displayed here */}
        </div>

        <div className="product-info">
          <h1>Product Name</h1>
          <div className="rating">★★★★☆ (120 reviews)</div>
          <p className="price">$99.99</p>
          <p className="description">Product description goes here</p>

            <div className="actions">
              <input type="number" min="1" defaultValue="1" placeholder="Quantity" />
              <button className="add-to-cart-btn">Add to Cart</button>
              <button className="wishlist-btn">♡ Wishlist</button>
            </div>

            <div className="specs">
              <h3>Specifications</h3>
              {/* Specifications will be listed here */}
            </div>
          </div>
        </div>
      </main>
    );
  }

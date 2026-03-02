import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Cart: NextPage = () => {
  return (
    <>
      <Head>
        <title>Shopping Cart - NeutroPak</title>
        <meta name="description" content="Review your shopping cart" />
      </Head>

      <main className="cart-page">
        <h1>Shopping Cart</h1>

        <div className="cart-container">
          <div className="cart-items">
            {/* Cart items will be displayed here */}
            <p className="empty-cart">Your cart is empty</p>
          </div>

          <aside className="cart-summary">
            <h2>Order Summary</h2>
            <div className="summary-row">
              <span>Subtotal:</span>
              <span>$0.00</span>
            </div>
            <div className="summary-row">
              <span>Shipping:</span>
              <span>$0.00</span>
            </div>
            <div className="summary-row">
              <span>Tax:</span>
              <span>$0.00</span>
            </div>
            <div className="summary-row total">
              <span>Total:</span>
              <span>$0.00</span>
            </div>
            <Link href="/checkout" className="checkout-btn">
              Proceed to Checkout
            </Link>
            <Link href="/shop" className="continue-shopping">
              Continue Shopping
            </Link>
          </aside>
        </div>
      </main>
    </>
  );
};

export default Cart;

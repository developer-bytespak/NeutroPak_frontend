import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const OrderSuccess: NextPage = () => {
  return (
    <>
      <Head>
        <title>Order Confirmed - NeutroPak</title>
        <meta name="description" content="Your order has been placed successfully" />
      </Head>

      <main className="order-success-page">
        <div className="success-container">
          <div className="success-icon">✓</div>
          <h1>Thank You!</h1>
          <p>Your order has been placed successfully</p>

          <div className="order-info">
            <p className="order-number">Order #: <strong>NP-2025-123456</strong></p>
            <p className="confirmation-email">A confirmation email has been sent to your email address</p>
          </div>

          <div className="actions">
            <Link href="/shop" className="btn">
              Continue Shopping
            </Link>
            <Link href="#" className="btn secondary"> {/* Link to account/orders */}
              Track Order
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default OrderSuccess;

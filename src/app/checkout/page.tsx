import { NextPage } from 'next';
import Head from 'next/head';
import CheckoutForm from '@/components/CheckoutForm';

const Checkout: NextPage = () => {
  return (
    <>
      <Head>
        <title>Checkout - NeutroPak</title>
        <meta name="description" content="Complete your purchase" />
      </Head>

      <main className="checkout-page">
        <h1>Checkout</h1>

        <div className="checkout-container">
          <div className="checkout-form-section">
            <CheckoutForm />
          </div>

          <aside className="order-review">
            <h2>Order Review</h2>
            {/* Order items summary */}
            <div className="order-total">
              <p>Total: $0.00</p>
            </div>
          </aside>
        </div>
      </main>
    </>
  );
};

export default Checkout;

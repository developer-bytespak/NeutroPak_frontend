import { NextPage } from 'next';
import Head from 'next/head';

const ShippingPolicy: NextPage = () => {
  return (
    <>
      <Head>
        <title>Shipping Policy - NeutroPak</title>
        <meta name="description" content="NeutroPak Shipping Policy" />
      </Head>

      <main className="legal-page">
        <div className="legal-container">
          <h1>Shipping Policy</h1>

          <section className="legal-section">
            <h2>Shipping Methods</h2>
            <p>We offer the following shipping options:</p>
            <ul>
              <li><strong>Standard Shipping:</strong> 5-7 business days (Free on orders over $50)</li>
              <li><strong>Expedited Shipping:</strong> 2-3 business days ($15.99)</li>
              <li><strong>Overnight Shipping:</strong> Next business day ($29.99)</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>International Shipping</h2>
            <p>
              We ship to most countries worldwide. International orders may be subject to customs duties
              and taxes. Estimated delivery times are 10-21 business days depending on destination.
            </p>
          </section>

          <section className="legal-section">
            <h2>Order Tracking</h2>
            <p>
              All orders are shipped with tracking numbers. You will receive a shipping confirmation
              email with your tracking information as soon as your order is dispatched.
            </p>
          </section>

          <section className="legal-section">
            <h2>Delayed Shipments</h2>
            <p>
              If your package is delayed, please contact our customer service team. We are not responsible
              for delays caused by carrier issues or force majeure events.
            </p>
          </section>
        </div>
      </main>
    </>
  );
};

export default ShippingPolicy;

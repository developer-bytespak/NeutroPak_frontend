import { NextPage } from 'next';
import Head from 'next/head';

const RefundReturnPolicy: NextPage = () => {
  return (
    <>
      <Head>
        <title>Refund & Return Policy - NeutroPak</title>
        <meta name="description" content="NeutroPak Refund and Return Policy" />
      </Head>

      <main className="legal-page">
        <div className="legal-container">
          <h1>Refund & Return Policy</h1>

          <section className="legal-section">
            <h2>Return Period</h2>
            <p>
              We offer a 30-day money-back guarantee on most items. Items must be returned within
              30 days of purchase in their original condition with all original packaging.
            </p>
          </section>

          <section className="legal-section">
            <h2>How to Return an Item</h2>
            <ol>
              <li>Contact our customer service team at returns@neutropak.com</li>
              <li>Provide your order number and reason for return</li>
              <li>Ship the item back to us (return shipping is on us for defective items)</li>
              <li>Once received and inspected, we will process your refund</li>
            </ol>
          </section>

          <section className="legal-section">
            <h2>Non-Returnable Items</h2>
            <p>
              The following items are non-returnable unless defective:
            </p>
            <ul>
              <li>Clearance or final sale items</li>
              <li>Items damaged due to misuse</li>
              <li>Personalized or custom items</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>Refund Timeline</h2>
            <p>
              Refunds are typically processed within 5-7 business days after we receive and inspect
              your returned item. The refund will be credited to your original payment method.
            </p>
          </section>
        </div>
      </main>
    </>
  );
};

export default RefundReturnPolicy;

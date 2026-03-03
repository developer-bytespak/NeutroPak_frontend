'use client';

const RefundReturnPolicy = () => {
  return (
    <main className="legal-page">
      <div className="container">
        <h1>Refund & Return Policy</h1>
        <p className="last-updated">Last updated: March 2026</p>

        <section className="legal-section">
          <h2>1. Money-Back Guarantee</h2>
          <p>
            We are confident in the purity and quality of our honey. If you're not satisfied with your honey, 
            we offer a 100% money-back guarantee within 30 days of purchase.
          </p>
        </section>

        <section className="legal-section">
          <h2>2. Return Conditions</h2>
          <p>Items can be returned if:</p>
          <ul>
            <li>The jar arrives damaged or the seal is broken during shipping</li>
            <li>The product does not match the description</li>
            <li>You have quality concerns</li>
          </ul>
          <p>NOTE: We cannot accept returns of opened honey that has been consumed or contaminated.</p>
        </section>

        <section className="legal-section">
          <h2>3. How to Return</h2>
          <ol>
            <li>Contact us at nutreopak@gmail.com or +92 337 9788677 within 30 days</li>
            <li>Provide your order number and photos of the issue</li>
            <li>We will guide you through the return process</li>
            <li>Ship the item back (prepaid label provided for defective items)</li>
          </ol>
        </section>

        <section className="legal-section">
          <h2>4. Refund Processing</h2>
          <p>
            Once we receive and inspect your return, we will process your refund within 5-7 business days 
            to your original payment method or as a store credit.
          </p>
        </section>

        <section className="legal-section">
          <h2>5. Exceptions</h2>
          <p>
            Refunds cannot be issued for: Personally opened/consumed honey, items damaged due to customer mishandling, 
            or orders cancelled after processing has begun.
          </p>
        </section>
      </div>
    </main>
  );
};

export default RefundReturnPolicy;

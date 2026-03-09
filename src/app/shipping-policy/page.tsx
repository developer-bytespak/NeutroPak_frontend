'use client';

const ShippingPolicy = () => {
  return (
    <main className="legal-page">
      <div className="container">
        <h1>Shipping Policy</h1>
        <p className="last-updated">Last updated: March 2026</p>

        <section className="legal-section">
          <h2>1. Delivery Areas</h2>
          <p>We offer free Cash on Delivery (COD) throughout Pakistan.</p>
        </section>

        <section className="legal-section">
          <h2>2. Delivery Timeline</h2>
          <p>
            Standard delivery takes 3-5 business days from order confirmation. Express delivery may be available in selected areas.
          </p>
        </section>

        <section className="legal-section">
          <h2>3. Shipping Costs</h2>
          <p>Shipping is FREE for all orders. No hidden charges.</p>
        </section>

        <section className="legal-section">
          <h2>4. Order Tracking</h2>
          <p>
            You will receive a tracking number via email after your order is processed. Use it to track your package status.
          </p>
        </section>

        <section className="legal-section">
          <h2>5. Damaged or Lost Packages</h2>
          <p>
            If your package arrives damaged or lost, contact us immediately with proof (photos or video). We will replace your 
            order at no cost.
          </p>
        </section>

        <section className="legal-section">
          <h2>6. Delivery Delays</h2>
          <p>
            While rare, unforeseen circumstances may cause delays. We will keep you updated. If your order doesn't arrive within 
            7 business days, contact us.
          </p>
        </section>

        <section className="legal-section">
          <h2>7. Special Instructions</h2>
          <p>
            Provide delivery instructions during checkout. Leave your package in a specific location or request a specific time.
          </p>
        </section>
      </div>
    </main>
  );
};

export default ShippingPolicy;

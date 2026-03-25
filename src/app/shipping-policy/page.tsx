'use client';

const ShippingPolicy = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gold-50 py-12 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900">Shipping Policy</h1>
          <p className="text-gray-600 mt-2">Fast, free delivery across Pakistan</p>
          <p className="text-sm text-gray-500 mt-4">Last updated: March 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          {/* Delivery Areas */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Delivery Areas</h2>
            <p className="text-gray-700">
              We offer free Cash on Delivery (COD) throughout Pakistan. Our logistics network ensures reliable delivery to all major cities and towns.
            </p>
          </section>

          {/* Delivery Timeline */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Delivery Timeline</h2>
            <p className="text-gray-700">
              Standard delivery takes 3-5 business days from order confirmation. Express delivery may be available in selected areas for faster delivery.
            </p>
          </section>

          {/* Shipping Costs */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Shipping Costs</h2>
            <p className="text-gray-700 mb-3">
              <strong>Shipping is FREE for all orders throughout Pakistan.</strong> No hidden charges. Payment is only due upon delivery.
            </p>
          </section>

          {/* Order Tracking */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Order Tracking</h2>
            <p className="text-gray-700">
              You will receive a tracking number via email after your order is processed. Use it to track your package status in real-time.
            </p>
          </section>

          {/* Damaged or Lost Packages */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Damaged or Lost Packages</h2>
            <p className="text-gray-700 mb-3">
              If your package arrives damaged or lost, contact us immediately with proof (photos or video). We will replace your 
              order at no cost.
            </p>
          </section>

          {/* Delivery Delays */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Delivery Delays</h2>
            <p className="text-gray-700">
              While rare, unforeseen circumstances may cause delays. We will keep you updated. If your order doesn't arrive within 
              7 business days, contact us immediately.
            </p>
          </section>

          {/* Special Instructions */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Special Instructions</h2>
            <p className="text-gray-700">
              Provide delivery instructions during checkout. Leave your package in a specific location or request a specific delivery time—we'll do our best to accommodate.
            </p>
          </section>

          {/* Contact Section */}
          <section className="bg-gold-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Help with Your Delivery?</h2>
            <p className="text-gray-700 mb-4">Our customer support team is here to assist:</p>
            <ul className="space-y-2 text-gray-700">
              <li><strong>Email:</strong> <a href="mailto:nutreopak@gmail.com" className="text-gold-600 hover:text-gold-700">nutreopak@gmail.com</a></li>
              <li><strong>Phone:</strong> <a href="tel:+923379788677" className="text-gold-600 hover:text-gold-700">+92 337 9788677</a></li>
              <li><strong>Hours:</strong> Daily 10:00 AM — 5:00 PM</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
};

export default ShippingPolicy;

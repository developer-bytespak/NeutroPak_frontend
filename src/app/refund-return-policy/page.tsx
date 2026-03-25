'use client';

const RefundReturnPolicy = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gold-50 py-12 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900">Refund & Return Policy</h1>
          <p className="text-gray-600 mt-2">100% satisfaction guaranteed or your money back</p>
          <p className="text-sm text-gray-500 mt-4">Last updated: March 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          {/* Money-Back Guarantee */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Money-Back Guarantee</h2>
            <p className="text-gray-700">
              We are confident in the purity and quality of our honey. If you're not satisfied with your honey, 
              we offer a <strong>100% money-back guarantee within 30 days of purchase</strong>.
            </p>
          </section>

          {/* Return Conditions */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Return Conditions</h2>
            <p className="text-gray-700 mb-3">Items can be returned if:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>The product is unopened and unused within 5 days of purchase</li>
              <li>The jar arrives damaged or the seal is broken during shipping</li>
              <li>The product does not match the description</li>
              <li>You have quality concerns</li>
            </ul>
            <p className="text-gray-700 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600 mb-4">
              <strong>Damage Policy:</strong> Any damaged product is refundable or exchangeable at no extra cost.
            </p>
            <p className="text-gray-700 bg-red-50 p-4 rounded-lg border-l-4 border-red-600">
              <strong>Note:</strong> We cannot accept returns of opened honey that has been consumed or contaminated.
            </p>
          </section>

          {/* How to Return */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How to Return</h2>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-4">
              <li>Contact us at <a href="mailto:nutreopak@gmail.com" className="text-gold-600 hover:text-gold-700">nutreopak@gmail.com</a> or <a href="tel:+923379788677" className="text-gold-600 hover:text-gold-700">+92 337 9788677</a> within 30 days</li>
              <li>Provide your order number and photos of the issue</li>
              <li>We will guide you through the return process</li>
              <li>Ship the item back (prepaid label provided for defective items)</li>
            </ol>
          </section>

          {/* Refund Processing */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Refund Processing</h2>
            <p className="text-gray-700">
              Once we receive and inspect your return, we will process your refund within <strong>5-7 business days</strong> 
              to your original payment method or as store credit.
            </p>
          </section>

          {/* Exceptions */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Exceptions</h2>
            <p className="text-gray-700 mb-3">Refunds cannot be issued for:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Personally opened or consumed honey</li>
              <li>Items damaged due to customer mishandling</li>
              <li>Orders cancelled after processing has begun</li>
            </ul>
          </section>


        </div>
      </div>
    </main>
  );
};

export default RefundReturnPolicy;

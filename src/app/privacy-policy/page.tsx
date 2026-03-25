'use client';

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gold-50 py-12 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900">Privacy Policy</h1>
          <p className="text-gray-600 mt-2">How we protect and manage your personal information</p>
          <p className="text-sm text-gray-500 mt-4">Last updated: March 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-700 mb-3">
              NutreoPak (&quot;we&quot; or &quot;our&quot;) is committed to protecting your privacy. This page explains our policies regarding the 
              collection, use, and disclosure of your personal data when you use our website and how to control your information.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
            <p className="text-gray-700 mb-3">We collect information in the following ways:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li><strong>Personal Data:</strong> Name, email, phone number, address when you place an order</li>
              <li><strong>Payment Information:</strong> Payment details for processing orders</li>
              <li><strong>Usage Data:</strong> Information about how you interact with our website</li>
              <li><strong>Cookies:</strong> Tracking information to improve user experience</li>
            </ul>
          </section>

          {/* How We Use Your Information */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-700 mb-3">We use your information to:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Process and fulfill your orders</li>
              <li>Send order confirmations and updates</li>
              <li>Comply with legal obligations</li>
              <li>Improve our website and services</li>
            </ul>
          </section>

          {/* Data Protection */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Protection</h2>
            <p className="text-gray-700">
              Your data is stored securely using industry-standard SSL encryption. We do not share your personal information with 
              third parties except as necessary to fulfill your order or as required by law.
            </p>
          </section>

          {/* Your Rights */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Your Rights</h2>
            <p className="text-gray-700 mb-3">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Access your personal data</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing emails</li>
            </ul>
          </section>


          {/* Contact Us */}
          <section className="mb-12 bg-gold-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-4">For privacy concerns, reach out to us:</p>
            <ul className="space-y-2 text-gray-700">
              <li><strong>Email:</strong> <a href="mailto:nutreopak@gmail.com" className="text-gold-600 hover:text-gold-700">nutreopak@gmail.com</a></li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}

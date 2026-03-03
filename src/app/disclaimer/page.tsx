'use client';

export default function Disclaimer() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gold-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900">Disclaimer</h1>
          <p className="text-gray-600 mt-2">Important information about NutreoPak services and website use</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          {/* General Disclaimer */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">General Disclaimer</h2>
            <p className="text-gray-700 mb-3">
              The information provided on the NutreoPak website (www.NutreoPak.com) is for general informational purposes only. 
              While we strive to provide accurate and up-to-date information, we make no warranties, express or implied, 
              about the accuracy, reliability, completeness, or timeliness of any information on this website.
            </p>
            <p className="text-gray-700">
              Your use of this website and any information obtained from it is entirely at your own risk. NutreoPak shall 
              not be liable for any loss or damage resulting from your reliance on any such information or from interruptions, 
              delays, or omissions in service.
            </p>
          </section>

          {/* Health & Medical Disclaimer */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Health & Medical Disclaimer</h2>
            <p className="text-gray-700 mb-3">
              The information and claims about honey and its health benefits on our website are for informational purposes only 
              and should not be construed as medical advice, diagnosis, or treatment. Honey is a food product and not a medicine.
            </p>
            <ul className="list-disc pl-6 mb-3 text-gray-700">
              <li>Traditional uses of honey are not scientifically proven to cure or prevent disease</li>
              <li>Individual results may vary based on personal health conditions</li>
              <li>Consult a qualified healthcare professional before using honey for health purposes</li>
              <li>If you are allergic to bee products, do not consume honey</li>
              <li>Infants under 12 months should not consume honey due to botulism risk</li>
            </ul>
            <p className="text-gray-700">
              NutreoPak does not make medical claims and takes no responsibility for how individuals use our products. 
              Please consult with your doctor or healthcare provider before making any changes to your diet or health regimen.
            </p>
          </section>

          {/* Product Information Disclaimer */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Information Disclaimer</h2>
            <p className="text-gray-700 mb-3">
              Product descriptions, images, prices, and availability are provided as-is and subject to change without notice.
            </p>
            <ul className="list-disc pl-6 mb-3 text-gray-700">
              <li>Product images may not exactly match actual items due to lighting and photography</li>
              <li>Prices are subject to change without prior notice</li>
              <li>Our best efforts ensure product information accuracy, but errors may occur</li>
              <li>Product specifications may vary based on batch and season</li>
              <li>Exact weights and measures may have minor variations (±2%)</li>
            </ul>
            <p className="text-gray-700">
              NutreoPak reserves the right to refuse or cancel any order, and to correct or update product information at any time.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
            <p className="text-gray-700 mb-3">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, NUTREOPAK SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, 
              CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF YOUR USE OF THIS WEBSITE OR PRODUCTS, EVEN IF WE HAVE BEEN 
              ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
            </p>
            <p className="text-gray-700">
              This includes, but is not limited to, damages for loss of profits, goodwill, data, or other intangible losses, 
              even if NutreoPak has been advised of the possibility of such damages.
            </p>
          </section>

          {/* External Links Disclaimer */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">External Links Disclaimer</h2>
            <p className="text-gray-700 mb-3">
              Our website may contain hyperlinks to third-party websites. These links are provided for convenience only and 
              do not constitute an endorsement of those websites or their contents.
            </p>
            <ul className="list-disc pl-6 mb-3 text-gray-700">
              <li>NutreoPak is not responsible for the content of external websites</li>
              <li>We do not endorse products or services offered on linked websites</li>
              <li>Use of external websites is at your own risk and subject to their terms</li>
              <li>NutreoPak is not responsible for any loss or damage from accessing external links</li>
            </ul>
            <p className="text-gray-700">
              Please review the terms and privacy policies of any external websites before providing personal information.
            </p>
          </section>

          {/* "As-Is" Basis */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Website & Services Provided "As-Is"</h2>
            <p className="text-gray-700 mb-3">
              The NutreoPak website and services are provided on an "AS-IS" and "AS-AVAILABLE" basis without warranties of any kind.
            </p>
            <p className="text-gray-700 mb-3">
              Except as expressly stated, NutreoPak disclaims all warranties, expressed or implied, including but not limited to:
            </p>
            <ul className="list-disc pl-6 mb-3 text-gray-700">
              <li>Warranties of merchantability, fitness for a particular purpose, and non-infringement</li>
              <li>Uninterrupted or error-free service or website operation</li>
              <li>That any defects will be corrected, or that the service will meet your requirements</li>
            </ul>
          </section>

          {/* Modifications to Disclaimer */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Modifications to This Disclaimer</h2>
            <p className="text-gray-700">
              NutreoPak reserves the right to modify this disclaimer at any time without prior notice. Changes become effective 
              immediately upon posting to the website. Continued use of the website following notice of such changes constitutes 
              your acceptance of the updated disclaimer. We encourage you to review this page periodically for updates.
            </p>
          </section>

          {/* Contact Information */}
          <section className="bg-gold-50 rounded-lg p-8 mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions About This Disclaimer?</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions or concerns about this disclaimer, please contact us:
            </p>
            <div className="space-y-2 text-gray-700">
              <p><strong>Email:</strong> <a href="mailto:nutreopak@gmail.com" className="text-gold-600 hover:text-gold-700">nutreopak@gmail.com</a></p>
              <p><strong>Phone:</strong> <a href="tel:+923379788677" className="text-gold-600 hover:text-gold-700">+92 337 9788677</a></p>
              <p><strong>Address:</strong> Swabi, Khyber Pakhtunkhwa, Pakistan</p>
            </div>
          </section>

          {/* Last Updated */}
          <p className="text-gray-500 text-center mt-12 pt-8 border-t border-gray-200">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </div>
    </main>
  );
}

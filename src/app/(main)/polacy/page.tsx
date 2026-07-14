import React from 'react';

export default function PrivacyPolicy() {
  const lastUpdated = "July 14, 2026";

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-8 sm:p-12">
        
        {/* Header Section */}
        <div className="border-b border-gray-200 pb-8 mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Last Updated: {lastUpdated}
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            At our store, we value your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, purchase gadgets, or interact with our services.
          </p>
        </div>

        {/* Policy Sections */}
        <div className="space-y-10">
          
          {/* Section 1 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              1. Information We Collect
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We collect information that you directly provide to us, as well as information automatically collected when you navigate our site.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>
                <strong className="text-gray-800">Personal Data:</strong> Name, shipping address, billing address, email address, phone number, and payment details (processed securely via our payment gateways).
              </li>
              <li>
                <strong className="text-gray-800">Device & Usage Data:</strong> IP address, browser type, operating system, referring URLs, and details about how you interact with our online store.
              </li>
              <li>
                <strong className="text-gray-800">Cookies & Tracking:</strong> We use cookies to keep track of your shopping cart, analyze site traffic, and personalize your experience.
              </li>
            </ul>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              2. How We Use Your Information
            </h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              We process your personal information for the following business purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>To fulfill, ship, and deliver your gadget purchases.</li>
              <li>To process payments and prevent fraudulent transactions.</li>
              <li>To provide customer support and troubleshoot technical issues.</li>
              <li>To send order updates, promotional offers, and newsletters (which you can opt-out of at any time).</li>
              <li>To improve our website functionality, product offerings, and customer experience.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              3. Sharing Your Information
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We do not sell or rent your personal information to third parties. We only share your data with trusted service providers who help us run our business, such as:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-600">
              <li>Payment processors (e.g., Stripe, PayPal) to handle secure checkouts.</li>
              <li>Courier and delivery services (e.g., FedEx, UPS, DHL) to ship your hardware.</li>
              <li>Hosting providers, email marketing services, and analytics platforms.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              4. Data Security
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We implement industry-standard security measures, including Secure Socket Layer (SSL) encryption, to protect your personal information during transmission and storage. However, please remember that no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              5. Your Rights & Choices
            </h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              Depending on your location, you may have the following rights regarding your personal data:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>The right to access, update, or delete the information we have on you.</li>
              <li>The right to opt-out of receiving promotional communications.</li>
              <li>The right to disable cookies through your browser settings.</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              6. Changes to This Privacy Policy
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. Any changes will be posted on this page with an updated date.
            </p>
          </section>

          {/* Section 7 */}
          <section className="bg-gray-50 p-6 rounded-xl border border-gray-100">
            <h2 className="text-lg font-bold text-gray-900 mb-2">
              7. Contact Our Privacy Team
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              If you have any questions, concerns, or requests regarding your data, please reach out to us at:
            </p>
            <div className="text-sm text-gray-700 space-y-1">
              <p><strong>Email:</strong> privacy@gadgethq.com</p>
              <p><strong>Address:</strong> 101 Tech Boulevard, Suite 400, San Francisco, CA 94107</p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
import React from 'react';

export default function TermsOfService() {
  const lastUpdated = "July 14, 2026";

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-8 sm:p-12">
        
        {/* Header Section */}
        <div className="border-b border-gray-200 pb-8 mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Terms of Service
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Last Updated: {lastUpdated}
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Welcome to our store. These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of our website, services, and any purchases of gadget products made through our platform. By accessing or using our services, you agree to be bound by these Terms.
          </p>
        </div>

        {/* Terms Sections */}
        <div className="space-y-10">
          
          {/* Section 1 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              1. Account Registration & Security
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              To purchase gadgets or access certain features on our site, you may be required to register for an account. 
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>You must provide accurate, current, and complete information during registration.</li>
              <li>You are responsible for safeguarding your account password and restricting access to your device.</li>
              <li>You agree to accept responsibility for all activities or actions that occur under your account.</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              2. Products, Pricing, & Availability
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We specialize in cutting-edge electronics and gadgets. While we strive for maximum accuracy, specifications, images, and pricing of products are subject to change without notice.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li><strong className="text-gray-800">Typographical Errors:</strong> In the event a product is listed at an incorrect price due to a system error, we reserve the right to cancel or refuse any orders placed for that product.</li>
              <li><strong className="text-gray-800">Availability:</strong> Product availability is not guaranteed. We reserve the right to limit the quantities of any products we offer or discontinue any item at any time.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              3. Payments, Billing, & Taxes
            </h2>
            <p className="text-gray-600 leading-relaxed">
              By submitting an order, you represent that you are authorized to use the designated payment method and authorize us to charge your order (including taxes, shipping, and handling) to that method. 
            </p>
            <p className="text-gray-600 leading-relaxed mt-3">
              If the payment method cannot be verified or is invalid, your order will be suspended or canceled automatically.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              4. Shipping, Delivery, & Risk of Loss
            </h2>
            <p className="text-gray-600 leading-relaxed">
              All physical gadget purchases are made pursuant to a shipment contract. This means that the risk of loss and title for such items pass to you upon our delivery of the items to the carrier (e.g., DHL, FedEx, UPS). Estimated delivery times are guides and not guaranteed delivery dates.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              5. Returns, Refunds, & Hardware Warranties
            </h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              We want you to love your tech. Please review our specific return guidelines:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li><strong className="text-gray-800">Return Window:</strong> Unopened and unused items in their original packaging can be returned within 30 days of delivery.</li>
              <li><strong className="text-gray-800">Manufacturer Warranties:</strong> Many gadgets we sell come with limited manufacturer warranties. Any warranty claims must be processed directly through the respective manufacturer unless stated otherwise.</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              6. Limitation of Liability
            </h2>
            <p className="text-gray-600 leading-relaxed">
              To the maximum extent permitted by applicable law, our store shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses resulting from your access to or inability to use our services or products.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              7. Governing Law
            </h2>
            <p className="text-gray-600 leading-relaxed">
              These Terms shall be governed and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions.
            </p>
          </section>

          {/* Section 8 */}
          <section className="bg-indigo-50 p-6 rounded-xl border border-indigo-100">
            <h2 className="text-lg font-bold text-indigo-950 mb-2">
              8. Questions & Contact Information
            </h2>
            <p className="text-indigo-900 text-sm leading-relaxed mb-4">
              If you have any questions about these Terms of Service or need clarification on a policy, please reach out to our legal support team:
            </p>
            <div className="text-sm text-indigo-950 space-y-1">
              <p><strong>Email:</strong> legal@gadgethq.com</p>
              <p><strong>Address:</strong> 101 Tech Boulevard, Suite 400, San Francisco, CA 94107</p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
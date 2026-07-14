import React from 'react';
import { Truck, ShieldCheck, Globe, RotateCcw } from 'lucide-react'; // Optional: Install lucide-react for tech/shipping icons

export default function ShippingInfo() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Shipping & Delivery Information
          </h1>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Everything you need to know about how we package, protect, and safely ship your high-tech gear straight to your door.
          </p>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-white p-5 rounded-xl border border-gray-100 text-center shadow-sm">
            <Truck className="w-6 h-6 text-indigo-600 mx-auto mb-2" />
            <h3 className="font-semibold text-sm">Free Delivery</h3>
            <p className="text-xs text-gray-500 mt-1">On all orders over $75</p>
          </div>
          <div className="bg-white p-5 rounded-xl border border-gray-100 text-center shadow-sm">
            <ShieldCheck className="w-6 h-6 text-indigo-600 mx-auto mb-2" />
            <h3 className="font-semibold text-sm">Insured Packages</h3>
            <p className="text-xs text-gray-500 mt-1">100% theft/damage protection</p>
          </div>
          <div className="bg-white p-5 rounded-xl border border-gray-100 text-center shadow-sm">
            <Globe className="w-6 h-6 text-indigo-600 mx-auto mb-2" />
            <h3 className="font-semibold text-sm">Global Shipping</h3>
            <p className="text-xs text-gray-500 mt-1">Available in 50+ countries</p>
          </div>
          <div className="bg-white p-5 rounded-xl border border-gray-100 text-center shadow-sm">
            <RotateCcw className="w-6 h-6 text-indigo-600 mx-auto mb-2" />
            <h3 className="font-semibold text-sm">Easy Returns</h3>
            <p className="text-xs text-gray-500 mt-1">30-day return policy</p>
          </div>
        </div>

        {/* Main Info Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 sm:p-12 space-y-10">
          
          {/* Shipping Rates & Speed Table */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Shipping Methods & Transit Times</h2>
            <p className="text-gray-600 text-sm mb-4">
              All gadgets are securely packed in anti-static, shock-absorbent packaging. Processing takes 1–2 business days before the package leaves our warehouse.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50 text-xs font-semibold uppercase text-gray-600 tracking-wider">
                    <th className="py-3 px-4">Shipping Method</th>
                    <th className="py-3 px-4">Transit Time</th>
                    <th className="py-3 px-4">Cost (Orders Under $75)</th>
                    <th className="py-3 px-4">Cost (Orders Over $75)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-sm">
                  <tr>
                    <td className="py-3 px-4 font-medium text-gray-900">Standard Eco</td>
                    <td className="py-3 px-4 text-gray-600">3–5 Business Days</td>
                    <td className="py-3 px-4 text-gray-600">$4.99</td>
                    <td className="py-3 px-4 text-green-600 font-medium">FREE</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-gray-900">Expedited Priority</td>
                    <td className="py-3 px-4 text-gray-600">2 Business Days</td>
                    <td className="py-3 px-4 text-gray-600">$9.99</td>
                    <td className="py-3 px-4 text-gray-600">$4.99</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-gray-900">Next-Day Air Express</td>
                    <td className="py-3 px-4 text-gray-600">1 Business Day</td>
                    <td className="py-3 px-4 text-gray-600">$19.99</td>
                    <td className="py-3 px-4 text-gray-600">$14.99</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <hr className="border-gray-100" />

          {/* Shipping Policy FAQ Section */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">When will my order ship?</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Orders placed before 2:00 PM EST Monday through Friday ship out the same day. Weekend orders ship on the following Monday morning.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Do you ship lithium-ion batteries internationally?</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Yes, but due to air freight regulations, certain larger battery banks or specific electric hardware may take 2–3 days longer to pass custom clearance and safety compliance checks.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-1">How can I track my gadget shipment?</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  As soon as your package drops off at the carrier, an automated email containing a dedicated tracking number (FedEx, UPS, or DHL link) will be sent straight to your inbox.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-1">What happens if my package gets lost or damaged?</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Don&apos;t panic! Every piece of hardware we ship leaves fully insured. If your package arrives structurally broken or goes missing according to tracking, reach out to our team immediately and we will ship a replacement free of charge.
                </p>
              </div>
            </div>
          </section>

          {/* Bottom Action Note */}
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-6 text-center text-sm text-gray-600">
            Still have questions about custom taxes or delivery limitations? Drop us a line anytime on our{' '}
            <a href="/contact" className="text-indigo-600 font-medium hover:underline">
              Contact Page
            </a>
            .
          </div>

        </div>
      </div>
    </div>
  );
}
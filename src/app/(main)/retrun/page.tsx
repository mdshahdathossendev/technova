import React from 'react';
import { ArrowRight, RefreshCw, ShieldAlert, CheckCircle2 } from 'lucide-react'; // Optional: Install lucide-react for icons

export default function ReturnsRefunds() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Returns & Refunds Policy
          </h1>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            We want you to love your new tech. If a gadget isn&apos;t a perfect fit, our return policy keeps the process straightforward and transparent.
          </p>
        </div>

        {/* Policy Highlights Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-start space-x-4">
            <RefreshCw className="w-8 h-8 text-indigo-600 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-gray-900">30-Day Window</h3>
              <p className="text-xs text-gray-500 mt-1">Return eligible items within 30 days of delivery.</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-start space-x-4">
            <ShieldAlert className="w-8 h-8 text-indigo-600 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-gray-900">Open Box Items</h3>
              <p className="text-xs text-gray-500 mt-1">Acceptable if complete with all original internal components.</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-start space-x-4">
            <CheckCircle2 className="w-8 h-8 text-indigo-600 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-gray-900">Zero Restocking Fees</h3>
              <p className="text-xs text-gray-500 mt-1">No hidden cuts or structural processing deductions.</p>
            </div>
          </div>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 sm:p-12 space-y-10">
          
          {/* Section 1: Condition Requirements */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Return Conditions & Eligibility</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              To quality for a full refund or exchange, please ensure that your return satisfies the following gadget hardware requirements:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm text-gray-600">
              <li>The gadget must include its original box, internal structural packaging, and user manuals.</li>
              <li>All bundled accessories (cables, remote controls, chargers, complementary battery packs) must be enclosed.</li>
              <li>The item must not display signs of physical damage, liquid ingress, or custom internal modification.</li>
              <li><strong className="text-gray-800">Software Note:</strong> Devices with personal accounts linked (e.g., Apple ID, Google Account) must be factory reset before shipment.</li>
            </ul>
          </section>

          <hr className="border-gray-100" />

          {/* Section 2: Step-by-Step Return Process */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-6">How to Initiate Your Return</h2>
            <div className="relative border-l border-gray-200 pl-6 ml-3 space-y-8">
              
              <div className="relative">
                <span className="absolute -left-[35px] top-0 bg-indigo-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">1</span>
                <h3 className="font-semibold text-gray-900 text-sm">Submit your request</h3>
                <p className="text-gray-600 text-xs mt-1"> Head to our Support portal or dash over to your orders page. Enter your email address and transaction reference number.</p>
              </div>

              <div className="relative">
                <span className="absolute -left-[35px] top-0 bg-indigo-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">2</span>
                <h3 className="font-semibold text-gray-900 text-sm">Print your shipping label</h3>
                <p className="text-gray-600 text-xs mt-1">Once approved, we will email you a pre-paid printable shipping label. Safely box up the gear to prevent shipping shock damage.</p>
              </div>

              <div className="relative">
                <span className="absolute -left-[35px] top-0 bg-indigo-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">3</span>
                <h3 className="font-semibold text-gray-900 text-sm">Drop off the package</h3>
                <p className="text-gray-600 text-xs mt-1">Take your packaged electronics to any authorized collection drop-off point belonging to the carrier designated on your label.</p>
              </div>

            </div>
          </section>

          <hr className="border-gray-100" />

          {/* Section 3: Refunds timeline */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Refund Windows & Processing</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Once your package arrives at our quality assurance vault, our engineering specialists will inspect the hardware inside <strong>2–3 business days</strong> to ensure all bundled parts are accounted for.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mt-3">
              Approved refunds are credited directly back to the original method of payment. Credit card processing companies and digital banking networks generally require <strong>5–7 additional working days</strong> to post the balance adjustment to your bank statement.
            </p>
          </section>

          {/* Bottom Interactive Notice */}
          <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 text-center sm:text-left">
            <div>
              <h4 className="font-bold text-indigo-950 text-sm">Ready to start a return?</h4>
              <p className="text-indigo-900 text-xs mt-0.5">Have your order number and email ready to kick off the automated wizard.</p>
            </div>
            <a 
              href="/orders" 
              className="inline-flex items-center space-x-2 text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg font-medium text-xs shadow-sm transition-colors"
            >
              <span>Start Return Portal</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
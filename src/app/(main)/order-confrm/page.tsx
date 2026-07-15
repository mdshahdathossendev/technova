"use client";

import React from "react";
import { Check, Truck, ShieldCheck, Cpu } from "lucide-react";

export default function OrderSuccessPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-gray-800 antialiased py-12 px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center">
      <div className="max-w-2xl w-full text-center space-y-8">
        
        {/* ১. সাকসেস ব্যাজ এবং হেডার */}
        <div className="flex flex-col items-center space-y-4">
          <div className="h-16 w-16  bg-amber-500 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-amber-700/10">
            <Check className="h-8 w-8 stroke-[3]" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
            Order Confirmed!
          </h1>
          <p className="text-sm text-gray-500 max-w-md leading-relaxed mx-auto">
            Your TECHNE precision gadgets are being prepared for shipment. A confirmation email has been sent to your inbox with your receipt and tracking details.
          </p>
        </div>

        {/* ২. অ্যাকশন বাটনসমূহ */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => alert("Redirecting to Track Order system...")}
            className="w-full sm:w-auto  bg-amber-500 hover:bg-[#004fa7] text-white font-bold text-xs tracking-widest uppercase px-8 py-4 rounded-xl shadow-lg shadow-blue-500/10 transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <Truck className="h-4 w-4" />
            Track Order
          </button>
          
          <button
            onClick={() => window.location.href = "/shop"}
            className="w-full sm:w-auto bg-white border border-gray-200 text-gray-600 hover:text-gray-900 hover:bg-gray-50 font-bold text-xs tracking-widest uppercase px-8 py-4 rounded-xl transition-colors cursor-pointer"
          >
            Continue Shopping
          </button>
        </div>

        {/* ৩. গ্যারান্টি সেকশন */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left pt-4">
          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 flex items-start gap-4">
            <ShieldCheck className="h-6 w-6 text-blue-600 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wide">
                TECHNE Guarantee
              </h4>
              <p className="text-[11px] text-gray-500 leading-relaxed">
                Every component undergoes 48 hours of rigorous performance stress testing before shipment.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 flex items-start gap-4">
            <Cpu className="h-6 w-6 text-blue-600 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wide">
                Precision Engineered
              </h4>
              <p className="text-[11px] text-gray-500 leading-relaxed">
                Assembled in sterile environments to ensure 100% dust-free internal circuitry for maximum longevity.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
"use client";

import React, { useState, useEffect } from "react";
import { Check, Truck, ShoppingBag, ShieldCheck, Cpu } from "lucide-react";

// ==========================================
// TYPES (কার্ট ডাটা স্ট্রাকচার টাইপ)
// ==========================================
interface CartItem {
  _id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  stock: number;
  rating: number;
  description: string;
  longDescription: string;
  images: string[];
  quantity: number;
}

interface OrderDetails {
  orderNumber: string;
  orderDate: string;
  deliveryRange: string;
  items: CartItem[];
  totalAmount: number;
}

export default function OrderSuccessPage() {
  const [order, setOrder] = useState<OrderDetails | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // ১. Local Storage ('techne_cart') থেকে আগের পেইজের অর্ডার বা কার্ট ডাটা রিড করা
      const storedCart = localStorage.getItem("cart");
      let itemsList: CartItem[] = [];

      if (storedCart) {
        try {
          itemsList = JSON.parse(storedCart);
        } catch (e) {
          console.error("Error parsing cart storage:", e);
        }
      }

      // ২. রিয়ালিস্টিক অর্ডার ডাটা জেনারেট করা
      // র্যান্ডম অর্ডার আইডি (যেমন: TCH-8829-PX1)
      const randomId = Math.floor(1000 + Math.random() * 9000);
      const suffix = Math.random().toString(36).substring(2, 5).toUpperCase();
      const generatedOrderNumber = `TCH-${randomId}-${suffix}`;

      // আজকের তারিখ ফরম্যাটিং (যেমন: November 12, 2024)
      const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" };
      const today = new Date().toLocaleDateString("en-US", options);

      // ডেলিভারি ডেট রেঞ্জ (আজ থেকে ৩ থেকে ৫ দিন পর)
      const deliveryStart = new Date();
      deliveryStart.setDate(deliveryStart.getDate() + 3);
      const deliveryEnd = new Date();
      deliveryEnd.setDate(deliveryEnd.getDate() + 5);

      const startOptions: Intl.DateTimeFormatOptions = { month: "short", day: "numeric" };
      const endOptions: Intl.DateTimeFormatOptions = { day: "numeric" };
      const formattedDelivery = `${deliveryStart.toLocaleDateString("en-US", startOptions)} - ${deliveryEnd.toLocaleDateString("en-US", endOptions)}`;

      // টোটাল হিসাব (কার্ট খালি হলে ডেমো হিসেবে Razer এর দাম বসবে)
      const subtotal = itemsList.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);
      const tax = parseFloat((subtotal * 0.085).toFixed(2));
      const finalTotal = subtotal > 0 ? subtotal + tax : 0;

      setOrder({
        orderNumber: generatedOrderNumber,
        orderDate: today,
        deliveryRange: formattedDelivery,
        items: itemsList,
        totalAmount: finalTotal,
      });

      // অর্ডার কনফার্ম হওয়ার পর লোকাল স্টোরেজ ক্লিয়ার করে দেওয়া হলো
      // (যাতে পরবর্তী কেনাকাটা আবার নতুন করে শুরু করা যায়)
      localStorage.removeItem("techne_cart");
      setIsLoading(false);
    }
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f8fafc]">
        <div className="text-gray-400 font-medium animate-pulse">Loading receipt details...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] text-gray-800 antialiased py-12 px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center">
      <div className="max-w-2xl w-full text-center space-y-8">
        
        {/* ১. সাকসেস ব্যাজ এবং হেডার */}
        <div className="flex flex-col items-center space-y-4">
          <div className="h-16 w-16 bg-[#a2680a] text-white rounded-2xl flex items-center justify-center shadow-lg shadow-amber-700/10">
            <Check className="h-8 w-8 stroke-[3]" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
            Order Confirmed!
          </h1>
          <p className="text-sm text-gray-500 max-w-md leading-relaxed">
            Your TECHNE precision gadgets are being prepared for shipment. A confirmation email has been sent to your inbox.
          </p>
        </div>

        {/* ২. অর্ডার স্লিপ / মেইন ইনফো বক্স */}
        <div className="bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-xl shadow-gray-200/50 text-left">
          
          {/* স্লিপ মেটাডাটা গ্রিড */}
          <div className="grid grid-cols-3 gap-4 border-b border-gray-100 pb-6 mb-6">
            <div>
              <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                Order Number
              </span>
              <span className="text-sm font-extrabold text-gray-900">
                {order?.orderNumber}
              </span>
            </div>
            <div>
              <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                Date
              </span>
              <span className="text-sm font-bold text-gray-700">
                {order?.orderDate}
              </span>
            </div>
            <div>
              <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                Estimated Delivery
              </span>
              <span className="text-sm font-bold text-gray-700">
                {order?.deliveryRange}
              </span>
            </div>
          </div>

          {/* প্রোডাক্ট লিস্ট */}
          {order && order.items.length > 0 ? (
            <div className="space-y-4">
              {order.items.map((item) => (
                <div key={item._id} className="flex items-center gap-4 py-1">
                  <div className="h-16 w-16 shrink-0 bg-gray-50 rounded-xl overflow-hidden border border-gray-100 flex items-center justify-center p-2">
                    <img
                      src={item.images && item.images.length > 0 ? item.images[0] : ""}
                      alt={item.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-bold text-gray-900 truncate">
                      {item.name}
                    </h4>
                    <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">
                      {item.brand} • QTY: {item.quantity || 1}
                    </span>
                  </div>
                  <div className="text-sm font-extrabold text-gray-900">
                    ${(item.price * (item.quantity || 1)).toLocaleString("en-US", { minimumFractionDigits: 2 })}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* ডেমো স্টেট: যদি লোকাল স্টোরেজে ডাটা না থাকে (স্ক্রিনশটের মতো ডেমো ডাটা শো করবে) */
            <div className="flex items-center gap-4 py-1">
              <div className="h-16 w-16 shrink-0 bg-gray-50 rounded-xl overflow-hidden border border-gray-100 flex items-center justify-center p-2">
                <img
                  src="https://images.unsplash.com/photo-1587829741301-dc798b83add3"
                  alt="Razer BlackWidow V4 Pro"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-bold text-gray-900 truncate">
                  Razer BlackWidow V4 Pro
                </h4>
                <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">
                  Razer • QTY: 1
                </span>
              </div>
              <div className="text-sm font-extrabold text-gray-900">
                $229.00
              </div>
            </div>
          )}

        </div>

        {/* ৩. অ্যাকশন বাটনসমূহ */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => alert("Redirecting to Track Order system...")}
            className="w-full sm:w-auto bg-[#005ec4] hover:bg-[#004fa7] text-white font-bold text-xs tracking-widest uppercase px-8 py-4 rounded-xl shadow-lg shadow-blue-500/10 transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <Truck className="h-4 w-4" />
            Track Order
          </button>
          
          <button
            onClick={() => window.location.href = "/"}
            className="w-full sm:w-auto bg-white border border-gray-200 text-gray-600 hover:text-gray-900 hover:bg-gray-50 font-bold text-xs tracking-widest uppercase px-8 py-4 rounded-xl transition-colors cursor-pointer"
          >
            Continue Shopping
          </button>
        </div>

        {/* ৪. গ্যারান্টি সেকশন (স্ক্রিনশট অনুযায়ী হুবহু ডিজাইন) */}
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
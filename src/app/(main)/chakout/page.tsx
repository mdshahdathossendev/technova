"use client";

import React, { useState, useEffect } from "react";
import { ArrowLeft, CreditCard, Lock, ShieldCheck, Award, ShoppingBag } from "lucide-react";
import { useRouter } from 'next/navigation';

// ==========================================
// TYPES
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
  selectedVariant?: string; 
}

interface OrderSummaryData {
  items: CartItem[];
  subtotal: number;
  shippingCost: number;
  tax: number;
  total: number;
}

// ==========================================
// MAIN COMPONENT
// ==========================================
export default function CheckoutPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    streetAddress: "",
    city: "",
    postalCode: "",
    email: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const [shippingMethod, setShippingMethod] = useState<"standard" | "express">("standard");
  const [paymentMethod, setPaymentMethod] = useState<"card" | "paypal">("card");
  const [promoCode, setPromoCode] = useState("");
  const router = useRouter();
  const [orderSummary, setOrderSummary] = useState<OrderSummaryData>({
    items: [],
    subtotal: 0,
    shippingCost: 130.0, // ডিফল্ট স্ট্যান্ডার্ড কস্ট
    tax: 0,
    total: 0,
  });

  const [isLoading, setIsLoading] = useState(true);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCart = localStorage.getItem("cart");
      let itemsList: CartItem[] = [];

      if (storedCart) {
        try {
          itemsList = JSON.parse(storedCart);
        } catch (e) {
          console.error("Error parsing cart storage:", e);
        }
      }

      const subtotal = itemsList.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);
      
      // এখানে ভুল ছিল: standard হলে ১৩০ এবং express হলে ১৫ যোগ হবে
      const shippingCost = shippingMethod === "standard" ? 130.0 : 15.0; 
      const tax = parseFloat((subtotal * 0.085).toFixed(2)); 
      const total = subtotal + shippingCost + tax;

      setOrderSummary({
        items: itemsList,
        subtotal,
        shippingCost,
        tax,
        total,
      });
      setIsLoading(false);
    }
  }, [shippingMethod]);

  const handlePlaceOrder = (e:any) => {
    e.preventDefault();
    
    if (orderSummary.items.length === 0) {
      alert("Your cart is empty! Cannot place order.");
      return;
    }

    console.log("Submitted Checkout Form Details:", {
      customer: `${formData.firstName} ${formData.lastName}`,
      address: `${formData.streetAddress}, ${formData.city}, ${formData.postalCode}`,
      email: formData.email,
      payment: paymentMethod === "card" ? "Credit Card" : "PayPal",
      items: orderSummary.items,
      totalPaid: orderSummary.total,
    });
    localStorage.removeItem("cart");
    router.push('/order-confrm')
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fafafa]">
        <div className="text-gray-400 font-medium animate-pulse">Loading checkout data...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fafafa] text-gray-800 antialiased py-8 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        
        <button type="button" className="flex items-center gap-2 text-xs font-semibold tracking-wider text-gray-400 uppercase hover:text-gray-600 transition-colors mb-4 cursor-pointer">
          <ArrowLeft className="h-4.5 w-4.5" />
          Return to Cart
        </button>

        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 mb-8">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ফর্ম সেকশন */}
          <form onSubmit={handlePlaceOrder} className="lg:col-span-7 space-y-8">
            
            {/* Step 1: Shipping Information */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold flex items-center gap-3 text-gray-900">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-500 text-xs font-bold text-white">1</span>
                Shipping Information
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm focus:border-amber-500 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm focus:border-amber-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">Street Address</label>
                <input
                  type="text"
                  name="streetAddress"
                  placeholder="e.g. 123 Main Street, Apt 4B"
                  value={formData.streetAddress}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm focus:border-amber-500 focus:outline-none transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="sm:col-span-2">
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">City</label>
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm focus:border-amber-500 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">Postal Code</label>
                  <input
                    type="text"
                    name="postalCode"
                    placeholder="ZIP / Postal Code"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm focus:border-amber-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="name@email.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm focus:border-amber-500 focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Step 2: Shipping Method */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold flex items-center gap-3 text-gray-900">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-500 text-xs font-bold text-white">2</span>
                Shipping Method
              </h2>

              <div className="space-y-3">
                <label className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all ${
                  shippingMethod === "standard" ? "border-amber-500 bg-amber-50/10" : "border-gray-200 bg-white hover:border-gray-300"
                }`}>
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="shipping"
                      checked={shippingMethod === "standard"}
                      onChange={() => setShippingMethod("standard")}
                      className="h-4 w-4 text-amber-500 border-gray-300 focus:ring-amber-500 cursor-pointer"
                    />
                    <div>
                      <div className="font-semibold text-sm text-gray-900">Outside Dhaka</div>
                      <div className="text-xs text-gray-400">3-5 business days</div>
                    </div>
                  </div>
                  <span className="font-bold text-sm text-amber-600">$130.00</span>
                </label>

                <label className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all ${
                  shippingMethod === "express" ? "border-amber-500 bg-amber-50/10" : "border-gray-200 bg-white hover:border-gray-300"
                }`}>
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="shipping"
                      checked={shippingMethod === "express"}
                      onChange={() => setShippingMethod("express")}
                      className="h-4 w-4 text-amber-500 border-gray-300 focus:ring-amber-500 cursor-pointer"
                    />
                    <div>
                      <div className="font-semibold text-sm text-gray-900">Inside Dhaka</div>
                      <div className="text-xs text-gray-400">Next-day arrival</div>
                    </div>
                  </div>
                  <span className="font-bold text-sm text-gray-900">$15.00</span>
                </label>
              </div>
            </div>

            {/* Step 3: Payment Details */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold flex items-center gap-3 text-gray-900">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-500 text-xs font-bold text-white">3</span>
                Payment Details
              </h2>

              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setPaymentMethod("card")}
                  className={`flex items-center justify-center gap-2 py-3 rounded-xl border-2 font-medium text-sm transition-all cursor-pointer ${
                    paymentMethod === "card" ? "border-amber-500 text-amber-600 bg-amber-50/10" : "border-gray-200 text-gray-500 bg-white hover:bg-gray-50"
                  }`}
                >
                  <CreditCard className="h-4 w-4" />
                  Credit Card
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod("paypal")}
                  className={`flex items-center justify-center gap-2 py-3 rounded-xl border-2 font-medium text-sm transition-all cursor-pointer ${
                    paymentMethod === "paypal" ? "border-amber-500 text-amber-600 bg-amber-50/10" : "border-gray-200 text-gray-500 bg-white hover:bg-gray-50"
                  }`}
                >
                  <span className="italic font-bold text-blue-700 text-xs">Pay<span className="text-sky-500">Pal</span></span>
                </button>
              </div>

              {paymentMethod === "card" && (
                <div className="space-y-4 pt-2">
                  <div>
                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">Card Number</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input
                        type="text"
                        name="cardNumber"
                        placeholder="0000 0000 0000 0000"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        required={paymentMethod === "card"}
                        className="w-full rounded-lg border border-gray-200 bg-white pl-10 pr-4 py-3 text-sm focus:border-amber-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">Expiry Date</label>
                      <input
                        type="text"
                        name="expiryDate"
                        placeholder="MM / YY"
                        value={formData.expiryDate}
                        onChange={handleInputChange}
                        required={paymentMethod === "card"}
                        className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm focus:border-amber-500 focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">CVV</label>
                      <input
                        type="password"
                        name="cvv"
                        placeholder="123"
                        maxLength={3}
                        value={formData.cvv}
                        onChange={handleInputChange}
                        required={paymentMethod === "card"}
                        className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm focus:border-amber-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                </div>
              )}

              {paymentMethod === "paypal" && (
                <div className="p-4 rounded-xl bg-gray-50 text-center border border-dashed border-gray-200 text-sm text-gray-500">
                
                </div>
              )}
            </div>

            <hr className="border-gray-200" />
            <div className="flex flex-col sm:flex-row gap-6 pt-2">
              <div className="flex items-start gap-3">
                <ShieldCheck className="h-6 w-6 text-amber-500 shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-gray-900">Secure Checkout</h4>
                  <p className="text-[11px] text-gray-400">256-bit SSL Secure Encryption Technology</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Award className="h-6 w-6 text-amber-500 shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-gray-900">2-Year Warranty</h4>
                  <p className="text-[11px] text-gray-400">Official Brand Malfunction Protection Included</p>
                </div>
              </div>
            </div>

          </form>

          {/* অর্ডার সামারি সেকশন */}
          <div className="lg:col-span-5 bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-xl shadow-gray-200/50">
            <h3 className="text-lg font-bold text-gray-900 mb-6">Order Summary</h3>

            {orderSummary.items.length === 0 ? (
              <div className="text-center py-12 border-b border-dashed border-gray-100 mb-6">
                <ShoppingBag className="mx-auto h-12 w-12 text-gray-300 mb-3" />
                <p className="text-sm font-semibold text-gray-400">Your cart is empty</p>
                <p className="text-xs text-gray-400 mt-1">Please insert product objects into 'cart' local storage.</p>
              </div>
            ) : (
              <div className="space-y-4 mb-6">
                {orderSummary.items.map((item) => (
                  <div key={item._id} className="flex gap-4 items-center">
                    <div className="h-16 w-16 shrink-0 bg-gray-50 rounded-xl overflow-hidden border border-gray-100 flex items-center justify-center p-2">
                      <img 
                        src={item.images && item.images.length > 0 ? item.images[0] : ""} 
                        alt={item.name} 
                        className="max-h-full max-w-full object-contain" 
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-bold text-gray-900 truncate">{item.name}</h4>
                      <div className="text-[10px] font-semibold text-amber-600 uppercase mt-0.5"> {item.category}</div>
                      <div className="text-xs text-gray-400 mt-0.5">{item.brand} • {item.category}</div>
                    </div>
                    <div className="text-sm font-bold text-gray-900">${(item.price * (item.quantity || 1)).toFixed(2)}</div>
                  </div>
                ))}
              </div>
            )}

            <div className="flex gap-2 mb-6">
              <input
                type="text"
                placeholder="Promo code"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                disabled={orderSummary.items.length === 0}
                className="flex-1 rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm focus:border-amber-500 focus:outline-none transition-colors disabled:opacity-50"
              />
              <button 
                type="button" 
                disabled={orderSummary.items.length === 0}
                className="bg-[#4a5568] hover:bg-[#2d3748] text-white text-xs font-semibold px-5 rounded-lg transition-colors cursor-pointer disabled:opacity-50"
              >
                Apply
              </button>
            </div>

            {/* ইনভয়েস ব্রেকডাউন */}
            <div className="space-y-3 text-sm text-gray-500 border-b border-dashed border-gray-100 pb-6 mb-6">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-medium text-gray-900">${orderSummary.subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="font-semibold text-amber-600">
                  {/* এখানে কন্ডিশনাল লেখাটি বাদ দিয়ে ডাইরেক্ট স্টেট থেকে ভ্যালু রেন্ডার করা হয়েছে */}
                  ${orderSummary.shippingCost.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Tax</span>
                <span className="font-medium text-gray-900">${orderSummary.tax.toFixed(2)}</span>
              </div>
            </div>

            <div className="flex justify-between items-baseline mb-6">
              <span className="text-xl font-bold text-gray-900">Total</span>
              <span className="text-3xl font-black text-gray-900">${orderSummary.total.toFixed(2)}</span>
            </div>

            <button
                onClick={handlePlaceOrder}
              type="submit"
              disabled={orderSummary.items.length === 0}
              className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-amber-500/10 transition-all hover:scale-[1.01] active:scale-[0.99] text-center text-sm cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Place Order
            </button>

            <p className="text-[10px] leading-relaxed text-gray-400 text-center mt-4">
              By placing your order, you agree to TECHNE's{" "}
              <a href="#" className="underline hover:text-gray-600">Terms of Service</a> and{" "}
              <a href="#" className="underline hover:text-gray-600">Privacy Policy</a>.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
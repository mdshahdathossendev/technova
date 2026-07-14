"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export interface CartItem {
  _id: string;
  name: string;
  brand: string;
  category: string;
  price?: number | string; // price কখনো string বা undefined হতে পারে, তাই সেফ ট্র্যাকিং
  stock?: number;
  rating?: number;
  description?: string;
  longDescription?: string;
  images: string[];
  quantity: number;
}

export interface CartSummary {
  subtotal: number;
  tax: number;
  total: number;
}

export default function ShoppingCart() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [summary, setSummary] = useState<CartSummary>({ subtotal: 0, tax: 0, total: 0 });
  const [isMounted, setIsMounted] = useState(false);

  // ২. লোকাল স্টোরেজ থেকে ডেটা লোড
  useEffect(() => {
    setIsMounted(true);
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      try {
        const parsedCart = JSON.parse(storedCart);
        if (Array.isArray(parsedCart)) {
          setCart(parsedCart);
        }
      } catch (error) {
        console.error("Error parsing cart data:", error);
      }
    }
  }, []);

  // ৩. সাবটোটাল ও ট্যাক্স ক্যালকুলেশন (NaN প্রোটেকশনসহ ফিক্সড)
  useEffect(() => {
    if (!isMounted) return;
    localStorage.setItem("cart", JSON.stringify(cart));

    const subtotal = cart.reduce((acc, item) => {
      // যদি price না থাকে বা NaN হয়, তবে ডিফল্ট ০ (0) ধরবে
      const itemPrice = Number(item.price) || 0;
      const itemQuantity = Number(item.quantity) || 1;
      return acc + (itemPrice * itemQuantity);
    }, 0);

    const tax = Math.round(subtotal * 0.05); // ৫% ট্যাক্স
    const total = subtotal + tax;

    setSummary({ subtotal, tax, total });
  }, [cart, isMounted]);

  // ৪. কোয়ান্টিটি বাড়ানোর ফাংশন (+)
  const increaseQuantity = (id: string) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item._id === id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
      )
    );
  };

  // ৫. কোয়ান্টিটি কমানোর ফাংশন (-)
  const decreaseQuantity = (id: string) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item._id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // ৬. আইটেম রিমুভ করার ফাংশন
  const removeItem = (id: string) => {
    setCart(prevCart => prevCart.filter(item => item._id !== id));
  };

  if (!isMounted) {
    return <div className="text-center p-10 font-medium text-gray-500">Loading Cart...</div>;
  }

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-50 min-h-screen text-gray-800">
      <h1 className="text-2xl font-bold mb-6">Shopping Cart ({cart.length} Items)</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* বাম পাশের কার্ট লিস্ট */}
        <div className="lg:col-span-2 space-y-4">
          {cart.length === 0 ? (
            <div className="bg-white p-12 rounded-lg shadow-sm border text-center text-gray-500">
              <p className="text-xl font-semibold text-gray-700">Your cart is empty!</p>
            </div>
          ) : (
            cart.map(item => {
              // এখানে প্রতি আইটেমের প্রাইস ভ্যালিডেশন করা হচ্ছে (NaN হ্যান্ডেল করার জন্য)
              const validPrice = Number(item.price) || 0;
              const itemTotal = validPrice * (item.quantity || 1);

              return (
                <div key={item._id} className="bg-white p-4 rounded-lg shadow-sm border flex gap-4 relative">
                  {/* প্রোডাক্ট ইমেজ */}
                  <div className="w-24 h-24 bg-gray-100 rounded flex items-center justify-center overflow-hidden flex-shrink-0">
                    <img 
                      src={item.images && item.images[0] ? item.images[0] : "https://via.placeholder.com/150"} 
                      alt={item.name} 
                      className="object-cover w-full h-full" 
                    />
                  </div>

                  {/* প্রোডাক্ট ডিটেইলস */}
                  <div className="flex-1 min-w-0">
                    <span className="inline-block text-[10px] font-bold bg-blue-900 text-white px-2 py-0.5 rounded uppercase tracking-wider">
                      {item.category || "General"}
                    </span>
                    <h3 className="font-semibold text-base mt-1 text-gray-900 truncate">{item.name}</h3>
                    <p className="text-xs text-gray-500 mt-0.5 truncate">
                      Brand: {item.brand || "Unknown"} {item.rating ? `| Rating: ⭐${item.rating}` : ""}
                    </p>

                    {/* কাউন্টার বাটনসমূহ */}
                    <div className="flex items-center gap-3 mt-4">
                      <button 
                        onClick={() => decreaseQuantity(item._id)}
                        className="border w-7 h-7 flex items-center justify-center rounded bg-gray-50 hover:bg-gray-200 font-bold"
                      >
                        -
                      </button>
                      <span className="w-6 text-center text-sm font-bold">{item.quantity || 1}</span>
                      <button 
                        onClick={() => increaseQuantity(item._id)}
                        className="border w-7 h-7 flex items-center justify-center rounded bg-gray-50 hover:bg-gray-200 font-bold"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* প্রাইস ও রিমুভ অ্যাকশন */}
                  <div className="text-right flex flex-col justify-between items-end flex-shrink-0">
                    <button 
                      onClick={() => removeItem(item._id)}
                      className="text-gray-400 hover:text-red-500 transition-colors p-1 text-lg"
                    >
                      🗑️
                    </button>
                    <p className="text-lg font-bold text-blue-900">
                      ৳{itemTotal.toLocaleString()}
                    </p>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* ডান পাশের Order Summary */}
        <div className="bg-white p-6 rounded-lg shadow-sm border h-fit">
          <h2 className="text-lg font-bold mb-4 text-gray-900">Order Summary</h2>
          
          <div className="space-y-3 text-sm pb-4 border-b">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span className="font-semibold text-gray-900">৳{summary.subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Estimated Shipping</span>
              <span className="font-semibold text-green-600 uppercase">
                {summary.subtotal > 0 ? "Free" : "৳0"}
              </span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Estimated Tax (5%)</span>
              <span className="font-semibold text-gray-900">৳{summary.tax.toLocaleString()}</span>
            </div>
          </div>

          <div className="flex justify-between items-center my-4">
            <span className="font-bold text-base text-gray-900">Total</span>
            <span className="font-bold text-xl text-blue-900">৳{summary.total.toLocaleString()}</span>
          </div>

         <Link href="/chakout">
          <button 
            disabled={cart.length === 0}
            className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-3 rounded-md transition-all flex items-center justify-center gap-1 text-sm shadow disabled:bg-gray-200 disabled:text-gray-400"
          >
            Proceed to Checkout ❯
          </button>
         </Link>
        </div>
      </div>
    </div>
  );
}
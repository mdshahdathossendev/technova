"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, ShoppingCart, Lock } from "lucide-react";
import Link from "next/link";

interface AddToCartSuccessProps {
  productName?: string;
  sku?: string;
  onViewCart?: () => void;
  onCheckout?: () => void;
  onContinueShopping?: () => void;
}

export default function AddToCartSuccess({
  productName = "Alpha-1 Smart Hub",
  sku = "ALPHA-H1",
  onViewCart,
  onCheckout,
  onContinueShopping,
}: AddToCartSuccessProps) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4 antialiased">
      {/* 1. ওপরে ভেসে ওঠার জন্য মেইন কার্ড অ্যানিমেশন */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-xl border border-gray-100 bg-white p-8 text-center shadow-xl shadow-gray-200/50 rounded-2xl md:p-12"
      >
        {/* 2. চেক-বক্সের জন্য পপ-ইন অ্যানিমেশন */}
        <div className="mb-6 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
            animate={{ opacity: 1, scale: 1, rotate: -4 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 15,
              delay: 0.1,
            }}
            className="flex h-16 w-16 items-center justify-center bg-amber-500 text-slate-900 shadow-md shadow-amber-500/20 rounded-xl"
          >
            <Check className="h-7 w-7 stroke-[3px]" />
          </motion.div>
        </div>

        {/* হেডিং এবং বিবরণ */}
        <h2 className="text-2xl font-bold text-gray-900 mb-3 md:text-3xl">
          Item added to cart!
        </h2>
        <p className="mx-auto mb-8 max-w-sm text-sm leading-relaxed text-gray-500 md:text-base">
          The <span className="font-semibold text-blue-600">{productName}</span>{" "}
          has been reserved in your cart. You're one step closer to your upgraded
          workspace.
        </p>

       
        <div className="mb-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Link href="/add-to-cart">
  <button
           
            className="flex w-full items-center justify-center gap-2 bg-blue-600 px-6 py-3 font-medium text-white shadow-md shadow-blue-600/10 transition-all hover:bg-blue-700 hover:scale-[1.02] active:scale-[0.98] rounded-xl sm:w-auto cursor-pointer"
          >
            <ShoppingCart className="h-4 w-4" />
            View Cart
          </button>

        </Link>
          <button
            className="flex w-full items-center justify-center gap-2 border border-blue-600 bg-white px-6 py-3 font-medium text-blue-600 transition-all hover:bg-blue-50/50 hover:scale-[1.02] active:scale-[0.98] rounded-xl sm:w-auto cursor-pointer"
          >
            <Lock className="h-4 w-4" />
            Checkout
          </button>
        </div>

       <Link href="/shop">
        <button 
          className="mb-10 inline-block text-sm font-medium text-gray-400 underline underline-offset-4 transition-colors hover:text-gray-700 cursor-pointer"
        >
          Continue Shopping
        </button>
       </Link>

        <hr className="mb-6 border-gray-100" />

        {/* ইনভেন্টরি ও SKU মেটাডেটা */}
        <div className="mx-auto grid max-w-xs grid-cols-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
          <div>
            <div className="text-[10px] text-gray-400 mb-1">Inventory</div>
            <div className="font-bold text-blue-600">Reserved</div>
          </div>
          <div>
            <div className="text-[10px] text-gray-400 mb-1">SKU</div>
            <div className="font-bold text-blue-600">{sku}</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ShoppingCart, Star, ShieldCheck, Truck, Zap } from 'lucide-react';
import { Product } from '@/lib/data';



interface SingalPordectProps {
  products?: Product;
}

const SingalPordect: React.FC<SingalPordectProps> = ({ products }) => {
    
  const [activeImage, setActiveImage] = useState<string>(products.images?.[0] || '');
  const [selectedStorage, setSelectedStorage] = useState<string>(
    products.storageOptions?.[0] || 'Base'
  );

  const savings = products.oldPrice ? products.oldPrice - products.price : 0;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 font-sans bg-slate-50 min-h-screen flex items-center justify-center">
      <div className="w-full bg-white rounded-3xl shadow-sm border border-slate-100 p-6 md:p-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* ================= LEFT SIDE: IMAGE GALLERY ================= */}
        <div className="space-y-6">
          <div className="w-full aspect-[4/3] relative rounded-2xl bg-slate-50 border border-slate-100 overflow-hidden flex items-center justify-center p-6">
            <div className="relative w-full h-full">
              {activeImage && (
                <Image
                  src={activeImage}
                  alt={products.name}
                  fill
                  priority
                  className="object-contain transition-all duration-300"
                  sizes="(max-w-7xl) 50vw, 100vw"
                />
              )}
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4">
            {products.images?.map((img, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActiveImage(img)}
                className={`aspect-square relative rounded-xl bg-slate-50 border overflow-hidden p-2 transition-all ${
                  activeImage === img
                    ? 'border-blue-950 ring-2 ring-blue-950/10'
                    : 'border-slate-200 hover:border-slate-400'
                }`}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={img}
                    alt={`${products.name} thumb ${index + 1}`}
                    fill
                    sizes="25vw"
                    className="object-contain"
                  />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* ================= RIGHT SIDE: PRODUCT INFO ================= */}
        <div className="flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-950 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                New Arrival
              </span>
              <span className="bg-amber-400 text-slate-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Best Seller
              </span>
            </div>

            {/* Title */}
            <h1 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight">
              {products.name}
            </h1>

            {/* Ratings & Sales */}
            <div className="flex items-center gap-4 text-sm border-b border-slate-100 pb-2">
              <div className="flex items-center gap-1.5">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      fill={i < Math.floor(products.rating) ? "currentColor" : "none"} 
                      className={i < Math.floor(products.rating) ? "" : "text-gray-200"}
                    />
                  ))}
                </div>
                <span className="font-bold text-slate-800">
                  ({products.reviewsCount || 0} reviews)
                </span>
              </div>
              <span className="text-slate-300">|</span>
              <span className="text-blue-950 font-black">{products.salesCount || '0+'} sold</span>
            </div>

            {/* Pricing */}
            <div className="space-y-1">
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-black text-blue-950">
                  ৳{products.price.toLocaleString()}
                </span>
                {products.oldPrice && (
                  <span className="text-lg text-slate-400 line-through">
                    ৳{products.oldPrice.toLocaleString()}
                  </span>
                )}
                {savings > 0 && (
                  <span className="bg-red-50 text-red-600 text-xs font-bold px-2 py-1 rounded-md border border-red-100">
                    SAVE ৳{savings.toLocaleString()}
                  </span>
                )}
              </div>
              
              <div className="flex items-center gap-2 pt-1">
                <span className={`w-2.5 h-2.5 rounded-full animate-pulse ${products.stock > 0 ? 'bg-emerald-500' : 'bg-red-500'}`} />
                <p className={`text-sm font-bold ${products.stock > 0 ? 'text-emerald-600' : 'text-red-600'}`}>
                  {products.stock > 0 ? 'In Stock' : 'Out of Stock'}{' '}
                  <span className="text-slate-400 font-medium">(Only {products.stock} units left!)</span>
                </p>
              </div>
            </div>

            {/* Variants */}
            {products.storageOptions && products.storageOptions.length > 0 && (
              <div className="space-y-2.5 pt-1">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Storage</span>
                <div className="flex gap-3">
                  {products.storageOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setSelectedStorage(option)}
                      className={`px-5 py-2 rounded-xl text-sm font-bold border transition-all ${
                        selectedStorage === option
                          ? 'border-blue-950 bg-blue-50/50 text-blue-950 ring-2 ring-blue-950/10'
                          : 'border-slate-200 text-slate-600 hover:border-slate-400'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* ================= NEW: LONG DESCRIPTION SECTION ================= */}
            {products.longDescription && (
              <div className="pt-2 pb-1">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                  Product Description
                </span>
                <p className="text-sm text-slate-600 leading-relaxed text-justify">
                  {products.longDescription}
                </p>
              </div>
            )}

            {/* Key Features */}
            {products.features && products.features.length > 0 && (
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 space-y-3">
                <h3 className="font-bold text-slate-900 text-sm tracking-wide">Key Features</h3>
                <ul className="space-y-2.5 text-sm text-slate-600">
                  {products.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <Zap size={16} className="text-blue-950 shrink-0 mt-0.5" fill="currentColor" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="space-y-4 pt-4 border-t border-slate-100">
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                type="button"
                className="flex-1 flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-500 text-slate-900 font-black py-4 rounded-xl shadow-sm transition-all transform active:scale-[0.98]"
              >
                <ShoppingCart size={18} />
                <span>Add to Cart</span>
              </button>
              <button 
                type="button"
                className="flex-1 bg-blue-950 hover:bg-blue-900 text-white font-black py-4 rounded-xl shadow-sm transition-all transform active:scale-[0.98]"
              >
                Buy It Now
              </button>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-400 font-medium pt-2">
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-slate-400" />
                <span>Secure Transaction</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck size={16} className="text-slate-400" />
                <span>Free Express Delivery</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default SingalPordect;
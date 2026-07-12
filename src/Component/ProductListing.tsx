'use client';

import React from 'react';
import Image from 'next/image';
import { Star, Zap } from 'lucide-react';
import { Product } from '@/lib/data';

// ================= TYPES & INTERFACES ================
interface FeaturedHighlightsProps {
  products: Product[]; // Parent থেকে ডাইনামিক ডাটা আসবে
}

const FeaturedHighlights: React.FC<FeaturedHighlightsProps> = ({ products = [] }) => {
  // ডিজাইন অনুযায়ী ঠিক ৪টি ডাটা এসাইন করা হচ্ছে
  const mainDeal = products[0];       // Left Main Card (Sony Headphone)
  const trendingItem = products[1];   // Right Top Card (Keyboard)
  const flashTextCard = products[2];  // Right Bottom Left Banner (Flash Deals)
  const smallProduct = products[3];   // Right Bottom Right Card (DSLR)

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 font-sans bg-slate-50">
      {/* Section Header */}
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
          Featured Highlights
        </h2>
      </div>

      {/* Main Grid Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* ================= 1. LEFT BIG CARD: DEAL OF THE DAY ================= */}
        {mainDeal && (
          <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden flex flex-col justify-between group">
            <div className="relative w-full aspect-[4/3] bg-slate-950">
              <Image
                src={mainDeal.images[2]} 
                alt={mainDeal.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                sizes="(max-w-7xl) 50vw, 100vw"
              />
              <span className="absolute top-4 left-4 bg-red-600 text-white text-xs font-black px-3 py-1.5 rounded-lg uppercase tracking-wider shadow-sm">
                {mainDeal.tag || 'Deal of the Day'}
              </span>
            </div>
            
            <div className="p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white">
              <div className="space-y-2">
                <h3 className="text-xl font-black text-slate-900 group-hover:text-blue-950 transition-colors">
                  {mainDeal.name}
                </h3>
                <div className="flex items-center gap-1.5">
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill={i < mainDeal.rating ? "currentColor" : "none"} className={i < mainDeal.rating ? "text-amber-500" : "text-slate-200"} />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-slate-400">({mainDeal.reviewsCount} reviews)</span>
                </div>
                <div className="flex items-baseline gap-2 pt-1">
                  <span className="text-2xl font-black text-blue-950">৳{mainDeal.price.toLocaleString()}</span>
                  {mainDeal.oldPrice && (
                    <span className="text-sm text-slate-400 line-through">৳{mainDeal.oldPrice.toLocaleString()}</span>
                  )}
                </div>
              </div>
              
              <button
                type="button"
                className="bg-blue-950 hover:bg-blue-900 text-white font-black text-sm px-6 py-3 rounded-xl transition-all shadow-sm shrink-0 active:scale-[0.98]"
              >
                Add to Cart
              </button>
            </div>
          </div>
        )}

        {/* ================= RIGHT SIDE GRID (Stacked Cards) ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          
          {/* 2. CARD TWO: TRENDING NOW (Horizontal Layout) */}
          {trendingItem && (
            <div className="sm:col-span-2 bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden grid grid-cols-1 sm:grid-cols-2 group">
              <div className="relative h-48 sm:h-auto bg-slate-100">
                <Image
                  src={trendingItem.images[2]}
                  alt={trendingItem.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-w-7xl) 25vw, 50vw"
                />
              </div>
              <div className="p-6 flex flex-col justify-center space-y-3 bg-white">
                <span className="text-[10px] font-black text-amber-600 uppercase tracking-widest">
                  {trendingItem.tag || 'Trending Now'}
                </span>
                <h4 className="text-lg font-black text-slate-900 leading-tight">
                  {trendingItem.name}
                </h4>
                <p className="text-xl font-black text-blue-950">৳{trendingItem.price.toLocaleString()}</p>
                <button 
                  type="button"
                  className="text-sm font-black text-blue-950 hover:text-blue-900 flex items-center gap-1 group/btn w-fit"
                >
                  <span>Buy Now</span>
                  <span className="group-hover/btn:translate-x-0.5 transition-transform">&rarr;</span>
                </button>
              </div>
            </div>
          )}

          {/* 3. CARD THREE: FLASH DEALS (Solid Colored text block) */}
          {flashTextCard && (
            <div className="bg-blue-950 text-white rounded-3xl p-6 flex flex-col justify-between shadow-sm relative overflow-hidden group min-h-[180px]">
              <div className="space-y-3 z-10">
                <div className="w-10 h-10 rounded-xl bg-amber-400 flex items-center justify-center text-slate-950">
                  <Zap size={20} fill="currentColor" />
                </div>
                <h4 className="text-lg font-black tracking-tight leading-snug pt-1">
                  {flashTextCard.name}
                </h4>
                <p className="text-xs font-medium text-slate-300 max-w-[180px] leading-relaxed">
                  {flashTextCard.description || 'Limited time offers up to huge scale discount.'}
                </p>
              </div>
              <span className="text-sm font-black text-amber-400 z-10 mt-4 block">
                {flashTextCard.tag || '40% OFF'}
              </span>
              <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-blue-900/40 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500" />
            </div>
          )}

          {/* 4. CARD FOUR: DYNAMIC SMALL PRODUCT DISPLAY (DSLR area) */}
          {smallProduct && (
            <div className="bg-white rounded-3xl border border-slate-100 p-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow group min-h-[180px]">
              <div className="relative w-28 h-20 mb-3">
                <Image
                  src={smallProduct.images[3]}
                  alt={smallProduct.name}
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                  sizes="112px"
                />
              </div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                {smallProduct.name}
              </h4>
              <p className="text-sm font-black text-slate-900">
                {smallProduct.tag || 'From'} <span className="text-blue-950 font-black">৳{smallProduct.price.toLocaleString()}</span>
              </p>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};

export default FeaturedHighlights;
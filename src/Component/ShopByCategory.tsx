'use client';

import React from 'react';
import { 
  Smartphone, 
  Laptop, 
  Headphones, 
  Gamepad2, 
  Watch, 
  ArrowUpRight 
} from 'lucide-react';

interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
}

const ShopByCategory: React.FC = () => {
  // স্ক্রিনশট অনুযায়ী সবগুলো ক্যাটাগরিতে আইকন সেট করা হয়েছে
  const categories: Category[] = [
    {
      id: '1',
      name: 'Smartphones',
      icon: <Smartphone size={32} className="text-blue-950" />,
    },
    {
      id: '2',
      name: 'Laptops',
      icon: <Laptop size={40} className="text-blue-950" />,
    },
    {
      id: '3',
      name: 'Audio',
      icon: <Headphones size={40} className="text-blue-950" />,
    },
    {
      id: '4',
      name: 'Gaming',
      icon: <Gamepad2 size={40} className="text-blue-950" />,
    },
    {
      id: '5',
      name: 'Wearables',
      icon: <Watch size={40} className="text-blue-950" />,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 font-sans">
      
      {/* ================= HEADER SECTION ================= */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl md:text-3xl font-black text-slate-950 tracking-tight">
          Shop by Category
        </h2>
        <button
          type="button"
          className="flex items-center gap-1 text-sm font-bold text-amber-600 hover:text-amber-700 transition-colors group"
        >
          <span>View All</span>
          <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>

      {/* ================= CATEGORIES GRID ================= */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-15">
        {categories.map((category) => (
          <div
            key={category.id}
            className="bg-white rounded-2xl border border-slate-100 p-10 shadow-sm hover:shadow-md hover:border-slate-200 transition-all cursor-pointer flex flex-col items-center justify-center text-center group h-44"
          >
            {/* Clean Icon Wrapper */}
            <div className="w-20 h-20 rounded-2xl bg-slate-50 flex items-center justify-center p-3 mb-4 group-hover:scale-105 transition-transform duration-300">
              {category.icon}
            </div>

            {/* Category Name */}
            <h3 className="font-bold text-slate-800 text-sm group-hover:text-blue-950 transition-colors">
              {category.name}
            </h3>
          </div>
        ))}
      </div>

    </div>
  );
};

export default ShopByCategory;
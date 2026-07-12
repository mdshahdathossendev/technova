"use client";

import React, { useState } from 'react';
import { 
  DollarSign, 
  Wallet, 
  Users, 
  ShoppingBag,
  TrendingUp,
  TrendingDown
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

// মক ডাটা (Sales Revenue Overview চার্টের জন্য)
const salesData = [
  { name: 'Jan', currentYear: 4000, lastYear: 2400 },
  { name: 'Feb', currentYear: 3000, lastYear: 1398 },
  { name: 'Mar', currentYear: 2000, lastYear: 9800 },
  { name: 'Apr', currentYear: 2780, lastYear: 3908 },
  { name: 'May', currentYear: 1890, lastYear: 4800 },
  { name: 'Jun', currentYear: 6390, lastYear: 3800 },
  { name: 'Jul', currentYear: 3490, lastYear: 4300 },
  { name: 'Aug', currentYear: 2000, lastYear: 2100 },
  { name: 'Sep', currentYear: 4780, lastYear: 2908 },
  { name: 'Oct', currentYear: 5890, lastYear: 4800 },
  { name: 'Nov', currentYear: 11200, lastYear: 5300 },
  { name: 'Dec', currentYear: 6300, lastYear: 4100 },
];

export default function OverviewSection() {
  const [timeframe, setTimeframe] = useState<'weekly' | 'monthly'>('monthly');

  // মিনি স্পার্কলাইন জেনারেটর (কার্ডের ভেতরের ছোট গ্রাফের জন্য)
  const renderSparkline = (color: string) => (
    <div className="w-24 h-8 mt-2 opacity-80">
      <svg viewBox="0 0 100 30" className="w-full h-full">
        <path
          d="M0,25 Q15,5 30,20 T60,10 T90,18 T100,5"
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );

  return (
    <div className="w-full bg-[#f8fafc] p-4 sm:p-6 md:p-8 font-sans space-y-6 text-[#0f172a]">
      
      {/* ─── TOP CARD GRID (৪টি স্ট্যাটস কার্ড) ─── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        
        {/* Total Sales */}
        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs font-medium text-gray-400">Total Sales</p>
              <h3 className="text-xl font-bold mt-1 text-gray-800">$2,482,900</h3>
            </div>
            <div className="bg-blue-50 p-2 rounded-xl text-blue-600">
              <DollarSign className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-center justify-between mt-4">
            <span className="text-xs font-bold text-emerald-600 flex items-center gap-0.5">
              <TrendingUp className="w-3.5 h-3.5" /> +12.5%
            </span>
            {renderSparkline('#10b981')}
          </div>
        </div>

        {/* Monthly Profit */}
        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs font-medium text-gray-400">Monthly Profit</p>
              <h3 className="text-xl font-bold mt-1 text-gray-800">$142,500</h3>
            </div>
            <div className="bg-[#f4ba13]/10 p-2 rounded-xl text-[#e0aa0f]">
              <Wallet className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-center justify-between mt-4">
            <span className="text-xs font-bold text-emerald-600 flex items-center gap-0.5">
              <TrendingUp className="w-3.5 h-3.5" /> +8.2%
            </span>
            {renderSparkline('#e0aa0f')}
          </div>
        </div>

        {/* Active Users */}
        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs font-medium text-gray-400">Active Users</p>
              <h3 className="text-xl font-bold mt-1 text-gray-800">48.2k</h3>
            </div>
            <div className="bg-indigo-50 p-2 rounded-xl text-indigo-600">
              <Users className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-center justify-between mt-4">
            <span className="text-xs font-bold text-red-500 flex items-center gap-0.5">
              <TrendingDown className="w-3.5 h-3.5" /> -2.4%
            </span>
            {renderSparkline('#ef4444')}
          </div>
        </div>

        {/* Conversion Rate */}
        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs font-medium text-gray-400">Conv. Rate</p>
              <h3 className="text-xl font-bold mt-1 text-gray-800">4.2%</h3>
            </div>
            <div className="bg-purple-50 p-2 rounded-xl text-purple-600">
              <ShoppingBag className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-center justify-between mt-4">
            <span className="text-xs font-medium text-amber-600 flex items-center gap-1">
              📊 Stable
            </span>
            {renderSparkline('#6366f1')}
          </div>
        </div>

      </div>

      {/* ─── GRAPH & PROGRESS RING LAYOUT (Main Charts) ─── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Sales Revenue Overview (8 Columns) */}
        <div className="lg:col-span-8 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div>
              <h2 className="text-sm font-bold text-gray-800">Sales Revenue Overview</h2>
              <p className="text-xs text-gray-400 mt-0.5">Comparison between current year and last year performance</p>
            </div>
            
            {/* Toggle Buttons (Weekly / Monthly) */}
            <div className="bg-gray-100/80 p-0.5 rounded-lg flex items-center self-end sm:self-auto">
              <button 
                type="button"
                onClick={() => setTimeframe('weekly')}
                className={`px-3 py-1 text-[11px] font-semibold rounded-md transition ${timeframe === 'weekly' ? 'bg-white text-gray-800 shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}
              >
                Weekly
              </button>
              <button 
                type="button"
                onClick={() => setTimeframe('monthly')}
                className={`px-3 py-1 text-[11px] font-semibold rounded-md transition ${timeframe === 'monthly' ? 'bg-[#001b4e] text-white shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}
              >
                Monthly
              </button>
            </div>
          </div>

          {/* Recharts Area Chart */}
          <div className="w-full h-72 text-xs">
            <ResponsiveContainer width="100%" h="100%">
              <AreaChart data={salesData} margin={{ top: 10, right: 5, left: -25, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorCurrent" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#001b4e" stopOpacity={0.15}/>
                    <stop offset="95%" stopColor="#001b4e" stopOpacity={0.01}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8' }} />
                <Tooltip />
                {/* Last Year Performance (Dotted Line) */}
                <Area 
                  type="monotone" 
                  dataKey="lastYear" 
                  stroke="#94a3b8" 
                  strokeWidth={2}
                  strokeDasharray="4 4"
                  fill="none" 
                />
                {/* Current Year Performance (Smooth Filled Area) */}
                <Area 
                  type="monotone" 
                  dataKey="currentYear" 
                  stroke="#001b4e" 
                  strokeWidth={2.5}
                  fillOpacity={1} 
                  fill="url(#colorCurrent)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Inventory Health Ring Card (4 Columns) */}
        <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
          <div>
            <h2 className="text-sm font-bold text-gray-800">Inventory Health</h2>
            <p className="text-xs text-gray-400 mt-0.5">Status across all warehouses</p>
          </div>

          {/* Semi-Circular Progress Ring UI */}
          <div className="relative flex items-center justify-center my-6">
            <svg className="w-40 h-40 transform -rotate-90">
              {/* Background Circle */}
              <circle
                cx="80"
                cy="80"
                r="65"
                className="stroke-gray-100"
                strokeWidth="12"
                fill="transparent"
              />
              {/* Highlighted Yellow Segment (75% Optimized) */}
              <circle
                cx="80"
                cy="80"
                r="65"
                className="stroke-[#f4ba13]"
                strokeWidth="12"
                fill="transparent"
                strokeDasharray={408}
                strokeDashoffset={408 - (408 * 75) / 100}
                strokeLinecap="round"
              />
            </svg>
            
            {/* Center Content Text */}
            <div className="absolute text-center">
              <span className="text-2xl font-black text-gray-800">75%</span>
              <p className="text-[10px] uppercase font-bold tracking-wider text-gray-400 mt-0.5">Optimized</p>
            </div>
          </div>

          {/* Bottom Stocks Status Indicators */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-gray-50 p-3 rounded-xl text-center">
              <p className="text-[10px] text-gray-400 font-medium">In Stock</p>
              <p className="text-sm font-bold text-gray-800 mt-0.5">12,480</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-xl text-center">
              <p className="text-[10px] text-gray-400 font-medium">Low Stock</p>
              <p className="text-sm font-bold text-red-500 mt-0.5">124</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
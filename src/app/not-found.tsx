'use client';

import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen w-full bg-slate-50 flex flex-col items-center justify-center p-4 overflow-hidden relative">
      
      {/* ব্যাকগ্রাউন্ড ডেকোরেশন (মডার্ন শেপ) */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-[#FFB800]/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-[#001D4A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl w-full flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 z-10">
        
        {/* ================= ANIMATED ROBOT COMPONENT ================= */}
        <div className="relative flex flex-col items-center justify-center">
          {/* রোবটের ফ্লোটিং বডি */}
          <div className="w-48 h-56 flex flex-col items-center justify-center animate-[bounce_3s_ease-in-out_infinite]">
            
            {/* অ্যান্টেনা */}
            <div className="w-1 h-6 bg-slate-400 relative">
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#FFB800] rounded-full animate-ping" />
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#FFB800] rounded-full" />
            </div>

            {/* মাথা (Head) */}
            <div className="w-36 h-28 bg-[#001D4A] rounded-[2rem] border-4 border-slate-200 shadow-xl p-4 flex flex-col items-center justify-center relative">
              {/* স্ক্রিন */}
              <div className="w-full h-full bg-slate-950 rounded-xl flex items-center justify-between px-4 relative overflow-hidden">
                {/* দুঃখিত চোখ দুটি */}
                <div className="w-5 h-5 bg-cyan-400 rounded-full animate-pulse opacity-80 shadow-[0_0_10px_#22d3ee]" />
                <div className="w-5 h-5 bg-cyan-400 rounded-full animate-pulse opacity-80 shadow-[0_0_10px_#22d3ee]" />
                
                {/* দুঃখী মুখ */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-6 h-2 border-t-2 border-cyan-400 rounded-full" />
              </div>
            </div>

            {/* গলা */}
            <div className="w-6 h-3 bg-slate-300 -mt-1" />

            {/* বডি (Body) */}
            <div className="w-28 h-24 bg-[#001D4A] rounded-2xl border-4 border-slate-200 shadow-lg flex items-center justify-center relative">
              {/* বুকের ভেতরের কোয়েশ্চেন মার্ক বাতি */}
              <div className="w-10 h-10 bg-slate-950 rounded-lg flex items-center justify-center border border-slate-800">
                <span className="text-[#FFB800] font-black text-xl animate-pulse">?</span>
              </div>
              
              {/* হাত */}
              <div className="absolute -left-4 top-4 w-4 h-12 bg-slate-300 rounded-full origin-top rotate-12" />
              <div className="absolute -right-4 top-4 w-4 h-12 bg-slate-300 rounded-full origin-top -rotate-12 animate-[pulse_2s_infinite]" />
            </div>
          </div>

          {/* রোবটের নিচের শ্যাডো বা ছায়া */}
          <div className="w-32 h-3 bg-slate-300/40 rounded-full blur-sm mt-4 animate-[ping_3s_ease-in-out_infinite] [animation-duration:3s]" />
        </div>

        {/* ================= CONTENT SECTION ================= */}
        <div className="text-center md:text-left flex flex-col items-center md:items-start max-w-md">
          
          {/* বড় 404 টেক্সট যাতে থ্রিডি ফিল আসে */}
          <h1 className="text-8xl md:text-9xl font-black text-[#001D4A] tracking-tighter drop-shadow-[0_4px_0_#FFB800] mb-4 select-none animate-[pulse_4s_infinite]">
            404
          </h1>

          <h2 className="text-xl md:text-2xl font-black text-[#001D4A] tracking-wide mb-3">
            UH OH! PAGE NOT FOUND.
          </h2>

          <p className="text-xs md:text-sm font-bold text-slate-500 tracking-wide uppercase leading-relaxed mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>

          {/* ব্যাক টু হোম বাটন */}
          <Link
            href="/"
            className="inline-flex items-center justify-center bg-[#001D4A] hover:bg-[#FFB800] text-white hover:text-[#001D4A] font-black text-xs tracking-widest uppercase px-8 py-4 rounded-xl transition-all duration-300 shadow-md active:scale-[0.98] group"
          >
            <span>Back to Homepage</span>
          </Link>

        </div>

      </div>
    </div>
  );
}
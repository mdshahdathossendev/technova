"use client";

import React from "react";

export default function DashboardLoading() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#051129]/65 backdrop-blur-xl transition-all duration-500 overflow-hidden">
      
      {/* ─── DYNAMIC BACKGROUND GLOWS (গ্লাসি ব্যাকগ্রাউন্ডের জন্য অরবিটাল লাইট) ─── */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-600/15 rounded-full blur-[80px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      {/* ─── MAIN LOADING CONTAINER ─── */}
      <div className="text-center flex flex-col items-center select-none relative z-10">
        
        {/* ─── 360° SPINNING LOGO AREA ─── */}
        <div className="relative w-28 h-28 mb-6 flex items-center justify-center">
          
          {/* স্ক্রিনশটের ডটেড সার্কেল (Dotted Outer Track) */}
          <div className="absolute inset-0 border border-dashed border-sky-500/25 rounded-full"></div>
          
          {/* এই কন্টেইনারটি পুরো লোগো অবজেক্টকে প্রিসাইজলি ৩৬০ ডিগ্রি অ্যাক্সিসে ঘোরাবে */}
          <div className="absolute w-24 h-24 animate-precise-spin flex items-center justify-center">
            
            {/* Left Sharp Blue Pointer (Horizontal Wing) */}
            <div className="absolute left-0 top-[42%] w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-r-[38px] border-r-[#004bb5]"></div>
            
            {/* Deep Blue Crown Spikes (Center Top) */}
            <div className="absolute top-[18px] left-[32px] w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[34px] border-b-[#0057d9] transform -rotate-[22deg]"></div>
            <div className="absolute top-[12px] left-[44px] w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-b-[38px] border-b-[#0066ff]"></div>
            
            {/* Transparent Translucent Yellow/Green Overlay Spikes */}
            <div className="absolute top-[14px] left-[54px] w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-b-[36px] border-b-[#afc83c]/50 transform rotate-[15deg]"></div>
            <div className="absolute top-[22px] left-[64px] w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-b-[32px] border-b-[#9fb82c]/40 transform rotate-[32deg]"></div>
            
            {/* Orbiting Yellow Solid Circle (নিচের ডান পাশের নিখুঁত হলুদ বল) */}
            <div className="absolute bottom-[20px] right-[20px] w-4 h-4 bg-[#dcb014] rounded-full shadow-[0_0_10px_rgba(220,176,20,0.4)]"></div>
            
          </div>

          {/* Center Point Indicator (কেন্দ্রবিন্দু) */}
          <div className="absolute w-1.5 h-1.5 bg-sky-400/30 rounded-full"></div>
        </div>

        {/* ─── BRAND TYPOGRAPHY ─── */}
        <h1 className="text-3xl font-black text-[#f4ba13] tracking-[0.25em] uppercase mb-1 drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)] font-sans">
          TACHNOVA
        </h1>

        <p className="text-[10px] text-slate-400 font-semibold tracking-widest uppercase opacity-75 animate-pulse">
          Loading premium tech experience
        </p>
        
      </div>

      {/* ─── CSS GLASS & SPIN ANIMATION INJECTION ─── */}
      <style jsx global>{`
       
        @keyframes preciseSpin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        
        .animate-precise-spin {
          animation: preciseSpin 4s linear infinite;
        }

        .backdrop-blur-xl {
          backdrop-filter: blur(24px) saturate(160%);
          -webkit-backdrop-filter: blur(24px) saturate(160%);
        }
      `}</style>
      
    </div>
  );
}
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowRight, ShieldCheck, Truck, Headphones, Award, Globe, Briefcase, CheckCircle2, Trophy } from 'lucide-react';
import Link from 'next/link';

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // ৫টি হাই-কোয়ালিটি গ্যাজেট ইমেজ লিংক
  const gadgetImages = [
    "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=600&q=80", // ১. স্মার্টওয়াচ
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80", // ২. প্রিমিয়াম হেডফোন
    "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=600&q=80", // ৩. স্মার্ট ড্রোন
    "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=600&q=80", // ৪. গেমিং কন্ট্রোলার
    "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=600&q=80"  // ৫. ভিআর (VR) হেডসেট
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % gadgetImages.length);
    }, 3000); // ৩ সেকেন্ড পর পর চেইঞ্জ হবে
    return () => clearInterval(interval);
  }, [gadgetImages.length]);

  return (
    <div className="relative w-full bg-white text-slate-900 py-12 lg:py-20 overflow-hidden font-sans select-none">
      
      {/* ================= BACKGROUND GEOMETRIC ELEMENTS ================= */}
      <div className="absolute left-[28%] top-0 opacity-20 pointer-events-none hidden lg:grid grid-cols-10 gap-2 w-48">
        {[...Array(40)].map((_, i) => (
          <div key={i} className="w-1 h-1 bg-slate-900 rounded-full" />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* ================= LEFT SIDE: BRAND CONTENT & FEATURES ================= */}
        <div className="lg:col-span-5 space-y-8 text-center lg:text-left flex flex-col items-center lg:items-start">
          
          {/* Logo & Slogan */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-500 rounded-lg text-white font-black text-xl shadow-md transform rotate-3">
              T
            </div>
            <div>
              <span className="text-2xl md:text-3xl font-black text-[#0B1A30] tracking-tight block leading-none">
                TECONOVA
              </span>
              <span className="text-[9px] font-bold text-slate-400 tracking-[0.15em] uppercase block mt-1">
                Tech for a better tomorrow
              </span>
            </div>
          </div>

          {/* Main Hero Headings */}
          <div className="space-y-1">
            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-black text-[#0B1A30] tracking-tight leading-tight">
              Upgrade Your
            </h1>
            <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-black tracking-tight leading-none bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
              Tech Lifestyle
            </h2>
          </div>

          {/* Core Description Paragraph */}
          <p className="text-sm md:text-base font-medium text-slate-500 max-w-sm md:max-w-md leading-relaxed tracking-wide">
            Discover cutting-edge gadgets, premium accessories and smart devices — all in one place.
          </p>

          {/* Horizontal Mini Features Grid Info */}
        

          {/* Action Button & Web Hyperlink */}
          <div className="flex flex-col sm:flex-row items-center gap-6 pt-4 w-full sm:w-auto">
            <Link href = '/shop'>
            <button
              type="button"
              className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-black text-sm px-8 py-4 rounded-full flex items-center justify-center gap-3 shadow-lg shadow-blue-500/20 transition-all active:scale-[0.98]"
            >
              <span>Shop Now</span>
              <ArrowRight size={16} />
            </button>
            </Link>
            
            <a 
              href="https://technova-pied-kappa.vercel.app" 
              target="_blank" 
              rel="noreferrer"
              className="text-xs font-bold text-slate-400 hover:text-blue-600 flex items-center gap-1.5 transition-colors"
            >
              <Globe size={14} />
              <span>www.teconova.com</span>
            </a>
          </div>

        </div>

        {/* ================= RIGHT SIDE: ANIMATED ROUNDED IMAGE CONTAINER ================= */}
        <div className="lg:col-span-7 flex justify-center items-center relative w-full h-[450px] sm:h-[550px]">
          
          {/* Big Background Shape Track */}
          <div className="absolute w-[80%] sm:w-[70%] aspect-square rounded-[40%_60%_70%_30%_/_40%_50%_60%_50%] border-2 border-slate-200/60 scale-110 pointer-events-none" />
          <div className="absolute w-[80%] sm:w-[70%] aspect-square rounded-[50%_40%_60%_40%_/_50%_60%_40%_50%] border border-slate-100 scale-105 pointer-events-none" />

          {/* Main Rounded Image Wrapper with Blob Smooth Effect */}
          <div className="relative w-[75%] sm:w-[65%] aspect-square rounded-[42%_58%_70%_30%_/_45%_45%_55%_55%] overflow-hidden bg-slate-50 border-[6px] border-white shadow-2xl z-10">
            {gadgetImages.map((src, index) => (
              <div
                key={src}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
                  index === currentSlide 
                    ? 'opacity-100 scale-100 pointer-events-auto' 
                    : 'opacity-0 scale-105 pointer-events-none'
                }`}
              >
                <Image
                  src={src}
                  alt={`Teconova Gadget Showcase ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-w-7xl) 45vw"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>

          {/* ================= FLOATING INFO BADGES ================= */}
          
         

          {/* Small Crosshair Target Icon Decorator (Top Left) */}
          <div className="absolute left-[20%] top-[12%] w-6 h-6 border-2 border-dashed border-slate-300 rounded-full flex items-center justify-center opacity-60 animate-spin [animation-duration:12s] z-0">
            <div className="w-1.5 h-1.5 bg-slate-400 rounded-full" />
          </div>

        </div>

      </div>
    </div>
  );
};

export default HeroSection;
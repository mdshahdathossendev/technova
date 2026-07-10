'use clinet'
import { 
  ChevronLeft, 
  ChevronRight, 
  Truck, 
  ShieldCheck, 
  CheckCircle, 
  Headphones, 
  Smartphone, 
  Laptop, 
  Watch, 
  Volume2, 
  Camera, 
  MousePointer, 
  Tv, 
  Grid,
  RotateCcw,
  Tag
} from 'lucide-react';
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div className="w-full bg-[#001b4e] font-sans text-white overflow-hidden selection:bg-yellow-400 selection:text-black">
      
      {/* 1. HERO CAROUSEL SECTION */}
      <div className="relative max-w-7xl mx-auto px-4 lg:px-8 pt-12 pb-24 md:pb-32 flex flex-col lg:flex-row items-center justify-between gap-8 min-h-[550px]">
        
        {/* Navigation Arrows */}
    

        {/* Left Content Side */}
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left z-10">
          <span className="text-yellow-400 font-bold tracking-wider text-sm uppercase">
            Delivering Happiness
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight text-white">
           Explore Premium <br />
            <span className="text-yellow-400">Tech at</span> Best Prices
          </h1>
          <p className="text-gray-300 text-lg md:text-xl font-medium">
           Your trust, our responsibility
          </p>

          {/* Quick Trust Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 max-w-xl mx-auto lg:mx-0">
            <div className="flex items-center gap-2 bg-white/5 p-2 rounded-lg border border-white/10">
              <Truck className="w-5 h-5 text-yellow-400 shrink-0" />
              <span className="text-xs font-semibold">Fast delivery</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 p-2 rounded-lg border border-white/10">
              <ShieldCheck className="w-5 h-5 text-yellow-400 shrink-0" />
              <span className="text-xs font-semibold">Secure Payment</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 p-2 rounded-lg border border-white/10">
              <CheckCircle className="w-5 h-5 text-yellow-400 shrink-0" />
              <span className="text-xs font-semibold">100% Authentic</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 p-2 rounded-lg border border-white/10">
              <Headphones className="w-5 h-5 text-yellow-400 shrink-0" />
              <span className="text-xs font-semibold">24/7 Support</span>
            </div>
          </div>

          <div className="pt-4">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-3 rounded-md flex items-center gap-2 mx-auto lg:mx-0 transition-all shadow-lg hover:scale-105">
              SHOP NOW <ChevronRight className="w-4 h-4 stroke-[3]" />
            </button>
          </div>
        </div>
       <div className="relative rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
    <img
      src="https://i.ibb.co.com/gQQbWYp/Chat-GPT-Image-Jul-10-2026-11-34-56-AM.png"
      alt="Premium Headphone"
      className="w-[500px] h-auto object-contain"
    />
  </div>
      
      </div>

      {/* 2. FLOATING CATEGORIES ROW */}
      <div className="relative max-w-7xl mx-auto px-4 lg:px-8 -mb-12 z-20">
        <div className="bg-white rounded-xl shadow-2xl p-4 md:p-6 text-black grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-4 items-center justify-center border border-gray-100">
          {[
            { name: 'Smartphones', icon: Smartphone },
            { name: 'Laptops', icon: Laptop },
            { name: 'Headphones', icon: Headphones },
            { name: 'Smart Watch', icon: Watch },
            { name: 'Speakers', icon: Volume2 },
            { name: 'Cameras', icon: Camera },
            { name: 'Accessories', icon: MousePointer },
            { name: 'Home Appliance', icon: Tv },
          ].map((cat, index) => (
            <div key={index} className="flex flex-col items-center justify-center text-center group cursor-pointer p-2 rounded-lg hover:bg-gray-50 transition">
              <div className="w-12 h-12 flex items-center justify-center text-blue-900 bg-gray-100 rounded-lg mb-2 group-hover:bg-blue-900 group-hover:text-white transition duration-300">
                <cat.icon className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-gray-700 group-hover:text-blue-900 transition break-words max-w-full">
                {cat.name}
              </span>
            </div>
          ))}
          
          {/* View All Option */}
          <div className="flex flex-col items-center justify-center text-center group cursor-pointer p-2 rounded-lg hover:bg-gray-50 transition">
            <div className="w-12 h-12 flex items-center justify-center text-white bg-blue-600 rounded-lg mb-2 group-hover:bg-blue-700 transition duration-300">
              <Grid className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold text-blue-600 group-hover:text-blue-800 transition">
              View All
            </span>
          </div>
        </div>
      </div>

      {/* 3. VALUE PROPOSITION FOOTER BAR */}
      <div className="bg-[#00246b] border-t border-white/5 pt-20 pb-6 md:pt-24 md:pb-8">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid grid-cols-2 md:grid-cols-5 gap-6 text-center md:text-left">
          
          <div className="flex flex-col md:flex-row items-center gap-3 justify-center md:justify-start">
            <div className="p-3 bg-white/5 rounded-full text-yellow-400">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm uppercase">Free Delivery</h4>
              <p className="text-xs text-gray-400">On order over ৳ 999</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-3 justify-center md:justify-start">
            <div className="p-3 bg-white/5 rounded-full text-yellow-400">
              <RotateCcw className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm uppercase">Easy Return</h4>
              <p className="text-xs text-gray-400">7 days return policy</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-3 justify-center md:justify-start">
            <div className="p-3 bg-white/5 rounded-full text-yellow-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm uppercase">Secure Payment</h4>
              <p className="text-xs text-gray-400">100% secure payment</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-3 justify-center md:justify-start">
            <div className="p-3 bg-white/5 rounded-full text-yellow-400">
              <Tag className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm uppercase">Best Price</h4>
              <p className="text-xs text-gray-400">Best price guaranteed</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-3 justify-center md:justify-start col-span-2 md:col-span-1">
            <div className="p-3 bg-white/5 rounded-full text-yellow-400">
              <Headphones className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm uppercase">24/7 Support</h4>
              <p className="text-xs text-gray-400">Dedicated support</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
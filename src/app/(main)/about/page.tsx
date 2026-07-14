import React from 'react';
import Image from 'next/image';
import { ShoppingBag, ShieldCheck, Truck, Users } from 'lucide-react';

export default function EcommerceAbout() {
  return (
    <section className="bg-[#FAF9F6] py-16 md:py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left Content Column */}
        <div className="space-y-6">
          {/* Subtitle Badge */}
          <div className="inline-flex items-center gap-2">
            <span className="w-2 h-2 bg-[#D4AF37] rounded-full"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-[#8C8C8C]">
              Our Story & Philosophy
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1A1A1A] tracking-tight leading-tight">
            Crafting Better Lifestyle <br />
            & Modern Shopping
          </h2>

          {/* Narrative / Brand Promise */}
          <div className="space-y-4 text-slate-600 leading-relaxed text-sm md:text-base">
            <p>
              আমরা শুধু পণ্য বিক্রি করি না, বরং আপনার দৈনন্দিন জীবনকে আরও সহজ এবং সুন্দর করতে 
              সেরা মানের লাইফস্টাইল প্রোডাক্ট নিয়ে কাজ করি। প্রতিটি প্রোডাক্ট অত্যন্ত সূক্ষ্মভাবে যাচাই করে 
              সরাসরি উৎপাদনকারীদের কাছ থেকে আপনার দরজায় পৌঁছে দেওয়াই আমাদের লক্ষ্য।
            </p>
            <p>
              নির্ভরযোগ্য ডেলিভারি, প্রিমিয়াম প্যাকেজিং এবং ২৪/৭ ডেডিকেটেড কাস্টমার সাপোর্ট নিয়ে 
              আমরা কাজ করে যাচ্ছি—যাতে প্রতিটি অর্ডারে আপনি পান শতভাগ সন্তুষ্টি।
            </p>
          </div>

          {/* Key Value Highlights (Icon Row) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#EFEFEF] rounded text-[#1A1A1A]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-sm font-semibold text-[#1A1A1A]">100% Original Products</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#EFEFEF] rounded text-[#1A1A1A]">
                <Truck className="w-5 h-5" />
              </div>
              <span className="text-sm font-semibold text-[#1A1A1A]">Super Fast Delivery</span>
            </div>
          </div>

          {/* E-commerce Stats Row */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200">
            <div>
              <div className="text-3xl md:text-4xl font-black text-[#1A1A1A]">
                15K+
              </div>
              <div className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold mt-1">
                Happy Customers
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-black text-[#1A1A1A]">
                200+
              </div>
              <div className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold mt-1">
                Premium Brands
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-black text-[#1A1A1A]">
                99.8%
              </div>
              <div className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold mt-1">
                Positive Feedback
              </div>
            </div>
          </div>
        </div>

        {/* Right Image Column with Custom Badges */}
        <div className="relative w-full max-w-xl mx-auto lg:max-w-none">
          {/* Top-Right Decorative Yellow Line */}
          <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-[#D4AF37] rounded-tr-md hidden sm:block z-0"></div>
          
          {/* Main Showcase Image */}
          <div className="relative z-10 overflow-hidden rounded-lg shadow-2xl bg-slate-100 aspect-[4/3] sm:aspect-[1.3/1]">
            <Image
              src="https://images.pexels.com/photos/3965548/pexels-photo-3965548.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Premium E-commerce Packaging and Shopping Experience"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Overlapping Bottom-Left Floating Dark Badge */}
          <div className="absolute -bottom-6 left-6 md:-left-6 bg-[#1A1A1A] p-5 rounded shadow-xl text-white z-20 flex items-center justify-center gap-4">
            <div className="bg-[#D4AF37] p-2 rounded-full text-[#1A1A1A]">
              <ShoppingBag className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-slate-400 font-medium">Verified Store</p>
              <h5 className="text-sm font-bold text-white">Guaranteed Trust</h5>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
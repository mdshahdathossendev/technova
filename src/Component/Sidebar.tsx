"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Rocket,
  LayoutDashboard, 
  Archive, 
  ShoppingCart, 
  User,
  Menu,
  X
} from 'lucide-react';
import { authClient } from '@/lib/auth-client';

export default function Sidebar() {
  const { data: session } = authClient.useSession();
  const pathname = usePathname(); 
  
  // শুধুমাত্র মোবাইল স্ক্রিনের মেনু ওপেন/ক্লোজ স্টেট
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/desbord' },
    { name: 'Add Product', icon: Archive, path: '/desbord/additems' },
    { name: 'Manage Product', icon: ShoppingCart, path: '/desbord/mangeprodect'},
  ];

  return (
    <>
      {/* ─── ১. মোবাইল মেনু বাটন (মেনু বন্ধ থাকলে এটি স্ক্রিনের কোণায় ভাসবে) ─── */}
      <button 
        onClick={() => setIsOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-40 p-2.5 rounded-xl bg-[#001b4e] text-[#f4ba13] border border-gray-800 shadow-lg active:scale-95 transition-all cursor-pointer"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* ─── ২. মোবাইল ব্যাকড্রপ ওভারলে (মেনু খুললে পেছনের কন্টেন্ট আবছা কালো করার জন্য) ─── */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/60 z-50 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* ─── ৩. মূল সাইডবার ─── */}
      <aside className={`
        fixed top-0 bottom-0 left-0 bg-[#001b4e] text-gray-400 p-5 flex flex-col justify-between font-sans border-r border-gray-800 min-h-screen
        transition-transform duration-300 ease-in-out w-64
        
        /* মোবাইলের লজিক: 
           - z-50 দেওয়া হয়েছে যাতে পেজের অন্য সকল এলিমেন্টের উপরে এটি ভাসমান থাকে।
           - বন্ধ থাকলে স্ক্রিনের বামে একদম লুকিয়ে থাকবে (-translate-x-full)।
        */
        z-50
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
        
        /* ডেস্কটপের লজিক: ডেস্কটপ স্ক্রিনে এটি যথারীতি বাম পাশে ফিক্সড থাকবে */
        lg:translate-x-0
      `}>
        
        {/* ─── TOP SECTION: LOGO & LINKS ─── */}
        <div>
          {/* Brand Logo & Close Button */}
          <div className="mb-8 px-3 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="bg-[#f4ba13] p-1.5 rounded-lg text-[#001b4e] flex items-center justify-center shadow-sm">
                <Rocket className="w-5 h-5 fill-current" />
              </div>
              <h1 className="text-xl font-black text-white tracking-wider uppercase">
                TECHNOVA
              </h1>
            </div>

            {/* মোবাইল ক্লোজ (X) বাটন */}
            <button 
              onClick={() => setIsOpen(false)}
              className="lg:hidden p-1.5 rounded-lg hover:bg-[#002361] text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Routes */}
          <nav className="space-y-1.5">
            {menuItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = pathname === item.path;

              return (
                <Link
                  key={item.name}
                  href={item.path}
                  onClick={() => setIsOpen(false)} // লিংকে ক্লিক করলে মেনু অটো বন্ধ হবে
                  className={`flex items-center gap-3.5 px-4 py-3 rounded-xl text-xs font-bold transition-all duration-200 ${
                    isActive 
                      ? 'bg-[#002d72] text-[#f4ba13]' 
                      : 'hover:bg-[#002361] hover:text-white text-gray-400/80' 
                  }`}
                >
                  <IconComponent 
                    className={`w-4 h-4 stroke-[2] ${
                      isActive ? 'text-[#f4ba13]' : 'text-gray-400/60'
                    }`} 
                  />
                  <span className="tracking-wide">{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* ─── BOTTOM SECTION: BUTTON & PROFILE ─── */}
        <div className="space-y-4 pt-4 border-t border-gray-800/40">
          
          {/* Logout Action Button */}
          <button
            onClick={async () => {
              await authClient.signOut();
            }}
            className="bg-yellow-600 w-full hover:bg-red-700 text-white font-black text-xs px-5 py-3 rounded-xl flex items-center gap-2 transition-all shadow-sm active:scale-[0.98] cursor-pointer"
          >
            <User size={14} />
            <span className='text-center w-full'>Logout</span>
          </button>

          {/* User Profile Footer Card */}
          <div className="bg-[#002361]/40 p-3 rounded-xl border border-gray-800/20 flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gray-600 overflow-hidden shadow-inner flex-shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={session?.user?.image || '/default-avatar.png'} 
                alt="Admin Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="min-w-0">
              <h4 className="text-xs font-black text-white truncate leading-none">
                {session?.user?.name || 'Admin Console'}
              </h4>
              <p className="text-[10px] text-gray-500 font-medium truncate mt-1">TechNova Admin</p>
            </div>
          </div>

        </div>

      </aside>
    </>
  );
}
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
  
  // মোবাইল স্ক্রিনে সাইডবার ওপেন/ক্লোজ করার স্টেট
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/desbord' },
    { name: 'Add Product', icon: Archive, path: '/desbord/additems' },
    { name: 'Manage Product', icon: ShoppingCart, path: '/desbord/mangeprodect'},
  ];

  return (
    <>
      {/* ─── MOBILE TOGGLE BUTTON (মোবাইলের জন্য টপ-বার ও হ্যামবার্গার বাটন) ─── */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-[#001b4e] border-b border-gray-800 flex items-center justify-between px-4 z-50">
        <div className="flex items-center gap-2">
          <div className="bg-[#f4ba13] p-1.5 rounded-lg text-[#001b4e] flex items-center justify-center">
            <Rocket className="w-4 h-4 fill-current" />
          </div>
          <h1 className="text-sm font-black text-white tracking-wider uppercase">
            TECHNOVA
          </h1>
        </div>
        
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-gray-400 hover:text-white transition-colors focus:outline-none"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* ─── MOBILE BACKDROP OVERLAY (মোবাইলে সাইডবার খুললে পেছনের আবছা কালো ব্যাকগ্রাউন্ড) ─── */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* ─── SIDEBAR COMPONENT ─── */}
      <aside className={`
        fixed z-40 w-64 min-h-screen bg-[#001b4e] text-gray-400 p-5 flex flex-col justify-between font-sans border-r border-gray-800
        transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
        lg:translate-x-0 lg:fixed top-0 bottom-0 left-0
        ${/* মোবাইলে টপ-বারের কারণে প্যাডিং অ্যাডজাস্টমেন্ট */ ''}
        pt-20 lg:pt-5
      `}>
        
        {/* ─── TOP SECTION: LOGO & LINKS ─── */}
        <div>
          {/* Brand Logo with Rocket Icon (ডেস্কটপে দৃশ্যমান) */}
          <div className="hidden lg:flex mb-8 px-3 items-center gap-2.5">
            <div className="bg-[#f4ba13] p-1.5 rounded-lg text-[#001b4e] flex items-center justify-center shadow-sm">
              <Rocket className="w-5 h-5 fill-current" />
            </div>
            <h1 className="text-xl font-black text-white tracking-wider uppercase">
              TECHNOVA
            </h1>
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
                  onClick={() => setIsOpen(false)} // মোবাইলে লিংকে ক্লিক করলে সাইডবার বন্ধ হবে
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
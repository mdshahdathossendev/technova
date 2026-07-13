"use client";

import React, { useState } from 'react';
import { 
  Search, 
  Bell, 
  HelpCircle, 
  Grid, 
  Menu 
} from 'lucide-react';
import { authClient } from '@/lib/auth-client';

export default function DesNavber() {
   const { data: session } = authClient.useSession();
      console.log('Session data:', session?.user); 
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="w-full h-16 bg-white border-b border-gray-100 px-4 sm:px-6 flex items-center justify-between font-sans sticky top-0 z-50">
      
      {/* Left Side: Search Bar Section */}
      <div className="flex-1 max-w-xl pr-4">
        <div className="relative flex items-center">
          <Search className="w-4 h-4 text-gray-400 absolute left-3.5 pointer-events-none" />
          <input
            type="text"
            placeholder="Search orders, customers, or stock..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#f1f5f9]/60 border border-transparent rounded-xl pl-10 pr-4 py-2 text-xs text-gray-700 placeholder-gray-400 outline-none transition focus:bg-white focus:border-gray-200"
          />
        </div>
      </div>

      {/* Right Side: Action Icons & Profile Info */}
      <div className="flex items-center gap-1 sm:gap-3.5">
        
        {/* Action Utility Buttons (Hidden on extra small screens) */}
        <div className="flex items-center gap-1 sm:gap-2">
          
          {/* Notification Icon with Red Dot */}
          <button 
            type="button" 
            className="p-2 text-gray-600 hover:bg-gray-50 rounded-xl relative transition"
            title="Notifications"
          >
            <Bell className="w-4.5 h-4.5 stroke-[1.8]" />
            <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-red-500 rounded-full border border-white" />
          </button>

          {/* Help Icon */}
          <button 
            type="button" 
            className="p-2 text-gray-600 hover:bg-gray-50 rounded-xl transition hidden sm:inline-flex"
            title="Help Support"
          >
            <HelpCircle className="w-4.5 h-4.5 stroke-[1.8]" />
          </button>

          {/* Apps / Grid Icon */}
          <button 
            type="button" 
            className="p-2 text-gray-600 hover:bg-gray-50 rounded-xl transition hidden sm:inline-flex"
            title="Apps"
          >
            <Grid className="w-4.5 h-4.5 stroke-[1.8]" />
          </button>
          
        </div>

        {/* Divider Line (Vertical) */}
        <div className="w-px h-6 bg-gray-200 mx-1 hidden sm:block" />

        {/* Brand Profile Section */}
        <div className="flex items-center gap-2.5 pl-1 sm:pl-2">
          <span className="text-xs font-black text-[#001b4e] tracking-wide uppercase hidden xs:block">
            TECHNOVA
          </span>
          
          {/* Circular User Avatar Image */}
          <div className="w-8 h-8 rounded-full bg-[#e2e8f0] border border-gray-100 flex items-center justify-center overflow-hidden cursor-pointer shadow-sm hover:ring-2 hover:ring-gray-200 transition">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={session?.user?.image || '/default-avatar.png'}
              alt="User Avatar" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>

    </header>
  );
}
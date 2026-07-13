"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Rocket,
  LayoutDashboard, 
  Archive, 
  ShoppingCart, 
  Users, 
  BarChart3, 
  Settings,
  FileText,
  User
} from 'lucide-react';
import { authClient } from '@/lib/auth-client';

export default function Sidebar() {
  const { data: session } = authClient.useSession();
  const pathname = usePathname(); 
  const menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/desbord' },
    { name: 'Add Product', icon: Archive, path: '/desbord/additems' },
    { name: 'Mange Product', icon: ShoppingCart, path: '/desbord/mangeprodect'},
  ];

  return (
    <aside className="fixed w-64 min-h-screen bg-[#001b4e] text-gray-400 p-5 flex flex-col justify-between font-sans border-r border-gray-800">
      
      {/* ─── TOP SECTION: LOGO & LINKS ─── */}
      <div>
        {/* Brand Logo with Rocket Icon */}
        <div className="mb-8 px-3 flex items-center gap-2.5">
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
            
            // রিয়েল-টাইম ইউআরএল পাথের সাথে মিললে বাটনটি অ্যাক্টিভ হবে
            const isActive = pathname === item.path;

            return (
              <Link
                key={item.name}
                href={item.path}
                className={`flex items-center gap-3.5 px-4 py-3 rounded-xl text-xs font-bold transition-all duration-200 ${
                  isActive 
                    ? 'bg-[#002d72] text-[#f4ba13]' // Active state
                    : 'hover:bg-[#002361] hover:text-white text-gray-400/80' // Normal state
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
        
        {/* Yellow "New Report" Action Button */}
        <button
            onClick={async () => {
              await authClient.signOut();
            }}
            className="bg-yellow-600 w-full  hover:bg-red-700 text-white font-black text-xs px-5 py-3 rounded-xl flex items-center gap-2 transition-all shadow-sm active:scale-[0.98]"
          >
            <User size={14} />
            <span className='text-center'>Logout</span>
          </button>

        {/* User Profile Footer Card */}
        <div className="bg-[#002361]/40 p-3 rounded-xl border border-gray-800/20 flex items-center gap-3">
          {/* Avatar Image */}
          <div className="w-9 h-9 rounded-lg bg-gray-600 overflow-hidden shadow-inner flex-shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={session?.user?.image || '/default-avatar.png'} 
              alt="Admin Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          {/* Name & Role Text */}
          <div className="min-w-0">
            <h4 className="text-xs font-black text-white truncate leading-none">{session?.user?.name || 'Admin Console'}</h4>
            <p className="text-[10px] text-gray-500 font-medium truncate mt-1">TechNova Admin</p>
          </div>
        </div>

      </div>

    </aside>
  );
}
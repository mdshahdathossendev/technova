"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // বর্তমানে কোন পেজে আছেন তা ট্র্যাক করার জন্য
import { 
  LayoutDashboard, 
  Archive, 
  ShoppingCart, 
  Users, 
  BarChart3, 
  Settings 
} from 'lucide-react';

export default function Sidebar() {
  const pathname = usePathname(); 
  const menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
    { name: 'Inventory', icon: Archive, path: '/inventory' },
    { name: 'Orders', icon: ShoppingCart, path: '/orders' },
    { name: 'Customers', icon: Users, path: '/customers' },
    { name: 'Analytics', icon: BarChart3, path: '/analytics' },
    { name: 'Settings', icon: Settings, path: '/settings' },
  ];

  return (
    <aside className="w-64 min-h-screen bg-[#001b4e] text-gray-400 p-5 flex flex-col font-sans border-r border-gray-800">
      
      {/* Brand Logo / Title */}
      <div className="mb-8 px-3">
        <Link href="/dashboard" className="text-2xl font-black text-white tracking-wider uppercase block">
          TECHNOVA
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 space-y-1.5">
        {menuItems.map((item) => {
          const IconComponent = item.icon;
          
          // কারেন্ট ইউআরএল (pathname) যদি এই মেনুর পাথের সাথে মিলে যায়, তবে এটি অ্যাক্টিভ হবে
          const isActive = pathname === item.path;

          return (
            <Link
              key={item.name}
              href={item.path}
              className={`flex items-center gap-3.5 px-4 py-3 rounded-xl text-xs font-bold transition-all duration-200 ${
                isActive 
                  ? 'bg-[#002d72] text-[#f4ba13]' // Active State Styling
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

    </aside>
  );
}
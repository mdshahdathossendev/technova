'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; 
import { Search, Heart, ShoppingCart, User, Menu, X } from 'lucide-react';
import { authClient } from '@/lib/auth-client';

const Navbar: React.FC = () => {
  const { data: session } = authClient.useSession();
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const pathname = usePathname(); 

  
  const navLinks = [
    { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "About", href: "/about" },
  ...(session ? [{ name: "Dashboard", href: "/desbord" }] : []),
  ];
  const [cart, setCart] = useState<any[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");

    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur-md border-b border-slate-100/80 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* ================= BRAND LOGO ================= */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-black text-[#001D4A] tracking-tight">
              TACHNOVA
            </Link>
          </div>

          {/* ================= DESKTOP NAVIGATION ================= */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm tracking-wide transition-colors duration-200 relative pb-2 ${
                    isActive
                      ? 'font-black text-[#001D4A] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#FFB800]'
                      : 'font-bold text-slate-500 hover:text-[#001D4A]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* ================= DESKTOP SEARCH BAR ================= */}
          <div className="hidden md:flex flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search electronics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-50 text-slate-800 placeholder-slate-400 font-medium text-xs px-5 py-3 rounded-xl pr-10 border border-transparent focus:outline-none focus:bg-white focus:border-slate-200 transition-all"
              />
              <Search size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            </div>
          </div>

          {/* ================= ACTION UTILITIES ================= */}
          <div className="hidden sm:flex items-center gap-5">
            {/* Wishlist */}
            <button type="button" className="text-slate-700 hover:text-red-500 transition-colors p-1" aria-label="Wishlist">
              <Heart size={20} />
            </button>

            {/* Cart with dynamic Amber Badge */}
           <Link href="/addtocard">
            <button type="button" className="text-slate-700 hover:text-[#001D4A] transition-colors p-1 relative" aria-label="Cart">
              <ShoppingCart size={20} />
              <span className="absolute -top-1.5 -right-2 bg-[#FFB800] text-[#001D4A] text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center shadow-sm">
                {cart.length || 0}
              </span>
            </button>
           </Link>


          
          
           {session ? (
  <button
    onClick={async () => {
      await authClient.signOut();
    }}
    className="bg-red-600 hover:bg-red-700 text-white font-black text-xs px-5 py-3 rounded-xl flex items-center gap-2 transition-all shadow-sm active:scale-[0.98]"
  >
    <User size={14} />
    <span>Logout</span>
  </button>
) : (
  <Link
    href="/sinin"
    className="bg-[#001D4A] hover:bg-[#001433] text-white font-black text-xs px-5 py-3 rounded-xl flex items-center gap-2 transition-all shadow-sm active:scale-[0.98]"
  >
    <User size={14} fill="currentColor" />
    <span>Login</span>
  </Link>
)}
          </div>

          {/* ================= MOBILE HAMBURGER TOGGLE ================= */}
          <div className="flex lg:hidden items-center gap-4">
            {/* Mobile View Cart Quick Link */}
           <Link href="/addtocard">
            <button type="button" className="sm:hidden text-slate-700 relative p-1">
              <ShoppingCart size={20} />
              <span className="absolute -top-1 -right-1.5 bg-[#FFB800] text-[#001D4A] text-[9px] font-black w-3.5 h-3.5 rounded-full flex items-center justify-center">
                {cart.length || 0}
              </span>
            </button>
           </Link>

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#001D4A] p-1.5 rounded-xl hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </div>

      {/* ================= MOBILE DRAWER IMPLEMENTATION ================= */}
      {isOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white/95 backdrop-blur-lg absolute top-20 left-0 w-full shadow-xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="px-4 pt-4 pb-6 space-y-4">
            
            {/* Search bar inside mobile drawer */}
            <div className="relative w-full md:hidden">
              <input
                type="text"
                placeholder="Search electronics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-50 text-slate-800 placeholder-slate-400 font-medium text-xs px-4 py-3 rounded-xl pr-10"
              />
              <Search size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" />
            </div>

            {/* Menu Navigation Links */}
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)} 
                    className={`px-3 py-3 rounded-xl text-sm transition-colors ${
                      isActive
                        ? 'font-black bg-amber-50 text-amber-600'
                        : 'font-bold text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              
              {/* Mobile Wishlist Quick Link */}
              <Link 
                href="/wishlist" 
                onClick={() => setIsOpen(false)}
                className="sm:hidden px-3 py-3 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50 flex items-center gap-2"
              >
                <Heart size={16} /> Wishlist
              </Link>
            </div>

            {/* Mobile Actions Container */}
          <div className="pt-2 sm:hidden border-t border-slate-100">
  {session ? (
    <button
      onClick={async () => {
        await authClient.signOut();
        setIsOpen(false);
      }}
      className="w-full bg-red-600 hover:bg-red-700 text-white font-black text-xs py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all"
    >
      <User size={14} />
      <span>Logout</span>
    </button>
  ) : (
    <Link
      href="/sinin"
      onClick={() => setIsOpen(false)}
      className="w-full bg-[#001D4A] hover:bg-[#001433] text-white font-black text-xs py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all"
    >
      <User size={14} fill="currentColor" />
      <span>Login</span>
    </Link>
  )}
</div>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
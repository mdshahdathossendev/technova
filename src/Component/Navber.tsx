'use client'
import React, { useState } from 'react';

const Navber: React.FC = () => {
   const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="w-full bg-[#001c44] text-white font-sans selection:bg-amber-500">
      {/* --- Top Row --- */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4 border-b border-slate-800">
        
        {/* Brand Logo */}
        <div className="text-2xl font-black tracking-wider text-[#f4c444] cursor-pointer">
          TACHNOVA
        </div>

        {/* Search Bar */}
        <form className="flex w-full max-w-2xl items-center bg-white rounded overflow-hidden">
          <input
            type="text"
            placeholder="Search for products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 text-slate-800 focus:outline-none text-sm placeholder-slate-400"
          />
          <button 
            type="submit" 
            className="bg-[#ffb800] text-[#001c44] hover:bg-[#e0a200] transition px-5 py-2.5 flex items-center justify-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.603 10.603Z" />
            </svg>
          </button>
        </form>

        {/* Right Side Utilities */}
        <div className="flex items-center gap-6 text-xs font-semibold tracking-wide text-slate-300">
        
          {/* Login / Register */}
          <button className="flex  items-center gap-1 hover:text-white transition">
            <span>LOGIN / REGISTER</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
          </button>

          {/* Cart */}
          <button className="flex  items-center gap-1 hover:text-white transition relative group">
            <span className="flex items-center gap-1">
              CART
              <span className="absolute -top-1 -right-2 bg-[#ffb800] text-[#001c44] font-black rounded-full text-[10px] w-4 h-4 flex items-center justify-center">
                0
              </span>
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zs" />
            </svg>
          </button>

        </div>
      </div>

      {/* --- Bottom Row --- */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-4 text-sm font-medium">
        
        {/* Navigation Links */}
        <nav className="flex items-center gap-6">
          <a href="/" className="hover:text-[#f4c444] transition text-slate-300">Home</a>
          <a href="#shop" className="hover:text-[#f4c444] ">Shop</a>
          <a href="#new-arrivals" className="hover:text-[#f4c444] transition text-slate-300">About</a>
        </nav>

        {/* Promo Message */}
        <div className="flex items-center gap-1.5 text-[#f4c444] font-bold tracking-wide animate-pulse">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
            <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clipRule="evenodd" />
          </svg>
          <span>Flash Sale: 40% Off</span>
        </div>

      </div>
    </header>
    );
};

export default Navber;
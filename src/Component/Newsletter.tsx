'use client';

import React, { useState } from 'react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Subscribed email:', email);
    setEmail('');
  };

  return (
    <div className="relative w-full bg-[#FFB800] py-12 md:py-16 overflow-hidden font-sans">
      
      {/* Decorative Dot Matrix Patterns (Left & Right Sides) */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 opacity-20 pointer-events-none hidden sm:grid grid-cols-3 gap-2">
        {[...Array(15)].map((_, i) => (
          <div key={i} className="w-1 h-1 bg-black rounded-full" />
        ))}
      </div>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-20 pointer-events-none hidden sm:grid grid-cols-3 gap-2">
        {[...Array(15)].map((_, i) => (
          <div key={i} className="w-1 h-1 bg-black rounded-full" />
        ))}
      </div>

      {/* Main Container */}
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        
        {/* Dark Blue Inner Banner */}
        <div className="bg-[#001D4A] rounded-[2rem] p-8 md:p-12 lg:p-16 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 relative">
          
          {/* Left Text Block */}
          <div className="space-y-4 max-w-xl text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-black text-white tracking-tight leading-tight">
              Join the Tech<br className="hidden sm:inline" /> Revolution
            </h2>
            <p className="text-sm md:text-base font-normal text-slate-300 leading-relaxed">
              Be the first to know about new arrivals, exclusive tech deals, and industry news delivered straight to your inbox.
            </p>
          </div>

          {/* Right Input Form Block */}
          <form 
            onSubmit={handleSubscribe}
            className="w-full lg:max-w-md flex flex-col sm:flex-row items-center gap-3 sm:gap-4"
          >
            <div className="w-full relative">
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white text-slate-800 placeholder-slate-400 font-medium text-sm md:text-base px-5 py-4 rounded-xl border border-transparent focus:outline-none focus:ring-2 focus:ring-[#FFB800] shadow-inner transition-all"
              />
            </div>
            
            <button
              type="submit"
              className="w-full sm:w-auto bg-[#FFB800] hover:bg-[#E5A500] text-[#001D4A] font-black text-xs md:text-sm uppercase tracking-wider px-8 py-4 rounded-xl shadow-md transition-all whitespace-nowrap active:scale-[0.98]"
            >
              Subscribe Now
            </button>
          </form>

        </div>
      </div>
    </div>
  );
};

export default Newsletter;
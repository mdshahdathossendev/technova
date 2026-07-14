'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Globe, Mail, Phone } from 'lucide-react';

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault();
    setNewsletterEmail('');
  };

  
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/shop' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/conact' },
  ];

  
  const supportLinks = [
    { name: 'Privacy Policy', href: '/polacy' },
    { name: 'Terms of Service', href: '/trms' },
    { name: 'Shipping Info', href: '/shipping' },
    { name: 'Returns & Refunds', href: '/retrun' },
    { name: 'FAQs', href: '/faq' },
  ];

  return (
    <footer className="w-full bg-[#001D4A] text-slate-300 font-sans py-16 border-t border-blue-950">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Main Grid Structure */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-8">
          
          {/* ================= COLUMN 1: BRAND & MISSION ================= */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-black text-[#FFB800] tracking-tight">
              TACHNOVA
            </h2>
            <p className="text-sm font-medium text-slate-300 leading-relaxed max-w-xs">
              Your premier destination for authentic high-tech electronics and gadgets in Bangladesh. Experience performance with every click.
            </p>
            
            {/* Contact & Social Action Circles */}
            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://technova-pied-kappa.vercel.app" 
                className="w-10 h-10 rounded-xl border border-slate-700/60 flex items-center justify-center text-slate-300 hover:text-[#FFB800] hover:border-[#FFB800] transition-colors"
                aria-label="Website"
              >
                <Globe size={18} />
              </a>
              <a 
                href="mailto:hmdshahdat501@gmail.com" 
                className="w-10 h-10 rounded-xl border border-slate-700/60 flex items-center justify-center text-slate-300 hover:text-[#FFB800] hover:border-[#FFB800] transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <a 
                href="tel:+8801937008534" 
                className="w-10 h-10 rounded-xl border border-slate-700/60 flex items-center justify-center text-slate-300 hover:text-[#FFB800] hover:border-[#FFB800] transition-colors"
                aria-label="Phone"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* ================= COLUMN 2: QUICK LINKS ================= */}
          <div className="space-y-4">
            <h3 className="text-xs font-black text-white uppercase tracking-widest">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm font-bold text-slate-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= COLUMN 3: SUPPORT ================= */}
          <div className="space-y-4">
            <h3 className="text-xs font-black text-white uppercase tracking-widest">
              Support
            </h3>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm font-bold text-slate-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= COLUMN 4: NEWSLETTER INLINE FROM IMAGE ================= */}
          <div className="space-y-4">
            <h3 className="text-xs font-black text-white uppercase tracking-widest">
              Newsletter
            </h3>
            <p className="text-xs font-medium text-slate-400 leading-relaxed">
              Subscribe to get latest updates, special offers and tech news.
            </p>
            
            <form onSubmit={handleJoin} className="space-y-3 pt-2">
              <input
                type="email"
                required
                placeholder="Email Address"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="w-full bg-[#001433] text-slate-200 placeholder-slate-500 font-medium text-xs px-4 py-3.5 rounded-lg border border-slate-800 focus:outline-none focus:border-slate-600 transition-colors"
              />
              <Link href = '/sinin'>
              <button
                type="submit"
                className="w-full bg-[#FFB800] hover:bg-[#E5A500] text-[#001D4A] font-black text-xs uppercase tracking-wider py-3.5 rounded-lg transition-colors shadow-md active:scale-[0.99]"
              >
                Join Now
              </button>
              </Link>
            </form>
          </div>

        </div>

      </div>
    </footer>
  );
}
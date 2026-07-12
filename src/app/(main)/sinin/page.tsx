"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Eye, EyeOff, Shield, Gauge, LogIn } from 'lucide-react';
import { authClient } from '@/lib/auth-client';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const { data, error } = await authClient.signIn.email({
    email: email,
    password: password,
    callbackURL: "/",
});
    console.log("Sign In Response:", data, error);
  }
  return (
    
    <div className="flex min-h-screen w-full items-center justify-center bg-gray-100 p-4 sm:p-8 md:p-12 font-sans text-gray-900">
      
      <div className="flex w-full max-w-5xl min-h-[600px] bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200/50">
        
        {/* LEFT SIDE: BRANDING BANNER (Hidden on mobile) */}
        <div className="relative hidden w-1/2 flex-col justify-between overflow-hidden p-8 text-white lg:flex">
          
          {/* Next.js Optimized Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000"
              alt="Tachnova Background"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#001b4e]/90 to-[#000a1e]/95 mix-blend-multiply" />
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:16px_16px]" />
          </div>

          <div className="z-10"></div>

          {/* Main Content */}
          <div className="relative z-10 mx-auto max-w-sm text-center space-y-4">
            <h1 className="text-3xl font-black tracking-wider text-[#f4ba13]">
              TACHNOVA
            </h1>
            <p className="text-gray-300 text-xs leading-relaxed">
              Experience the pinnacle of high-tech commerce. Secure, fast, and built for performance.
            </p>

            {/* Feature Badges */}
            <div className="flex items-center justify-center gap-3 pt-2">
              <div className="flex flex-col items-center justify-center w-24 p-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <Shield className="w-5 h-5 text-[#f4ba13] mb-1" />
                <span className="text-[10px] font-semibold text-gray-200">Secure Data</span>
              </div>
              <div className="flex flex-col items-center justify-center w-24 p-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <Gauge className="w-5 h-5 text-[#f4ba13] mb-1" />
                <span className="text-[10px] font-semibold text-gray-200">Blazing Fast</span>
              </div>
            </div>
          </div>

          <div className="z-10"></div>
        </div>

        {/* RIGHT SIDE: LOGIN FORM */}
        <div className="flex w-full items-center justify-center p-6 sm:p-10 lg:w-1/2 bg-white">
          <div className="w-full max-w-sm space-y-6">
            
            {/* Header */}
            <div className="space-y-1">
              <h2 className="text-2xl font-bold tracking-tight text-gray-800">
                Welcome Back
              </h2>
              <p className="text-xs text-gray-500">
                Please enter your details to sign in.
              </p>
            </div>

            {/* Form */}
            <form className="space-y-4" onSubmit={onSubmit}>
              
              {/* Email Field */}
              <div className="space-y-1">
                <label className="text-[11px] font-bold text-gray-700" htmlFor="email">
                  Email Address
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="name@company.com"
                  className="w-full rounded-lg border border-gray-200 bg-gray-50/50 px-3 py-2.5 text-xs outline-none transition focus:border-gray-400 focus:bg-white"
                />
              </div>

              {/* Password Field */}
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <label className="text-[11px] font-bold text-gray-700" htmlFor="password">
                    Password
                  </label>
                  <a href="#" className="text-[11px] font-bold text-[#bfa054] hover:underline">
                    Forgot Password?
                  </a>
                </div>
                <div className="relative">
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="w-full rounded-lg border border-gray-200 bg-gray-50/50 pl-3 pr-9 py-2.5 text-xs outline-none transition focus:border-gray-400 focus:bg-white"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Remember Me */}
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="remember"
                  className="h-3.5 w-3.5 rounded border-gray-300 text-[#f4ba13] focus:ring-[#f4ba13]"
                />
                <label htmlFor="remember" className="text-[11px] font-medium text-gray-600 select-none">
                  Remember for 30 days
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#f4ba13] py-2.5 text-xs font-bold text-[#001b4e] shadow-sm hover:bg-[#e0aa0f] transition-all active:scale-[0.99]"
              >
                Sign In <LogIn className="w-3.5 h-3.5 stroke-[2.5]" />
              </button>
            </form>

            {/* Divider */}
            <div className="relative flex items-center justify-center my-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <span className="relative bg-white px-2 text-[9px] font-bold uppercase tracking-wider text-gray-400">
                Or Continue With
              </span>
            </div>

            {/* OAuth Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center gap-2 rounded-lg border border-gray-200 px-3 py-2 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition">
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24">
                  <path fill="#EA4335" d="M12.24 10.285V14.4h6.887c-.648 2.41-2.519 4.114-5.137 4.114-3.466 0-6.277-2.812-6.277-6.277s2.811-6.278 6.277-6.278c1.514 0 2.89.543 3.96 1.443l3.076-3.076C18.995 1.764 15.82 1 12.24 1 6.033 1 12.24 6.033 1 12.24s5.033 11.24 11.24 11.24c5.897 0 10.867-4.247 10.867-11.24 0-.648-.057-1.286-.171-1.954H12.24z"/>
                </svg>
                Google
              </button>
              <button className="flex items-center justify-center gap-2 rounded-lg border border-gray-200 px-3 py-2 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition">
                <svg className="h-3.5 w-3.5 fill-current text-black" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-.96.04-2.13.64-2.82 1.45-.6.7-1.13 1.84-.99 2.94 1.07.08 2.16-.52 2.82-1.33z"/>
                </svg>
                Apple
              </button>
            </div>

            {/* Footer Link */}
            <p className="text-center text-xs font-medium text-gray-500">
              Don't have an account?{' '}
              <a href="/sinup" className="font-bold text-[#bfa054] hover:underline">
                Sign Up
              </a>
            </p>

          </div>
        </div>

      </div>
    </div>
  );
}
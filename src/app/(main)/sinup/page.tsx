"use client";

import React, { useState } from 'react';
import { Eye, EyeOff, Shield, Tag, User, Mail, Lock, ArrowRight, ShoppingCart, User2Icon } from 'lucide-react';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
export default function SignUpPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false);
 const onSubmit = async(e :any) => {
  e.preventDefault();

  const formData = new FormData(e.target);

  const name = formData.get("name") as string;
const email = formData.get("email") as string;
const image = formData.get("image") as string;
const password = formData.get("password") as string;
 const { data, error } = await authClient.signUp.email({
    name: name,
    email: email,  
    password: password,
    image: image
});
if(data){
  router.push('/')
}
};
const handleGoogleLogin = async () => {
 const data = await authClient.signIn.social({
    provider: "google",
  });
  if(data){
  router.push('/')
}
}
  return (
   
    <div className="flex min-h-screen w-full items-center justify-center bg-gray-100 p-4 sm:p-8 md:p-12 font-sans text-gray-900">
      
     
      <div className="flex w-full max-w-5xl min-h-[650px] bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200/50">
        
        {/* LEFT SIDE: BRANDING BANNER (Hidden on mobile) */}
        <div className="relative hidden w-1/2 flex-col justify-between bg-[#001b4e] p-8 text-white lg:flex">
          
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

          {/* Top Logo Area */}
          <div className="flex items-center gap-2 z-10">
            <div className="bg-[#f4ba13] p-1.5 rounded-lg text-[#001b4e]">
              <ShoppingCart className="w-5 h-5 stroke-[2.5]" />
            </div>
            <span className="text-lg font-black tracking-wider">TACHNOVA</span>
          </div>

          {/* Main Content */}
          <div className="relative z-10 space-y-5 my-auto">
            <h1 className="text-3xl font-black tracking-tight leading-tight">
              Join Our Tech <br /> Community
            </h1>
            <p className="text-gray-300 text-xs leading-relaxed max-w-xs">
              Experience the future of electronics with exclusive access, early deals, and a secure shopping environment tailored for enthusiasts.
            </p>

            {/* Feature Badges Cards */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="flex flex-col p-3 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-sm">
                <div className="bg-[#f4ba13] w-7 h-7 rounded-lg flex items-center justify-center text-[#001b4e] mb-2.5 shadow-md">
                  <Shield className="w-4 h-4 fill-current" />
                </div>
                <h3 className="text-xs font-bold text-white mb-1">Secure Data</h3>
                <p className="text-[10px] text-gray-400 leading-normal">Military-grade encryption for all transactions.</p>
              </div>

              <div className="flex flex-col p-3 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-sm">
                <div className="bg-[#f4ba13] w-7 h-7 rounded-lg flex items-center justify-center text-[#001b4e] mb-2.5 shadow-md">
                  <Tag className="w-4 h-4" />
                </div>
                <h3 className="text-xs font-bold text-white mb-1">Exclusive Deals</h3>
                <p className="text-[10px] text-gray-400 leading-normal">Members get up to 20% off on new arrivals.</p>
              </div>
            </div>
          </div>

          {/* Bottom Copyright Footer */}
          <div className="z-10 text-[10px] text-gray-400">
            © 2026 TACHNOVA. Shop More, Worry Less.
          </div>
        </div>

        {/* RIGHT SIDE: SIGN UP FORM */}
        <div className="flex w-full items-center justify-center p-6 sm:p-10 lg:w-1/2 bg-white">
          <div className="w-full max-w-sm space-y-5">
            
            {/* Header */}
            <div className="space-y-1">
              <h2 className="text-2xl font-bold tracking-tight text-gray-800">
                Create your account
              </h2>
              <p className="text-xs text-gray-500">
                Fill in the details below to start your journey.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={onSubmit} className="space-y-3.5">
              
              {/* Full Name Field */}
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-gray-500 flex items-center gap-1 uppercase tracking-wider" htmlFor="name">
                  <User className="w-3 h-3" /> Full Name
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  className="w-full rounded-lg border border-gray-200 bg-gray-50/30 px-3 py-2.5 text-xs outline-none transition focus:border-gray-400 focus:bg-white"
                />
              </div>

              {/* Email Field */}
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-gray-500 flex items-center gap-1 uppercase tracking-wider" htmlFor="email">
                  <Mail className="w-3 h-3" /> Email Address
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  className="w-full rounded-lg border border-gray-200 bg-gray-50/30 px-3 py-2.5 text-xs outline-none transition focus:border-gray-400 focus:bg-white"
                />
              </div>

              {/* Grid for Phone and Password */}
              <div className="grid grid-cols-2 gap-3">
                {/* Phone Number Field */}
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-gray-500 flex items-center gap-1 uppercase tracking-wider" htmlFor="phone">
                    <User2Icon className="w-3 h-3" /> Image Url
                  </label>
                  <input
                    name="image"
                    type="url"
                    placeholder="Enter Your Image"
                    className="w-full rounded-lg border border-gray-200 bg-gray-50/30 px-3 py-2.5 text-xs outline-none transition focus:border-gray-400 focus:bg-white"
                  />
                </div>

                {/* Password Field */}
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-gray-500 flex items-center gap-1 uppercase tracking-wider" htmlFor="password">
                    <Lock className="w-3 h-3" /> Password
                  </label>
                  <div className="relative">
                    <input
                      name='password'
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      className="w-full rounded-lg border border-gray-200 bg-gray-50/30 pl-3 pr-9 py-2.5 text-xs outline-none transition focus:border-gray-400 focus:bg-white"
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
              </div>

              {/* Terms and Privacy Checkbox */}
              <div className="flex items-start space-x-2 pt-1">
                <input
                  type="checkbox"
                  id="terms"
                  className="h-3.5 w-3.5 mt-0.5 rounded border-gray-300 text-[#f4ba13] focus:ring-[#f4ba13]"
                />
                <label htmlFor="terms" className="text-[11px] leading-normal font-medium text-gray-600 select-none">
                  I agree to the <a href="#" className="font-bold text-[#001b4e] hover:underline">Terms of Service</a> and <a href="#" className="font-bold text-[#001b4e] hover:underline">Privacy Policy</a>.
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-1.5 rounded-lg bg-[#f4ba13] py-2.5 text-xs font-bold text-[#001b4e] shadow-sm hover:bg-[#e0aa0f] transition-all active:scale-[0.99] pt-3"
              >
                Create Account <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </button>
            </form>

            {/* Divider */}
            <div className="relative flex items-center justify-center my-3">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <span className="relative bg-white px-2 text-[9px] font-bold uppercase tracking-wider text-gray-400">
                Or sign up with
              </span>
            </div>

            {/* OAuth Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <button onClick={handleGoogleLogin} className="flex items-center justify-center gap-2 rounded-lg border border-gray-200 px-3 py-2 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition">
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
              Already have an account?{' '}
              <a href="/sinin" className="font-bold text-[#001b4e] hover:underline">
                Sign In
              </a>
            </p>

          </div>
        </div>

      </div>
    </div>
  );
}
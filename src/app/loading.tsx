// components/OrbitSpinner.tsx
import React from 'react';

export default function OrbitSpinner() {
  return (
    <div className="flex items-center mx-auto my-auto justify-center p-8 rounded-2xl shadow-sm border border-gray-100 w-fit">
      
      <div className="relative w-32 h-32 flex items-center justify-center">
        
       
        <div className="w-5 h-5 bg-yellow-500 rounded-full shadow-sm z-10" />

        
        <div className="absolute inset-0 border-[2px] border-gray-200/80 rounded-full" />

        
        <div className="absolute inset-0 animate-spin [animation-duration:3s]">
          
          
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-emerald-400 rounded-full border border-white shadow-sm" />
          
        
          <div className="absolute top-1/4 left-3 -translate-y-1/2 w-3 h-3 bg-orange-500 rounded-full border border-white shadow-sm" />
          
          
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-sky-500 rounded-full border border-white shadow-sm" />
          
        </div>

      </div>
    </div>
  );
}
"use client";

import React, { useState } from 'react';
import { 
  PlusCircle, 
  Bold, 
  Italic, 
  Heading2, 
  Link2, 
  UploadCloud, 
  Layers, 
  FileText, 
  Calendar, 
  AlertCircle 
} from 'lucide-react';

export default function AddProductPage() {
  const [priority, setPriority] = useState('Normal');

  return (
   
    <div className="flex min-h-screen w-full items-center justify-center bg-gray-100 p-4 sm:p-8 md:p-12 font-sans text-gray-900">
      
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl p-6 sm:p-10 border border-gray-200/50">
        
        {/* Header */}
        <div className="flex items-center gap-3 border-b border-gray-100 pb-5 mb-6">
          <div className="bg-[#f4ba13]/10 p-2 rounded-xl text-[#001b4e]">
            <PlusCircle className="w-6 h-6 stroke-[2]" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-800 tracking-tight">
              Add New Product
            </h1>
            <p className="text-xs text-gray-500">
              Fill in the details below to deploy a new item to your showcase.
            </p>
          </div>
        </div>

        {/* Form */}
        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          
          {/* Product Title */}
          <div className="space-y-1.5">
            <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider flex items-center gap-1.5" htmlFor="title">
              <Layers className="w-3.5 h-3.5" /> Product Title
            </label>
            <input
              id="title"
              type="text"
              placeholder="e.g. UltraVision 4K OLED Pro Gaming Monitor"
              className="w-full rounded-lg border border-gray-200 bg-gray-50/30 px-3 py-2.5 text-xs outline-none transition focus:border-gray-400 focus:bg-white"
            />
          </div>

          {/* Short Description */}
          <div className="space-y-1.5">
            <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider flex items-center gap-1.5" htmlFor="shortDesc">
              <FileText className="w-3.5 h-3.5" /> Short Description
            </label>
            <textarea
              id="shortDesc"
              rows={2}
              placeholder="Brief summary of the product..."
              className="w-full rounded-lg border border-gray-200 bg-gray-50/30 px-3 py-2.5 text-xs outline-none transition focus:border-gray-400 focus:bg-white resize-none"
            />
          </div>

          {/* Full Description (with Mock Rich Text Toolbar) */}
          <div className="space-y-1.5">
            <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5" /> Full Description
            </label>
            <div className="w-full rounded-lg border border-gray-200 overflow-hidden bg-gray-50/10 focus-within:border-gray-400 focus-within:bg-white transition">
              
              {/* Text Toolbar */}
              <div className="flex items-center gap-1 bg-gray-50 border-b border-gray-200 p-2">
                <button type="button" className="p-1 rounded hover:bg-gray-200 text-gray-600 transition">
                  <Bold className="w-3.5 h-3.5" />
                </button>
                <button type="button" className="p-1 rounded hover:bg-gray-200 text-gray-600 transition">
                  <Italic className="w-3.5 h-3.5" />
                </button>
                <button type="button" className="p-1 rounded hover:bg-gray-200 text-gray-600 transition">
                  <Heading2 className="w-3.5 h-3.5" />
                </button>
                <div className="w-px h-4 bg-gray-300 mx-1"></div>
                <button type="button" className="p-1 rounded hover:bg-gray-200 text-gray-600 transition">
                  <Link2 className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Textarea Input */}
              <textarea
                rows={4}
                placeholder="Describe the key features, specs, and benefits..."
                className="w-full bg-transparent px-3 py-2.5 text-xs outline-none resize-none"
              />
            </div>
          </div>

          {/* Price, Date & Priority Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            
            {/* Price Input */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider" htmlFor="price">
                Price (৳)
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-medium text-gray-400">৳</span>
                <input
                  id="price"
                  type="number"
                  placeholder="0.00"
                  className="w-full rounded-lg border border-gray-200 bg-gray-50/30 pl-7 pr-3 py-2.5 text-xs outline-none transition focus:border-gray-400 focus:bg-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />
              </div>
            </div>

            {/* Date Input */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider flex items-center gap-1" htmlFor="date">
                <Calendar className="w-3.5 h-3.5" /> Date
              </label>
              <input
                id="date"
                type="date"
                className="w-full rounded-lg border border-gray-200 bg-gray-50/30 px-3 py-2.5 text-xs text-gray-600 outline-none transition focus:border-gray-400 focus:bg-white"
              />
            </div>

            {/* Priority Select */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider flex items-center gap-1" htmlFor="priority">
                <AlertCircle className="w-3.5 h-3.5" /> Priority
              </label>
              <select
                id="priority"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="w-full rounded-lg border border-gray-200 bg-gray-50/30 px-3 py-2.5 text-xs text-gray-700 outline-none transition focus:border-gray-400 focus:bg-white cursor-pointer appearance-none"
                style={{ backgroundImage: 'url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%236b7280\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3e%3cpolyline points=\'6 9 12 15 18 9\'%3e%3c/polyline%3e%3c/svg%3e")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', backgroundSize: '14px' }}
              >
                <option value="Low">Low</option>
                <option value="Normal">Normal</option>
                <option value="High">High</option>
              </select>
            </div>

          </div>

          {/* Product Image URL with Action Button */}
          <div className="space-y-1.5">
            <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider" htmlFor="imageUrl">
              Product Image URL
            </label>
            <div className="flex gap-2">
              <input
                id="imageUrl"
                type="text"
                placeholder="https://example.com/image.jpg"
                className="flex-1 rounded-lg border border-gray-200 bg-gray-50/30 px-3 py-2.5 text-xs outline-none transition focus:border-gray-400 focus:bg-white"
              />
              <button 
                type="button" 
                className="flex items-center justify-center p-2.5 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 text-gray-600 transition shadow-sm active:scale-95"
                title="Upload Image"
              >
                <UploadCloud className="w-4 h-4 text-blue-600" />
              </button>
            </div>
          </div>

          {/* Submit Action Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#f4ba13] py-3 text-xs font-bold text-[#001b4e] shadow-md hover:bg-[#e0aa0f] transition-all active:scale-[0.99]"
            >
              Submit (Add Product)
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}
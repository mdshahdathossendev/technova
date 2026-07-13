"use client";

import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Image as ImageIcon, Trash2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { addProduct } from '@/lib/action';


export default function AddProductDashboard() {
  interface Products {
    name: string;
    brand: string;
    category: string;
    price: number;
    stock: number;
    rating: number;
    description: string;
    longDescription: string;
    images: string[];
  }
   const router = useRouter();
  const [productInfo, setProductInfo] = useState({
    title: '',
    brand: '',
    category: 'Mechanical Keyboard',
    shortDescription: '',
    fullDescription: '',
    price: 0,
    stock: 0,
  });

  
  const [images, setImages] = useState<string[]>(['']);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [isSynced, setIsSynced] = useState(true);

  
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    
   
    const stateKey = id.replace('main-', '');
    
   
    const isNumber = ['price', 'stock'].includes(stateKey);

    setProductInfo((prev) => ({
      ...prev,
      [stateKey]: isNumber ? Number(value) : value,
    }));
  };

 
  const handleImageChange = (index: number, value: string) => {
    const updatedImages = [...images];
    updatedImages[index] = value;
    setImages(updatedImages);
  };

 
  const handleAddImageField = () => {
    if (images.length < 5) {
      setImages([...images, '']);
      setActiveImageIndex(images.length);
    }
  };

  
  const handleRemoveImage = (index: number) => {
    if (images.length > 1) {
      const updatedImages = images.filter((_, i) => i !== index);
      setImages(updatedImages);
      setActiveImageIndex(0);
    } else {
      setImages(['']);
    }
  };

  
  const handleAddProduct = async(e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    const cleanedImages = images.filter((url) => url.trim() !== '');
    const finalProductData :Products = {
      name: productInfo.title,
      brand: productInfo.brand,
      category: productInfo.category,
      price: productInfo.price,
      stock: productInfo.stock,
      description: productInfo.shortDescription,
      longDescription: productInfo.fullDescription,
      images: cleanedImages,
      rating: 4.8,
    };
    addProduct(finalProductData );
    router.push("/desbord/addprodectuscces");
    
    
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] p-4 sm:p-8 font-sans text-[#0f172a]">
      {/* Top Header Section */}
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 border-b pb-5">
        <div>
          <h1 className="text-2xl font-bold text-[#001b4e]">Add New Product</h1>
          <p className="text-xs text-gray-500 mt-1">Inventory &gt; Add New Product</p>
        </div>
        <div className="flex gap-3 w-full sm:w-auto">
          <button type="button" className="flex-1 sm:flex-none border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold py-2 px-4 rounded-xl text-xs transition">
            Discard Changes
          </button>
          {/* এই বাটনটি নিচের ফর্মটিকে ট্রিগার করবে */}
          <button type="submit" form="product-main-form" className="flex-1 sm:flex-none bg-[#f4ba13] hover:bg-[#e0aa0f] text-[#001b4e] font-bold py-2 px-5 rounded-xl text-xs transition shadow-sm">
            👑 Add Product
          </button>
        </div>
      </div>

      {/* Main Layout Grid */}
      <form id="product-main-form" className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6" onSubmit={handleAddProduct}>
        
        {/* Left Column: Product Media */}
        <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col space-y-4">
          <h2 className="text-sm font-bold text-gray-900">Product Media</h2>
          
          <div className="w-full aspect-square bg-gray-50 rounded-xl border border-dashed border-gray-200 flex items-center justify-center overflow-hidden relative">
            {images[activeImageIndex] ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={images[activeImageIndex]} alt="Preview" className="w-full h-full object-contain p-4" />
            ) : (
              <div className="text-center p-4">
                <ImageIcon className="w-12 h-12 text-gray-300 mx-auto mb-2" />
                <p className="text-xs text-gray-400">No image preview available</p>
              </div>
            )}
          </div>

          <div className="space-y-1">
            <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">
              Product Image URL ({activeImageIndex + 1}/{images.length})
            </label>
            <div className="flex gap-2">
              <input
                type="url"
                placeholder="https://example.com/image.jpg"
                value={images[activeImageIndex] || ''}
                onChange={(e) => handleImageChange(activeImageIndex, e.target.value)}
                className="flex-1 rounded-lg border border-gray-200 bg-gray-50/50 px-3 py-2 text-xs outline-none focus:border-blue-500 focus:bg-white transition"
              />
              {images.length > 1 && (
                <button
                  type="button"
                  onClick={() => handleRemoveImage(activeImageIndex)}
                  className="p-2 text-red-500 hover:bg-red-50 rounded-lg border border-red-100 transition"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          <div className="grid grid-cols-5 gap-2 pt-2">
            {images.map((url, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveImageIndex(idx)}
                className={`aspect-square rounded-lg border overflow-hidden flex items-center justify-center p-1 bg-gray-50 transition ${
                  activeImageIndex === idx ? 'border-blue-500 ring-2 ring-blue-100' : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                {url ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={url} alt="thumb" className="w-full h-full object-cover rounded-md" />
                ) : (
                  <ImageIcon className="w-4 h-4 text-gray-400" />
                )}
              </button>
            ))}

            {images.length < 5 && (
              <button type="button" onClick={handleAddImageField} className="aspect-square rounded-lg border border-dashed border-gray-300 hover:border-blue-500 hover:bg-blue-50/30 flex items-center justify-center font-bold text-gray-400 hover:text-blue-600 text-sm transition">
                +
              </button>
            )}
          </div>
        </div>

        {/* Right Column: Information & Details */}
        <div className="lg:col-span-8 flex flex-col space-y-6">
          
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm space-y-5">
            {/* Product Title */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-700" htmlFor="main-title">Product Title</label>
              <input
                id="main-title"
                type="text"
                value={productInfo.title}
                onChange={handleInputChange}
                placeholder="Enter product name..."
                className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-xs outline-none focus:border-blue-500 transition"
                required
              />
            </div>

            {/* Brand and Category */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gray-700" htmlFor="main-brand">Brand</label>
                <input
                  id="main-brand"
                  type="text"
                  value={productInfo.brand}
                  onChange={handleInputChange}
                  placeholder="e.g. Razer"
                  className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-xs outline-none focus:border-blue-500 transition"
                  required
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gray-700" htmlFor="main-category">Category</label>
                <select
                  id="main-category"
                  value={productInfo.category}
                  onChange={handleInputChange}
                  className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-xs outline-none focus:border-blue-500 transition bg-white cursor-pointer"
                >
                  <option value="Mechanical Keyboard">Mechanical Keyboard</option>
                  <option value="Gaming Mouse">Gaming Mouse</option>
                  <option value="OLED Monitor">OLED Monitor</option>
                  <option value="Wireless Mouse">Wireless Mouse</option>
                </select>
              </div>
            </div>

            {/* Short Description */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-700" htmlFor="main-shortDescription">Short Description</label>
              <input
                id="main-shortDescription"
                type="text"
                value={productInfo.shortDescription}
                onChange={handleInputChange}
                placeholder="Brief summary for catalog view..."
                className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-xs outline-none focus:border-blue-500 transition"
                required
              />
            </div>

            {/* Full Description */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-700" htmlFor="main-fullDescription">Full Description</label>
              <textarea
                id="main-fullDescription"
                rows={5}
                value={productInfo.fullDescription}
                onChange={handleInputChange}
                placeholder="Write exhaustive specifications and product details here..."
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-xs outline-none focus:border-blue-500 transition resize-none"
                required
              />
            </div>
          </div>

          {/* Pricing & Stock Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <label className="text-xs font-bold text-gray-800" htmlFor="main-price">Pricing</label>
              <input
                id="main-price"
                type="number"
                value={productInfo.price || ''}
                onChange={handleInputChange}
                placeholder="0.00"
                className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-xs outline-none focus:border-blue-500 transition"
                required
              />
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-xs font-bold text-gray-800" htmlFor="main-stock">Stock Availability</label>
              </div>
              <input
                id="main-stock"
                type="number"
                value={productInfo.stock || ''}
                onChange={handleInputChange}
                placeholder="0"
                className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-xs outline-none focus:border-blue-500 transition"
                required
              />
            </div>
          </div>

          {/* Global Marketplace Sync Bar */}
          <div className="bg-[#001b4e] text-white p-5 rounded-2xl flex items-center justify-between shadow-sm">
            <div>
              <h3 className="text-xs font-bold tracking-wide">Global Marketplace Sync</h3>
              <p className="text-[10px] text-gray-300 mt-0.5">Automatically sync across sub-domains.</p>
            </div>
            <button
              type="button"
              onClick={() => setIsSynced(!isSynced)}
              className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ${isSynced ? 'bg-[#f4ba13]' : 'bg-gray-600'}`}
            >
              <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${isSynced ? 'translate-x-5' : 'translate-x-0'}`} />
            </button>
          </div>

        </div>
      </form>
    </div>
  );
}
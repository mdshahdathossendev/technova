"use client";

import React, { useState } from 'react';
import {AlertDialog, Button} from "@heroui/react";
import { 
  Eye, 
  Trash2, 
  Download, 
  RefreshCw, 
  Package, 
  AlertCircle, 
  AlertTriangle, 
  Layers 
} from 'lucide-react';
import { deleteProduct } from '@/lib/action';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface Product {
   _id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  rating: number;
  description: string;
  longDescription: string;
  images: string[];
  stock: number;
  stockStatus: 'In Stock' | 'Low Stock' | 'Out of Stock';
}

interface ManageProductProps {
  products?: Product[];
}

export default function ManageProduct({ products: initialProducts }: ManageProductProps) {
  const router = useRouter()
  const [productList, setProductList] = useState<Product[]>(initialProducts || []);

  

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'In Stock': return 'bg-emerald-50 text-emerald-600 border-emerald-100';
      case 'Low Stock': return 'bg-amber-50 text-amber-600 border-amber-100';
      case 'Out of Stock': return 'bg-red-50 text-red-600 border-red-100';
      default: return 'bg-gray-50 text-gray-600';
    }
  };

  return (
    <div className="w-full min-h-screen  p-4 sm:p-6 md:p-8 font-sans text-[#0f172a] space-y-6">
      
      {/* Top Header Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b pb-5">
        <div>
          <h1 className="text-2xl font-bold text-[#001b4e]">Manage Products</h1>
          <p className="text-xs text-gray-400 mt-1">Real-time inventory control and product lifecycle management.</p>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button type="button" className="flex-1 sm:flex-none border border-gray-200 hover:bg-gray-50 text-gray-700 font-semibold py-2 px-4 rounded-xl text-xs flex items-center justify-center gap-2 transition bg-white shadow-sm">
            <Download className="w-4 h-4" /> Export CSV
          </button>
          <button type="button" className="flex-1 sm:flex-none bg-[#001b4e] hover:bg-[#002874] text-white font-bold py-2 px-5 rounded-xl text-xs flex items-center justify-center gap-2 transition shadow-sm">
            <RefreshCw className="w-3.5 h-3.5" /> Update All
          </button>
        </div>
      </div>

      {/* Stats Summary Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total Products */}
        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-start justify-between">
          <div>
            <p className="text-xs font-semibold text-gray-400">Total Products</p>
            <h3 className="text-2xl font-bold mt-1 text-gray-800">{productList.length}</h3>
            <span className="text-[10px] font-bold text-emerald-600 mt-2 block">↑ +12% vs last month</span>
          </div>
          <div className="bg-blue-50 p-2 rounded-xl text-blue-600"><Package className="w-4 h-4" /></div>
        </div>

        {/* Out of Stock */}
        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-start justify-between">
          <div>
            <p className="text-xs font-semibold text-gray-400">Out of Stock</p>
            <h3 className="text-2xl font-bold mt-1 text-gray-800">18</h3>
            <span className="text-[10px] font-medium text-gray-400 mt-2 block">Requiring urgent action</span>
          </div>
          <div className="bg-red-50 p-2 rounded-xl text-red-500"><AlertCircle className="w-4 h-4" /></div>
        </div>

        {/* Low Stock */}
        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-start justify-between">
          <div>
            <p className="text-xs font-semibold text-gray-400">Low Stock</p>
            <h3 className="text-2xl font-bold mt-1 text-gray-800">42</h3>
            <span className="text-[10px] font-bold text-amber-600 mt-2 block">Restock recommended</span>
          </div>
          <div className="bg-amber-50 p-2 rounded-xl text-amber-500"><AlertTriangle className="w-4 h-4" /></div>
        </div>

        {/* Active Categories */}
        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-start justify-between">
          <div>
            <p className="text-xs font-semibold text-gray-400">Active Categories</p>
            <h3 className="text-2xl font-bold mt-1 text-gray-800">24</h3>
            <span className="text-[10px] font-medium text-gray-400 mt-2 block">Across 4 main divisions</span>
          </div>
          <div className="bg-purple-50 p-2 rounded-xl text-purple-600"><Layers className="w-4 h-4" /></div>
        </div>
      </div>

      {/* Data Table Container */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#f8fafc] border-b border-gray-100 text-[11px] font-bold uppercase tracking-wider text-gray-400">
                <th className="py-4 px-6">Product</th>
                <th className="py-4 px-4">Category</th>
                <th className="py-4 px-4">Price</th>
                <th className="py-4 px-4">Stock Status</th>
                <th className="py-4 px-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 text-xs font-medium text-gray-700">
              {productList.length === 0 ? (
                <tr>
                  <td colSpan={5} className="py-10 text-center text-gray-400 font-normal">
                    No products found.
                  </td>
                </tr>
              ) : (
                productList.map((product) => (
                  <tr key={product._id} className="hover:bg-gray-50/50 transition">
                    {/* Name & SKU columns */}
                    <td className="py-4 px-6 flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 overflow-hidden flex-shrink-0">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="min-w-0">
                        <p className="font-bold text-gray-800 truncate hover:text-blue-600 cursor-pointer">{product.name}</p>
            
                      </div>
                    </td>

                    {/* Category Column */}
                    <td className="py-4 px-4">
                      <span className="bg-blue-50/70 text-blue-600 px-2.5 py-1 rounded-lg text-[10px] font-bold">
                        {product.category}
                      </span>
                    </td>

                    {/* Price Column */}
                    <td className="py-4 px-4 font-bold text-gray-800">
                      ${product.price.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                    </td>

                    {/* Stock Status Column */}
                    <td className="py-4 px-4">
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold border inline-flex items-center gap-1.5 ${getStatusStyle(product.stockStatus)}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${
                          product.stockStatus === 'In Stock' ? 'bg-emerald-500' : product.stockStatus === 'Low Stock' ? 'bg-amber-500' : 'bg-red-500'
                        }`} />
                        {product.stock}
                      </span>
                    </td>

                    {/* Action Buttons Column */}
                    <td className="py-4 px-6 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <Link href={`/shop/${product._id}`}>
                        <button type="button" className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition" title="View Details">
                          <Eye className="w-4 h-4" />
                        </button>
                        </Link>
                        <AlertDialog>
      <Button className={'bg-white'}> <Trash2 color='red'></Trash2></Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete product permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>My Awesome Project</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button
  onClick={async () => {
    const result = await deleteProduct(product._id);

    if (result.deletedCount > 0) {
      setProductList((prev) =>
        prev.filter((item) => item._id !== product._id)
      );
    }
  }}
  slot="close"
  variant="danger"
>
  Delete Product
</Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
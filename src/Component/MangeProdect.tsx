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
  id: string;
  name: string;
  sku: string;
  image: string;
  category: string;
  price: number;
  stockStatus: 'In Stock' | 'Low Stock' | 'Out of Stock';
}

interface ManageProductProps {
  products?: Product[];
}

export default function ManageProduct({ products: initialProducts }: ManageProductProps) {
  const router = useRouter()
  const defaultProducts: Product[] = [
    { id: '1', name: 'X-Phenom Pro Laptop', sku: 'TN-LPT-9920', image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=80&q=80', category: 'Computing', price: 1899.00, stockStatus: 'In Stock' },
    { id: '2', name: 'Acoustix Ultra-H1', sku: 'TN-HDP-0411', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=80&q=80', category: 'Audio', price: 349.50, stockStatus: 'Low Stock' },
    { id: '3', name: 'Nexus 5G flagship', sku: 'TN-PHN-8800', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=80&q=80', category: 'Mobile', price: 999.00, stockStatus: 'Out of Stock' },
    { id: '4', name: 'Velocity Watch S4', sku: 'TN-WCH-1122', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=80&q=80', category: 'Wearables', price: 299.00, stockStatus: 'In Stock' },
    { id: '5', name: 'OpticView 4K Cinema', sku: 'TN-CAM-5020', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=80&q=80', category: 'Video', price: 4250.00, stockStatus: 'In Stock' },
  ];

  const [productList, setProductList] = useState<Product[]>(initialProducts || defaultProducts);

  

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'In Stock': return 'bg-emerald-50 text-emerald-600 border-emerald-100';
      case 'Low Stock': return 'bg-amber-50 text-amber-600 border-amber-100';
      case 'Out of Stock': return 'bg-red-50 text-red-600 border-red-100';
      default: return 'bg-gray-50 text-gray-600';
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#f8fafc] p-4 sm:p-6 md:p-8 font-sans text-[#0f172a] space-y-6">
      
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
                          product.stock === 'In Stock' ? 'bg-emerald-500' : product.stockStatus === 'Low Stock' ? 'bg-amber-500' : 'bg-red-500'
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
              <Button onClick={async () => {
  await deleteProduct(product._id);
  router.refresh();
}} slot="close" variant="danger">
                Delete Prouct
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
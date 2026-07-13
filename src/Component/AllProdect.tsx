'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image'; // Next.js Image Optimization-এর জন্য
import { ShoppingCart, Star, Heart } from 'lucide-react';

import Link from 'next/link';
import { Products } from '@/lib/data';


interface AllProductProps {
  products: Products[];
}

const AllProduct: React.FC<AllProductProps> = ({ products = [] }) => {
 
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [priceRange, setPriceRange] = useState<number>(2500); 
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<string>('Newest First');

  
  const categories = useMemo(() => {
    const allCats = products.map((p) => p.category);
    return ['All', ...Array.from(new Set(allCats))];
  }, [products]);

  
  const brands = useMemo(() => {
    return Array.from(new Set(products.map((p) => p.brand)));
  }, [products]);

  
  const getCategoryCount = (category: string) => {
    if (category === 'All') return products.length;
    return products.filter((p) => p.category === category).length;
  };

  const handleBrandChange = (brand: string) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter((b) => b !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  
  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategory !== 'All') {
      result = result.filter((p) => p.category.toLowerCase() === selectedCategory.toLowerCase());
    }

    result = result.filter((p) => p.price <= priceRange);

    if (selectedBrands.length > 0) {
      result = result.filter((p) => selectedBrands.includes(p.brand));
    }

    if (sortBy === 'Price: Low to High') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'Price: High to Low') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'Top Rated') {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'Newest First') {
      result.reverse(); 
    }

    return result;
  }, [products, selectedCategory, priceRange, selectedBrands, sortBy]);

  const handleResetFilters = () => {
    setSelectedCategory('All');
    setPriceRange(2500);
    setSelectedBrands([]);
    setSortBy('Newest First');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 font-sans text-gray-800 bg-gray-50 min-h-screen">
      <div className="flex flex-col md:flex-row gap-8">
        
        {/* ================= SIDEBAR FILTER ================= */}
        <aside className="w-full md:w-64 shrink-0 space-y-6">
          {/* Categories */}
          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
            <h3 className="font-bold text-lg mb-4 text-gray-900">Categories</h3>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat}>
                  <button
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all flex justify-between items-center ${
                      selectedCategory === cat
                        ? 'bg-amber-50 text-amber-700 font-semibold'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <span>{cat}</span>
                    <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">
                      {getCategoryCount(cat)}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Price Range */}
          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
            <h3 className="font-bold text-lg mb-4 text-gray-900">Price Range</h3>
            <input
              type="range"
              min="0"
              max="2500"
              value={priceRange}
              onChange={(e) => setPriceRange(Number(e.target.value))}
              className="w-full accent-blue-950 cursor-pointer mb-4"
            />
            <div className="flex gap-2 mb-4">
              <div className="flex-1 bg-gray-50 border border-gray-200 rounded-lg p-2 text-center text-sm">
                <span className="text-gray-400 block text-xs">Min</span>$0
              </div>
              <div className="flex-1 bg-gray-50 border border-gray-200 rounded-lg p-2 text-center text-sm">
                <span className="text-gray-400 block text-xs">Max</span>${priceRange}
              </div>
            </div>
            <button 
              type="button"
              onClick={handleResetFilters}
              className="w-full bg-blue-950 text-white text-sm font-semibold py-2.5 rounded-lg hover:bg-blue-900 transition-colors"
            >
              Reset Filters
            </button>
          </div>

          {/* Brands */}
          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
            <h3 className="font-bold text-lg mb-4 text-gray-900">Brands</h3>
            <div className="space-y-3">
              {brands.map((brand) => (
                <label key={brand} className="flex items-center gap-3 cursor-pointer text-sm text-gray-600 hover:text-gray-900">
                  <input
                    type="checkbox"
                    checked={selectedBrands.includes(brand)}
                    onChange={() => handleBrandChange(brand)}
                    className="w-4 h-4 rounded border-gray-300 text-blue-950 focus:ring-blue-950 accent-blue-950"
                  />
                  <span>{brand}</span>
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* ================= MAIN PRODUCT AREA ================= */}
        <main className="flex-1">
          {/* Top Bar (Header & Sort) */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">All Electronics</h1>
              <p className="text-sm text-gray-500 mt-0.5">
                Showing 1-{filteredProducts.length} of {filteredProducts.length} products
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500 whitespace-nowrap">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-gray-50 border border-gray-200 text-sm rounded-lg px-3 py-2 outline-none focus:border-gray-400 cursor-pointer min-w-[140px]"
              >
                <option>Newest First</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Top Rated</option>
              </select>
            </div>
          </div>

          {/* Product Grid */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-2xl border border-gray-100 shadow-sm">
              <p className="text-gray-500 font-medium">No products found matching the criteria.</p>
              <button 
                type="button"
                onClick={handleResetFilters}
                className="mt-4 text-sm text-blue-900 font-bold underline hover:text-blue-700"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div 
                  key={product._id} 
                  className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col group relative"
                >
                  {/* Wishlist Button */}
                  <button 
                    type="button"
                    className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-sm border border-gray-100 text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <Heart size={18} />
                  </button>

                  {/* Product Image */}
                  <div className="aspect-[4/3] bg-gray-50 overflow-hidden relative flex items-center justify-center p-4">
                    <div className="relative w-full h-full">
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        sizes="(max-w-7xl) 33vw, 50vw"
                        className="object-contain group-hover:scale-105 transition-transform duration-300"
                        priority={false}
                      />
                    </div>
                    {product.stock < 10 && (
                      <span className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md z-10">
                        Only {product.stock} Left
                      </span>
                    )}
                  </div>

                  {/* Product Details */}
                  <div className="p-5 flex flex-col flex-1 justify-between">
                    <div className="space-y-1.5">
                      <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block">
                        {product.brand}
                      </span>
                      <h2 className="font-bold text-gray-800 line-clamp-2 hover:text-blue-900 cursor-pointer min-h-[44px]">
                        {product.name}
                      </h2>
                      
                      {/* Ratings */}
                      <div className="flex items-center gap-1">
                        <div className="flex text-amber-400">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              size={14} 
                              fill={i < Math.floor(product.rating) ? "currentColor" : "none"} 
                              className={i < Math.floor(product.rating) ? "" : "text-gray-200"}
                            />
                          ))}
                        </div>
                        <span className="text-xs font-medium text-gray-500">
                          ({product.rating})
                        </span>
                      </div>
                    </div>

                    {/* Price & Add to Cart */}
                    <div className="flex items-center justify-between mt-5 pt-4 border-t border-gray-50">
                      <span className="text-2xl font-black text-gray-900">
                        ${product.price}
                      </span>
                    <Link href={`/shop/${product._id}`}>
                       <button 
                        type="button"
                        className="flex items-center gap-1.5 bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold px-4 py-2 rounded-xl text-sm transition-colors shadow-sm"
                      >
                        <ShoppingCart size={16} />
                        <span>Add</span>
                      </button>
                    </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
        
      </div>
    </div>
  );
};

export default AllProduct;
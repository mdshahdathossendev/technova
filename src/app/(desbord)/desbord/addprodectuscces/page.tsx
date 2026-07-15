import React from 'react';
import { Check, Box, Plus } from 'lucide-react';
import Link from 'next/link';

interface ProductProps {
  data?: {
    sku?: string;
  };
}

const AddDataPage: React.FC<ProductProps> = ({ data }) => {
  const sku = data?.sku || 'N/A';

  return (
    // min-h-screen এবং flex এর মাধ্যমে পুরো কার্ডটিকে স্ক্রিনের মাঝখানে (Middle) এলাইন করা হয়েছে
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 font-sans text-slate-800">
      
      {/* সাকসেস মেসেজ কার্ড */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-8 text-center flex flex-col items-center max-w-xl w-full">
        
        {/* চেক আইকন বক্স */}
        <div className="w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center text-white mb-6 shadow-md">
          <Check className="w-8 h-8 stroke-[3]" />
        </div>
        
        {/* টাইটেল */}
        <h1 className="text-2xl font-bold text-slate-900 mb-2">Product Added Successfully!</h1>
        
        {/* ডেসক্রিপশন */}
        <p className="text-sm text-slate-500 max-w-sm leading-relaxed mb-6">
          The SKU <span className="font-semibold text-slate-700">{sku}</span> has been verified and synced with all regional distribution centers.
        </p>
        
        {/* বাটন গ্রুপ */}
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <Link href="/shop">
          <button className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-6 py-3 rounded-lg transition-colors text-sm">
            <Box className="w-4 h-4" /> View Product
          </button>
          </Link>
          <Link href="/desbord/additems">
          <button className="flex items-center justify-center gap-2 border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold px-6 py-3 rounded-lg transition-colors text-sm">
            <Plus className="w-4 h-4" /> Add Another Product
          </button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default AddDataPage;
'use client';

import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  stars: number;
  review: string;
  name: string;
  initials: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ stars, review, name, initials }) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 p-8 shadow-sm flex flex-col justify-between space-y-6">
      <div className="space-y-4">
        {/* Rating Stars */}
        <div className="flex text-amber-600 gap-0.5">
          {[...Array(stars)].map((_, i) => (
            <Star key={i} size={16} fill="currentColor" className="text-amber-600" />
          ))}
        </div>
        {/* Review Text */}
        <p className="text-slate-500 text-sm leading-relaxed italic">
          &ldquo;{review}&rdquo;
        </p>
      </div>

      {/* User Info Grid */}
      <div className="flex items-center gap-3 pt-2">
        {/* Rounded Avatar with Initials */}
        <div className="w-10 h-10 rounded-xl bg-blue-950 flex items-center justify-center text-white font-black text-sm tracking-wider shrink-0">
          {initials}
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-slate-800 text-sm">{name}</span>
          <span className="text-[11px] font-medium text-slate-400">Verified Buyer</span>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 font-sans bg-slate-50">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
          What Our Techies Say
        </h2>
      </div>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Card 1 */}
        <TestimonialCard
          stars={5}
          review="Fastest delivery I've ever experienced in Bangladesh. Ordered my iPhone at midnight, got it by afternoon the next day!"
          name="Rahat Hasan"
          initials="RH"
        />

        {/* Card 2 */}
        <TestimonialCard
          stars={5}
          review="The packaging was incredibly secure. My high-end GPU arrived in perfect condition. TECHNOVA is definitely my go-to for tech now."
          name="Samiha Nur"
          initials="SN"
        />

        {/* Card 3 */}
        <TestimonialCard
          stars={5}
          review="Exceptional customer service. They helped me choose the right laptop for my video editing workflow. Genuine products."
          name="Asif Khan"
          initials="AK"
        />

      </div>
    </div>
  );
};

export default Testimonials;
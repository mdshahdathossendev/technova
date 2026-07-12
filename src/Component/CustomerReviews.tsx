'use client';

import React from 'react';
import { Star, ThumbsUp } from 'lucide-react';

interface Review {
  id: string;
  name: string;
  initials: string;
  rating: number;
  comment: string;
  helpfulCount: number;
  isVerified: boolean;
}

const CustomerReviews: React.FC = () => {
  const staticReviews: Review[] = [
    {
      id: '1',
      name: 'Anisul S.',
      initials: 'AS',
      rating: 5,
      comment: '"The titanium finish feels incredible in the hand. Much lighter than the previous generation. Tachnova delivered within 24 hours!"',
      helpfulCount: 12,
      isVerified: true,
    },
    {
      id: '2',
      name: 'Maksudul K.',
      initials: 'MK',
      rating: 5,
      comment: '"The 5x zoom camera is a game changer for my photography. Highly recommended if you want the best camera in a smartphone."',
      helpfulCount: 8,
      isVerified: true,
    },
    {
      id: '3',
      name: 'Fahim A.',
      initials: 'FA',
      rating: 4,
      comment: '"Great service from Tachnova. Product arrived sealed and genuine. The phone itself is a beast in performance."',
      helpfulCount: 5,
      isVerified: true,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4  font-sans bg-slate-50">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div className="space-y-1">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
            Customer Reviews
          </h2>
          <div className="flex items-center gap-2">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="currentColor" className="text-amber-500" />
              ))}
            </div>
            <span className="text-base font-bold text-slate-800">4.9 out of 5</span>
          </div>
        </div>

        <button
          type="button"
          className="border-2 border-blue-950 text-blue-950 hover:bg-blue-950 hover:text-white font-bold px-6 py-2.5 rounded-xl text-sm transition-colors tracking-wide"
        >
          Write a Review
        </button>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {staticReviews.map((review) => (
          <div
            key={review.id}
            className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow"
          >
            <div>
              {/* User Identity */}
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-950 font-black flex items-center justify-center text-sm tracking-wider shrink-0">
                    {review.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{review.name}</h4>
                    {review.isVerified && (
                      <span className="text-xs text-slate-400 font-medium block mt-0.5">
                        Verified Buyer
                      </span>
                    )}
                  </div>
                </div>

                {/* Rating Stars */}
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      fill={i < review.rating ? 'currentColor' : 'none'}
                      className={i < review.rating ? 'text-amber-500' : 'text-slate-200'}
                    />
                  ))}
                </div>
              </div>

              {/* Review Text */}
              <p className="mt-5 text-sm text-slate-500 leading-relaxed font-medium italic">
                {review.comment}
              </p>
            </div>

            {/* Actions Footer */}
            <div className="pt-4 border-t border-slate-50">
              <button
                type="button"
                className="flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-blue-950 transition-colors group"
              >
                <ThumbsUp size={14} className="group-hover:scale-110 transition-transform" />
                <span>Helpful ({review.helpfulCount})</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerReviews;
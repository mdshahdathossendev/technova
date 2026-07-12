'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface BlogCardProps {
  category: string;
  title: string;
  description: string;
  imageSrc: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ category, title, description, imageSrc }) => {
  return (
    <div className="flex flex-col space-y-4 group cursor-pointer">
      {/* Image Container with Hover Effect */}
      <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-slate-100 border border-slate-100 shadow-sm">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
          sizes="(max-w-7xl) 33vw, 100vw"
        />
      </div>

      {/* Metadata & Content */}
      <div className="space-y-2">
        <span className="text-[10px] font-black text-amber-600 uppercase tracking-widest block">
          {category}
        </span>
        <h3 className="text-base md:text-lg font-black text-slate-900 group-hover:text-blue-950 transition-colors leading-snug tracking-tight">
          {title}
        </h3>
        <p className="text-xs text-slate-400 font-medium leading-relaxed line-clamp-2">
          {description}
        </p>
      </div>
    </div>
  );
};

const TechInsights: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 font-sans bg-slate-50">
      
      {/* Header Area */}
      <div className="flex items-center justify-between mb-10 border-b border-slate-100 pb-4">
        <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
          Tech Insights
        </h2>
        <a 
          href="#blog" 
          className="text-sm font-black text-blue-950 hover:text-blue-900 flex items-center gap-1.5 transition-colors group"
        >
          <span>Read the Blog</span>
          <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
        </a>
      </div>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Card 1: Trends */}
        <BlogCard
          category="Trends"
          title="How AI is Reshaping Mobile Computing in 2024"
          description="Explore the latest integration of neural processing units in upcoming flagship devices..."
          imageSrc="https://images.unsplash.com/photo-1620712943543-bcc4688e7485" // Beautiful Neural/AI Digital Abstract Network
        />

        {/* Card 2: Guides */}
        <BlogCard
          category="Guides"
          title="The Ultimate Setup Guide for Remote Tech Professionals"
          description="From ergonomic chairs to high-refresh-rate monitors, here is what you need for the perfect workstation."
          imageSrc="https://images.unsplash.com/photo-1527443224154-c4a3942d3acf" // Premium Remote Workspace Setup with Monitors
        />

        {/* Card 3: Eco-Tech */}
        <BlogCard
          category="Eco-Tech"
          title="Green Tech: The Future of Sustainable Electronics"
          description="Understanding how manufacturers are moving towards carbon neutrality and recycled materials."
          imageSrc="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09" // Eco Technology & Green Energy concept
        />

      </div>
    </div>
  );
};

export default TechInsights;
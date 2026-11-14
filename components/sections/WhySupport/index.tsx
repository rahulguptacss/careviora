'use client';

import React from 'react';
import Image from 'next/image';
import {
  Leaf,
  HandHeart,
  Users,
  Sprout,
  Handshake,
  HeartHandshake,
  ShieldCheck,
  TrendingUp,
  type LucideIcon,
} from 'lucide-react';
import { motion } from 'framer-motion';
import type { WhySupportSectionData } from '../../types';

const iconMap: Record<string, LucideIcon> = {
  HandHeart,
  Users,
  Sprout,
  Handshake,
  HeartHandshake,
  ShieldCheck,
  TrendingUp,
};

export default function WhySupport({ data }: { data: WhySupportSectionData }) {
  if (!data) return null;

  return (
    <section id="why-support" className="py-10 md:py-14 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-8 md:mb-10"
        >
          {/* Top Leaf Ornament with Orange Horizontal Dashes */}
          <div className="flex items-center justify-center gap-3 mb-2.5">
            <div className="w-10 h-0.5 bg-[#E86314] rounded-full" />
            <div className="w-8 h-8 rounded-full bg-[#E8F5E9] border border-[#C8E6C9] flex items-center justify-center shadow-2xs">
              <Leaf className="w-4 h-4 text-[#0D5C32]" />
            </div>
            <div className="w-10 h-0.5 bg-[#E86314] rounded-full" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight leading-tight">
            <span className="text-[#0D5C32]">{data.heading_prefix}</span>{' '}
            <span className="text-[#E86314]">{data.heading_highlight}</span>
          </h2>

          {/* Subtitle */}
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-xl mx-auto mt-2.5">
            {data.subtitle}
          </p>
        </motion.div>

        {/* 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Kids Photo with Decorative Orange Top-Left Accent Frame */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex justify-center lg:justify-start"
          >
            <div className="relative w-full max-w-[420px] aspect-[4/3]">
              {/* Orange Top-Left Curved Accent Frame */}
              <div className="absolute -top-3.5 -left-3.5 sm:-top-4 sm:-left-4 w-32 h-32 sm:w-36 sm:h-36 border-t-[10px] sm:border-t-[12px] border-l-[10px] sm:border-l-[12px] border-[#E86314] rounded-tl-[36px] pointer-events-none z-0" />

              {/* Main Image Container */}
              <div className="relative z-10 w-full h-full rounded-3xl overflow-hidden shadow-lg border-4 border-white bg-gray-50">
                <Image
                  src={data.image}
                  alt={data.image_alt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className="object-cover object-center transform hover:scale-104 transition-transform duration-700"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column: 2x2 Feature Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {data.features.map((feat, index) => {
              const IconComp = iconMap[feat.icon] || HandHeart;
              return (
                <motion.div
                  key={feat.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="bg-white border border-[#E5EFE8] border-l-4 border-l-[#E86314] rounded-2xl p-5 sm:p-6 shadow-xs hover:shadow-md transition-all duration-300 flex items-start gap-4"
                >
                  {/* Mint Green Rounded Icon Box */}
                  <div className="w-14 h-14 rounded-2xl bg-[#E8F5E9] text-[#0D5C32] flex items-center justify-center flex-shrink-0 shadow-2xs">
                    <IconComp className="w-7 h-7 text-[#0D5C32]" />
                  </div>

                  {/* Text Content */}
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#0D5C32] leading-snug">
                      {feat.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mt-1">
                      {feat.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

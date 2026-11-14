'use client';

import React from 'react';
import Image from 'next/image';
import {
  GraduationCap,
  HeartPulse,
  Users,
  type LucideIcon,
} from 'lucide-react';
import { motion } from 'framer-motion';
import type { CtaSectionData } from '../../types';

const iconMap: Record<string, LucideIcon> = {
  GraduationCap,
  HeartPulse,
  Users,
};

export default function Cta({ data }: { data: CtaSectionData }) {
  if (!data) return null;

  return (
    <section id="cta" className="py-10 sm:py-12 md:py-14 bg-[#FAFCFA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center min-h-[380px] md:min-h-[420px]">
            
            {/* Left Column: HD Photo of 3 Joyful Children with Organic Wave Divider */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 relative h-64 sm:h-80 lg:h-full min-h-[280px] lg:min-h-[440px] w-full overflow-hidden"
            >
              <Image
                src={data.image || '/images/cta/cta-siblings.webp'}
                alt={data.image_alt || 'CareViora - Joyful Indian children'}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover object-center transform hover:scale-103 transition-transform duration-700"
              />

              {/* Top-Right Sweeping Dual Wave Divider (Desktop) */}
              <div className="hidden lg:block absolute top-0 -right-1 h-full w-28 xl:w-36 pointer-events-none z-10 overflow-hidden">
                <svg
                  viewBox="0 0 140 520"
                  fill="none"
                  preserveAspectRatio="none"
                  className="w-full h-full"
                >
                  {/* Green inner ribbon */}
                  <path
                    d="M 50 0 C 140 120, 140 380, 20 520 L 140 520 L 140 0 Z"
                    fill="#0D5C32"
                  />
                  {/* Orange middle ribbon */}
                  <path
                    d="M 68 0 C 145 130, 145 370, 38 520 L 140 520 L 140 0 Z"
                    fill="#E86314"
                  />
                  {/* White background cut */}
                  <path
                    d="M 85 0 C 150 140, 150 360, 58 520 L 140 520 L 140 0 Z"
                    fill="#FFFFFF"
                  />
                </svg>
              </div>

              {/* Bottom-Left Wave Ribbons */}
              <div className="absolute bottom-0 left-0 w-full max-w-[280px] sm:max-w-[340px] h-14 sm:h-18 pointer-events-none z-10 overflow-hidden">
                <svg
                  viewBox="0 0 340 70"
                  fill="none"
                  preserveAspectRatio="none"
                  className="w-full h-full"
                >
                  <path
                    d="M 0 45 C 80 40, 180 50, 340 70 L 340 70 L 0 70 Z"
                    fill="#E86314"
                  />
                  <path
                    d="M 0 52 C 90 48, 190 56, 340 70 L 340 70 L 0 70 Z"
                    fill="#0D5C32"
                  />
                </svg>
              </div>
            </motion.div>

            {/* Right Column: Mission Content & 3 Pillars */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-6 p-6 sm:p-8 lg:p-9 xl:p-10 flex flex-col justify-center text-center lg:text-left relative z-10"
            >
              {/* Top Ornament: Green dashes + Hand-Holding-Heart Icon */}
              <div className="flex items-center justify-center lg:justify-start gap-2.5 mb-2.5">
                <div className="w-8 h-0.5 bg-[#0D5C32] rounded-full" />
                <div className="flex items-center justify-center">
                  <svg
                    className="w-7 h-7"
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {/* Orange heart */}
                    <path
                      d="M12 7.5c-1.5-2.5-5-2-5 1 0 2.5 5 5 5 5s5-2.5 5-5c0-3-3.5-3.5-5-1z"
                      fill="#E86314"
                      stroke="#E86314"
                    />
                    {/* Green cupping hands */}
                    <path
                      d="M4 14c2-1 4.5 0 6 1.5l1 1c.5.5 1.5.5 2 0l1-1c1.5-1.5 4-2.5 6-1.5"
                      stroke="#0D5C32"
                    />
                  </svg>
                </div>
                <div className="w-8 h-0.5 bg-[#0D5C32] rounded-full" />
              </div>

              {/* Eyebrow Badge */}
              <div className="text-base sm:text-lg font-bold text-[#0D5C32] mb-2 tracking-tight">
                {data.badge}
              </div>

              {/* Main Headline */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-extrabold text-[#0D5C32] tracking-tight leading-[1.18] mb-4">
                {data.headline_first} <br className="hidden sm:inline" />
                {data.headline_second} <br className="hidden sm:inline" />
                <span className="text-[#0D5C32]">
                  {data.headline_third ? `${data.headline_third} ` : 'for '}
                </span>
                <span className="text-[#E86314]">{data.headline_highlight}</span>
              </h2>

              {/* Description */}
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-lg mx-auto lg:mx-0 mb-8">
                {data.description}
              </p>

              {/* 3 Pillars Row */}
              <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-6 pt-2">
                {data.features.map((feat, idx) => {
                  const IconComp = iconMap[feat.icon] || GraduationCap;
                  const isLast = idx === data.features.length - 1;

                  return (
                    <React.Fragment key={feat.title}>
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.2 + idx * 0.1 }}
                        className="flex flex-col items-center text-center group cursor-default"
                      >
                        <motion.div
                          whileHover={{ scale: 1.15, rotate: [0, -5, 5, 0] }}
                          transition={{ duration: 0.3 }}
                          className="w-12 h-12 rounded-full bg-[#E8F5E9] text-[#0D5C32] border border-[#C8E6C9] flex items-center justify-center shadow-2xs mb-2 transition-colors duration-200 group-hover:bg-[#0D5C32] group-hover:text-white"
                        >
                          <IconComp className="w-6 h-6 transition-colors duration-200" />
                        </motion.div>
                        <span className="text-xs sm:text-sm font-bold text-gray-800 leading-snug">
                          {feat.title}
                        </span>
                      </motion.div>

                      {!isLast && (
                        <div className="w-[1px] h-10 bg-gray-200 mx-1 sm:mx-3 flex-shrink-0" />
                      )}
                    </React.Fragment>
                  );
                })}
              </div>
            </motion.div>

          </div>

          {/* Bottom-Right Sweeping Dual Wave (Accent) */}
          <div className="absolute bottom-0 right-0 w-full max-w-[320px] sm:max-w-[420px] h-12 sm:h-16 pointer-events-none z-0 overflow-hidden">
            <svg
              viewBox="0 0 420 60"
              fill="none"
              preserveAspectRatio="none"
              className="w-full h-full"
            >
              <path
                d="M 0 60 C 140 50, 260 40, 420 20 L 420 60 Z"
                fill="#E86314"
              />
              <path
                d="M 0 60 C 160 55, 280 48, 420 32 L 420 60 Z"
                fill="#0D5C32"
              />
            </svg>
          </div>

        </div>
      </div>
    </section>
  );
}

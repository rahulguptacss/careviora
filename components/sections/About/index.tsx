'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import SectionBadge from '../../ui/SectionBadge';
import type { AboutSectionData } from '../../types';

export default function About({ data }: { data: AboutSectionData }) {
  if (!data) return null;

  return (
    <section id="about" className="py-10 md:py-14 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Two Separate Circular Images + Dynamic 10+ Years Box */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex justify-center lg:justify-start"
          >
            <div className="relative w-full max-w-[440px] aspect-[440/460] select-none">
              {/* Decorative Green Accent Arc (Hugs Circle 1 top-right) */}
              <div className="absolute top-0 left-6 w-[70%] aspect-square pointer-events-none z-0">
                <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                  <path
                    d="M 52 2 A 48 48 0 0 1 98 48"
                    fill="none"
                    stroke="#0D5C32"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {/* Circle 1: Main Top Image (Girl in orange dupatta) */}
              <div className="absolute top-3 left-0 w-[68%] aspect-square rounded-full overflow-hidden border-4 sm:border-[6px] border-white shadow-xl z-10 group">
                <Image
                  src={data.image_children_1}
                  alt={data.image_children_1_alt}
                  fill
                  priority
                  sizes="(max-width: 768px) 300px, 340px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Decorative Orange Accent Arc (Hugs Circle 2 bottom-left) */}
              <div className="absolute bottom-0 right-2 w-[60%] aspect-square pointer-events-none z-10">
                <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                  <path
                    d="M 48 98 A 48 48 0 0 1 2 52"
                    fill="none"
                    stroke="#E86314"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {/* Circle 2: Secondary Bottom Image (School children in uniform) */}
              <div className="absolute bottom-3 right-0 w-[58%] aspect-square rounded-full overflow-hidden border-4 sm:border-[6px] border-white shadow-2xl z-20 group">
                <Image
                  src={data.image_children_2}
                  alt={data.image_children_2_alt}
                  fill
                  sizes="(max-width: 768px) 260px, 300px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Dynamic Orange Badge ("10+ Years of Social Service") */}
              <div className="absolute bottom-0 left-[22%] sm:left-[24%] z-30 bg-[#E86314] text-white px-5 py-4 sm:px-6 sm:py-5 rounded-2xl sm:rounded-3xl shadow-2xl border-4 sm:border-[5px] border-white flex flex-col items-center justify-center text-center min-w-[130px] sm:min-w-[150px] transform hover:scale-105 transition-transform duration-300">
                <span className="text-3xl sm:text-4xl font-extrabold leading-none tracking-tight">
                  {data.badge_years}
                </span>
                <span className="text-xs sm:text-[13px] font-semibold leading-snug mt-1.5 opacity-95">
                  {data.badge_text_line1}
                </span>
                <span className="text-xs sm:text-[13px] font-semibold leading-snug opacity-95">
                  {data.badge_text_line2}
                </span>
                <div className="w-8 h-0.5 bg-white/70 rounded-full mx-auto mt-2.5" />
              </div>
            </div>
          </motion.div>

          {/* Right Column: Mission Content & Teacher Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Pill Badge */}
            <SectionBadge text={data.badge} className="mb-4" />

            {/* Main Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-extrabold text-[#0D5C32] leading-[1.2] tracking-tight">
              {data.heading_line1 || data.heading_prefix}{' '}
              <span className="block mt-1 sm:mt-1.5">
                {data.heading_line2_prefix ? (
                  <>
                    {data.heading_line2_prefix}{' '}
                    <span className="text-[#E86314]">{data.heading_highlight}</span>
                  </>
                ) : (
                  <span className="text-[#E86314]">{data.heading_highlight}</span>
                )}
              </span>
            </h2>

            {/* Orange Accent Dash */}
            <div className="w-14 h-1 bg-[#E86314] rounded-full mt-4 mb-5" />

            {/* Description */}
            <p className="text-base sm:text-[17px] text-gray-600 leading-relaxed max-w-2xl mb-7">
              {data.description}
            </p>

            {/* Mission Card with Teacher image */}
            <div className="w-full bg-[#F2F9F5] border border-[#E2F0E8] rounded-2xl p-5 sm:p-6 shadow-xs">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
                {/* Mission Text Column */}
                <div className="sm:col-span-7 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#0D5C32] text-white flex-shrink-0 flex items-center justify-center shadow-sm">
                    <svg
                      className="w-6 h-6 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="7" cy="7" r="2" />
                      <circle cx="12" cy="6" r="2.2" />
                      <circle cx="17" cy="7" r="2" />
                      <path d="M4.5 12c0-1.6 1.4-2.8 3-2.8s3 1.2 3 2.8" />
                      <path d="M9 11.5c0-1.6 1.4-2.8 3-2.8s3 1.2 3 2.8" />
                      <path d="M13.5 12c0-1.6 1.4-2.8 3-2.8s3 1.2 3 2.8" />
                      <path d="M3 16.5c1.5-.8 3.5-.5 4.8.7l1.7 1.6a2 2 0 0 0 2.8 0l4.5-3.8a2 2 0 0 1 2.8.2l1.4 1.5" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0D5C32]">
                      {data.mission_title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mt-1">
                      {data.mission_desc}
                    </p>
                  </div>
                </div>

                {/* Teacher Photo */}
                <div className="sm:col-span-5 relative h-36 sm:h-32 rounded-xl overflow-hidden shadow-xs border-2 border-white">
                  <Image
                    src={data.image_teacher}
                    alt={data.image_teacher_alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 240px"
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

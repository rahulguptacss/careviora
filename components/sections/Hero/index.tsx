'use client';

import React from 'react';
import Image from 'next/image';
import { HeartHandshake } from 'lucide-react';
import { motion } from 'framer-motion';
import type { HeroSectionData } from '../../types';

export default function Hero({ data }: { data: HeroSectionData }) {
  return (
    <section
      id="home"
      className="relative w-full h-[calc(100vh-76px)] min-h-[500px] flex items-center overflow-hidden bg-white"
    >
      {/* Background Banner Image spanning full bleed */}
      <div className="absolute inset-0 z-0">
        <Image
          src={data.hero_image}
          alt={data.hero_image_alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[78%_top] sm:object-[75%_top] md:object-[80%_top] lg:object-[82%_top]"
        />
        {/* Soft Left Side Gradient to ensure crystal clear readability of text */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent sm:via-white/60 sm:to-transparent lg:via-white/30 lg:to-transparent pointer-events-none" />
      </div>

      {/* Main Content on Left */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 py-8 sm:py-12 lg:py-14">
        <div className="max-w-xl lg:max-w-2xl text-left">
          {/* Orange Accent Dash Line */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.5 }}
            className="w-12 h-1 bg-[#E86314] rounded-full mb-4 origin-left"
          />

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg sm:text-xl font-bold text-[#0D5C32] tracking-normal mb-2"
          >
            {data.eyebrow}
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-[54px] font-black tracking-tight text-[#0D5C32] leading-[1.12] mb-5"
          >
            {data.headline_first}{' '}
            <span className="block mt-1 sm:mt-1.5">
              {data.headline_second}{' '}
              <span className="text-[#E86314]">{data.headline_highlight}</span>
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-[17px] text-gray-700 font-medium leading-relaxed max-w-lg mb-8"
          >
            {data.description}
          </motion.p>

          {/* CTA Button: Contact Us with Heart in Hand icon */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.a
              href={data.button_href}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-3 px-8 py-3.5 sm:py-4 rounded-xl font-bold text-base tracking-wide text-white bg-[#0D5C32] hover:bg-[#0A4A28] shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <HeartHandshake className="w-5 h-5 text-white stroke-[2.2] group-hover:scale-110 transition-transform" />
              <span>{data.button_text}</span>
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Bottom-Left Organic Sweeping Dual Wave from Screenshot */}
      <div className="absolute bottom-0 left-0 w-full max-w-xl md:max-w-2xl h-20 sm:h-24 md:h-28 pointer-events-none z-10 overflow-hidden">
        <svg
          viewBox="0 0 600 130"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-cover object-left-bottom"
          preserveAspectRatio="none"
        >
          {/* Orange top wave ribbon */}
          <path
            d="M 0 52 C 80 32, 160 55, 230 85 C 310 120, 390 128, 480 122 C 530 118, 570 108, 600 95 L 600 106 C 565 119, 520 128, 475 130 C 385 134, 305 125, 225 90 C 155 60, 75 40, 0 62 Z"
            fill="#E86314"
          />
          {/* Green wave body */}
          <path
            d="M 0 62 C 75 40, 155 60, 225 90 C 305 125, 385 134, 475 130 C 520 128, 565 119, 600 106 L 600 130 L 0 130 Z"
            fill="#0D5C32"
          />
        </svg>
      </div>
    </section>
  );
}

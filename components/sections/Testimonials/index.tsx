'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Star, Heart, Quote } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import type { TestimonialsSectionData } from '../../types';

export default function Testimonials({ data }: { data: TestimonialsSectionData }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const total = data?.items?.length || 0;

  const nextSlide = useCallback(() => {
    if (total === 0) return;
    setDirection(1);
    setCurrentIdx((prev) => (prev < total - 1 ? prev + 1 : 0));
  }, [total]);

  const prevSlide = useCallback(() => {
    if (total === 0) return;
    setDirection(-1);
    setCurrentIdx((prev) => (prev > 0 ? prev - 1 : total - 1));
  }, [total]);

  const goToSlide = (idx: number) => {
    setDirection(idx > currentIdx ? 1 : -1);
    setCurrentIdx(idx);
  };

  // Autoslide effect (every 5 seconds, pauses when user hovers)
  useEffect(() => {
    if (isPaused || total <= 1) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, total, nextSlide]);

  if (!data || !data.items || data.items.length === 0) return null;

  const item = data.items[currentIdx];

  return (
    <section id="testimonials" className="py-10 sm:py-12 md:py-14 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-8 sm:mb-10"
        >
          {/* Eyebrow Pill with Heart */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EBF7F0] text-[#0D5C32] text-xs sm:text-sm font-semibold mb-4 shadow-xs">
            <Heart className="w-3.5 h-3.5 fill-[#0D5C32] text-[#0D5C32]" />
            <span>{data.badge}</span>
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold tracking-tight mb-3">
            <span className="text-[#0D5C32]">{data.heading_prefix}</span>{' '}
            <span className="text-[#E86314]">{data.heading_highlight}</span>
          </h2>

          {/* Dual Color Underline Accent (Green + Orange) */}
          <div className="flex items-center justify-center gap-1.5 mb-4">
            <span className="w-10 h-1 bg-[#0D5C32] rounded-full" />
            <span className="w-10 h-1 bg-[#E86314] rounded-full" />
          </div>

          {/* Subtitle Description */}
          <p className="text-sm sm:text-base md:text-lg text-[#4B5563] max-w-2xl mx-auto leading-relaxed">
            {data.subtitle}
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div
          className="relative max-w-4xl mx-auto px-4 sm:px-10"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous testimonial"
            className="absolute left-0 sm:-left-3 lg:-left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#E2F4E9] text-[#0D5C32] hover:bg-[#0D5C32] hover:text-white transition-all duration-300 shadow-sm flex items-center justify-center focus:outline-none cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
          </button>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next testimonial"
            className="absolute right-0 sm:-right-3 lg:-right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#E2F4E9] text-[#0D5C32] hover:bg-[#0D5C32] hover:text-white transition-all duration-300 shadow-sm flex items-center justify-center focus:outline-none cursor-pointer"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
          </button>

          {/* Main Card */}
          <div className="bg-white border border-gray-100/90 rounded-[28px] sm:rounded-[36px] p-6 sm:p-8 lg:p-9 shadow-[0_12px_32px_-10px_rgba(0,0,0,0.06)] min-h-[260px] flex items-center relative overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={item.id}
                custom={direction}
                initial={{ opacity: 0, x: direction * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -direction * 40 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-center w-full"
              >
                {/* Left Column: Avatar with Soft Mint Accent Circle */}
                <div className="md:col-span-4 flex justify-center md:justify-start">
                  <div className="relative">
                    {/* Background soft mint decorative circular blob */}
                    <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-[#E8F5EE] -z-0" />

                    {/* Circular Avatar Frame */}
                    <div className="relative z-10 w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-[3.5px] border-[#0D5C32] shadow-md bg-white">
                      <Image
                        src={item.avatar}
                        alt={item.avatar_alt}
                        fill
                        sizes="(max-width: 640px) 150px, 180px"
                        priority
                        className="object-cover object-center"
                      />
                    </div>
                  </div>
                </div>

                {/* Right Column: Quote + Author + 5 Stars */}
                <div className="md:col-span-8 text-center md:text-left">
                  {/* Mint Quote Icon Badge */}
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#EBF7F0] text-[#0D5C32] mb-3">
                    <Quote className="w-5 h-5 fill-[#0D5C32] text-[#0D5C32] rotate-180" />
                  </div>

                  {/* Quote Text */}
                  <p className="text-sm sm:text-base md:text-[17px] text-[#374151] leading-relaxed font-normal mb-6">
                    {item.quote}
                  </p>

                  {/* Author Meta + Star Rating */}
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6 pt-1">
                    {/* Name and Role */}
                    <div className="text-center md:text-left">
                      <h4 className="text-lg sm:text-xl font-bold text-[#0D5C32] leading-tight">
                        {item.author_name}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#6B7280] font-medium mt-0.5">
                        {item.role}
                      </p>
                    </div>

                    {/* Vertical Divider */}
                    <div className="hidden sm:block h-8 w-[1.5px] bg-gray-200" />

                    {/* 5 Filled Amber Stars */}
                    <div className="flex items-center gap-1" aria-label={`${item.rating} out of 5 stars`}>
                      {Array.from({ length: item.rating || 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 sm:w-5 sm:h-5 fill-[#F59E0B] text-[#F59E0B]"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-6 sm:mt-8">
            {data.items.map((it, idx) => (
              <button
                key={it.id}
                type="button"
                onClick={() => goToSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  currentIdx === idx
                    ? 'w-3 h-3 bg-[#0D5C32]'
                    : 'w-2.5 h-2.5 bg-[#C8E6D3] hover:bg-[#0D5C32]/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

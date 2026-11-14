'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import SectionBadge from '../../ui/SectionBadge';
import type { GallerySectionData } from '../../types';

export default function Gallery({ data }: { data: GallerySectionData }) {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const handlePrev = useCallback(() => {
    if (activeIdx === null) return;
    setActiveIdx((prev) => (prev! > 0 ? prev! - 1 : data.images.length - 1));
  }, [activeIdx, data.images.length]);

  const handleNext = useCallback(() => {
    if (activeIdx === null) return;
    setActiveIdx((prev) => (prev! < data.images.length - 1 ? prev! + 1 : 0));
  }, [activeIdx, data.images.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeIdx === null) return;
      if (e.key === 'Escape') setActiveIdx(null);
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIdx, handlePrev, handleNext]);

  return (
    <section id="gallery" className="py-10 md:py-14 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
          <SectionBadge text={data.badge} className="mb-3" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0D5C32] mb-3">
            {data.heading_prefix}{' '}
            <span className="text-[#E86314]">{data.heading_highlight}</span>
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            {data.subtitle}
          </p>
        </div>

        {/* 8-Photo Mosaic Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {data.images.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 border-2 border-white"
              onClick={() => setActiveIdx(index)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
              />

              {/* Hover Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wide uppercase bg-[#0D5C32] text-white w-fit mb-1">
                  {img.category}
                </span>
                <p className="text-xs text-white line-clamp-1 opacity-90">
                  {img.alt}
                </p>
              </div>

              {/* Quick view icon badge */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur-xs flex items-center justify-center text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Eye className="w-4 h-4 text-[#0D5C32]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setActiveIdx(null)}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setActiveIdx(null)}
              aria-label={data.close_aria_label}
              className="absolute top-5 right-5 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              aria-label={data.prev_aria_label}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>

            {/* Next Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              aria-label={data.next_aria_label}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50"
            >
              <ChevronRight className="w-7 h-7" />
            </button>

            {/* Modal Image Box */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl max-h-[85vh] w-full rounded-2xl overflow-hidden shadow-2xl bg-black"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={data.images[activeIdx].src}
                  alt={data.images[activeIdx].alt}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="p-4 bg-gray-900/90 text-white flex items-center justify-between">
                <div>
                  <span className="text-xs uppercase font-bold tracking-wider text-[#E86314] block">
                    {data.images[activeIdx].category}
                  </span>
                  <p className="text-sm text-gray-200 mt-0.5">
                    {data.images[activeIdx].alt}
                  </p>
                </div>
                <span className="text-xs text-gray-400 font-mono">
                  {activeIdx + 1} / {data.images.length}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}


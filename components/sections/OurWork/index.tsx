'use client';

import React from 'react';
import Image from 'next/image';
import {
  GraduationCap,
  HeartHandshake,
  Apple,
  Sprout,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react';
import { motion } from 'framer-motion';
import SectionBadge from '../../ui/SectionBadge';
import type { OurWorkSectionData } from '../../types';

const iconMap: Record<string, LucideIcon> = {
  GraduationCap,
  HeartHandshake,
  Apple,
  Sprout,
};

export default function OurWork({ data }: { data: OurWorkSectionData }) {
  return (
    <section id="work" className="py-10 md:py-14 bg-[#FAFDFB] relative">
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

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.items.map((item, index) => {
            const IconComp = iconMap[item.icon] || GraduationCap;
            return (
              <motion.a
                key={item.id}
                href={item.href}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Photo Header */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                  <Image
                    src={item.image}
                    alt={item.image_alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center group-hover:scale-108 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />

                  {/* Overlapping circular badge */}
                  <div
                    className="absolute bottom-3 left-4 w-11 h-11 rounded-full flex items-center justify-center shadow-md border-2 border-white"
                    style={{ backgroundColor: item.icon_bg }}
                  >
                    <IconComp
                      className="w-5 h-5"
                      style={{ color: item.icon_color }}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 group-hover:text-[#0D5C32] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4 flex-1">
                    {item.description}
                  </p>
                  <div className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#0D5C32] group-hover:text-[#E86314] transition-colors mt-auto">
                    <span>Support Program</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}


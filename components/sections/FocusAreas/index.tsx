'use client';

import React from 'react';
import {
  GraduationCap,
  HeartHandshake,
  Users,
  Sprout,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react';
import { motion } from 'framer-motion';
import SectionBadge from '../../ui/SectionBadge';
import type { FocusAreasSectionData } from '../../types';

const iconMap: Record<string, LucideIcon> = {
  GraduationCap,
  HeartHandshake,
  Users,
  Sprout,
};

export default function FocusAreas({ data }: { data: FocusAreasSectionData }) {
  return (
    <section id="focus-areas" className="py-10 md:py-14 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-10">
          <SectionBadge text={data.badge} className="mb-3" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0D5C32]">
            {data.heading_prefix}{' '}
            <span className="text-[#E86314]">{data.heading_highlight}</span>
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.items.map((item, index) => {
            const IconComponent = iconMap[item.icon] || GraduationCap;
            return (
              <motion.a
                key={item.id}
                href={item.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="group p-6 sm:p-7 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center relative overflow-hidden"
              >
                {/* Top Subtle Border Accent */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 transition-all duration-300 group-hover:h-1.5"
                  style={{ backgroundColor: item.icon_color }}
                />

                {/* Circular Icon */}
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: item.icon_bg }}
                >
                  <IconComponent
                    className="w-8 h-8 transition-transform"
                    style={{ color: item.icon_color }}
                  />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#0D5C32] transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Arrow hint */}
                <div className="mt-auto inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-gray-400 group-hover:text-[#E86314] transition-colors">
                  <span>{item.link_text || data.learn_more_text}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}


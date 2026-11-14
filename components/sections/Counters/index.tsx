'use client';

import React from 'react';
import {
  Users,
  GraduationCap,
  HeartPulse,
  Sprout,
  HeartHandshake,
  ShieldCheck,
  type LucideIcon,
} from 'lucide-react';
import { motion } from 'framer-motion';
import type { CountersSectionData } from '../../types';

const iconMap: Record<string, LucideIcon> = {
  Users,
  GraduationCap,
  HeartPulse,
  Sprout,
  HeartHandshake,
  ShieldCheck,
};

export default function Counters({ data }: { data: CountersSectionData }) {
  if (!data || !data.items) return null;

  return (
    <section
      id="counters"
      className="py-6 sm:py-8 md:py-9 bg-[#F2F9F5] border-y border-[#E2F0E8] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0">
          {/* Left Title Block */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left flex-shrink-0"
          >
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight">
              <span className="text-[#0D5C32] block">{data.title_prefix}</span>
              <span className="text-[#E86314] block">{data.title_highlight}</span>
            </h3>
          </motion.div>

          {/* Vertical Divider after Title (Desktop) */}
          <div className="hidden lg:block w-[1px] h-14 bg-[#D4E8DC] mx-6 xl:mx-10 flex-shrink-0" />

          {/* 4 Counter Items Row */}
          <div className="w-full flex-1 grid grid-cols-2 md:grid-cols-4 items-center gap-y-8 md:gap-y-0">
            {data.items.map((item, idx) => {
              const IconComp = iconMap[item.icon] || Users;
              const iconColor = item.icon_color;
              const isLast = idx === data.items.length - 1;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative flex flex-col items-center text-center px-3 sm:px-6 group cursor-default"
                >
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: [0, -6, 6, 0] }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center justify-center mb-1.5"
                  >
                    <IconComp
                      className="w-7 h-7 sm:w-8 sm:h-8 transition-transform duration-300"
                      style={{ color: iconColor }}
                    />
                  </motion.div>

                  {/* Number Value */}
                  <motion.div
                    initial={{ scale: 0.9 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 + 0.1 }}
                    className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold text-[#0D5C32] tracking-tight leading-tight mt-1 mb-0.5"
                  >
                    {item.value}
                  </motion.div>

                  {/* Label */}
                  <div className="text-xs sm:text-sm text-gray-600 font-medium">
                    {item.label}
                  </div>

                  {/* Vertical Divider on Right (Desktop & Tablet) */}
                  {!isLast && (
                    <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-12 bg-[#D4E8DC]" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

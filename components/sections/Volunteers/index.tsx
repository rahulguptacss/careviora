'use client';

import React from 'react';
import Image from 'next/image';
import { Users } from 'lucide-react';
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
} from '../../ui/SocialIcons';
import { motion } from 'framer-motion';
import type { VolunteersSectionData } from '../../types';

export default function Volunteers({ data }: { data: VolunteersSectionData }) {
  if (!data) return null;

  return (
    <section id="volunteers" className="py-10 md:py-14 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-8 md:mb-10"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-[#E8F5E9] text-[#0D5C32] border border-[#C8E6C9] shadow-2xs mb-3">
            <Users className="w-4 h-4 text-[#0D5C32]" />
            <span>{data.badge}</span>
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold text-[#0D5C32] tracking-tight leading-tight">
            {data.heading_prefix}{' '}
            <span className="text-[#E86314]">{data.heading_highlight}</span>
          </h2>

          {/* Dual-color divider */}
          <div className="flex items-center justify-center gap-1.5 mt-3 mb-4">
            <div className="w-8 h-1 bg-[#0D5C32] rounded-full" />
            <div className="w-8 h-1 bg-[#E86314] rounded-full" />
          </div>

          {/* Subtitle */}
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            {data.subtitle}
          </p>
        </motion.div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {data.items.map((vol, index) => (
            <motion.div
              key={vol.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col text-center"
            >
              {/* Photo */}
              <div className="relative w-full aspect-[4/3.4] bg-gray-50 overflow-hidden">
                <Image
                  src={vol.image}
                  alt={vol.image_alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center transform hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Info & Socials */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-[#0D5C32]">
                    {vol.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 font-medium mt-1">
                    {vol.role}
                  </p>
                </div>

                {/* Orange Divider Dash */}
                <div className="w-10 h-0.5 bg-[#E86314] rounded-full mx-auto my-3.5" />

                {/* Dynamic Social Icons from data.json */}
                <div className="flex items-center justify-center gap-2">
                  {(vol.socials || []).map((s) => {
                    const getIcon = () => {
                      switch (s.platform.toLowerCase()) {
                        case 'facebook': return <FacebookIcon className="w-3.5 h-3.5" />;
                        case 'instagram': return <InstagramIcon className="w-3.5 h-3.5" />;
                        case 'linkedin': return <LinkedinIcon className="w-3.5 h-3.5" />;
                        case 'youtube': return <YoutubeIcon className="w-3.5 h-3.5" />;
                        default: return null;
                      }
                    };
                    return (
                      <a
                        key={s.platform}
                        href={s.href}
                        aria-label={`${s.platform} - ${vol.name}`}
                        className="w-8 h-8 rounded-full bg-[#E8F5E9] text-[#0D5C32] hover:bg-[#0D5C32] hover:text-white flex items-center justify-center transition-colors shadow-2xs"
                      >
                        {getIcon()}
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

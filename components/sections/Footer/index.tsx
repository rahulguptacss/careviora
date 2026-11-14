'use client';

import React from 'react';
import Image from 'next/image';
import {
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  type LucideIcon,
} from 'lucide-react';
import { motion } from 'framer-motion';
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
} from '../../ui/SocialIcons';
import type { FooterData } from '../../types';

const contactIconMap: Record<string, LucideIcon> = {
  MapPin,
  Phone,
  Mail,
};

export default function Footer({ data }: { data: FooterData }) {
  const getSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'facebook':
        return <FacebookIcon className="w-4 h-4" />;
      case 'instagram':
        return <InstagramIcon className="w-4 h-4" />;
      case 'linkedin':
        return <LinkedinIcon className="w-4 h-4" />;
      case 'youtube':
        return <YoutubeIcon className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <footer className="bg-[#0A3F20] text-white pt-10 sm:pt-12 pb-6 border-t border-emerald-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-0">
          {/* Column 1: Brand Logo, Description & Socials */}
          <div className="lg:col-span-4 lg:pr-8 lg:border-r lg:border-white/15 flex flex-col justify-between">
            <div>
              <a href="#home" className="inline-block mb-4 group">
                <Image
                  src={data.logo}
                  alt={`${data.logo_text} - ${data.logo_subtext}`}
                  width={280}
                  height={70}
                  className="h-10 sm:h-12 w-auto object-contain object-left"
                />
              </a>

              <p className="text-[13.5px] leading-relaxed text-white/90 max-w-[290px] mb-5">
                {data.tagline}
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2 mb-6 lg:mb-0">
              {(data.social_links ?? []).map((s) => (
                <motion.a
                  key={s.platform}
                  href={s.href}
                  whileHover={{ scale: 1.12, y: -2 }}
                  whileTap={{ scale: 0.94 }}
                  aria-label={s.platform}
                  className="w-9 h-9 rounded-full bg-[#145C33] hover:bg-[#E86314] text-white flex items-center justify-center transition-colors shadow-xs"
                >
                  {getSocialIcon(s.platform)}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-4 lg:px-12 lg:border-r lg:border-white/15">
            <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
              {data.quick_links_title}
            </h3>
            <div className="w-8 h-[3.5px] bg-[#E86314] rounded-full mb-4" />

            <ul className="space-y-2.5">
              {data.quick_links.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 3 }}
                    className="group inline-flex items-center gap-2 text-[15px] text-white/90 hover:text-white transition-colors"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-white/70 group-hover:text-[#E86314] transition-colors shrink-0" />
                    <span>{link.name}</span>
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Get In Touch */}
          <div className="lg:col-span-4 lg:pl-12">
            <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
              {data.contact_title}
            </h3>
            <div className="w-8 h-[3.5px] bg-[#E86314] rounded-full mb-4" />

            <div className="space-y-3.5">
              {data.contact_items.map((ci) => {
                const IconComp = contactIconMap[ci.icon] || MapPin;
                const content = (
                  <div className="flex items-start gap-3.5 group">
                    <div className="w-10 h-10 rounded-2xl bg-[#145C33] border border-white/10 flex items-center justify-center text-white shrink-0 group-hover:bg-[#E86314] transition-colors mt-0.5">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-[15px] font-bold text-white mb-0.5">
                        {ci.title}
                      </h4>
                      {ci.lines.map((line, lIdx) => (
                        <p
                          key={lIdx}
                          className="text-[13.5px] text-white/85 leading-snug"
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                );

                return ci.href ? (
                  <motion.a
                    key={ci.id}
                    href={ci.href}
                    whileHover={{ x: 2 }}
                    className="block"
                  >
                    {content}
                  </motion.a>
                ) : (
                  <div key={ci.id}>{content}</div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Horizontal Divider & Copyright Bar */}
        <div className="mt-8 sm:mt-10 pt-4 sm:pt-5 border-t border-white/20 text-center">
          <p className="text-sm text-white/90">
            {data.copyright_prefix}{' '}
            <span className="text-[#E86314] font-bold">
              {data.copyright_brand}
            </span>
            {data.copyright_suffix ? ` ${data.copyright_suffix}` : ''}
          </p>
        </div>
      </div>
    </footer>
  );
}

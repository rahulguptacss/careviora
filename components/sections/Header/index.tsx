'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import type { HeaderData } from '../../types';

export default function Header({ data }: { data: HeaderData }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeName, setActiveName] = useState<string>(data.links[0]?.name ?? 'Home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const pageSections = [
        { id: 'home', name: 'Home' },
        { id: 'focus-areas', name: 'Focus Areas' },
        { id: 'about', name: 'About Us' },
        { id: 'counters', name: 'Impact' },
        { id: 'why-support', name: 'Why Support' },
        { id: 'work', name: 'Our Work' },
        { id: 'gallery', name: 'Gallery' },
        { id: 'cta', name: 'Support Us' },
        { id: 'testimonials', name: 'Testimonials' },
        { id: 'volunteers', name: 'Volunteers' },
        { id: 'contact', name: 'Contact Us' },
      ];

      const scrollPos = window.innerHeight + window.scrollY;
      const scrollMax = document.documentElement.scrollHeight;
      if (scrollPos >= scrollMax - 80) {
        setActiveName('Contact Us');
        return;
      }

      const threshold = 160;
      let matchedName = '';
      for (const section of pageSections) {
        const el = document.getElementById(section.id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= threshold && rect.bottom > threshold) {
          matchedName = section.name;
          break;
        }
      }

      if (matchedName) {
        setActiveName(matchedName);
      } else if (window.scrollY < 120 && data.links[0]?.name) {
        setActiveName(data.links[0].name);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [data.links]);

  return (
    <header className="sticky top-0 z-50 bg-white">
      {/* Main Navbar Bar */}
      <div
        className={`w-full transition-all duration-300 ${
          scrolled
            ? 'py-3 bg-white/95 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.05)]'
            : 'py-4 sm:py-4.5 bg-white'
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="flex items-center justify-between">
            {/* Left: CareViora Brand Logo */}
            <motion.a
              href="#home"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center shrink-0 group focus:outline-none"
            >
              <Image
                src={data.logo}
                alt={`${data.logo_text} - ${data.logo_subtext}`}
                width={300}
                height={70}
                priority
                className="h-[38px] sm:h-[44px] lg:h-[48px] w-auto object-contain"
              />
            </motion.a>

            {/* Right: Desktop Navigation Links with Generous Gap Spacing */}
            <nav className="hidden xl:flex items-center gap-4 xl:gap-5 2xl:gap-7">
              {data.links.map((link) => {
                const isActive = activeName === link.name;
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    whileHover={{ y: -1, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`relative text-[14px] 2xl:text-[15.5px] px-1 py-1 tracking-tight transition-colors duration-200 select-none whitespace-nowrap ${
                      isActive
                        ? 'text-[#0D5C32] font-bold'
                        : 'text-[#18181B] hover:text-[#0D5C32] font-semibold'
                    }`}
                  >
                    <span>{link.name}</span>

                    {/* Smooth sliding active underline */}
                    {isActive && (
                      <motion.span
                        layoutId="activeHeaderNavUnderline"
                        className="absolute -bottom-1 left-0.5 right-0.5 h-[2.5px] bg-[#0D5C32] rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </motion.a>
                );
              })}
            </nav>

            {/* Mobile Hamburger Menu Button */}
            <div className="xl:hidden flex items-center">
              <motion.button
                type="button"
                whileTap={{ scale: 0.9 }}
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label={mobileOpen ? data.close_aria_label : data.menu_aria_label}
                className="p-2 rounded-xl text-gray-800 hover:text-[#0D5C32] hover:bg-emerald-50 transition-colors focus:outline-none"
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation with Staggered Motion */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
            className="xl:hidden border-t border-gray-100 bg-white shadow-xl overflow-hidden max-h-[80vh] overflow-y-auto"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              {data.links.map((link, idx) => {
                const isActive = activeName === link.name;
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.03 }}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-4 py-2.5 rounded-xl text-sm sm:text-base font-semibold transition-all ${
                      isActive
                        ? 'text-[#0D5C32] bg-[#E8F5E9] font-bold shadow-2xs'
                        : 'text-gray-800 hover:bg-gray-50 hover:text-[#0D5C32]'
                    }`}
                  >
                    {link.name}
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

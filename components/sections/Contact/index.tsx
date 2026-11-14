'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  MapPin,
  Mail,
  Phone,
  User,
  Edit3,
  MessageSquare,
  ArrowRight,
  CheckCircle2,
  type LucideIcon,
} from 'lucide-react';
import { motion } from 'framer-motion';
import type { ContactSectionData } from '../../types';

const iconMap: Record<string, LucideIcon> = {
  MapPin,
  Mail,
  Phone,
};

export default function Contact({ data }: { data: ContactSectionData }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!data) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    }, 700);
  };

  return (
    <section id="contact" className="py-10 md:py-14 bg-[#FAFCFA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-8 md:mb-10"
        >
          {/* Badge with phone icon */}
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-[#E8F5E9] text-[#0D5C32] border border-[#C8E6C9] shadow-2xs mb-3">
            <Phone className="w-3.5 h-3.5 text-[#0D5C32]" />
            <span>{data.badge}</span>
          </div>

          {/* Heading with 3 orange rays */}
          <div className="relative inline-block">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold text-[#0D5C32] tracking-tight leading-tight">
              {data.heading_prefix}{' '}
              <span className="text-[#E86314] relative inline-block">
                {data.heading_highlight}
                {/* 3 orange decorative ray lines */}
                <span className="absolute -top-3 -right-6 select-none pointer-events-none">
                  <svg
                    className="w-6 h-6 text-[#E86314]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  >
                    <line x1="6" y1="18" x2="10" y2="8" />
                    <line x1="14" y1="18" x2="18" y2="6" />
                    <line x1="22" y1="18" x2="24" y2="8" />
                  </svg>
                </span>
              </span>
            </h2>
          </div>

          {/* Dual-color divider */}
          <div className="flex items-center justify-center gap-1.5 mt-3 mb-4">
            <div className="w-8 h-1 bg-[#0D5C32] rounded-full" />
            <div className="w-8 h-1 bg-[#E86314] rounded-full" />
          </div>

          {/* Subtitle */}
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            {data.subtitle_line1 || 'Have a question, want to collaborate, or wish to support our cause?'}
            <br className="hidden sm:inline" />
            {data.subtitle_line2 || "We'd love to hear from you."}
          </p>
        </motion.div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: White Card with Photo & 3 Info Rows */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden flex flex-col"
          >
            {/* Top Photo */}
            <div className="relative w-full h-52 sm:h-56 bg-gray-50 flex-shrink-0">
              <Image
                src={data.image}
                alt={data.image_alt || 'CareViora children'}
                fill
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover object-center"
              />
            </div>

            {/* Contact Info Rows */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-around space-y-5">
              {data.cards.map((card, idx) => {
                const IconComp = iconMap[card.icon] || MapPin;
                const isLast = idx === data.cards.length - 1;
                const lines =
                  card.lines ||
                  ([card.line1, card.line2].filter(Boolean) as string[]);

                return (
                  <div
                    key={card.id}
                    className={`flex items-start gap-4 ${
                      !isLast ? 'border-b border-gray-100 pb-5' : ''
                    }`}
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-xs"
                      style={{ backgroundColor: card.icon_bg || '#0D5C32' }}
                    >
                      <IconComp className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-[#0D5C32] mb-0.5">
                        {card.title}
                      </h4>
                      {lines.map((line, lIdx) => (
                        <p
                          key={lIdx}
                          className="text-xs sm:text-sm text-gray-600 leading-snug"
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Forest Green Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-[#0A4D27] text-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {data.form.card_title || 'Leave Us a Message'}
              </h3>
              <div className="w-14 h-1 bg-[#E86314] rounded-full mt-2.5 mb-7" />

              {submitted ? (
                <div className="bg-emerald-900/60 border border-emerald-500/50 rounded-2xl p-8 text-center my-6">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
                  <p className="text-white font-semibold text-lg">
                    {data.form.success_message ||
                      'Thank you! Your message has been sent successfully.'}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  {/* Row 1: Full Name and Email Address */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-800 pointer-events-none" />
                      <input
                        type="text"
                        required
                        name="name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder={
                          data.form.name_placeholder || 'Your Full Name*'
                        }
                        className="w-full bg-white text-gray-800 placeholder-gray-500 text-sm pl-11 pr-4 py-3.5 rounded-xl border border-white focus:outline-none focus:ring-2 focus:ring-[#E86314]"
                      />
                    </div>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-800 pointer-events-none" />
                      <input
                        type="email"
                        required
                        name="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder={
                          data.form.email_placeholder || 'Your Email Address*'
                        }
                        className="w-full bg-white text-gray-800 placeholder-gray-500 text-sm pl-11 pr-4 py-3.5 rounded-xl border border-white focus:outline-none focus:ring-2 focus:ring-[#E86314]"
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone Number and Subject */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-800 pointer-events-none" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder={
                          data.form.phone_placeholder || 'Your Phone Number*'
                        }
                        className="w-full bg-white text-gray-800 placeholder-gray-500 text-sm pl-11 pr-4 py-3.5 rounded-xl border border-white focus:outline-none focus:ring-2 focus:ring-[#E86314]"
                      />
                    </div>
                    <div className="relative">
                      <Edit3 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-800 pointer-events-none" />
                      <input
                        type="text"
                        required
                        name="subject"
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        placeholder={data.form.subject_placeholder || 'Subject*'}
                        className="w-full bg-white text-gray-800 placeholder-gray-500 text-sm pl-11 pr-4 py-3.5 rounded-xl border border-white focus:outline-none focus:ring-2 focus:ring-[#E86314]"
                      />
                    </div>
                  </div>

                  {/* Row 3: Message Textarea */}
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-emerald-800 pointer-events-none" />
                    <textarea
                      required
                      rows={4}
                      name="message"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder={
                        data.form.message_placeholder || 'Your Message*'
                      }
                      className="w-full bg-white text-gray-800 placeholder-gray-500 text-sm pl-11 pr-4 py-3.5 rounded-xl border border-white focus:outline-none focus:ring-2 focus:ring-[#E86314] resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center gap-2 bg-[#E86314] hover:bg-[#d5580f] disabled:opacity-70 text-white font-bold text-sm sm:text-base px-7 py-3.5 rounded-xl shadow-md transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                    >
                      <span>
                        {isSubmitting
                          ? data.form.submitting_text || 'Sending...'
                          : data.form.submit_button || 'Send Message'}
                      </span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { Leaf } from 'lucide-react';

interface SectionBadgeProps {
  text: string;
  className?: string;
  showLeaf?: boolean;
}

export default function SectionBadge({
  text,
  className = '',
  showLeaf = true,
}: SectionBadgeProps) {
  return (
    <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-[#E8F5E9] text-[#0D5C32] border border-[#C8E6C9] shadow-xs ${className}`}>
      {showLeaf && <Leaf className="w-3.5 h-3.5 text-[#0D5C32]" />}
      <span>{text}</span>
    </div>
  );
}


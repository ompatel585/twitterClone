import React from 'react';

const SIZES = { sm: 'h-8 w-8 text-xs', md: 'h-10 w-10 text-sm', lg: 'h-12 w-12 text-base', xl: 'h-28 w-28 text-3xl' };

const initials = (name) =>
  name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

export default function Avatar({ person, size = 'md', className = '' }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-flex shrink-0 select-none items-center justify-center rounded-full font-semibold text-white ${SIZES[size]} ${className}`}
      style={{
        background: `linear-gradient(135deg, hsl(${person.hue} 70% 52%), hsl(${(person.hue + 40) % 360} 65% 38%))`,
      }}
    >
      {initials(person.name)}
    </span>
  );
}

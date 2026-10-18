import React from 'react';
import { LuSearch } from 'react-icons/lu';

export default function SearchInput({ value, onChange, placeholder = 'Search', className = '' }) {
  return (
    <label
      className={`group flex h-11 items-center gap-3 rounded-full border border-transparent bg-raised px-4 text-muted transition-colors focus-within:border-accent focus-within:bg-bg ${className}`}
    >
      <LuSearch size={18} className="shrink-0 group-focus-within:text-accent" />
      <input
        type="search"
        value={value}
        onChange={onChange && ((e) => onChange(e.target.value))}
        placeholder={placeholder}
        aria-label={placeholder}
        className="w-full min-w-0 bg-transparent text-sm text-fg placeholder:text-muted focus:outline-none focus-visible:ring-0"
      />
    </label>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Underlined tab strip. Each tab is `{ id, label, to? }`; tabs with `to` render as links,
 * otherwise they call `onChange(id)`.
 */
export default function Tabs({ tabs, active, onChange, className = '' }) {
  return (
    <div role="tablist" className={`flex overflow-x-auto no-scrollbar border-b border-line ${className}`}>
      {tabs.map((tab) => {
        const selected = tab.id === active;
        const classes = `relative flex-1 whitespace-nowrap px-4 py-3.5 text-center text-sm font-medium transition-colors hover:bg-raised/60 ${
          selected ? 'text-fg' : 'text-muted'
        }`;
        const indicator = selected && (
          <span className="absolute inset-x-1/2 bottom-0 h-[3px] w-10 -translate-x-1/2 rounded-full bg-accent" />
        );
        return tab.to ? (
          <Link key={tab.id} to={tab.to} role="tab" aria-selected={selected} className={classes}>
            {tab.label}
            {indicator}
          </Link>
        ) : (
          <button key={tab.id} role="tab" aria-selected={selected} onClick={() => onChange(tab.id)} className={classes}>
            {tab.label}
            {indicator}
          </button>
        );
      })}
    </div>
  );
}

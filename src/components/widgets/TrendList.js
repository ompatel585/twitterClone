import React from 'react';
import { LuMoreHorizontal } from 'react-icons/lu';
import { trendCategories } from '../../data/trends';
import { formatCount } from '../../utils/format';

export function TrendItem({ trend, rank }) {
  return (
    <button className="flex w-full items-start justify-between gap-3 px-4 py-3 text-left transition-colors hover:bg-raised/70">
      <div className="min-w-0">
        <p className="text-xs text-muted">
          {rank !== undefined && <span className="mr-1">{rank} ·</span>}
          {trendCategories[trend.category]} · Trending
        </p>
        <p className="mt-0.5 truncate font-semibold">{trend.topic}</p>
        <p className="mt-0.5 text-xs text-muted">{formatCount(trend.posts)} posts</p>
      </div>
      <LuMoreHorizontal size={17} className="mt-1 shrink-0 text-muted" aria-hidden="true" />
    </button>
  );
}

export default function TrendList({ trends, title = 'What’s happening', limit, ranked = false }) {
  const items = limit ? trends.slice(0, limit) : trends;
  return (
    <section className="card overflow-hidden">
      {title && <h2 className="px-4 pb-1 pt-4 text-lg font-bold">{title}</h2>}
      {items.map((trend, i) => (
        <TrendItem key={trend.id} trend={trend} rank={ranked ? i + 1 : undefined} />
      ))}
    </section>
  );
}

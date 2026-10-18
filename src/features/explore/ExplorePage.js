import React, { useMemo, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { LuSearchX } from 'react-icons/lu';
import PageHeader from '../../components/layout/PageHeader';
import EmptyState from '../../components/ui/EmptyState';
import SearchInput from '../../components/ui/SearchInput';
import Tabs from '../../components/ui/Tabs';
import { TrendItem } from '../../components/widgets/TrendList';
import { trendCategories, trends } from '../../data/trends';

const TABS = [
  { id: 'foryou', label: 'For you', to: '/explore' },
  { id: 'trending', label: 'Trending', to: '/explore/trending' },
  ...Object.entries(trendCategories).map(([id, label]) => ({ id, label, to: `/explore/${id}` })),
];

export default function ExplorePage() {
  const { tab = 'foryou' } = useParams();
  const [query, setQuery] = useState('');

  const items = useMemo(() => {
    const byTab = tab in trendCategories ? trends.filter((t) => t.category === tab) : trends;
    const sorted = tab === 'foryou' ? byTab : [...byTab].sort((a, b) => b.posts - a.posts);
    const q = query.trim().toLowerCase();
    return q ? sorted.filter((t) => t.topic.toLowerCase().includes(q)) : sorted;
  }, [tab, query]);

  if (!TABS.some((t) => t.id === tab)) return <Navigate to="/explore" replace />;

  return (
    <>
      <PageHeader title="Explore">
        <div className="px-4 pb-3">
          <SearchInput value={query} onChange={setQuery} placeholder="Search topics" />
        </div>
        <Tabs tabs={TABS} active={tab} />
      </PageHeader>

      {items.length === 0 ? (
        <EmptyState icon={LuSearchX} title="No results">
          Nothing matches “{query}”. Try a different keyword.
        </EmptyState>
      ) : (
        <div className="divide-y divide-line">
          {items.map((trend, i) => (
            <TrendItem key={trend.id} trend={trend} rank={tab === 'foryou' ? undefined : i + 1} />
          ))}
        </div>
      )}
    </>
  );
}

import React from 'react';
import { trends } from '../../data/trends';
import SearchInput from '../ui/SearchInput';
import PremiumCard from '../widgets/PremiumCard';
import TrendList from '../widgets/TrendList';
import WhoToFollow from '../widgets/WhoToFollow';

export default function RightRail() {
  return (
    <aside className="sticky top-0 hidden h-screen w-[350px] shrink-0 flex-col gap-4 overflow-y-auto no-scrollbar py-3 pl-6 lg:flex">
      <SearchInput />
      <PremiumCard />
      <TrendList trends={trends} limit={4} />
      <WhoToFollow />
      <p className="px-2 pb-4 text-xs leading-relaxed text-muted">
        Terms · Privacy · Cookies · Accessibility · Ads info
        <br />© {new Date().getFullYear()} Threads
      </p>
    </aside>
  );
}

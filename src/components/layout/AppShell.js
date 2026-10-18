import React, { useCallback, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import ComposeModal from './ComposeModal';
import RightRail from './RightRail';
import Sidebar, { MobileNav } from './Sidebar';

// Routes that use the full width instead of showing the right rail.
const WIDE_ROUTES = ['/messages'];

export default function AppShell() {
  const { pathname } = useLocation();
  const [composing, setComposing] = useState(false);
  const openCompose = useCallback(() => setComposing(true), []);
  const closeCompose = useCallback(() => setComposing(false), []);
  const wide = WIDE_ROUTES.some((route) => pathname.startsWith(route));

  return (
    <div className="mx-auto flex min-h-screen max-w-[1280px] justify-center">
      <Sidebar onCompose={openCompose} />
      <main className={`min-h-screen w-full border-line pb-20 md:border-x md:pb-0 ${wide ? 'max-w-[900px]' : 'max-w-[600px]'}`}>
        <Outlet />
      </main>
      {!wide && <RightRail />}
      <MobileNav onCompose={openCompose} />
      {composing && <ComposeModal onClose={closeCompose} />}
    </div>
  );
}

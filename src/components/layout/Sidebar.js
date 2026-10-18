import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { LuMoreHorizontal, LuPenLine } from 'react-icons/lu';
import { currentUser } from '../../data/people';
import Avatar from '../ui/Avatar';
import Logo from './Logo';
import { navItems } from './navItems';

function NavItem({ to, label, icon: Icon, end, badge }) {
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        `group flex items-center gap-4 rounded-full p-3 transition-colors hover:bg-raised xl:pr-6 ${
          isActive ? 'font-bold text-fg' : 'text-fg/80'
        }`
      }
    >
      {({ isActive }) => (
        <>
          <span className="relative">
            <Icon size={24} strokeWidth={isActive ? 2.6 : 2} />
            {badge > 0 && (
              <span className="absolute -right-1.5 -top-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-accent px-1 text-[10px] font-bold text-bg">
                {badge}
              </span>
            )}
          </span>
          <span className="hidden text-[17px] xl:inline">{label}</span>
        </>
      )}
    </NavLink>
  );
}

export function MobileNav({ onCompose }) {
  return (
    <>
      <nav
        aria-label="Primary"
        className="fixed inset-x-0 bottom-0 z-30 flex justify-around border-t border-line bg-bg/90 px-2 py-1.5 backdrop-blur md:hidden"
      >
        {navItems
          .filter((item) => item.to !== '/grok')
          .map(({ to, label, icon: Icon, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              aria-label={label}
              className={({ isActive }) => `rounded-full p-3 ${isActive ? 'text-accent' : 'text-muted'}`}
            >
              <Icon size={22} />
            </NavLink>
          ))}
      </nav>
      <button
        onClick={onCompose}
        aria-label="New post"
        className="fixed bottom-20 right-4 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-bg shadow-lg shadow-black/40 md:hidden"
      >
        <LuPenLine size={22} />
      </button>
    </>
  );
}

export default function Sidebar({ onCompose }) {
  return (
    <header className="sticky top-0 hidden h-screen flex-col justify-between px-2 py-3 md:flex xl:w-[275px]">
      <div>
        <Link to="/" aria-label="Home" className="mb-2 inline-flex rounded-full p-3 hover:bg-raised">
          <Logo size={30} />
        </Link>
        <nav aria-label="Primary" className="flex flex-col gap-0.5">
          {navItems.map((item) => (
            <NavItem key={item.to} {...item} />
          ))}
        </nav>
        <button onClick={onCompose} className="btn-primary mt-4 !h-12 w-12 !p-0 xl:w-full xl:!text-base" aria-label="New post">
          <LuPenLine size={20} className="xl:hidden" />
          <span className="hidden xl:inline">Post</span>
        </button>
      </div>

      <Link to="/profile" className="flex items-center gap-3 rounded-full p-2.5 transition-colors hover:bg-raised">
        <Avatar person={currentUser} />
        <div className="hidden min-w-0 flex-1 xl:block">
          <p className="truncate text-sm font-semibold">{currentUser.name}</p>
          <p className="truncate text-sm text-muted">@{currentUser.handle}</p>
        </div>
        <LuMoreHorizontal size={18} className="hidden text-muted xl:block" />
      </Link>
    </header>
  );
}

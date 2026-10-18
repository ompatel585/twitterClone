import { LuBell, LuHome, LuMail, LuSearch, LuSparkles, LuUser } from 'react-icons/lu';

export const navItems = [
  { to: '/', label: 'Home', icon: LuHome, end: true },
  { to: '/explore', label: 'Explore', icon: LuSearch },
  { to: '/notifications', label: 'Notifications', icon: LuBell, badge: 3 },
  { to: '/messages', label: 'Messages', icon: LuMail },
  { to: '/grok', label: 'Grok', icon: LuSparkles },
  { to: '/profile', label: 'Profile', icon: LuUser },
];

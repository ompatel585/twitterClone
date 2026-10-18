import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { LuAtSign, LuBellOff, LuHeart, LuRepeat2, LuSettings, LuUser } from 'react-icons/lu';
import PageHeader from '../../components/layout/PageHeader';
import Avatar from '../../components/ui/Avatar';
import EmptyState from '../../components/ui/EmptyState';
import Tabs from '../../components/ui/Tabs';
import { notifications } from '../../data/notifications';
import { peopleById } from '../../data/people';
import { timeAgo } from '../../utils/format';

const TABS = [
  { id: 'all', label: 'All', to: '/notifications' },
  { id: 'verified', label: 'Verified', to: '/notifications/verified' },
  { id: 'mentions', label: 'Mentions', to: '/notifications/mentions' },
];

const KINDS = {
  like: { icon: LuHeart, tone: 'text-love', verb: 'liked your post' },
  repost: { icon: LuRepeat2, tone: 'text-success', verb: 'reposted your post' },
  follow: { icon: LuUser, tone: 'text-accent', verb: 'followed you' },
  mention: { icon: LuAtSign, tone: 'text-accent', verb: 'mentioned you' },
};

const FILTERS = {
  all: () => true,
  verified: (n) => peopleById[n.actorId].verified,
  mentions: (n) => n.type === 'mention',
};

function NotificationRow({ item }) {
  const actor = peopleById[item.actorId];
  const { icon: Icon, tone, verb } = KINDS[item.type];
  return (
    <li className="flex gap-3 border-b border-line px-4 py-3.5 transition-colors hover:bg-surface/60">
      <Icon size={22} className={`mt-1.5 shrink-0 ${tone}`} aria-hidden="true" />
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <Avatar person={actor} size="sm" />
          <span className="ml-auto text-xs text-muted">{timeAgo(item.createdAt)}</span>
        </div>
        <p className="mt-2 text-[15px]">
          <span className="font-semibold">{actor.name}</span> <span className="text-muted">{verb}</span>
        </p>
        {item.excerpt && <p className="mt-1 text-sm leading-relaxed text-muted">{item.excerpt}</p>}
      </div>
    </li>
  );
}

export default function NotificationsPage() {
  const { tab = 'all' } = useParams();
  if (!(tab in FILTERS)) return <Navigate to="/notifications" replace />;

  const items = notifications.filter(FILTERS[tab]);

  return (
    <>
      <PageHeader
        title="Notifications"
        actions={
          <button className="icon-btn" aria-label="Notification settings">
            <LuSettings size={19} />
          </button>
        }
      >
        <Tabs tabs={TABS} active={tab} />
      </PageHeader>

      {items.length === 0 ? (
        <EmptyState icon={LuBellOff} title="Nothing to see here — yet">
          Likes, reposts and replies will show up here as they happen.
        </EmptyState>
      ) : (
        <ul>
          {items.map((item) => (
            <NotificationRow key={item.id} item={item} />
          ))}
        </ul>
      )}
    </>
  );
}

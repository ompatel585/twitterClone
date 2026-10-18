import React, { useState } from 'react';
import { LuCalendar, LuLink, LuMapPin } from 'react-icons/lu';
import PageHeader from '../../components/layout/PageHeader';
import PostCard from '../../components/post/PostCard';
import Avatar from '../../components/ui/Avatar';
import EmptyState from '../../components/ui/EmptyState';
import Tabs from '../../components/ui/Tabs';
import { usePosts } from '../../context/PostsContext';
import { currentUser as me } from '../../data/people';
import { formatCount } from '../../utils/format';

const TABS = [
  { id: 'posts', label: 'Posts' },
  { id: 'likes', label: 'Likes' },
  { id: 'bookmarks', label: 'Bookmarks' },
];

const FILTERS = {
  posts: (p) => p.authorId === 'me',
  likes: (p) => p.liked,
  bookmarks: (p) => p.bookmarked,
};

const EMPTY = {
  posts: ['No posts yet', 'Posts you write will show up here.'],
  likes: ['No likes yet', 'Tap the heart on any post and it will be saved here.'],
  bookmarks: ['Nothing saved', 'Bookmark posts to come back to them later.'],
};

export default function ProfilePage() {
  const { posts } = usePosts();
  const [tab, setTab] = useState('posts');
  const items = posts.filter(FILTERS[tab]);
  const postCount = posts.filter(FILTERS.posts).length;

  return (
    <>
      <PageHeader title={me.name} subtitle={`${formatCount(postCount)} posts`} back />

      <div className="h-36 bg-gradient-to-br from-accent/40 via-indigo-500/20 to-fuchsia-500/20" />
      <div className="px-4 pb-4">
        <div className="-mt-14 flex items-end justify-between">
          <Avatar person={me} size="xl" className="ring-4 ring-bg" />
          <button className="btn-outline mb-2">Edit profile</button>
        </div>

        <h2 className="mt-3 text-xl font-extrabold leading-tight">{me.name}</h2>
        <p className="text-sm text-muted">@{me.handle}</p>
        <p className="mt-3 text-[15px] leading-relaxed">{me.bio}</p>

        <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted">
          <li className="flex items-center gap-1.5"><LuMapPin size={15} /> {me.location}</li>
          <li className="flex items-center gap-1.5"><LuLink size={15} /> <span className="text-accent">{me.link}</span></li>
          <li className="flex items-center gap-1.5"><LuCalendar size={15} /> Joined {me.joined}</li>
        </ul>

        <p className="mt-3 flex gap-5 text-sm">
          <span><b>{formatCount(me.following)}</b> <span className="text-muted">Following</span></span>
          <span><b>{formatCount(me.followers)}</b> <span className="text-muted">Followers</span></span>
        </p>
      </div>

      <Tabs tabs={TABS} active={tab} onChange={setTab} />

      {items.length === 0 ? (
        <EmptyState title={EMPTY[tab][0]}>{EMPTY[tab][1]}</EmptyState>
      ) : (
        items.map((post) => <PostCard key={post.id} post={post} />)
      )}
    </>
  );
}

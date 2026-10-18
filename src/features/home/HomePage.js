import React, { useState } from 'react';
import PageHeader from '../../components/layout/PageHeader';
import Composer from '../../components/post/Composer';
import PostCard from '../../components/post/PostCard';
import Tabs from '../../components/ui/Tabs';
import { usePosts } from '../../context/PostsContext';

const TABS = [
  { id: 'for-you', label: 'For you' },
  { id: 'following', label: 'Following' },
];

export default function HomePage() {
  const { posts, following } = usePosts();
  const [tab, setTab] = useState('for-you');

  const visible = tab === 'following' ? posts.filter((p) => following.has(p.authorId) || p.authorId === 'me') : posts;

  return (
    <>
      <PageHeader title="Home">
        <Tabs tabs={TABS} active={tab} onChange={setTab} className="border-b-0" />
      </PageHeader>
      <Composer />
      {visible.length === 0 ? (
        <p className="px-6 py-16 text-center text-sm text-muted">
          Follow a few people from the suggestions to see their posts here.
        </p>
      ) : (
        visible.map((post) => <PostCard key={post.id} post={post} />)
      )}
    </>
  );
}

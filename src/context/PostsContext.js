import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { seedPosts } from '../data/posts';

const PostsContext = createContext(null);

const flip = (post, flag, counter) => {
  const on = !post[flag];
  return { ...post, [flag]: on, ...(counter && { [counter]: post[counter] + (on ? 1 : -1) }) };
};

export function PostsProvider({ children }) {
  const [posts, setPosts] = useState(seedPosts);
  const [following, setFollowing] = useState(() => new Set());

  const update = useCallback((id, flag, counter) => {
    setPosts((list) => list.map((p) => (p.id === id ? flip(p, flag, counter) : p)));
  }, []);

  const value = useMemo(
    () => ({
      posts,
      following,
      addPost: (text) =>
        setPosts((list) => [
          { id: `local-${Date.now()}`, authorId: 'me', createdAt: Date.now(), text, replies: 0, reposts: 0, likes: 0, views: 1 },
          ...list,
        ]),
      toggleLike: (id) => update(id, 'liked', 'likes'),
      toggleRepost: (id) => update(id, 'reposted', 'reposts'),
      toggleBookmark: (id) => update(id, 'bookmarked'),
      toggleFollow: (id) =>
        setFollowing((set) => {
          const next = new Set(set);
          next.has(id) ? next.delete(id) : next.add(id);
          return next;
        }),
    }),
    [posts, following, update]
  );

  return <PostsContext.Provider value={value}>{children}</PostsContext.Provider>;
}

export function usePosts() {
  const ctx = useContext(PostsContext);
  if (!ctx) throw new Error('usePosts must be used inside <PostsProvider>');
  return ctx;
}

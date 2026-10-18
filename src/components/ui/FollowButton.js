import React from 'react';
import { usePosts } from '../../context/PostsContext';

export default function FollowButton({ personId, className = '' }) {
  const { following, toggleFollow } = usePosts();
  const isFollowing = following.has(personId);
  return (
    <button
      onClick={() => toggleFollow(personId)}
      aria-pressed={isFollowing}
      className={`btn ${isFollowing ? 'btn-outline' : 'bg-fg text-bg hover:bg-fg/90'} !py-1.5 ${className}`}
    >
      {isFollowing ? 'Following' : 'Follow'}
    </button>
  );
}

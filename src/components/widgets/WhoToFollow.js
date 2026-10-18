import React from 'react';
import { followSuggestions } from '../../data/people';
import Avatar from '../ui/Avatar';
import FollowButton from '../ui/FollowButton';
import VerifiedBadge from '../ui/VerifiedBadge';

export default function WhoToFollow() {
  return (
    <section className="card overflow-hidden">
      <h2 className="px-4 pb-1 pt-4 text-lg font-bold">Who to follow</h2>
      {followSuggestions.map((person) => (
        <div key={person.id} className="flex items-center gap-3 px-4 py-3 transition-colors hover:bg-raised/70">
          <Avatar person={person} />
          <div className="min-w-0 flex-1">
            <p className="flex items-center gap-1 text-sm font-semibold">
              <span className="truncate">{person.name}</span>
              {person.verified && <VerifiedBadge />}
            </p>
            <p className="truncate text-sm text-muted">@{person.handle}</p>
          </div>
          <FollowButton personId={person.id} />
        </div>
      ))}
    </section>
  );
}

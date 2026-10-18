import React from 'react';
import { LuBarChart2, LuBookmark, LuHeart, LuMessageCircle, LuMoreHorizontal, LuRepeat2, LuShare } from 'react-icons/lu';
import { peopleById } from '../../data/people';
import { usePosts } from '../../context/PostsContext';
import { formatCount, timeAgo } from '../../utils/format';
import Avatar from '../ui/Avatar';
import VerifiedBadge from '../ui/VerifiedBadge';

function Action({ icon: Icon, label, count, active, tone, onClick }) {
  const hover = { accent: 'hover:text-accent', love: 'hover:text-love', success: 'hover:text-success' }[tone];
  const on = { accent: 'text-accent', love: 'text-love', success: 'text-success' }[tone];
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      aria-pressed={active}
      className={`group flex items-center gap-1.5 text-[13px] transition-colors ${active ? on : `text-muted ${hover}`}`}
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-full transition-colors group-hover:bg-raised">
        <Icon size={17} className={active && tone === 'love' ? 'fill-current' : ''} />
      </span>
      {count !== undefined && <span className="-ml-1 tabular-nums">{formatCount(count)}</span>}
    </button>
  );
}

export default function PostCard({ post }) {
  const { toggleLike, toggleRepost, toggleBookmark } = usePosts();
  const author = peopleById[post.authorId];

  return (
    <article className="flex gap-3 border-b border-line px-4 py-3.5 transition-colors hover:bg-surface/60 animate-rise">
      <Avatar person={author} size="md" />
      <div className="min-w-0 flex-1">
        <header className="flex items-center gap-1.5 text-sm">
          <span className="truncate font-semibold">{author.name}</span>
          {author.verified && <VerifiedBadge />}
          <span className="truncate text-muted">@{author.handle}</span>
          <span className="text-muted">·</span>
          <time className="shrink-0 text-muted">{timeAgo(post.createdAt)}</time>
          <button className="icon-btn -my-1 ml-auto h-8 w-8" aria-label="More options">
            <LuMoreHorizontal size={17} />
          </button>
        </header>

        <p className="mt-1 whitespace-pre-line break-words text-[15px] leading-relaxed">{post.text}</p>

        {post.media && (
          <div
            aria-hidden="true"
            className="mt-3 aspect-[16/9] w-full rounded-2xl border border-line"
            style={{
              background: `radial-gradient(circle at 25% 20%, hsl(${post.media.from} 80% 62% / .9), transparent 55%), linear-gradient(135deg, hsl(${post.media.from} 60% 28%), hsl(${post.media.to} 65% 18%))`,
            }}
          />
        )}

        <footer className="-ml-2 mt-2 flex max-w-md items-center justify-between">
          <Action icon={LuMessageCircle} label="Reply" count={post.replies} tone="accent" />
          <Action
            icon={LuRepeat2}
            label="Repost"
            count={post.reposts}
            tone="success"
            active={post.reposted}
            onClick={() => toggleRepost(post.id)}
          />
          <Action
            icon={LuHeart}
            label="Like"
            count={post.likes}
            tone="love"
            active={post.liked}
            onClick={() => toggleLike(post.id)}
          />
          <Action icon={LuBarChart2} label="Views" count={post.views} tone="accent" />
          <div className="flex items-center">
            <Action
              icon={LuBookmark}
              label="Bookmark"
              tone="accent"
              active={post.bookmarked}
              onClick={() => toggleBookmark(post.id)}
            />
            <Action icon={LuShare} label="Share" tone="accent" />
          </div>
        </footer>
      </div>
    </article>
  );
}

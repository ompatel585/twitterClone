import React, { useRef, useState } from 'react';
import { LuCalendarClock, LuImage, LuListChecks, LuMapPin, LuSmile } from 'react-icons/lu';
import { currentUser } from '../../data/people';
import { usePosts } from '../../context/PostsContext';
import Avatar from '../ui/Avatar';

const MAX_LENGTH = 280;
const TOOLS = [
  { icon: LuImage, label: 'Add media' },
  { icon: LuListChecks, label: 'Add poll' },
  { icon: LuSmile, label: 'Add emoji' },
  { icon: LuCalendarClock, label: 'Schedule' },
  { icon: LuMapPin, label: 'Add location' },
];

function CharacterRing({ length }) {
  const radius = 9;
  const circumference = 2 * Math.PI * radius;
  const ratio = Math.min(length / MAX_LENGTH, 1);
  const over = length > MAX_LENGTH;
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" className="-rotate-90">
      <circle cx="12" cy="12" r={radius} fill="none" strokeWidth="2.5" className="stroke-line" />
      <circle
        cx="12"
        cy="12"
        r={radius}
        fill="none"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={circumference * (1 - ratio)}
        className={over ? 'stroke-love' : ratio > 0.9 ? 'stroke-amber-400' : 'stroke-accent'}
      />
    </svg>
  );
}

export default function Composer({ onPosted, autoFocus = false }) {
  const { addPost } = usePosts();
  const [text, setText] = useState('');
  const ref = useRef(null);
  const trimmed = text.trim();
  const canPost = trimmed.length > 0 && text.length <= MAX_LENGTH;

  const resize = (el) => {
    el.style.height = 'auto';
    el.style.height = `${el.scrollHeight}px`;
  };

  const submit = () => {
    if (!canPost) return;
    addPost(trimmed);
    setText('');
    if (ref.current) ref.current.style.height = 'auto';
    onPosted?.();
  };

  return (
    <div className="flex gap-3 border-b border-line px-4 py-4">
      <Avatar person={currentUser} />
      <div className="min-w-0 flex-1">
        <textarea
          ref={ref}
          rows={2}
          value={text}
          autoFocus={autoFocus}
          onChange={(e) => {
            setText(e.target.value);
            resize(e.target);
          }}
          onKeyDown={(e) => (e.ctrlKey || e.metaKey) && e.key === 'Enter' && submit()}
          placeholder="What’s happening?"
          aria-label="Post text"
          className="w-full resize-none bg-transparent pt-2 text-lg placeholder:text-muted focus:outline-none focus-visible:ring-0"
        />
        <div className="mt-2 flex items-center justify-between border-t border-line pt-3">
          <div className="-ml-2 flex items-center text-accent">
            {TOOLS.map(({ icon: Icon, label }) => (
              <button key={label} type="button" aria-label={label} title={label} className="icon-btn !text-accent hover:!bg-accent-soft">
                <Icon size={18} />
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3">
            {text.length > 0 && <CharacterRing length={text.length} />}
            <button onClick={submit} disabled={!canPost} className="btn-primary">
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

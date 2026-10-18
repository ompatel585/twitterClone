import React, { useEffect, useRef, useState } from 'react';
import { LuArrowLeft, LuMessageSquare, LuSend } from 'react-icons/lu';
import Avatar from '../../components/ui/Avatar';
import EmptyState from '../../components/ui/EmptyState';
import SearchInput from '../../components/ui/SearchInput';
import { conversations as seed } from '../../data/conversations';
import { peopleById } from '../../data/people';
import { timeAgo } from '../../utils/format';

const lastMessage = (c) => c.messages[c.messages.length - 1];

export default function MessagesPage() {
  const [threads, setThreads] = useState(seed);
  const [activeId, setActiveId] = useState(null);
  const [draft, setDraft] = useState('');
  const endRef = useRef(null);

  const active = threads.find((t) => t.id === activeId);

  useEffect(() => {
    endRef.current?.scrollIntoView({ block: 'end' });
  }, [active?.messages.length, activeId]);

  const send = (e) => {
    e.preventDefault();
    const text = draft.trim();
    if (!text) return;
    setThreads((list) =>
      list.map((t) =>
        t.id === activeId ? { ...t, messages: [...t.messages, { id: `m${Date.now()}`, from: 'me', text, at: Date.now() }] } : t
      )
    );
    setDraft('');
  };

  return (
    <div className="grid h-screen grid-cols-1 md:grid-cols-[320px_1fr]">
      <section className={`flex-col border-r border-line ${active ? 'hidden md:flex' : 'flex'}`}>
        <div className="space-y-3 border-b border-line p-4">
          <h1 className="text-lg font-bold">Messages</h1>
          <SearchInput placeholder="Search messages" />
        </div>
        <ul className="overflow-y-auto no-scrollbar">
          {threads.map((thread) => {
            const person = peopleById[thread.personId];
            const last = lastMessage(thread);
            return (
              <li key={thread.id}>
                <button
                  onClick={() => setActiveId(thread.id)}
                  className={`flex w-full items-center gap-3 px-4 py-3.5 text-left transition-colors hover:bg-raised/70 ${
                    thread.id === activeId ? 'bg-raised' : ''
                  }`}
                >
                  <Avatar person={person} size="lg" />
                  <div className="min-w-0 flex-1">
                    <p className="flex items-baseline justify-between gap-2">
                      <span className="truncate text-sm font-semibold">{person.name}</span>
                      <span className="shrink-0 text-xs text-muted">{timeAgo(last.at)}</span>
                    </p>
                    <p className="truncate text-sm text-muted">
                      {last.from === 'me' && 'You: '}
                      {last.text}
                    </p>
                  </div>
                </button>
              </li>
            );
          })}
        </ul>
      </section>

      <section className={`min-h-0 flex-col ${active ? 'flex' : 'hidden md:flex'}`}>
        {active ? (
          <>
            <div className="flex items-center gap-3 border-b border-line px-4 py-3">
              <button className="icon-btn -ml-2 md:hidden" onClick={() => setActiveId(null)} aria-label="Back to conversations">
                <LuArrowLeft size={20} />
              </button>
              <Avatar person={peopleById[active.personId]} />
              <div>
                <p className="text-sm font-semibold">{peopleById[active.personId].name}</p>
                <p className="text-xs text-muted">@{peopleById[active.personId].handle}</p>
              </div>
            </div>
            <div className="flex-1 space-y-2 overflow-y-auto px-4 py-4 no-scrollbar">
              {active.messages.map((m) => {
                const mine = m.from === 'me';
                return (
                  <div key={m.id} className={`flex ${mine ? 'justify-end' : 'justify-start'}`}>
                    <p
                      className={`max-w-[75%] rounded-2xl px-4 py-2 text-[15px] leading-snug ${
                        mine ? 'rounded-br-md bg-accent text-bg' : 'rounded-bl-md bg-raised'
                      }`}
                    >
                      {m.text}
                    </p>
                  </div>
                );
              })}
              <div ref={endRef} />
            </div>
            <form onSubmit={send} className="flex items-center gap-2 border-t border-line p-3 pb-20 md:pb-3">
              <input
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                placeholder="Start a new message"
                aria-label="Message"
                className="h-11 flex-1 rounded-full bg-raised px-4 text-sm placeholder:text-muted focus:outline-none focus-visible:ring-2"
              />
              <button type="submit" disabled={!draft.trim()} className="btn-primary !h-11 !w-11 !p-0" aria-label="Send message">
                <LuSend size={18} />
              </button>
            </form>
          </>
        ) : (
          <EmptyState icon={LuMessageSquare} title="Select a message">
            Choose a conversation to keep chatting, or start a new one.
          </EmptyState>
        )}
      </section>
    </div>
  );
}

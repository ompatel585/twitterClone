import React, { useState } from 'react';
import { LuCode, LuLightbulb, LuPenLine, LuSend, LuSparkles } from 'react-icons/lu';
import PageHeader from '../../components/layout/PageHeader';

const PROMPTS = [
  { icon: LuPenLine, text: 'Draft a thoughtful reply to a long thread' },
  { icon: LuLightbulb, text: 'Explain what is trending today, briefly' },
  { icon: LuCode, text: 'Suggest a weekend side project idea' },
];

export default function GrokPage() {
  const [draft, setDraft] = useState('');

  return (
    <>
      <PageHeader title="Grok" subtitle="AI assistant · preview" />
      <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent-soft text-accent">
          <LuSparkles size={30} />
        </span>
        <h2 className="mt-6 text-2xl font-bold">What can I help with?</h2>
        <p className="mt-2 max-w-xs text-sm text-muted">Ask a question, brainstorm ideas, or summarize what’s happening.</p>

        <div className="mt-8 grid w-full max-w-md gap-2">
          {PROMPTS.map(({ icon: Icon, text }) => (
            <button
              key={text}
              onClick={() => setDraft(text)}
              className="card flex items-center gap-3 px-4 py-3 text-left text-sm transition-colors hover:bg-raised"
            >
              <Icon size={18} className="shrink-0 text-accent" />
              {text}
            </button>
          ))}
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="mt-6 flex w-full max-w-md items-center gap-2">
          <input
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder="Ask anything"
            aria-label="Ask Grok"
            className="h-12 flex-1 rounded-full bg-raised px-5 text-sm placeholder:text-muted focus:outline-none focus-visible:ring-2"
          />
          <button type="submit" disabled={!draft.trim()} className="btn-primary !h-12 !w-12 !p-0" aria-label="Send">
            <LuSend size={18} />
          </button>
        </form>
      </div>
    </>
  );
}

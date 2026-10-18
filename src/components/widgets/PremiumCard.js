import React from 'react';

export default function PremiumCard() {
  return (
    <section className="card bg-gradient-to-br from-accent-soft to-transparent p-4">
      <h2 className="text-lg font-bold">Go Premium</h2>
      <p className="mt-1 text-sm leading-relaxed text-muted">
        Unlock longer posts, edit controls and priority replies.
      </p>
      <button className="btn-primary mt-3">Subscribe</button>
    </section>
  );
}

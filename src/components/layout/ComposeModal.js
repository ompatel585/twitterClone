import React, { useEffect } from 'react';
import { LuX } from 'react-icons/lu';
import Composer from '../post/Composer';

export default function ComposeModal({ onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Compose post"
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 p-4 pt-[10vh] backdrop-blur-sm"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="card w-full max-w-xl animate-rise shadow-2xl shadow-black/60">
        <div className="px-3 pt-3">
          <button onClick={onClose} className="icon-btn" aria-label="Close">
            <LuX size={20} />
          </button>
        </div>
        <Composer autoFocus onPosted={onClose} />
      </div>
    </div>
  );
}

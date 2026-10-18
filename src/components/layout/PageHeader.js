import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LuArrowLeft } from 'react-icons/lu';

export default function PageHeader({ title, subtitle, back = false, actions, children }) {
  const navigate = useNavigate();
  return (
    <div className="sticky top-0 z-20 border-b border-line bg-bg/80 backdrop-blur-md">
      <div className="flex h-14 items-center gap-4 px-4">
        {back && (
          <button onClick={() => navigate(-1)} className="icon-btn -ml-2" aria-label="Go back">
            <LuArrowLeft size={20} />
          </button>
        )}
        <div className="min-w-0 flex-1">
          <h1 className="truncate text-lg font-bold leading-tight">{title}</h1>
          {subtitle && <p className="truncate text-xs text-muted">{subtitle}</p>}
        </div>
        {actions}
      </div>
      {children}
    </div>
  );
}

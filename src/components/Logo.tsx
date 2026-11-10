export function LogoMark({ className = "size-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <defs>
        <linearGradient id="cn-mark" x1="0" y1="0" x2="1" y2="0.35">
          <stop offset="0" stopColor="#8b6cf6" />
          <stop offset="1" stopColor="#3b9df0" />
        </linearGradient>
      </defs>
      <path fill="url(#cn-mark)" d="M12 0c0 7 5 12 12 12-7 0-12 5-12 12 0-7-5-12-12-12 7 0 12-5 12-12Z" />
    </svg>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark />
      <span className="font-display text-[1.3rem] font-medium tracking-tight">Cogninova</span>
    </span>
  );
}

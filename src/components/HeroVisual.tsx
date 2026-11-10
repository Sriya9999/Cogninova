/** Decorative brand mark with orbits for the home hero. */
export function HeroVisual() {
  return (
    <div aria-hidden className="relative mx-auto aspect-square w-full max-w-[26rem]">
      <div className="absolute inset-[18%] rounded-full bg-periwinkle/50 blur-3xl" />
      <svg viewBox="0 0 400 400" className="relative size-full" fill="none">
        <defs>
          <linearGradient id="hero-star" x1="0" y1="0" x2="1" y2="0.4">
            <stop offset="0" stopColor="#8b6cf6" />
            <stop offset="1" stopColor="#3b9df0" />
          </linearGradient>
        </defs>
        <g stroke="#a9b7ff" strokeWidth="1">
          <ellipse cx="200" cy="200" rx="185" ry="92" transform="rotate(-28 200 200)" />
          <ellipse cx="200" cy="200" rx="150" ry="62" transform="rotate(-28 200 200)" opacity="0.6" />
        </g>
        <circle cx="363" cy="113" r="4" fill="#7465f5" />
        <circle cx="68" cy="270" r="4" fill="#7465f5" />
        <g className="origin-center animate-drift">
          <path
            fill="url(#hero-star)"
            d="M200 62c0 80 58 138 138 138-80 0-138 58-138 138 0-80-58-138-138-138 80 0 138-58 138-138Z"
          />
        </g>
      </svg>
    </div>
  );
}

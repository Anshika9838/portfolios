"use client";

export default function Grain() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[65] opacity-[0.025] mix-blend-multiply"
      aria-hidden="true"
    >
      <svg width="100%" height="100%">
        <filter id="paper-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves={3} stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#paper-grain)" />
      </svg>
    </div>
  );
}

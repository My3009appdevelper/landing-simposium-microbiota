import type { ReactNode } from "react";

type DecorativeBioticsPatternProps = {
  children?: ReactNode;
  className?: string;
  density?: "light" | "regular";
};

const capsuleShapes = [
  { top: "8%", left: "4%", rotate: 25, delay: "0s" },
  { top: "18%", left: "84%", rotate: -18, delay: "1.2s" },
  { top: "52%", left: "10%", rotate: -32, delay: "0.4s" },
  { top: "78%", left: "78%", rotate: 14, delay: "0.8s" },
  { top: "40%", left: "91%", rotate: -25, delay: "0.3s" },
];

const bottleShapes = [
  { top: "22%", left: "70%", scale: 0.9 },
  { top: "66%", left: "20%", scale: 1.1 },
  { top: "34%", left: "56%", scale: 0.8 },
];

export default function DecorativeBioticsPattern({
  children,
  className = "",
  density = "regular",
}: DecorativeBioticsPatternProps) {
  const bacteriaCount = density === "light" ? 6 : 10;

  return (
    <div className={`pointer-events-none relative ${className}`}>
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {Array.from({ length: bacteriaCount }).map((_, index) => {
          const left = 8 + (index % 5) * 18 + (index % 2) * 9;
          const top = 12 + Math.floor(index / 3) * 16;
          const width = 26 + (index % 3) * 7;
          const height = 10 + (index % 3) * 4;
          return (
            <span
              key={`bacteria-${index}`}
              className="absolute rounded-full border border-[#22D3EE]/30 bg-[#22D3EE]/10 backdrop-blur-sm"
              style={{
                left: `${left}%`,
                top: `${top}%`,
                width: `${width}px`,
                height: `${height}px`,
                borderRadius: "999px",
              }}
            />
          );
        })}
      </div>

      <div className="absolute inset-0 -z-10">
        {capsuleShapes.map((shape, index) => (
          <span
            key={`capsule-${index}`}
            className="absolute h-8 w-16 rounded-full border border-[#9B1B5A]/40 bg-white/25 shadow-[0_10px_20px_rgba(15,23,42,0.12)]"
            style={{
              top: shape.top,
              left: shape.left,
              transform: `rotate(${shape.rotate}deg)`,
              animation: `subtle-float 8s ease-in-out infinite`,
              animationDelay: shape.delay,
              opacity: 0.8,
            }}
          >
            <span className="absolute right-1 top-1 h-3 w-3 rounded-full bg-[#22D3EE]/90" />
            <span className="absolute left-1 top-2 h-2 w-2 rounded-full bg-[#C8104A]/65" />
          </span>
        ))}
      </div>

      <div className="absolute inset-0 -z-10">
        {bottleShapes.map((shape, index) => (
          <span
            key={`bottle-${index}`}
            className="absolute h-16 w-10 rounded-2xl border border-[#172554]/25 bg-white/20"
            style={{
              top: shape.top,
              left: shape.left,
              transform: `scale(${shape.scale})`,
            }}
          >
            <span className="absolute left-1/2 top-1 h-1.5 w-3 -translate-x-1/2 rounded-full bg-[#0F172A]/30" />
          </span>
        ))}
      </div>

      <div className="absolute inset-0 -z-10">
        <svg
          className="h-full w-full text-[#C8104A]/20"
          viewBox="0 0 1200 900"
          fill="none"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            d="M-120 240 C140 200 300 320 560 280 C820 240 980 360 1240 280"
            stroke="currentColor"
            strokeWidth="26"
            strokeLinecap="round"
            opacity="0.18"
          />
          <path
            d="M-80 620 C170 600 330 690 600 640 C870 590 1050 700 1280 640"
            stroke="currentColor"
            strokeWidth="22"
            strokeLinecap="round"
            opacity="0.14"
          />
          <ellipse cx="170" cy="390" rx="26" ry="14" fill="currentColor" opacity="0.2" />
          <ellipse cx="1020" cy="460" rx="30" ry="18" fill="currentColor" opacity="0.2" />
        </svg>
      </div>

      {children}
    </div>
  );
}


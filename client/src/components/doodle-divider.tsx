import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const heartColors = [
  "hsl(340, 70%, 60%)",
  "hsl(280, 65%, 60%)",
  "hsl(45, 90%, 55%)",
  "hsl(170, 70%, 45%)",
  "hsl(200, 80%, 55%)",
  "hsl(20, 85%, 60%)",
];

function DoodleHeart({ color, size = 18 }: { color: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
}

function DoodleStar({ color, size = 14 }: { color: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8l-6.2 4.5 2.4-7.4L2 9.4h7.6z" />
    </svg>
  );
}

function DoodleSwirl({ color }: { color: string }) {
  return (
    <svg width="30" height="16" viewBox="0 0 30 16" fill="none">
      <path
        d="M2 14C6 4 12 2 16 8C20 14 26 4 28 2"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export function DoodleDivider() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const items = [
    { type: "heart", color: heartColors[0], size: 14, rotate: -15 },
    { type: "star", color: heartColors[2], size: 10, rotate: 10 },
    { type: "swirl", color: heartColors[1], size: 0, rotate: 0 },
    { type: "heart", color: heartColors[3], size: 18, rotate: 8 },
    { type: "star", color: heartColors[4], size: 12, rotate: -20 },
    { type: "heart", color: heartColors[1], size: 12, rotate: 15 },
    { type: "swirl", color: heartColors[5], size: 0, rotate: 5 },
    { type: "heart", color: heartColors[4], size: 16, rotate: -10 },
    { type: "star", color: heartColors[0], size: 11, rotate: 25 },
    { type: "heart", color: heartColors[5], size: 13, rotate: -5 },
    { type: "swirl", color: heartColors[3], size: 0, rotate: -8 },
    { type: "heart", color: heartColors[2], size: 15, rotate: 12 },
  ];

  return (
    <div
      ref={ref}
      className="flex items-center justify-center gap-3 sm:gap-4 py-8 overflow-hidden flex-wrap"
      data-testid="doodle-divider"
    >
      {items.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0, rotate: item.rotate - 30 }}
          animate={isInView ? { opacity: 1, scale: 1, rotate: item.rotate } : {}}
          transition={{
            duration: 0.4,
            delay: i * 0.06,
            type: "spring",
            stiffness: 200,
          }}
          style={{ transform: `rotate(${item.rotate}deg)` }}
        >
          {item.type === "heart" && (
            <DoodleHeart color={item.color} size={item.size} />
          )}
          {item.type === "star" && (
            <DoodleStar color={item.color} size={item.size} />
          )}
          {item.type === "swirl" && <DoodleSwirl color={item.color} />}
        </motion.div>
      ))}
    </div>
  );
}

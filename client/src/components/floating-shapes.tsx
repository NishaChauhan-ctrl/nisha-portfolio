import { motion } from "framer-motion";

const shapes = [
  { color: "hsl(280, 65%, 60%)", size: 80, x: "5%", y: "10%", delay: 0 },
  { color: "hsl(340, 70%, 60%)", size: 60, x: "85%", y: "15%", delay: 0.5 },
  { color: "hsl(45, 90%, 55%)", size: 50, x: "90%", y: "60%", delay: 1 },
  { color: "hsl(170, 70%, 45%)", size: 70, x: "8%", y: "70%", delay: 1.5 },
  { color: "hsl(200, 80%, 55%)", size: 45, x: "75%", y: "80%", delay: 0.8 },
  { color: "hsl(20, 85%, 60%)", size: 55, x: "50%", y: "5%", delay: 1.2 },
];

export function FloatingShapes() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full opacity-15 dark:opacity-10 blur-xl"
          style={{
            background: shape.color,
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
          }}
          animate={{
            y: [0, -20, 0, 15, 0],
            x: [0, 10, -5, 8, 0],
            scale: [1, 1.1, 0.95, 1.05, 1],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: shape.delay,
          }}
        />
      ))}
    </div>
  );
}

export function Squiggle({ className = "", color = "currentColor" }: { className?: string; color?: string }) {
  return (
    <svg className={className} width="120" height="30" viewBox="0 0 120 30" fill="none">
      <motion.path
        d="M2 15 C20 2, 30 28, 50 15 C70 2, 80 28, 100 15 C110 8, 115 20, 118 15"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
    </svg>
  );
}

export function Sparkle({ className = "", size = 24 }: { className?: string; size?: number }) {
  return (
    <motion.svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.2, 0.9, 1] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
    </motion.svg>
  );
}

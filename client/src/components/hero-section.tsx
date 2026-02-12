import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Sparkle } from "./floating-shapes";
import girlIllustration from "../assets/images/girl-illustration.png";

function TypingText({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const startTimeout = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    if (displayed.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayed(text.slice(0, displayed.length + 1));
      }, 80);
      return () => clearTimeout(timeout);
    } else {
      const cursorTimeout = setTimeout(() => setShowCursor(false), 1500);
      return () => clearTimeout(cursorTimeout);
    }
  }, [displayed, started, text]);

  return (
    <span>
      {displayed}
      {showCursor && started && (
        <motion.span
          className="inline-block w-[3px] h-[0.85em] bg-primary ml-1 align-middle rounded-sm"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        />
      )}
    </span>
  );
}

export function HeroSection() {
  const [, setLocation] = useLocation();

  const handleScrollToProjects = () => {
    setLocation("/work");
    setTimeout(() => {
      const el = document.querySelector("#projects");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 200);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-6"
      data-testid="section-hero"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16 relative z-10">
        <div className="flex-1 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4" />
              <span>AI Product Builder</span>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          >
            <Sparkle
              className="absolute -top-6 -left-4 text-chart-4"
              size={20}
            />
            <Sparkle
              className="absolute top-2 -right-2 text-primary"
              size={16}
            />
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold leading-[1.05] tracking-tight">
              <TypingText text="Hi! I'm Nisha" delay={600} />
              <span className="text-primary">,</span>
            </h1>
          </motion.div>

          <motion.p
            className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mt-6 font-light leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            I simplify strategy with AI so we can all stop pretending we understand the raw data.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
          >
            <button
              onClick={handleScrollToProjects}
              className="sticky-note-btn bg-chart-4/80 dark:bg-chart-4/70 text-foreground"
              data-testid="button-see-work"
            >
              See my work
            </button>
            <button
              onClick={() => {
                const el = document.querySelector("#contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="sticky-note-btn bg-primary/20 dark:bg-primary/30 text-foreground"
              data-testid="button-get-in-touch"
            >
              Get in touch
            </button>
          </motion.div>
        </div>

        <motion.div
          className="flex-shrink-0 w-64 sm:w-72 md:w-80 lg:w-96"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          <img
            src={girlIllustration}
            alt="Girl sitting cross-legged with laptop"
            className="w-full h-auto dark:invert"
            data-testid="img-hero-illustration"
          />
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown className="w-5 h-5 text-muted-foreground" />
      </motion.div>

      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/5 blur-2xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-accent/5 blur-2xl" />
      <div className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-chart-4/5 blur-2xl" />
    </section>
  );
}

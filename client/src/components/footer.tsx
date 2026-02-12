import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

function WavyLine({ color, delay = 0, className = "" }: { color: string; delay?: number; className?: string }) {
  return (
    <motion.svg
      width="140"
      height="30"
      viewBox="0 0 140 30"
      fill="none"
      className={className}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay }}
    >
      <motion.path
        d="M0 15 C10 5, 20 25, 30 15 C40 5, 50 25, 60 15 C70 5, 80 25, 90 15 C100 5, 110 25, 120 15 C130 5, 140 25, 140 15"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: delay + 0.3, ease: "easeInOut" }}
      />
    </motion.svg>
  );
}

export function Footer() {
  const [, setLocation] = useLocation();

  const goHome = () => {
    setLocation("/");
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 px-6 bg-card/50 border-t border-border" data-testid="footer">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <button
            onClick={goHome}
            className="font-serif text-xl sm:text-2xl font-bold text-foreground/80 italic cursor-pointer hover:text-primary transition-colors duration-300"
            data-testid="text-footer-tagline"
          >
            Take me home, country roads...
          </button>
        </div>

        <div className="flex items-center justify-between mb-8 px-4 overflow-hidden flex-wrap gap-4">
          <WavyLine color="hsl(20, 85%, 60%)" delay={0} />
          <WavyLine color="hsl(340, 70%, 65%)" delay={0.3} className="hidden sm:block" />
          <WavyLine color="hsl(170, 70%, 55%)" delay={0.6} className="hidden md:block" />
        </div>

        <div className="text-sm text-muted-foreground text-center" data-testid="text-footer-copyright">
          <span className="font-serif font-bold text-foreground">
            Nisha Chauhan
          </span>{" "}
          &middot; Crafted with curiosity, caffeine, and the occasional "let's just ship it" &middot; 2025
        </div>

        <div className="text-center mt-6">
          <Button
            size="icon"
            variant="ghost"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            data-testid="button-scroll-top"
          >
            <ArrowUp className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </footer>
  );
}

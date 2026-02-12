import { useState, useEffect, useRef } from "react";

function StickFigure({ walking }: { walking: boolean }) {
  return (
    <div className="relative w-[36px] h-[52px]">
      <div className="absolute left-1/2 -translate-x-1/2 top-[2px] w-[12px] h-[12px] rounded-full bg-primary/60 border-[1.5px] border-foreground" />

      <div className="absolute left-1/2 -translate-x-1/2 top-[14px] w-[2px] h-[16px] bg-foreground rounded-full" />

      <div
        className={`absolute top-[18px] left-[5px] w-[2px] h-[12px] bg-foreground rounded-full ${walking ? "animate-arm-left" : ""}`}
        style={{ transformOrigin: "top center", transform: walking ? undefined : "rotate(-30deg)" }}
      />
      <div
        className={`absolute top-[18px] right-[5px] w-[2px] h-[12px] bg-foreground rounded-full ${walking ? "animate-arm-right" : ""}`}
        style={{ transformOrigin: "top center", transform: walking ? undefined : "rotate(30deg)" }}
      />

      <div
        className={`absolute top-[29px] left-[10px] w-[2px] h-[16px] bg-foreground rounded-full ${walking ? "animate-leg-left" : ""}`}
        style={{ transformOrigin: "top center", transform: walking ? undefined : "rotate(-15deg)" }}
      />
      <div
        className={`absolute top-[29px] right-[10px] w-[2px] h-[16px] bg-foreground rounded-full ${walking ? "animate-leg-right" : ""}`}
        style={{ transformOrigin: "top center", transform: walking ? undefined : "rotate(15deg)" }}
      />
    </div>
  );
}

export function ScrollWalker() {
  const figureRef = useRef<HTMLDivElement>(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const lastScrollRef = useRef(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;

      const percent = Math.min(scrollTop / docHeight, 1);
      const trackEl = figureRef.current?.parentElement;
      if (trackEl && figureRef.current) {
        const trackHeight = trackEl.clientHeight - 52;
        figureRef.current.style.top = `${percent * trackHeight}px`;
      }

      const dir = scrollTop > lastScrollRef.current ? "down" : "up";
      lastScrollRef.current = scrollTop;

      if (figureRef.current) {
        figureRef.current.style.transform = `translateX(-50%) ${dir === "up" ? "scaleY(-1)" : "scaleY(1)"}`;
      }

      setIsScrolling(true);
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setIsScrolling(false), 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div
      className="fixed right-6 z-[9999] hidden lg:block pointer-events-none"
      style={{ top: 140, bottom: 140, width: 44 }}
      data-testid="scroll-walker"
    >
      <div
        className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-foreground/15 rounded-full"
      />

      <div
        ref={figureRef}
        className="absolute left-1/2 -translate-x-1/2"
        style={{ top: 0, transition: "top 0.15s ease-out" }}
      >
        <StickFigure walking={isScrolling} />
      </div>
    </div>
  );
}

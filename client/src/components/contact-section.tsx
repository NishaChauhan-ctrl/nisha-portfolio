import { motion, useInView } from "framer-motion";
import { useRef, useCallback } from "react";
import { Mail, ArrowUpRight } from "lucide-react";
import { SiLinkedin, SiGithub } from "react-icons/si";
import { Badge } from "@/components/ui/badge";
import confetti from "canvas-confetti";

const cloudColors = [
  { bg: "bg-[hsl(20,60%,85%)] dark:bg-[hsl(20,40%,25%)]", shadow: "shadow-[0_4px_12px_rgba(0,0,0,0.1)]" },
  { bg: "bg-[hsl(220,50%,88%)] dark:bg-[hsl(220,30%,25%)]", shadow: "shadow-[0_4px_12px_rgba(0,0,0,0.1)]" },
  { bg: "bg-[hsl(270,45%,88%)] dark:bg-[hsl(270,30%,25%)]", shadow: "shadow-[0_4px_12px_rgba(0,0,0,0.1)]" },
  { bg: "bg-[hsl(340,50%,88%)] dark:bg-[hsl(340,30%,25%)]", shadow: "shadow-[0_4px_12px_rgba(0,0,0,0.1)]" },
  { bg: "bg-[hsl(40,55%,88%)] dark:bg-[hsl(40,35%,25%)]", shadow: "shadow-[0_4px_12px_rgba(0,0,0,0.1)]" },
];

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    href: "mailto:chauhan.nisha9002@gmail.com",
    colorIndex: 0,
  },
  {
    icon: SiLinkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/nisha-chauhan20",
    colorIndex: 1,
  },
  {
    icon: SiGithub,
    label: "GitHub",
    href: "https://github.com/NishaChauhan-ctrl",
    colorIndex: 3,
  },
];

function CloudShape({ children, colorIndex, className = "" }: { children: React.ReactNode; colorIndex: number; className?: string }) {
  const c = cloudColors[colorIndex];
  return (
    <div className={`relative ${className}`}>
      <div className={`relative px-8 py-6 rounded-[40px] ${c.bg} ${c.shadow} flex flex-col items-center justify-center gap-2`}>
        <div className="absolute -top-2 -left-1 w-8 h-8 rounded-full" style={{ background: "inherit" }} />
        <div className="absolute -top-3 left-4 w-6 h-6 rounded-full" style={{ background: "inherit" }} />
        <div className="absolute -top-2 right-3 w-7 h-7 rounded-full" style={{ background: "inherit" }} />
        <div className="absolute -bottom-1 left-2 w-5 h-5 rounded-full" style={{ background: "inherit" }} />
        <div className="absolute -bottom-2 right-4 w-6 h-6 rounded-full" style={{ background: "inherit" }} />
        {children}
      </div>
    </div>
  );
}

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const fireConfetti = useCallback(() => {
    const duration = 800;
    const end = Date.now() + duration;
    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.7 },
        colors: ["#a855f7", "#ec4899", "#f59e0b", "#3b82f6", "#10b981"],
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.7 },
        colors: ["#a855f7", "#ec4899", "#f59e0b", "#3b82f6", "#10b981"],
      });
      if (Date.now() < end) requestAnimationFrame(frame);
    };
    frame();
  }, []);

  const handleEmailClick = () => {
    fireConfetti();
    setTimeout(() => {
      window.location.href = "mailto:chauhan.nisha9002@gmail.com";
    }, 300);
  };

  return (
    <section
      id="contact"
      className="py-24 sm:py-32 px-6"
      ref={ref}
      data-testid="section-contact"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto"
        >
          <Badge variant="outline" className="mb-4" data-testid="badge-contact">
            Contact
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold leading-tight">
            Let's{" "}
            <span className="text-primary">Chat</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            I promise a 100% human response. Turning caffeine into conversations. If you'd like to collaborate, chat, or just say hello, don't be shy, reach out below!
          </p>
        </motion.div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-6 sm:gap-8">
          <motion.a
            href={contactLinks[0].href}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="no-underline"
            data-testid="link-contact-email"
          >
            <CloudShape colorIndex={0}>
              <Mail className="w-8 h-8 text-foreground/70" />
              <span className="text-xs text-muted-foreground font-medium">Email</span>
            </CloudShape>
          </motion.a>

          <motion.a
            href={contactLinks[1].href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="no-underline"
            data-testid="link-contact-linkedin"
          >
            <CloudShape colorIndex={1}>
              <SiLinkedin className="w-8 h-8 text-foreground/70" />
              <span className="text-xs text-muted-foreground font-medium">LinkedIn</span>
            </CloudShape>
          </motion.a>

          <motion.a
            href={contactLinks[2].href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="no-underline"
            data-testid="link-contact-github"
          >
            <CloudShape colorIndex={3}>
              <SiGithub className="w-8 h-8 text-foreground/70" />
              <span className="text-xs text-muted-foreground font-medium">GitHub</span>
            </CloudShape>
          </motion.a>
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <button
            onClick={handleEmailClick}
            className="sticky-note-btn bg-accent/20 dark:bg-accent/30 text-foreground inline-flex items-center gap-2"
            data-testid="button-send-email"
          >
            <Mail className="w-4 h-4" />
            Send me an email
          </button>
        </motion.div>
      </div>
    </section>
  );
}

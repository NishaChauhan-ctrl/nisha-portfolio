import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="py-24 sm:py-32 px-6"
      ref={ref}
      data-testid="section-about"
    >
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <Badge variant="outline" className="mb-4" data-testid="badge-about">
            About Me
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold leading-tight">
            Turning caffeine into products and{" "}
            <span className="text-primary">'too much data'</span> into AI-powered workflows that actually make sense.
          </h2>
        </motion.div>

        <motion.div
          className="mt-10 text-lg text-muted-foreground leading-relaxed text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <p>
            There's nothing better than talking to someone whose life has genuinely gotten easier because of a tool or app. That's the magic of product management for me. You get to work with amazing people, build something from scratch, and then actually see the impact, in real life. The best part? It's not just about launches or features. It's that moment of relief when someone says, "This makes things so much easier." That's what keeps me going.
          </p>
        </motion.div>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="relative mx-auto max-w-xl">
            <div
              className="sticky-note-btn bg-accent/15 dark:bg-accent/20 text-foreground text-center px-8 py-6 mx-auto block"
              style={{ transform: "rotate(-0.5deg)", fontFamily: "'Architects Daughter', cursive" }}
            >
              <p className="text-base sm:text-lg leading-relaxed italic" data-testid="text-about-highlight">
                When I'm not working, I'm probably out on a long walk with music blasting in my headphones or exploring new coffee cafes.
              </p>
            </div>
            <motion.div
              className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-chart-4"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full bg-primary/60"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

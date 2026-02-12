import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useLocation } from "wouter";

export function WorkSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [, setLocation] = useLocation();

  return (
    <section
      id="work"
      className="py-24 sm:py-32 px-6"
      ref={ref}
      data-testid="section-work"
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <Badge variant="outline" className="mb-4" data-testid="badge-work">
            Work
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold leading-tight">
            What I{" "}
            <span className="text-primary">do</span>
          </h2>
        </motion.div>

        <motion.p
          className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          I've worked across large corporations and small startups, wearing different hats along the way. This mix of product and development experience helps me navigate ambiguity, collaborate closely with engineers, and ship thoughtfully in today's fast-moving software and infrastructure landscape.
        </motion.p>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <button
            onClick={() => setLocation("/work")}
            className="sticky-note-btn bg-primary/20 dark:bg-primary/30 text-foreground inline-flex items-center gap-2"
            data-testid="button-explore-work"
          >
            Explore my work
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

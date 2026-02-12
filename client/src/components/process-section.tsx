import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, PenTool, Code2, IterationCw } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const steps = [
  {
    icon: Search,
    title: "Discover",
    subtitle: "Research & Understand",
    description:
      "I dig deep into the problem space, talking to users, analyzing data, and mapping out existing workflows before writing a single line of code.",
    color: "text-primary bg-primary/10",
    borderColor: "border-primary/30",
  },
  {
    icon: PenTool,
    title: "Design",
    subtitle: "Ideate & Plan",
    description:
      "From PRDs to wireframes, I structure solutions that balance user needs with business goals. Multiple approaches, side by side, before committing.",
    color: "text-accent bg-accent/10",
    borderColor: "border-accent/30",
  },
  {
    icon: Code2,
    title: "Build",
    subtitle: "Develop & Test",
    description:
      "I prototype fast using Python, Streamlit, and LLM APIs. Proof of concepts come first, then I iterate toward production-ready solutions.",
    color: "text-chart-2 bg-chart-2/10",
    borderColor: "border-chart-2/30",
  },
  {
    icon: IterationCw,
    title: "Iterate",
    subtitle: "Refine & Ship",
    description:
      "Gather feedback, measure impact, and continuously improve. The best products are never truly done, they evolve with user needs.",
    color: "text-chart-4 bg-chart-4/10",
    borderColor: "border-chart-4/30",
  },
];

export function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="process"
      className="py-24 sm:py-32 px-6"
      ref={ref}
      data-testid="section-process"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <Badge variant="outline" className="mb-4" data-testid="badge-process">
            Process
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold leading-tight">
            How I{" "}
            <span className="text-primary">work</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
            I like to understand the problem deeply before jumping in. Every
            project follows a thoughtful, iterative approach.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              className={`relative p-6 rounded-md border ${step.borderColor} bg-card/50 text-center`}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.2 + i * 0.15,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              data-testid={`card-process-${i}`}
            >
              <motion.div
                className={`w-14 h-14 rounded-md flex items-center justify-center mx-auto mb-4 ${step.color}`}
                initial={{ rotate: -10 }}
                animate={isInView ? { rotate: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
              >
                <step.icon className="w-6 h-6" />
              </motion.div>
              <h3 className="text-xl font-serif font-bold">{step.title}</h3>
              <span className="text-xs text-muted-foreground mt-1 block">{step.subtitle}</span>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                {step.description}
              </p>

              <motion.div
                className="absolute -top-2 -right-2 w-4 h-4 rounded-full"
                style={{ backgroundColor: `hsl(var(--${i === 0 ? 'primary' : i === 1 ? 'accent' : i === 2 ? 'chart-2' : 'chart-4'}))` }}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

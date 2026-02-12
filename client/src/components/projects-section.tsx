import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, BarChart3, MessageSquare, FileText } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "AI PRD Generator",
    description:
      "Transforms Market Requirement Documents (MRDs) into structured Product Requirement Documents using GPT-3.5. Automates the tedious process of writing PRDs, ensuring consistency and completeness across product teams.",
    tags: ["GPT-3.5", "Python", "Streamlit", "NLP"],
    icon: FileText,
    color: "bg-primary/10 text-primary",
    link: null,
    github: "https://github.com/NishaChauhan-ctrl/PRD-Generator",
  },
  {
    title: "Feature Prioritization Dashboard",
    description:
      "Clustered user feedback using NLP to surface top feature requests. Scored and ranked features by NPS impact, request volume, and customer tier to help product teams make data-driven prioritization decisions.",
    tags: ["NLP", "Data Analytics", "Python", "Clustering"],
    icon: BarChart3,
    color: "bg-accent/10 text-accent",
    link: null,
    github: "https://github.com/NishaChauhan-ctrl/feature-prioritization-dashboard",
  },
  {
    title: "Support Escalation Engine",
    description:
      "Built an AI-powered system that automatically categorizes and escalates customer support tickets based on urgency, sentiment analysis, and historical patterns. Reduced average response time significantly.",
    tags: ["LLMs", "Sentiment Analysis", "Automation"],
    icon: MessageSquare,
    color: "bg-chart-2/10 text-chart-2",
    link: null,
    github: "https://github.com/NishaChauhan-ctrl/customer-support-agent",
  },
];

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="projects"
      className="py-24 sm:py-32 px-6"
      ref={ref}
      data-testid="section-projects"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <Badge variant="outline" className="mb-4" data-testid="badge-projects">
            Projects
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold leading-tight">
            Recent{" "}
            <span className="text-primary">Work</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl">
            A selection of AI-powered tools and products I've created to
            streamline product workflows and decision-making.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-12">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.1 }}
            >
              <Card
                className="h-full hover-elevate group"
                data-testid={`card-project-${i}`}
              >
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-start justify-between gap-3 flex-wrap">
                    <div className={`p-2.5 rounded-md ${project.color}`}>
                      <project.icon className="w-5 h-5" />
                    </div>
                    <div className="flex items-center gap-1">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          data-testid={`link-project-github-${i}`}
                        >
                          <Button size="icon" variant="ghost" aria-label="View code on GitHub">
                            <SiGithub className="w-4 h-4" />
                          </Button>
                        </a>
                      )}
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          data-testid={`link-project-demo-${i}`}
                        >
                          <Button size="icon" variant="ghost" aria-label="View live demo">
                            <ArrowUpRight className="w-4 h-4" />
                          </Button>
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold mt-4">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

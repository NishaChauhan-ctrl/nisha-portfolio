import { motion } from "framer-motion";
import { ArrowLeft, Download } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { DoodleDivider } from "@/components/doodle-divider";
import { ProjectsSection } from "@/components/projects-section";
import { AntTechStack } from "@/components/ant-techstack";
import { FloatingShapes } from "@/components/floating-shapes";
import { Footer } from "@/components/footer";
import { useLocation } from "wouter";

const skillCategories = [
  {
    label: "AI-Powered Tools",
    description: "Building products that leverage LLMs to automate complex workflows",
    color: "text-primary bg-primary/10",
  },
  {
    label: "Product Strategy",
    description: "Translating business needs into actionable product decisions",
    color: "text-accent bg-accent/10",
  },
  {
    label: "Data-Driven",
    description: "Using data analytics to surface insights and drive prioritization",
    color: "text-chart-2 bg-chart-2/10",
  },
  {
    label: "End-to-End",
    description: "From ideation to deployment, building products start to finish",
    color: "text-chart-4 bg-chart-4/10",
  },
];

const skills = [
  "Product Management",
  "PRD Writing",
  "User Research",
  "Agile/Scrum",
  "Roadmapping",
  "PRDs/BRDs",
  "User Stories & Epics",
  "MVP Scoping",
  "Stakeholder Management",
  "A/B Testing",
  "SDLC",
  "Experiment Design",
  "Metrics/Instrumentation",
  "NLP",
  "Data Analytics",
  "GPT / LLMs",
];

const timeline = [
  {
    company: "AIESEC",
    title: "Product Management Co-op",
    period: "Jan 2017 - Jan 2019",
    color: "bg-chart-5",
  },
  {
    company: "Bunaai",
    title: "Product Management Intern",
    period: "Jan 2019 - Dec 2020",
    color: "bg-accent",
  },
  {
    company: "Capgemini",
    title: "Associate Product Manager",
    period: "Dec 2020 - Jul 2023",
    color: "bg-primary",
  },
  {
    company: "George Washington University",
    title: "Graduate Ambassador",
    period: "Jun 2024 - May 2025",
    color: "bg-chart-2",
  },
  {
    company: "MyEdmaster LLC",
    title: "Product Manager",
    period: "Aug 2025 - Present",
    color: "bg-chart-4",
  },
];

export default function WorkExperience() {
  const [, setLocation] = useLocation();

  return (
    <div className="relative min-h-screen pt-24">
      <FloatingShapes />

      <div className="px-6 max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <button
            onClick={() => setLocation("/")}
            className="sticky-note-btn bg-muted text-foreground inline-flex items-center gap-2 mb-12"
            data-testid="button-back-home"
          >
            <ArrowLeft className="w-4 h-4" />
            Back home
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <Badge variant="outline" className="mb-4" data-testid="badge-work-experience">
            Experience
          </Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold leading-tight">
            Work{" "}
            <span className="text-primary">Experience</span>
          </h1>
        </motion.div>

        <motion.div
          className="mt-10 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <p className="text-lg text-muted-foreground leading-relaxed text-center">
            I started my journey in Computer Science Engineering, where I first fell in love with the logic of building things from the ground up. While working as a Business Consultant, I discovered how data-driven changes like UI/UX tweaks and supply chain optimization could solve real-world problems for people. It felt like the pieces of a puzzle finally fitting together: the technical "how" meeting the strategic "why." So here I am, always trying to bridge the gap between engineering rigor and a thoughtful user experience.
          </p>

          <div className="mt-10 text-center">
            <a
              href="/Resume_NishaChauhan.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="sticky-note-btn bg-chart-4/80 dark:bg-chart-4/70 text-foreground inline-flex items-center gap-2"
              data-testid="button-download-resume"
            >
              <Download className="w-4 h-4" />
              Download my resume
            </a>
          </div>
        </motion.div>

        <motion.div
          className="mt-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <h3 className="text-2xl font-serif font-bold text-center mb-10">
            Career Timeline
          </h3>

          <div className="relative overflow-x-auto pb-4">
            <div className="flex items-start gap-0 min-w-[700px]">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.company}
                  className="flex-1 relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.12 }}
                >
                  <div className="flex flex-col items-center text-center px-2">
                    <motion.div
                      className={`w-4 h-4 rounded-full ${item.color} z-10 relative`}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.5 + i * 0.12, type: "spring" }}
                    />

                    <div className="mt-3">
                      <p className="font-semibold text-sm leading-tight">{item.company}</p>
                      <p className="text-xs text-muted-foreground mt-1">{item.title}</p>
                      <p className="text-[10px] text-muted-foreground/70 mt-1">{item.period}</p>
                    </div>
                  </div>

                  {i < timeline.length - 1 && (
                    <motion.div
                      className="absolute top-[7px] left-[calc(50%+8px)] right-0 h-0.5 bg-border"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.6, delay: 0.6 + i * 0.12 }}
                      style={{ originX: 0 }}
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <DoodleDivider />

        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-center mb-10">
            Skills
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {skillCategories.map((cat, i) => (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              >
                <Card className="hover-elevate" data-testid={`card-skill-category-${i}`}>
                  <CardContent className="p-5">
                    <div className={`inline-block px-3 py-1 rounded-md text-sm font-semibold mb-2 ${cat.color}`}>
                      {cat.label}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {cat.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="flex flex-wrap gap-2 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {skills.map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                data-testid={`badge-skill-${skill.toLowerCase().replace(/\s/g, "-")}`}
              >
                {skill}
              </Badge>
            ))}
          </motion.div>
        </motion.div>

        <AntTechStack />

        <DoodleDivider />

        <div className="mt-8 pb-8">
          <ProjectsSection />
        </div>
      </div>

      <Footer />
    </div>
  );
}

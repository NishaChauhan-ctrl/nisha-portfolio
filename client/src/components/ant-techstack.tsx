import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  SiPython, SiStreamlit, SiJavascript, SiGit, SiPostman,
  SiJira, SiConfluence, SiTrello, SiNotion, SiMiro, SiTableau
} from "react-icons/si";

const tools = [
  { name: "Python", icon: SiPython },
  { name: "Streamlit", icon: SiStreamlit },
  { name: "JavaScript", icon: SiJavascript },
  { name: "SQL", icon: null },
  { name: "Git/GitHub", icon: SiGit },
  { name: "OpenAI API", icon: null },
  { name: "REST APIs", icon: null },
  { name: "Postman", icon: SiPostman },
  { name: "Tableau", icon: SiTableau },
  { name: "Jira", icon: SiJira },
  { name: "Confluence", icon: SiConfluence },
  { name: "Trello", icon: SiTrello },
  { name: "Notion", icon: SiNotion },
  { name: "Miro", icon: SiMiro },
];

function ToolIcon({ name }: { name: string }) {
  return (
    <div className="w-8 h-8 rounded-md bg-muted flex items-center justify-center text-xs font-bold text-muted-foreground">
      {name.charAt(0)}
    </div>
  );
}

function Ant({ delay = 0 }: { delay?: number }) {
  return (
    <motion.svg
      width="28"
      height="20"
      viewBox="0 0 28 20"
      fill="currentColor"
      className="text-foreground"
    >
      <ellipse cx="10" cy="14" rx="5" ry="4" />
      <ellipse cx="18" cy="12" rx="4" ry="3" />
      <circle cx="22" cy="10" r="3" />

      <motion.line x1="6" y1="18" x2="3" y2="20" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"
        animate={{ x2: [3, 2, 3], y2: [20, 19, 20] }}
        transition={{ duration: 0.4, repeat: Infinity, delay }}
      />
      <motion.line x1="8" y1="18" x2="6" y2="20" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"
        animate={{ x2: [6, 5, 6], y2: [20, 19, 20] }}
        transition={{ duration: 0.4, repeat: Infinity, delay: delay + 0.1 }}
      />
      <motion.line x1="12" y1="18" x2="13" y2="20" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"
        animate={{ x2: [13, 14, 13], y2: [20, 19, 20] }}
        transition={{ duration: 0.4, repeat: Infinity, delay: delay + 0.2 }}
      />

      <motion.line x1="15" y1="15" x2="13" y2="18" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"
        animate={{ x2: [13, 12, 13], y2: [18, 17, 18] }}
        transition={{ duration: 0.4, repeat: Infinity, delay: delay + 0.15 }}
      />
      <motion.line x1="17" y1="15" x2="17" y2="18" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"
        animate={{ y2: [18, 17, 18] }}
        transition={{ duration: 0.4, repeat: Infinity, delay: delay + 0.25 }}
      />
      <motion.line x1="20" y1="15" x2="22" y2="18" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"
        animate={{ x2: [22, 23, 22], y2: [18, 17, 18] }}
        transition={{ duration: 0.4, repeat: Infinity, delay: delay + 0.05 }}
      />

      <line x1="24" y1="9" x2="27" y2="6" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <line x1="24" y1="8" x2="26" y2="5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />

      <circle cx="24" cy="9" r="0.8" fill="white" />
    </motion.svg>
  );
}

export function AntTechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="mt-16" data-testid="section-ant-techstack">
      <h3 className="text-2xl font-serif font-bold text-center mb-2">
        My Stack
      </h3>
      <p className="text-sm text-muted-foreground text-center mb-10">
        Carried by hardworking little helpers
      </p>

      <div className="relative">
        <svg className="absolute bottom-2 left-0 w-full h-4" viewBox="0 0 1000 10" preserveAspectRatio="none">
          <motion.path
            d="M0 5 Q50 2, 100 5 Q150 8, 200 5 Q250 3, 300 5 Q350 7, 400 5 Q450 3, 500 5 Q550 8, 600 5 Q650 2, 700 5 Q750 7, 800 5 Q850 3, 900 5 Q950 7, 1000 5"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            className="text-foreground/40"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : {}}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </svg>

        <div className="flex items-end justify-center gap-1 sm:gap-2 flex-wrap pb-6">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.name}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <motion.div
                className="mb-1 bg-card border border-border rounded-md p-1.5 relative"
                animate={isInView ? {
                  y: [0, -2, 0],
                } : {}}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
              >
                {tool.icon ? (
                  <tool.icon className="w-6 h-6 text-foreground/70" />
                ) : (
                  <ToolIcon name={tool.name} />
                )}
              </motion.div>

              <motion.div
                animate={isInView ? {
                  x: [0, 2, 0, -2, 0],
                } : {}}
                transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.15 }}
              >
                <Ant delay={i * 0.1} />
              </motion.div>

              <span
                className="text-[10px] text-muted-foreground text-center leading-tight mt-1 max-w-[50px]"
                data-testid={`text-tool-${tool.name.toLowerCase().replace(/[\s/]+/g, "-")}`}
              >
                {tool.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

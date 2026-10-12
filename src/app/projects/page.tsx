"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/portfolio";
import { FaGithub } from "react-icons/fa";
import { ExternalLink } from "lucide-react";

function renderHighlight(text: string) {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i} className="text-foreground font-semibold">
        {part.slice(2, -2)}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

export default function ProjectsPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header row */}
        <div className="flex items-end justify-between mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-base font-mono uppercase tracking-[0.2em] text-accent mb-4"
            >
              Projects
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-5xl md:text-7xl font-semibold"
            >
              What I&apos;ve Built
            </motion.h1>
          </div>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-base font-mono uppercase tracking-[0.2em] text-muted hidden md:block"
          >
            Selected Work
          </motion.span>
        </div>

        <div className="space-y-0">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
              className="group border-t border-border py-8 md:py-10"
            >
              <div className="flex items-start gap-6 md:gap-10">
                {/* Number */}
                <span className="text-3xl md:text-4xl font-mono text-muted/40 pt-1 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                    <h2 className="text-2xl md:text-3xl font-semibold group-hover:text-accent transition-colors">
                      {project.name}
                    </h2>
                    <div className="flex gap-3 shrink-0">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-mono text-muted hover:text-accent transition-colors
                                     inline-flex items-center gap-1.5 border border-border rounded-full px-4 py-1.5"
                        >
                          <FaGithub className="w-4 h-4" />
                          View Source
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-mono text-muted hover:text-accent transition-colors
                                     inline-flex items-center gap-1.5 border border-border rounded-full px-4 py-1.5"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-lg md:text-xl text-muted leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Highlights with bold */}
                  <ul className="space-y-2.5 mb-5">
                    {project.highlights.map((h, j) => (
                      <li
                        key={j}
                        className="text-lg md:text-xl text-muted flex items-start gap-2.5"
                      >
                        <span className="text-accent mt-2 text-[8px] shrink-0">
                          &#9679;
                        </span>
                        <span>{renderHighlight(h)}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-sm font-mono px-3 py-1.5 rounded-full
                                   bg-accent/10 text-accent"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

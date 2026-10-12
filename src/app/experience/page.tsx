"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/portfolio";

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

export default function ExperiencePage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-base font-mono uppercase tracking-[0.2em] text-accent mb-4"
        >
          Experience
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-5xl md:text-7xl font-semibold mb-16"
        >
          Where I&apos;ve worked
        </motion.h1>

        <div className="space-y-0">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
              className="border-t border-border py-8 md:py-10"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-10">
                {/* Date column */}
                <div className="md:w-48 shrink-0">
                  <span className="text-lg font-mono text-accent">
                    {exp.date}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-semibold mb-1">
                    {exp.role}
                  </h2>
                  <p className="text-lg md:text-xl text-accent font-medium mb-3">
                    {exp.company}
                  </p>
                  <p className="text-lg md:text-xl text-muted leading-relaxed mb-4">
                    {renderHighlight(exp.description)}
                  </p>

                  {exp.bullets && (
                    <ul className="space-y-2.5">
                      {exp.bullets.map((bullet, j) => (
                        <li
                          key={j}
                          className="text-lg md:text-xl text-muted flex items-start gap-2.5"
                        >
                          <span className="text-accent mt-2 text-[8px]">
                            &#9679;
                          </span>
                          <span>{renderHighlight(bullet)}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}

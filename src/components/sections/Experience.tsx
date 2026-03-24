"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { experiences } from "@/data/portfolio";

export function Experience() {
  return (
    <SectionWrapper id="experience">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-semibold mb-12">
          Experience
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <div key={i} className="relative md:pl-10">
                {/* Timeline dot */}
                <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-accent -translate-x-[3.5px] hidden md:block" />

                <div className="rounded-2xl border border-border bg-card p-6 md:p-8 hover:bg-card-hover transition-colors duration-200">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3 gap-1">
                    <h3 className="text-xl font-semibold">{exp.role}</h3>
                    <span className="text-sm font-mono text-muted">
                      {exp.date}
                    </span>
                  </div>

                  <p className="text-accent font-medium text-sm mb-3">
                    {exp.company}
                  </p>

                  <p className="text-muted text-base leading-relaxed">
                    {exp.description}
                  </p>

                  {exp.bullets && (
                    <ul className="mt-4 space-y-2">
                      {exp.bullets.map((bullet, j) => (
                        <li
                          key={j}
                          className="text-sm text-muted flex items-start gap-2"
                        >
                          <span className="text-accent mt-1.5 text-xs">
                            &#9654;
                          </span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

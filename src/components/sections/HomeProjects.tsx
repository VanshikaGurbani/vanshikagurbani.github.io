"use client";

import Link from "next/link";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { StaggerContainer, StaggerItem } from "@/components/ui/StaggerContainer";
import { projects } from "@/data/portfolio";
import { ArrowRight } from "lucide-react";

export function HomeProjects() {
  const featured = projects.slice(0, 4);

  return (
    <SectionWrapper>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row gap-6 md:gap-16">
          {/* Left label column */}
          <div className="md:w-56 shrink-0">
            <h2 className="text-base font-mono uppercase tracking-[0.2em] text-accent mb-4">
              Projects
            </h2>
            <p className="text-base font-mono uppercase tracking-[0.2em] text-muted">
              Selected Work
            </p>
          </div>

          {/* Right content column */}
          <div className="flex-1">
            <div className="flex justify-end mb-8">
              <Link
                href="/projects/"
                className="text-sm font-mono uppercase tracking-wider text-accent hover:text-foreground transition-colors inline-flex items-center gap-1.5"
              >
                View All <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <StaggerContainer className="space-y-6">
              {featured.map((project, i) => (
                <StaggerItem
                  key={project.name}
                  className="group flex items-start gap-6 py-7 border-t border-border"
                >
                  <span className="text-base font-mono text-muted pt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-semibold mb-2 group-hover:text-accent transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-base md:text-lg text-muted leading-relaxed mb-4 max-w-3xl">
                      {project.tagline}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-sm font-mono px-3 py-1.5 rounded-full bg-accent/10 text-accent"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

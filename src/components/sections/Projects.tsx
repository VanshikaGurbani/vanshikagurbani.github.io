"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/data/portfolio";

export function Projects() {
  return (
    <SectionWrapper id="projects">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-semibold mb-4">Projects</h2>
        <p className="text-lg text-muted font-light mb-12 max-w-2xl">
          Machine Learning, NLP, Causal Inference & Analytics
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

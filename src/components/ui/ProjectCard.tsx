"use client";

import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import type { Project } from "@/data/portfolio";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <div
      className="group rounded-2xl border border-border bg-card p-6 md:p-8
                 transition-all duration-300 hover:bg-card-hover hover:border-accent/30
                 hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-1"
    >
      <div className="flex items-start justify-between mb-4">
        <span className="text-xs font-mono text-muted">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="flex gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-colors"
              aria-label={`View ${project.name} on GitHub`}
            >
              <FaGithub className="w-5 h-5" />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-colors"
              aria-label={`View ${project.name} live`}
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>

      <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">
        {project.name}
      </h3>

      <p className="text-muted text-base leading-relaxed mb-5">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-xs font-mono px-2.5 py-1 rounded-full
                       bg-accent/10 text-accent"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

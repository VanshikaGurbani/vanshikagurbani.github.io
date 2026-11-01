import type { Metadata } from "next";
import { ProjectsExplorer } from "@/components/projects/ProjectsExplorer";
import { allProjects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects | Vanshika Gurbani",
  description:
    "Agents, ML models, and messy-data pipelines: everything Vanshika Gurbani has shipped.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-28 pb-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <p className="mb-4 text-sm font-mono uppercase tracking-[0.2em] text-accent-2">
          Selected work
        </p>
        <h1 className="text-gradient text-5xl font-bold tracking-tight md:text-7xl">
          Projects
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
          Everything I&apos;ve shipped, from agents and ML models to pipelines
          that make sense of messy data. Click into any of them for the full
          story.
        </p>

        <ProjectsExplorer projects={allProjects} />
      </div>
    </div>
  );
}

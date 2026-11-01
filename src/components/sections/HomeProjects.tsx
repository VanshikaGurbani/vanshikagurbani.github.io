import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { getProjectBySlug } from "@/data/projects";

const FEATURED_SLUGS = ["sourcemd", "ai-devops-agent", "bioner", "job-postings-insights"];

export function HomeProjects() {
  const [featured, ...rest] = FEATURED_SLUGS.map((slug) => {
    const project = getProjectBySlug(slug);
    if (!project) throw new Error(`Missing featured project "${slug}"`);
    return project;
  });

  return (
    <SectionWrapper className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="mb-3 text-sm font-mono uppercase tracking-[0.2em] text-accent-2">
              Featured work
            </p>
            <h2 className="text-gradient text-4xl font-bold tracking-tight md:text-6xl">
              Projects
            </h2>
          </div>
          <Link
            href="/projects/"
            className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-semibold transition-colors hover:border-accent/60 hover:text-accent"
          >
            View all
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <ProjectCard project={featured} variant="featured" />

        <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {rest.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

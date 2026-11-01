import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, FolderOpen, House } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { FlowDiagram } from "@/components/projects/FlowDiagram";
import { Rich } from "@/components/ui/Rich";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { allProjects, getProjectBySlug } from "@/data/projects";

type Params = { slug: string };

export function generateStaticParams() {
  return allProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.shortName} | Vanshika Gurbani`,
    description: project.tagline,
  };
}

const pill =
  "inline-flex items-center gap-2 rounded-lg border border-border bg-card/70 px-4 py-2 text-xs font-mono font-semibold uppercase tracking-wider text-muted backdrop-blur transition-colors hover:border-accent/60 hover:text-accent";

export default async function ProjectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const i = allProjects.findIndex((p) => p.slug === slug);
  const prev = allProjects[(i - 1 + allProjects.length) % allProjects.length];
  const next = allProjects[(i + 1) % allProjects.length];

  return (
    <div className="pt-24 pb-24">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <div className="flex flex-wrap gap-3">
          <Link href="/" className={pill}>
            <House className="h-3.5 w-3.5" />
            Portfolio
          </Link>
          <Link href="/projects/" className={pill}>
            <FolderOpen className="h-3.5 w-3.5" />
            All projects
          </Link>
        </div>

        {/* Hero */}
        <header className="mt-14">
          <p className="mb-4 text-sm font-mono font-semibold uppercase tracking-[0.2em] text-accent-2">
            {project.category}
          </p>
          <h1 className="text-gradient text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
            {project.name}
          </h1>

          <dl className="mt-10 grid grid-cols-2 gap-y-8 md:grid-cols-4">
            {project.stats.map((s) => (
              <div key={s.label} className="border-l-2 border-accent pl-4 pr-3">
                <dt className="font-mono text-2xl font-semibold md:text-3xl">
                  {s.value}
                </dt>
                <dd className="mt-1 text-sm leading-snug text-muted">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>

          <p className="mt-10 max-w-3xl text-lg leading-relaxed text-muted md:text-xl">
            {project.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition-opacity hover:opacity-85"
              >
                <FaGithub className="h-4 w-4" />
                Source code
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-semibold transition-colors hover:border-accent/60 hover:text-accent"
              >
                Live demo
                <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-md bg-foreground/5 px-2.5 py-1 text-[11px] font-mono font-semibold uppercase tracking-wider text-foreground/75"
              >
                {t}
              </span>
            ))}
          </div>
        </header>
      </div>

      {/* System overview */}
      <SectionWrapper className="py-16 md:py-20">
        <div className="mx-auto max-w-5xl border-t border-border px-6 pt-14 md:px-10">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            System overview
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted md:text-lg">
            {project.tagline}
          </p>
          <div className="diagram-panel mt-8 px-6 py-8 md:px-14 md:py-12">
            <FlowDiagram
              nodes={project.flow}
              active={project.active}
              className="mx-auto max-w-3xl"
            />
          </div>
          <p className="mt-3 text-center text-xs font-mono uppercase tracking-[0.2em] text-muted">
            Simplified pipeline
          </p>
        </div>
      </SectionWrapper>

      {/* Highlights */}
      <SectionWrapper className="py-4 md:py-6">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            What I built
          </h2>
          <ol className="mt-8 space-y-4">
            {project.highlights.map((h, n) => (
              <li
                key={n}
                className="flex gap-5 rounded-xl border border-border bg-card/60 p-5 backdrop-blur-sm md:p-6"
              >
                <span className="font-mono text-sm font-semibold text-accent-2">
                  {String(n + 1).padStart(2, "0")}
                </span>
                <p className="text-base leading-relaxed text-muted md:text-lg">
                  <Rich text={h} />
                </p>
              </li>
            ))}
          </ol>
        </div>
      </SectionWrapper>

      {/* Prev / next */}
      <SectionWrapper className="py-16 md:py-20">
        <div className="mx-auto grid max-w-5xl gap-4 px-6 md:grid-cols-2 md:px-10">
          <Link
            href={`/projects/${prev.slug}/`}
            className="group rounded-xl border border-border bg-card/60 p-5 transition-colors hover:border-accent/50"
          >
            <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-muted">
              <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
              Previous
            </span>
            <p className="mt-2 text-lg font-semibold group-hover:text-accent">
              {prev.shortName}
            </p>
          </Link>
          <Link
            href={`/projects/${next.slug}/`}
            className="group rounded-xl border border-border bg-card/60 p-5 text-left transition-colors hover:border-accent/50 md:text-right"
          >
            <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-muted">
              Next
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </span>
            <p className="mt-2 text-lg font-semibold group-hover:text-accent">
              {next.shortName}
            </p>
          </Link>
        </div>
      </SectionWrapper>
    </div>
  );
}

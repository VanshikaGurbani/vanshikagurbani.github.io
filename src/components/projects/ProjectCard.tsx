"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { FlowDiagram } from "@/components/projects/FlowDiagram";
import type { ProjectView } from "@/data/projects";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: ProjectView;
  variant?: "card" | "featured";
  index?: number;
}

export function ProjectCard({
  project,
  variant = "card",
  index = 0,
}: ProjectCardProps) {
  const ref = useRef<HTMLElement>(null);
  const featured = variant === "featured";
  const href = `/projects/${project.slug}/`;

  function onMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }

  const visibleTags = project.tech.slice(0, featured ? 7 : 5);
  const extra = project.tech.length - visibleTags.length;

  return (
    <motion.article
      ref={ref}
      onMouseMove={onMove}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: "easeOut", delay: (index % 3) * 0.08 }}
      whileHover={{ y: -6 }}
      className={cn(
        "spotlight group flex flex-col rounded-2xl border border-border bg-card/70 backdrop-blur-sm",
        "transition-[border-color,box-shadow] duration-300",
        "hover:border-accent/50 hover:shadow-[0_18px_50px_-18px_color-mix(in_srgb,var(--accent)_55%,transparent)]",
        featured ? "p-5 md:p-7" : "p-5"
      )}
    >
      <Link
        href={href}
        aria-label={`${project.name}: view details`}
        className="absolute inset-0 z-[2] rounded-2xl"
      />

      <div className="relative flex flex-1 flex-col">
        <div className={cn("diagram-panel", featured ? "px-6 py-5 md:px-12 md:py-8" : "px-3 py-3")}>
          <FlowDiagram
            nodes={project.flow}
            active={project.active}
            className={featured ? "mx-auto max-w-4xl" : undefined}
          />
        </div>

        <p className="mt-5 text-xs font-mono font-semibold uppercase tracking-[0.2em] text-accent-2">
          {project.category}
        </p>
        <h3
          className={cn(
            "mt-2 font-semibold tracking-tight transition-colors group-hover:text-accent",
            featured ? "text-2xl md:text-3xl" : "text-xl"
          )}
        >
          {project.shortName}
        </h3>
        <p
          className={cn(
            "mt-2 text-muted leading-relaxed",
            featured ? "text-base md:text-lg max-w-3xl" : "text-[15px] line-clamp-3"
          )}
        >
          {project.tagline}
        </p>
        <p className="mt-3 text-xs md:text-[13px] font-mono leading-relaxed text-foreground/70">
          {project.metric}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {visibleTags.map((t) => (
            <span
              key={t}
              className="rounded-md bg-foreground/5 px-2.5 py-1 text-[11px] font-mono font-semibold uppercase tracking-wider text-foreground/70"
            >
              {t}
            </span>
          ))}
          {extra > 0 && (
            <span className="rounded-md px-2 py-1 text-[11px] font-mono text-muted">
              +{extra}
            </span>
          )}
        </div>

        <div className="mt-auto flex items-center gap-3 pt-6">
          <span className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-semibold transition-colors group-hover:border-accent/60 group-hover:text-accent">
            Details
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} source code on GitHub`}
              className="relative z-[3] inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted transition-colors hover:border-accent/60 hover:text-accent"
            >
              <FaGithub className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

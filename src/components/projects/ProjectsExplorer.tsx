"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ProjectCard } from "@/components/projects/ProjectCard";
import type { ProjectView } from "@/data/projects";
import { cn } from "@/lib/utils";

export function ProjectsExplorer({ projects }: { projects: ProjectView[] }) {
  const [category, setCategory] = useState("All");

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(projects.map((p) => p.category)))],
    [projects]
  );
  const visible =
    category === "All"
      ? projects
      : projects.filter((p) => p.category === category);

  return (
    <>
      <div className="mt-10 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={cn(
              "relative cursor-pointer rounded-full border px-4 py-1.5 text-xs font-mono font-semibold uppercase tracking-wider transition-colors",
              category === c
                ? "border-accent text-accent"
                : "border-border text-muted hover:border-foreground/30 hover:text-foreground"
            )}
          >
            {category === c && (
              <motion.span
                layoutId="chip-bg"
                className="absolute inset-0 -z-10 rounded-full bg-accent/10"
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
              />
            )}
            {c}
          </button>
        ))}
      </div>

      <motion.div layout className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((project, i) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              className="flex"
            >
              <div className="flex w-full [&>article]:w-full">
                <ProjectCard project={project} index={i} />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
}

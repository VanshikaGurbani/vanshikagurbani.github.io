"use client";

import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  name: string;
  className?: string;
}

export function SkillBadge({ name, className }: SkillBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-4 py-2 rounded-full text-sm font-medium",
        "bg-card border border-border transition-all duration-200",
        "hover:border-accent/40 hover:bg-card-hover hover:shadow-sm",
        className
      )}
    >
      {name}
    </span>
  );
}

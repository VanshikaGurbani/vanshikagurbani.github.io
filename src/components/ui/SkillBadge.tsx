"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  name: string;
  className?: string;
}

export function SkillBadge({ name, className }: SkillBadgeProps) {
  return (
    <motion.span
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className={cn(
        "inline-flex items-center px-5 py-2.5 rounded-full text-base font-medium cursor-default",
        "bg-card border border-border transition-all duration-200",
        "hover:border-accent/40 hover:bg-card-hover hover:shadow-sm",
        className
      )}
    >
      {name}
    </motion.span>
  );
}

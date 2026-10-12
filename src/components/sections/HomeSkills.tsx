"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SkillBadge } from "@/components/ui/SkillBadge";
import { skills } from "@/data/portfolio";

const skillCategories = [
  "Languages",
  "AI & LLM Systems",
  "Backend & Frontend",
  "ML & Data",
  "Visualization",
  "Cloud & DevOps",
] as const;

export function HomeSkills() {
  return (
    <SectionWrapper>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row gap-6 md:gap-16">
          {/* Left label column */}
          <div className="md:w-56 shrink-0">
            <h2 className="text-base font-mono uppercase tracking-[0.2em] text-accent">
              Technical Stack
            </h2>
          </div>

          {/* Right content column */}
          <div className="flex-1 space-y-8">
            {skillCategories.map((category) => (
              <div key={category}>
                <h3 className="text-lg font-medium text-foreground mb-3">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills
                    .filter((s) => s.category === category)
                    .map((skill) => (
                      <SkillBadge key={skill.name} name={skill.name} />
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

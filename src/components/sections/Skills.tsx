"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SkillBadge } from "@/components/ui/SkillBadge";
import { skills } from "@/data/portfolio";

export function Skills() {
  const categories = ["Languages", "ML & AI", "Tools & Cloud"] as const;

  return (
    <SectionWrapper id="skills">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-semibold mb-4">
          Skills & Technologies
        </h2>
        <p className="text-lg text-muted font-light mb-12 max-w-2xl">
          The tools and technologies I work with to build intelligent systems
          and data-driven solutions.
        </p>

        <div className="space-y-10">
          {categories.map((category) => (
            <div key={category}>
              <h3 className="text-sm font-mono text-accent uppercase tracking-wider mb-4">
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
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
    </SectionWrapper>
  );
}

"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { education } from "@/data/portfolio";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <SectionWrapper id="education">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-semibold mb-12">Education</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <div
              key={i}
              className="rounded-2xl border border-border bg-card p-6 md:p-8
                         hover:bg-card-hover hover:border-accent/30 transition-all duration-200"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{edu.school}</h3>
                  <p className="text-accent text-sm font-medium">
                    {edu.degree}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-sm text-muted mb-3">
                <span className="font-mono">{edu.duration}</span>
                <span>&#183;</span>
                <span>GPA: {edu.gpa}</span>
              </div>

              {edu.coursework && (
                <p className="text-sm text-muted leading-relaxed">
                  <span className="font-medium text-foreground/70">
                    Coursework:{" "}
                  </span>
                  {edu.coursework}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

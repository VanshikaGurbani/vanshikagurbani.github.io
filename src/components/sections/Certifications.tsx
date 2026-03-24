"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { certifications } from "@/data/portfolio";
import { Award } from "lucide-react";

export function Certifications() {
  return (
    <SectionWrapper id="certifications">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-semibold mb-12">
          Certifications
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {certifications.map((cert, i) => (
            <div
              key={i}
              className="rounded-2xl border border-border bg-card p-6
                         hover:bg-card-hover hover:border-accent/30 transition-all duration-200"
            >
              <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <Award className="w-4 h-4 text-accent" />
              </div>
              <h3 className="text-sm font-semibold mb-1">{cert.name}</h3>
              <p className="text-xs text-muted">{cert.issuer}</p>
              <p className="text-xs font-mono text-muted/70 mt-2">
                {cert.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

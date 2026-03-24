"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { aboutData } from "@/data/portfolio";

export function About() {
  return (
    <SectionWrapper id="about">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-16 items-start">
          {/* Photo / visual */}
          <div className="flex justify-center md:justify-start">
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 border border-border flex items-center justify-center">
              <span className="text-6xl">VG</span>
            </div>
          </div>

          {/* Bio text */}
          <div>
            <h2 className="text-3xl md:text-5xl font-semibold mb-8">
              About Me
            </h2>
            <div className="space-y-4">
              {aboutData.bio.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-lg md:text-xl font-light leading-relaxed text-muted"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

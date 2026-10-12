"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import {
  aboutData,
  education,
  certifications,
  publications,
} from "@/data/portfolio";
import { GraduationCap, Award, FileText } from "lucide-react";

function renderHighlight(text: string) {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i} className="text-foreground font-semibold">
        {part.slice(2, -2)}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

export default function AboutPage() {
  return (
    <div className="pt-20 pb-12">
      {/* Identity - two column layout */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex flex-col md:flex-row gap-6 md:gap-16"
        >
          <div className="md:w-56 shrink-0">
            <p className="text-base font-mono uppercase tracking-[0.2em] text-accent">
              About Me
            </p>
          </div>
          <div className="flex-1 space-y-6">
            {aboutData.bio.map((paragraph, i) => (
              <p
                key={i}
                className="text-lg md:text-xl font-normal leading-relaxed text-muted"
              >
                {renderHighlight(paragraph)}
              </p>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Operating Philosophy - two column layout */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex flex-col md:flex-row gap-6 md:gap-16"
        >
          <div className="md:w-56 shrink-0">
            <p className="text-base font-mono uppercase tracking-[0.2em] text-accent">
              Operating Philosophy
            </p>
          </div>
          <div className="flex-1 space-y-6">
            {aboutData.philosophy.map((paragraph, i) => (
              <p
                key={i}
                className="text-lg md:text-xl font-normal leading-relaxed text-muted"
              >
                {renderHighlight(paragraph)}
              </p>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Education - two column layout */}
      <SectionWrapper className="py-12 md:py-14">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row gap-6 md:gap-16">
            <div className="md:w-56 shrink-0">
              <h2 className="text-base font-mono uppercase tracking-[0.2em] text-accent">
                Education
              </h2>
            </div>
            <div className="flex-1 space-y-6">
              {education.map((edu, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 py-5 border-t border-border"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                    <GraduationCap className="w-5 h-5 text-accent" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-1">
                      <h3 className="text-2xl font-semibold">{edu.school}</h3>
                      <span className="text-base font-mono text-muted">
                        {edu.duration}
                      </span>
                    </div>
                    <p className="text-lg md:text-xl text-accent mb-1">{edu.degree}</p>
                    <p className="text-lg text-muted">GPA: {edu.gpa}</p>
                    {edu.coursework && (
                      <p className="text-lg md:text-xl text-muted mt-2">
                        {edu.coursework}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Certifications - two column layout */}
      <SectionWrapper className="py-12 md:py-14">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row gap-6 md:gap-16">
            <div className="md:w-56 shrink-0">
              <h2 className="text-base font-mono uppercase tracking-[0.2em] text-accent">
                Certifications
              </h2>
            </div>
            <div className="flex-1 space-y-4">
              {certifications.map((cert, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 py-4 border-t border-border"
                >
                  <Award className="w-6 h-6 text-accent shrink-0" />
                  <div className="flex-1">
                    <span className="text-lg md:text-xl font-medium">{cert.name}</span>
                    <span className="text-lg md:text-xl text-muted">
                      {" "}
                      / {cert.issuer}
                    </span>
                  </div>
                  <span className="text-base font-mono text-muted">
                    {cert.date}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Publications - two column layout */}
      <SectionWrapper className="py-12 md:py-14">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row gap-6 md:gap-16">
            <div className="md:w-56 shrink-0">
              <h2 className="text-base font-mono uppercase tracking-[0.2em] text-accent">
                Publications
              </h2>
            </div>
            <div className="flex-1 space-y-4">
              {publications.map((pub, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 py-4 border-t border-border"
                >
                  <FileText className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-lg md:text-xl font-medium">{pub.title}</p>
                    <p className="text-base font-mono text-muted mt-1">
                      {pub.status}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}

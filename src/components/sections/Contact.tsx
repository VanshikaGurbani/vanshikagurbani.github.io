"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { contactData, socialLinks } from "@/data/portfolio";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Mail, Download } from "lucide-react";

export function Contact() {
  return (
    <SectionWrapper id="contact">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-semibold mb-4">
          {contactData.heading}
        </h2>
        <p className="text-lg text-muted font-light mb-12 max-w-xl mx-auto">
          {contactData.subheading}
        </p>

        {/* Social links */}
        <div className="flex items-center justify-center gap-6 mb-10">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full border border-border flex items-center justify-center
                       hover:border-accent/40 hover:text-accent hover:bg-accent/5 transition-all duration-200"
            aria-label="GitHub"
          >
            <FaGithub className="w-5 h-5" />
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full border border-border flex items-center justify-center
                       hover:border-accent/40 hover:text-accent hover:bg-accent/5 transition-all duration-200"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${socialLinks.email}`}
            className="w-12 h-12 rounded-full border border-border flex items-center justify-center
                       hover:border-accent/40 hover:text-accent hover:bg-accent/5 transition-all duration-200"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        {/* Resume download */}
        <a
          href="/resume.pdf"
          download="VanshikaGurbani_Resume.pdf"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full
                     bg-accent text-white text-sm font-medium
                     hover:bg-accent-light transition-colors duration-200"
        >
          <Download className="w-4 h-4" />
          Download Resume
        </a>

        {/* Email CTA */}
        <p className="mt-10 text-muted text-sm">
          Or reach me directly at{" "}
          <a
            href={`mailto:${socialLinks.email}`}
            className="text-accent hover:underline"
          >
            {socialLinks.email}
          </a>
        </p>
      </div>
    </SectionWrapper>
  );
}

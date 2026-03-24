"use client";

import { useState } from "react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { contactData, socialLinks, siteConfig } from "@/data/portfolio";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Mail, Download, Send } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Open mailto with pre-filled content
    const subject = encodeURIComponent(
      `Portfolio Inquiry from ${formData.name}`
    );
    const body = encodeURIComponent(
      `Hi Vanshika,\n\n${formData.message}\n\nBest,\n${formData.name}\n${formData.email}`
    );
    window.location.href = `mailto:${socialLinks.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <SectionWrapper id="contact">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-semibold mb-4">
          {contactData.heading}
        </h2>
        <p className="text-lg text-muted font-light mb-14 max-w-2xl">
          {contactData.subheading}
        </p>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Left side — Contact form */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-muted mb-6">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg
                             text-foreground placeholder:text-muted/60 text-sm
                             focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20
                             transition-all duration-200"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg
                             text-foreground placeholder:text-muted/60 text-sm
                             focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20
                             transition-all duration-200"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg
                             text-foreground placeholder:text-muted/60 text-sm resize-none
                             focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20
                             transition-all duration-200"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg
                           bg-accent text-white text-sm font-medium
                           hover:bg-accent-light transition-colors duration-200"
              >
                <Send className="w-4 h-4" />
                {submitted ? "Opening Mail Client..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Right side — Links & Status */}
          <div className="space-y-10">
            {/* Connect */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-muted mb-5">
                Connect
              </h3>
              <div className="space-y-3">
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-foreground/80 hover:text-accent transition-colors duration-200 group"
                >
                  <FaLinkedinIn className="w-4 h-4 text-muted group-hover:text-accent transition-colors" />
                  LinkedIn
                </a>
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-foreground/80 hover:text-accent transition-colors duration-200 group"
                >
                  <FaGithub className="w-4 h-4 text-muted group-hover:text-accent transition-colors" />
                  GitHub
                </a>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-muted mb-5">
                Contact
              </h3>
              <div className="space-y-3">
                <a
                  href={`mailto:${socialLinks.email}`}
                  className="flex items-center gap-3 text-sm text-foreground/80 hover:text-accent transition-colors duration-200 group"
                >
                  <Mail className="w-4 h-4 text-muted group-hover:text-accent transition-colors" />
                  {socialLinks.email}
                </a>
                <a
                  href="/resume.pdf"
                  download="VanshikaGurbani_Resume.pdf"
                  className="flex items-center gap-3 text-sm text-foreground/80 hover:text-accent transition-colors duration-200 group"
                >
                  <Download className="w-4 h-4 text-muted group-hover:text-accent transition-colors" />
                  Download Resume
                </a>
              </div>
            </div>

            {/* Status */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-muted mb-5">
                Status
              </h3>
              <div
                className="inline-flex items-center gap-3 px-5 py-3
                            border border-dashed border-border rounded-md"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </span>
                <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400 uppercase tracking-wide">
                  {siteConfig.status}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

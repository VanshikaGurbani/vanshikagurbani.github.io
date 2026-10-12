"use client";

import { useState } from "react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { contactData, socialLinks, siteConfig } from "@/data/portfolio";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Mail, Send, CheckCircle, AlertCircle } from "lucide-react";

// Replace with your Formspree form ID from https://formspree.io
const FORMSPREE_ID = "mykbgwwr";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          _replyto: formData.email,
          message: formData.message,
        }),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <SectionWrapper id="contact">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <h2 className="text-5xl md:text-7xl font-semibold mb-4">
          {contactData.heading}
        </h2>
        <p className="text-lg md:text-xl text-muted font-light mb-14 max-w-3xl">
          {contactData.subheading}
        </p>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Left side — Contact form */}
          <div>
            <h3 className="text-base font-mono uppercase tracking-[0.2em] text-muted mb-6">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3.5 bg-card border border-border rounded-lg
                             text-foreground placeholder:text-muted/60 text-base
                             focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20
                             transition-all duration-200"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3.5 bg-card border border-border rounded-lg
                             text-foreground placeholder:text-muted/60 text-base
                             focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20
                             transition-all duration-200"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3.5 bg-card border border-border rounded-lg
                             text-foreground placeholder:text-muted/60 text-base resize-none
                             focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20
                             transition-all duration-200"
                />
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg
                           bg-accent text-white text-base font-medium
                           hover:bg-accent-light transition-colors duration-200
                           disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "sending" ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending...
                  </>
                ) : status === "success" ? (
                  <>
                    <CheckCircle className="w-4 h-4" />
                    Sent!
                  </>
                ) : status === "error" ? (
                  <>
                    <AlertCircle className="w-4 h-4" />
                    Failed, try again
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right side — Links & Status */}
          <div className="space-y-10">
            {/* Connect */}
            <div>
              <h3 className="text-base font-mono uppercase tracking-[0.2em] text-muted mb-5">
                Connect
              </h3>
              <div className="space-y-3">
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-base text-foreground/80 hover:text-accent transition-colors duration-200 group"
                >
                  <FaLinkedinIn className="w-5 h-5 text-muted group-hover:text-accent transition-colors" />
                  LinkedIn
                </a>
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-base text-foreground/80 hover:text-accent transition-colors duration-200 group"
                >
                  <FaGithub className="w-5 h-5 text-muted group-hover:text-accent transition-colors" />
                  GitHub
                </a>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-base font-mono uppercase tracking-[0.2em] text-muted mb-5">
                Contact
              </h3>
              <div className="space-y-3">
                <a
                  href={`mailto:${socialLinks.email}`}
                  className="flex items-center gap-3 text-base text-foreground/80 hover:text-accent transition-colors duration-200 group"
                >
                  <Mail className="w-5 h-5 text-muted group-hover:text-accent transition-colors" />
                  Email
                </a>
              </div>
            </div>

            {/* Status */}
            <div>
              <h3 className="text-base font-mono uppercase tracking-[0.2em] text-muted mb-5">
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
                <span className="text-base font-medium text-emerald-600 dark:text-emerald-400 uppercase tracking-wide">
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

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig, socialLinks } from "@/data/portfolio";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Mail, Check } from "lucide-react";
import { TypewriterText } from "@/components/ui/TypewriterText";

export function Hero() {
  const [copied, setCopied] = useState(false);

  function copyEmail() {
    navigator.clipboard.writeText(socialLinks.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full relative z-10">
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
          >
            <TypewriterText text={siteConfig.headline} speed={35} delay={400} />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl md:text-2xl text-muted font-light leading-relaxed mb-10 max-w-3xl"
          >
            {siteConfig.intro}
          </motion.p>

          {/* Social links + Get in Touch */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 mb-10"
          >
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-border
                         text-base text-muted hover:text-foreground hover:border-foreground/30
                         transition-all duration-200"
            >
              <FaGithub className="w-5 h-5" />
              GitHub
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-border
                         text-base text-muted hover:text-foreground hover:border-foreground/30
                         transition-all duration-200"
            >
              <FaLinkedinIn className="w-5 h-5" />
              LinkedIn
            </a>
            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full
                         bg-accent text-white text-base font-medium
                         hover:bg-accent-light transition-all duration-200 cursor-pointer"
            >
              <AnimatePresence mode="wait">
                {copied ? (
                  <motion.span
                    key="check"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="inline-flex items-center gap-2"
                  >
                    <Check className="w-5 h-5" />
                    Copied!
                  </motion.span>
                ) : (
                  <motion.span
                    key="mail"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="inline-flex items-center gap-2"
                  >
                    <Mail className="w-5 h-5" />
                    Get in Touch
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </motion.div>

          {/* Status + Focus areas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap items-center gap-3"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>
              <span className="text-sm font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                {siteConfig.status}
              </span>
            </div>
            {siteConfig.focusAreas.map((area) => (
              <span
                key={area}
                className="px-4 py-2 rounded-full text-sm font-mono
                           bg-card border border-border text-muted"
              >
                {area}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

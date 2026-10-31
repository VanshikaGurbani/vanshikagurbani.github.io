"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig, socialLinks } from "@/data/portfolio";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Mail, Check } from "lucide-react";
import { TypewriterText } from "@/components/ui/TypewriterText";
import { OrbitVisual } from "@/components/ui/OrbitVisual";

export function Hero() {
  const [copied, setCopied] = useState(false);

  function copyEmail() {
    navigator.clipboard.writeText(socialLinks.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <section className="relative flex min-h-[88vh] items-center overflow-hidden pb-12 pt-28 md:pt-24">
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.4 }}
        className="hidden xl:block absolute right-[5%] top-[38%] -translate-y-1/2"
      >
        <OrbitVisual />
      </motion.div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-10">
        <div className="max-w-4xl xl:max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-3 rounded-full border border-border bg-card/60 px-4 py-2 text-xs font-mono uppercase tracking-[0.2em] text-muted backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent-2" />
            {siteConfig.title}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
          >
            <TypewriterText
              text={siteConfig.headline}
              speed={35}
              delay={400}
              className="text-gradient"
            />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl md:text-2xl text-muted font-light leading-relaxed mb-8 max-w-3xl"
          >
            {siteConfig.intro}
          </motion.p>

          {/* Availability */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-8 flex flex-col gap-1.5 font-mono text-xs uppercase tracking-[0.2em] md:text-sm"
          >
            <div className="flex items-center gap-3 text-emerald-600 dark:text-emerald-400">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>
              {siteConfig.status}
            </div>
            <p className="pl-[22px] text-muted">{siteConfig.workModes}</p>
          </motion.div>

          {/* Social links + Get in Touch */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap items-center gap-4"
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
        </div>
      </div>
    </section>
  );
}
